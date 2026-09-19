import {
  type CurriculumUnit,
  englishCurriculum,
  frenchCurriculum,
  japaneseCurriculum,
  portugueseCurriculum,
  russianCurriculum,
} from '@/lib/curriculum';
import { type ModelLesson, modelLessons } from '@/lib/model-lessons';
import { productionFor } from '@/lib/course-production';
import { sourcesForUnit } from '@/lib/source-traceability';

export type AuditLanguage = ModelLesson['language'];
export type AuditSeverity = 'critical' | 'warning' | 'recommendation';

export type AuditFinding = {
  code: string;
  severity: AuditSeverity;
  title: string;
  detail: string;
  affectedIds: string[];
};

export type AuditMetric = {
  id: string;
  label: string;
  value: number;
  target: number;
  unit: '%' | 'units';
};

export type CourseAudit = {
  language: AuditLanguage;
  name: string;
  generatedAt: string;
  status: 'approved' | 'review_required' | 'blocked';
  score: number;
  totals: {
    units: number;
    playableUnits: number;
    exercises: number;
    levels: number;
  };
  metrics: AuditMetric[];
  findings: AuditFinding[];
  quickSample: { lessonId: string; exerciseIds: string[]; route: string };
  releaseRequirements: { label: string; passed: boolean }[];
};

const courseData: Record<
  AuditLanguage,
  { name: string; curriculum: CurriculumUnit[] }
> = {
  en: { name: 'Inglés', curriculum: englishCurriculum },
  ja: { name: 'Japonés', curriculum: japaneseCurriculum },
  fr: { name: 'Francés', curriculum: frenchCurriculum },
  ru: { name: 'Ruso', curriculum: russianCurriculum },
  pt: { name: 'Portugués', curriculum: portugueseCurriculum },
};

const modelUnit: Record<AuditLanguage, string> = {
  en: 'en-02',
  ja: 'ja-01',
  fr: 'fr-01',
  ru: 'ru-01',
  pt: 'pt-01',
};

const percent = (part: number, total: number) =>
  total === 0 ? 0 : Math.round((part / total) * 100);

export function auditCourse(language: AuditLanguage): CourseAudit {
  const { name, curriculum } = courseData[language];
  const lesson = modelLessons[language];
  const ids = curriculum.map((unit) => unit.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const malformed = curriculum.filter(
    (unit) =>
      !unit.canDo ||
      unit.languageFocus.length === 0 ||
      unit.skills.length === 0 ||
      unit.exerciseTypes.length === 0,
  );
  const production = productionFor(language);
  const implementedUnitIds = new Set(
    production
      .filter(
        (record) =>
          record.playable && record.hasIntroduction && record.hasAssessment,
      )
      .map((record) => record.unitId),
  );
  const aiReviewedUnitIds = new Set(
    production
      .filter(
        (record) =>
          ['ai_checked', 'approved'].includes(record.linguisticReview) &&
          ['ai_checked', 'approved'].includes(record.pedagogicalReview),
      )
      .map((record) => record.unitId),
  );
  const expertReviewedUnitIds = new Set(
    production
      .filter(
        (record) =>
          record.linguisticReview === 'approved' &&
          record.pedagogicalReview === 'approved',
      )
      .map((record) => record.unitId),
  );
  const sourcedUnitIds = new Set(
    production
      .filter((record) => record.sourcesLinked)
      .map((record) => record.unitId),
  );
  const missingPlayable = curriculum.filter(
    (unit) => !implementedUnitIds.has(unit.id),
  );
  const playableCoverage = percent(implementedUnitIds.size, curriculum.length);
  const hasIntro =
    lesson.introduction.concepts.length >= 2 &&
    lesson.introduction.concepts.every(
      (concept) => concept.examples.length > 0,
    );
  const kinds = new Set(lesson.exercises.map((exercise) => exercise.kind));
  const tracedExercises = new Set(
    sourcesForUnit(modelUnit[language]).flatMap((source) => source.exerciseIds),
  );
  const untracedModelExercises = lesson.exercises.filter(
    (exercise) => !tracedExercises.has(exercise.id),
  );
  const levels = new Set(curriculum.map((unit) => unit.level));
  const serializedLesson = JSON.stringify(lesson);
  const languageRulePassed =
    language === 'ja'
      ? /[ぁ-ん]/.test(serializedLesson)
      : language === 'ru'
        ? /[\u0400-\u04FF]/.test(serializedLesson)
        : language === 'fr'
          ? /\b(?:tu|vous)\b/i.test(serializedLesson)
          : language === 'pt'
            ? /\b(?:olá|obrigad[oa]|você|português)\b/i.test(serializedLesson)
          : /^A[12]|^B[12]/.test(lesson.level);
  const findings: AuditFinding[] = [];

  if (duplicateIds.length)
    findings.push({
      code: 'STRUCTURE_DUPLICATE_ID',
      severity: 'critical',
      title: 'Identificadores duplicados',
      detail: 'Cada unidad debe tener un identificador único.',
      affectedIds: duplicateIds,
    });
  if (malformed.length)
    findings.push({
      code: 'STRUCTURE_INCOMPLETE_UNIT',
      severity: 'critical',
      title: 'Unidades estructuralmente incompletas',
      detail: 'Faltan objetivos, focos lingüísticos, destrezas o variaciones.',
      affectedIds: malformed.map((unit) => unit.id),
    });
  if (missingPlayable.length)
    findings.push({
      code: 'CONTENT_NOT_IMPLEMENTED',
      severity: 'critical',
      title: 'Unidades todavía no jugables',
      detail: `El mapa curricular contiene ${curriculum.length} unidades, pero por ahora solo ${implementedUnitIds.size} tiene una lección completa en el motor.`,
      affectedIds: missingPlayable.map((unit) => unit.id),
    });
  if (!hasIntro)
    findings.push({
      code: 'PEDAGOGY_MISSING_INTRO',
      severity: 'critical',
      title: 'Introducción insuficiente',
      detail:
        'Toda lección debe enseñar conceptos y ejemplos antes de evaluar.',
      affectedIds: [modelUnit[language]],
    });
  if (kinds.size < 3)
    findings.push({
      code: 'VARIETY_LOW',
      severity: 'warning',
      title: 'Poca variedad de ejercicios',
      detail:
        'La lección modelo debe incluir selección, orden y producción abierta.',
      affectedIds: [modelUnit[language]],
    });
  if (!languageRulePassed)
    findings.push({
      code: 'LANGUAGE_SPECIFIC_RULE',
      severity: 'critical',
      title: 'Regla específica del idioma incumplida',
      detail:
        'La muestra no contiene la escritura, el registro o el nivel esperado para este idioma.',
      affectedIds: [modelUnit[language]],
    });
  const reviewPending = curriculum.filter(
    (unit) => !aiReviewedUnitIds.has(unit.id),
  );
  const sourcesPending = curriculum.filter(
    (unit) => !sourcedUnitIds.has(unit.id),
  );
  const expertReviewPending = production.filter(
    (record) => record.playable && !expertReviewedUnitIds.has(record.unitId),
  );
  if (reviewPending.length)
    findings.push({
      code: 'REVIEW_PENDING',
      severity: 'critical',
      title: 'Unidades pendientes de revisión',
      detail:
        'Las unidades jugables tienen revisión interna por IA; las unidades todavía no implementadas continúan pendientes.',
      affectedIds: reviewPending.map((unit) => unit.id),
    });
  if (sourcesPending.length)
    findings.push({
      code: 'SOURCE_TRACEABILITY',
      severity: 'warning',
      title: 'Unidades sin trazabilidad',
      detail:
        'Las lecciones jugables tienen trazabilidad por ejercicio; las unidades aún no implementadas necesitan sus propias fuentes.',
      affectedIds: sourcesPending.map((unit) => unit.id),
    });
  if (expertReviewPending.length)
    findings.push({
      code: 'INDEPENDENT_REVIEW_PENDING',
      severity: 'critical',
      title: 'Validación independiente pendiente',
      detail:
        'La revisión interna por IA no equivale a aprobación lingüística o pedagógica independiente.',
      affectedIds: expertReviewPending.map((record) => record.unitId),
    });
  if (untracedModelExercises.length)
    findings.push({
      code: 'EXERCISE_SOURCE_MISSING',
      severity: 'critical',
      title: 'Ejercicios jugables sin fuente',
      detail:
        'Cada ejercicio publicado debe estar vinculado con al menos una fuente.',
      affectedIds: untracedModelExercises.map((exercise) => exercise.id),
    });

  const structural =
    duplicateIds.length === 0 && malformed.length === 0 ? 100 : 0;
  const introCoverage = hasIntro ? playableCoverage : 0;
  const objectiveCoverage = playableCoverage;
  const variety = Math.round((kinds.size / 3) * 100);
  const reviewCoverage = percent(aiReviewedUnitIds.size, curriculum.length);
  const expertReviewCoverage = percent(
    expertReviewedUnitIds.size,
    curriculum.length,
  );
  const traceabilityCoverage = percent(sourcedUnitIds.size, curriculum.length);
  const metrics: AuditMetric[] = [
    {
      id: 'structure',
      label: 'Integridad del mapa',
      value: structural,
      target: 100,
      unit: '%',
    },
    {
      id: 'playable',
      label: 'Unidades jugables',
      value: playableCoverage,
      target: 100,
      unit: '%',
    },
    {
      id: 'introductions',
      label: 'Introducciones completas',
      value: introCoverage,
      target: 100,
      unit: '%',
    },
    {
      id: 'objectives',
      label: 'Objetivos evaluados',
      value: objectiveCoverage,
      target: 100,
      unit: '%',
    },
    {
      id: 'variety',
      label: 'Variedad en la muestra',
      value: variety,
      target: 100,
      unit: '%',
    },
    {
      id: 'language-rule',
      label: 'Reglas específicas del idioma',
      value: languageRulePassed ? 100 : 0,
      target: 100,
      unit: '%',
    },
    {
      id: 'reviews',
      label: 'Revisión interna por IA',
      value: reviewCoverage,
      target: 100,
      unit: '%',
    },
    {
      id: 'expert-reviews',
      label: 'Validación independiente',
      value: expertReviewCoverage,
      target: 100,
      unit: '%',
    },
    {
      id: 'traceability',
      label: 'Trazabilidad de fuentes',
      value: traceabilityCoverage,
      target: 100,
      unit: '%',
    },
  ];
  const score = Math.round(
    structural * 0.15 +
      playableCoverage * 0.2 +
      introCoverage * 0.1 +
      objectiveCoverage * 0.1 +
      variety * 0.1 +
      (languageRulePassed ? 10 : 0) +
      reviewCoverage * 0.1 +
      expertReviewCoverage * 0.05 +
      traceabilityCoverage * 0.1,
  );
  const criticalCount = findings.filter(
    (finding) => finding.severity === 'critical',
  ).length;

  return {
    language,
    name,
    generatedAt: new Date().toISOString().slice(0, 10),
    status: criticalCount
      ? 'blocked'
      : findings.length
        ? 'review_required'
        : 'approved',
    score,
    totals: {
      units: curriculum.length,
      playableUnits: implementedUnitIds.size,
      exercises: lesson.exercises.length,
      levels: levels.size,
    },
    metrics,
    findings,
    quickSample: {
      lessonId: modelUnit[language],
      exerciseIds: lesson.exercises.map((exercise) => exercise.id),
      route: `/lesson?course=${language}`,
    },
    releaseRequirements: [
      { label: 'Mapa curricular íntegro', passed: structural === 100 },
      {
        label: 'Todas las unidades son jugables',
        passed: playableCoverage === 100,
      },
      {
        label: 'Objetivos cubiertos y evaluados',
        passed: objectiveCoverage === 100,
      },
      {
        label: 'Introducciones en todas las lecciones',
        passed: introCoverage === 100,
      },
      { label: 'Reglas específicas del idioma', passed: languageRulePassed },
      {
        label: 'Revisión lingüística independiente aprobada',
        passed: expertReviewCoverage === 100,
      },
      {
        label: 'Revisión pedagógica independiente aprobada',
        passed: expertReviewCoverage === 100,
      },
      {
        label: 'Fuentes trazables por unidad',
        passed: traceabilityCoverage === 100,
      },
    ],
  };
}

export function auditAllCourses(): CourseAudit[] {
  return (['en', 'ja', 'fr', 'ru', 'pt'] as AuditLanguage[]).map(auditCourse);
}
