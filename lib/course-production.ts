import {
  type CurriculumUnit,
  englishCurriculum,
  frenchCurriculum,
  japaneseCurriculum,
  portugueseCurriculum,
  russianCurriculum,
} from '@/lib/curriculum';
import type { AuditLanguage } from '@/lib/course-audit';

export type ProductionStatus =
  | 'planned'
  | 'draft'
  | 'machine_checked'
  | 'ai_reviewed'
  | 'expert_reviewed'
  | 'published';

export type UnitProductionRecord = {
  unitId: string;
  language: AuditLanguage;
  status: ProductionStatus;
  playable: boolean;
  hasIntroduction: boolean;
  hasAssessment: boolean;
  sourcesLinked: boolean;
  linguisticReview: 'pending' | 'ai_checked' | 'approved' | 'changes_required';
  pedagogicalReview: 'pending' | 'ai_checked' | 'approved' | 'changes_required';
};

const curricula: Record<AuditLanguage, CurriculumUnit[]> = {
  en: englishCurriculum,
  ja: japaneseCurriculum,
  fr: frenchCurriculum,
  ru: russianCurriculum,
  pt: portugueseCurriculum,
};

const completedUnits: Record<AuditLanguage, string[]> = {
  en: [
    'en-02',
    'en-a1-01',
    'en-a1-02',
    'en-a1-03',
    'en-a1-04',
    'en-a1-05',
    'en-a1-06',
    'en-a1-07',
    'en-a1-08',
    'en-01',
    'en-03',
    'en-04',
    'en-05',
    'en-06',
    'en-07',
    'en-08',
    'en-09',
    'en-10',
    'en-11',
    'en-12',
    'en-13',
    'en-14',
    'en-15',
    'en-16',
    'en-17',
    'en-18',
    'en-19',
    'en-20',
    'en-21',
    'en-22',
    'en-23',
    'en-24',
  ],
  ja: [
    'ja-01',
    'ja-02',
    'ja-03',
    'ja-04',
    'ja-05',
    'ja-06',
    'ja-07',
    'ja-08',
    'ja-09',
    'ja-10',
    'ja-11',
    'ja-12',
    'ja-13',
    'ja-14',
    'ja-15',
    'ja-16',
    'ja-17',
    'ja-18',
    'ja-19',
    'ja-20',
    'ja-21',
    'ja-22',
    'ja-23',
    'ja-24',
    'ja-25',
    'ja-26',
    'ja-27',
    'ja-28',
    'ja-29',
    'ja-30',
    'ja-31',
    'ja-32',
    'ja-33',
    'ja-34',
    'ja-35',
    'ja-36',
  ],
  fr: ['fr-01'],
  ru: Array.from(
    { length: 36 },
    (_, index) => `ru-${String(index + 1).padStart(2, '0')}`,
  ),
  pt: ['pt-01', 'pt-02', 'pt-03', 'pt-04', 'pt-05', 'pt-06', 'pt-07', 'pt-08', 'pt-09', 'pt-10', 'pt-11', 'pt-12', 'pt-13', 'pt-14', 'pt-15', 'pt-16', 'pt-17', 'pt-18', 'pt-19', 'pt-20', 'pt-21', 'pt-22', 'pt-23', 'pt-24', 'pt-25', 'pt-26', 'pt-27', 'pt-28', 'pt-29', 'pt-30', 'pt-31', 'pt-32'],
};

export const courseProduction: Record<AuditLanguage, UnitProductionRecord[]> =
  Object.fromEntries(
    (Object.entries(curricula) as [AuditLanguage, CurriculumUnit[]][]).map(
      ([language, units]) => [
        language,
        units.map((unit) => {
          const isModel = completedUnits[language].includes(unit.id);
          return {
            unitId: unit.id,
            language,
            status: isModel ? 'ai_reviewed' : 'planned',
            playable: isModel,
            hasIntroduction: isModel,
            hasAssessment: isModel,
            sourcesLinked: isModel,
            linguisticReview: isModel ? 'ai_checked' : 'pending',
            pedagogicalReview: isModel ? 'ai_checked' : 'pending',
          } satisfies UnitProductionRecord;
        }),
      ],
    ),
  ) as Record<AuditLanguage, UnitProductionRecord[]>;

export function productionFor(language: AuditLanguage) {
  return courseProduction[language];
}
