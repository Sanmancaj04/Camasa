'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Check,
  ChevronRight,
  Heart,
  Lightbulb,
  RotateCcw,
  Undo2,
  X,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  type ModelLesson,
  type OpenExercise,
  modelLessons,
} from '@/lib/model-lessons';
import { additionalLessons } from '@/lib/additional-lessons';
import { batch4Lessons } from '@/lib/batch4-lessons';
import { batch5Lessons } from '@/lib/batch5-lessons';
import { batch6Lessons } from '@/lib/batch6-lessons';
import { batch7Lessons } from '@/lib/batch7-lessons';
import { batch8Lessons } from '@/lib/batch8-lessons';
import { batch9Lessons } from '@/lib/batch9-lessons';
import { batch10Lessons } from '@/lib/batch10-lessons';
import { batch11Lessons } from '@/lib/batch11-lessons';
import { batch12Lessons } from '@/lib/batch12-lessons';
import { batch13Lessons } from '@/lib/batch13-lessons';
import { batch14Lessons } from '@/lib/batch14-lessons';
import { batch15RussianLessons } from '@/lib/batch15-russian-lessons';
import { batch16RussianLessons } from '@/lib/batch16-russian-lessons';
import { batch17RussianLessons } from '@/lib/batch17-russian-lessons';
import { portugueseLessons } from '@/lib/portuguese-lessons';
import {
  englishCurriculum,
  frenchCurriculum,
  japaneseCurriculum,
  portugueseCurriculum,
  russianCurriculum,
} from '@/lib/curriculum';

type CourseId = ModelLesson['language'];

const phaseLabels = {
  activar: 'Activar',
  comprender: 'Comprender',
  practicar: 'Practicar',
  transferir: 'Usar el idioma',
};

const virtualKeys: Partial<Record<CourseId, string[]>> = {
  ja: [
    ...Array.from(
      'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん',
    ),
    ...Array.from('がぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽ'),
    ...Array.from('ゃゅょっ'),
    ...Array.from(
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
    ),
    ...Array.from('ガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポ'),
    ...Array.from('ャュョッー・'),
  ],
  ru: Array.from('ёйцукенгшщзхъфывапролджэячсмитьбю'),
  fr: Array.from('àâæçéèêëîïôœùûüÿ’'),
  pt: Array.from('ãõçáàâéêíóôúü’'),
};

const languageNames: Record<CourseId, string> = {
  en: 'inglés',
  ja: 'japonés',
  fr: 'francés',
  ru: 'ruso',
  pt: 'portugués',
};

const unitLessons = {
  ...additionalLessons,
  ...batch4Lessons,
  ...batch5Lessons,
  ...batch6Lessons,
  ...batch7Lessons,
  ...batch8Lessons,
  ...batch9Lessons,
  ...batch10Lessons,
  ...batch11Lessons,
  ...batch12Lessons,
  ...batch13Lessons,
  ...batch14Lessons,
  ...batch15RussianLessons,
  ...batch16RussianLessons,
  ...batch17RussianLessons,
  ...portugueseLessons,
};

const courseUnitOrder: Record<CourseId, string[]> = {
  en: englishCurriculum.map((unit) => unit.id),
  ja: japaneseCurriculum.map((unit) => unit.id),
  fr: frenchCurriculum.map((unit) => unit.id),
  ru: russianCurriculum.map((unit) => unit.id),
  pt: portugueseCurriculum.map((unit) => unit.id),
};

function normalize(value: string) {
  return value
    .trim()
    .toLocaleLowerCase()
    .replace(/[.!?¿¡،。]/g, '')
    .replace(/\s+/g, ' ');
}

const openResponseStopwords = new Set([
  'a', 'an', 'and', 'at', 'by', 'de', 'el', 'en', 'for', 'from', 'i', 'in',
  'is', 'it', 'la', 'my', 'of', 'on', 'or', 'the', 'to', 'un', 'una', 'y',
]);

function autoGradeOpenResponse(
  course: CourseId,
  exercise: OpenExercise,
  value: string,
) {
  const answer = normalize(value);
  if (answer.length < 3) return false;

  if (course === 'ja') {
    const japanese = answer.match(/[\u3040-\u30ff\u3400-\u9fff]/g) ?? [];
    const modelCharacters = Array.from(normalize(exercise.modelAnswer)).filter(
      (character) => /[\u3040-\u30ff\u3400-\u9fff]/.test(character),
    );
    return japanese.length >= 2 && modelCharacters.some((character) => answer.includes(character));
  }

  const modelTerms = normalize(exercise.modelAnswer).split(/\s+/).filter(
    (term) => term.length >= 3 && !openResponseStopwords.has(term) && /^[a-zà-ÿа-яё'-]+$/i.test(term),
  );
  const sharesModelTerm = modelTerms.some((term) => answer.includes(term));
  const prompt = `${exercise.prompt} ${exercise.hint}`.toLocaleLowerCase();
  const requiresFrequency = /frecuenc|frequency|usually|sometimes|often|always|never|daily|cada día|chaque jour|кажд/.test(prompt);
  const hasFrequency = /usually|sometimes|often|always|never|every|daily|a veces|siempre|souvent|toujours|parfois|часто|всегда|иногда/.test(answer);
  return sharesModelTerm && (!requiresFrequency || hasFrequency);
}

function LessonGuide({ lesson }: { lesson: ModelLesson }) {
  return (
    <div className="space-y-4">
      {lesson.introduction.concepts.map((concept, index) => (
        <article
          key={concept.title}
          className="rounded-2xl border border-[var(--line)] bg-card p-4 sm:p-5"
        >
          <div className="flex gap-3">
            <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-[var(--primary-soft)] text-xs font-black text-primary">
              {index + 1}
            </span>
            <div>
              <h3 className="font-heading text-base font-black">
                {concept.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {concept.explanation}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {concept.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-xl bg-[var(--orange-soft)] px-3 py-2 text-sm font-bold text-[#8c531b]"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function LessonPage() {
  const [course, setCourse] = useState<CourseId>('en');
  const [unitId, setUnitId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [ordered, setOrdered] = useState<string[]>([]);
  const [written, setWritten] = useState('');
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [keyboardUppercase, setKeyboardUppercase] = useState(false);
  const [introductionOpen, setIntroductionOpen] = useState(true);
  const [guideOpen, setGuideOpen] = useState(false);
  const lesson = unitId
    ? (unitLessons[unitId] ?? modelLessons[course])
    : modelLessons[course];
  const lessonKey = unitId ?? course;
  const exercise = lesson.exercises[index];

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get('course');
    const requestedUnit = new URLSearchParams(window.location.search).get(
      'unit',
    );
    const profile = window.localStorage.getItem('camasa-profile');
    const aliases: Record<string, CourseId> = {
      en: 'en',
      english: 'en',
      inglés: 'en',
      ja: 'ja',
      japanese: 'ja',
      japonés: 'ja',
      fr: 'fr',
      french: 'fr',
      francés: 'fr',
      ru: 'ru',
      russian: 'ru',
      ruso: 'ru',
      pt: 'pt',
      portuguese: 'pt',
      português: 'pt',
      portugues: 'pt',
      portugués: 'pt',
    };
    const resolved: CourseId =
      query && aliases[query.toLocaleLowerCase()]
        ? aliases[query.toLocaleLowerCase()]
        : profile === 'santiago'
          ? 'ja'
          : 'en';
    // The course depends on client-only URL and profile storage.
    // oxlint-disable-next-line react-compiler/react-compiler
    setCourse(resolved);
    const resolvedUnit =
      requestedUnit && unitLessons[requestedUnit]?.language === resolved
        ? requestedUnit
        : null;
    setUnitId(resolvedUnit);
    const resolvedLesson = resolvedUnit
      ? unitLessons[resolvedUnit]
      : modelLessons[resolved];
    const saved = Number(
      window.localStorage.getItem(
        `camasa-${resolvedUnit ?? resolved}-lesson-index`,
      ) || 0,
    );
    if (saved > 0 && saved < resolvedLesson.exercises.length) setIndex(saved);
    setReady(true);
  }, []);

  const answerProvided =
    exercise.kind === 'choice'
      ? Boolean(selected)
      : exercise.kind === 'order'
        ? ordered.length === exercise.tokens.length
        : written.trim().length > 0;
  const correct = useMemo(() => {
    if (exercise.kind === 'choice') return selected === exercise.answer;
    if (exercise.kind === 'order') {
      const submitted = ordered
        .map((token) => token.toLocaleLowerCase())
        .join('\u0000');
      return [exercise.answer, ...(exercise.acceptedOrders ?? [])].some(
        (answer) =>
          submitted ===
          answer.map((token) => token.toLocaleLowerCase()).join('\u0000'),
      );
    }
    if (exercise.accepted.length === 0)
      return autoGradeOpenResponse(course, exercise, written);
    return exercise.accepted.some(
      (answer) => normalize(answer) === normalize(written),
    );
  }, [exercise, selected, ordered, written]);

  const progress =
    ((index + (finished ? 1 : 0)) / lesson.exercises.length) * 100;

  function checkAnswer() {
    if (!answerProvided) return;
    setChecked(true);
    if (correct) setScore((value) => value + 1);
  }

  function nextExercise() {
    if (index === lesson.exercises.length - 1) {
      setFinished(true);
      window.localStorage.setItem(
        `camasa-${lessonKey}-model-lesson`,
        'complete',
      );
      window.localStorage.removeItem(`camasa-${lessonKey}-lesson-index`);
      return;
    }
    const next = index + 1;
    setIndex(next);
    setSelected(null);
    setOrdered([]);
    setWritten('');
    setChecked(false);
    setKeyboardUppercase(false);
    window.localStorage.setItem(
      `camasa-${lessonKey}-lesson-index`,
      String(next),
    );
  }

  function restart() {
    setIndex(0);
    setSelected(null);
    setOrdered([]);
    setWritten('');
    setChecked(false);
    setScore(0);
    setFinished(false);
    setKeyboardUppercase(false);
    setIntroductionOpen(true);
    window.localStorage.removeItem(`camasa-${lessonKey}-lesson-index`);
  }

  if (!ready) return <main className="min-h-screen bg-[var(--canvas)]" />;

  if (introductionOpen)
    return (
      <main className="min-h-screen bg-[var(--canvas)] px-4 py-8 sm:py-12">
        <section className="mx-auto max-w-3xl">
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-muted-foreground hover:bg-card"
          >
            <ArrowLeft className="size-4" /> Volver
          </button>
          <div className="rounded-[30px] border border-[var(--line)] bg-[#fff9f3]/85 p-5 shadow-[0_20px_60px_rgba(29,43,58,0.09)] sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary-soft)] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-primary">
                  <BookOpen className="size-4" /> Antes de practicar
                </div>
                <h1 className="font-heading text-3xl font-black tracking-[-0.04em] sm:text-4xl">
                  {lesson.title}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {lesson.introduction.summary}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[var(--salmon-soft)] px-3 py-1.5 text-xs font-black text-[#a94e47]">
                {lesson.level} · {lesson.duration}
              </span>
            </div>
            <div className="my-6 rounded-2xl bg-primary p-4 text-white">
              <p className="text-[11px] font-black uppercase tracking-[0.12em] text-white/75">
                Objetivo
              </p>
              <p className="mt-1 text-sm font-bold leading-6">
                {lesson.objective}
              </p>
            </div>
            <LessonGuide lesson={lesson} />
            <div className="mt-5 flex gap-3 rounded-2xl bg-[var(--salmon-soft)] p-4">
              <Lightbulb className="mt-0.5 size-5 shrink-0 text-[var(--salmon)]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[#a94e47]">
                  Consejo
                </p>
                <p className="mt-1 text-sm leading-6 text-[#7f504c]">
                  {lesson.introduction.tip}
                </p>
              </div>
            </div>
            <Button
              onClick={() => setIntroductionOpen(false)}
              className="mt-6 h-12 w-full rounded-xl text-sm font-extrabold shadow-[0_4px_0_var(--primary-shadow)]"
            >
              Comenzar ejercicios <ChevronRight />
            </Button>
          </div>
        </section>
      </main>
    );

  if (finished) {
    const percent = Math.round((score / lesson.exercises.length) * 100);
    const order = courseUnitOrder[course];
    const currentUnit = unitId ?? order[0];
    const nextUnit = order[order.indexOf(currentUnit) + 1];
    return (
      <main className="grid min-h-screen place-items-center bg-[var(--canvas)] px-4 py-12">
        <section className="w-full max-w-lg rounded-[30px] bg-card p-7 text-center shadow-[0_20px_60px_rgba(29,43,58,0.12)] ring-1 ring-[var(--line)] sm:p-10">
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-[var(--primary-soft)] text-primary">
            <Check className="size-10" strokeWidth={3} />
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.14em] text-primary">
            Lección modelo completada
          </p>
          <h1 className="mt-2 font-heading text-3xl font-black tracking-[-0.04em]">
            ¡Excelente práctica!
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
            Terminaste “{lesson.title}”. Tu avance quedó guardado localmente.
          </p>
          <div className="my-7 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[var(--orange-soft)] p-4">
              <p className="text-2xl font-black text-[#a65b17]">+20</p>
              <p className="text-xs font-bold text-[#9b672e]">XP obtenidos</p>
            </div>
            <div className="rounded-2xl bg-[var(--salmon-soft)] p-4">
              <p className="text-2xl font-black text-[#ae5149]">{percent}%</p>
              <p className="text-xs font-bold text-[#a55b55]">
                Precisión automática
              </p>
            </div>
          </div>
          <p className="-mt-3 mb-7 text-xs font-bold text-muted-foreground">
            Las respuestas abiertas se evaluaron con una rúbrica automática de
            longitud, idioma y palabras clave del objetivo.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="outline"
              onClick={restart}
              className="h-11 flex-1 rounded-xl font-extrabold"
            >
              <RotateCcw /> Repetir
            </Button>
            <Button
              onClick={() => {
                if (nextUnit) {
                  window.location.href = `/lesson?course=${course}&unit=${nextUnit}`;
                } else {
                  window.location.href = '/';
                }
              }}
              className="h-11 flex-1 rounded-xl font-extrabold shadow-[0_4px_0_var(--primary-shadow)]"
            >
              {nextUnit ? 'Siguiente lección' : 'Volver a la ruta'}{' '}
              <ChevronRight />
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                window.location.href = '/';
              }}
              className="h-11 flex-1 rounded-xl font-extrabold"
            >
              Volver a la ruta
            </Button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--canvas)]">
      <header className="border-b border-[var(--line)] bg-[#fff9f3]/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-3xl items-center gap-3 px-4 sm:px-6">
          <button
            onClick={() => {
              window.location.href = '/';
            }}
            aria-label="Salir de la lección"
            className="grid size-9 place-items-center rounded-xl text-muted-foreground hover:bg-muted"
          >
            <ArrowLeft className="size-5" />
          </button>
          <Progress
            value={progress}
            className="flex-1 [&_[data-slot=progress-indicator]]:bg-primary [&_[data-slot=progress-track]]:h-3 [&_[data-slot=progress-track]]:bg-[#dfd3cc]"
          />
          <button
            onClick={() => setGuideOpen(true)}
            className="inline-flex h-9 items-center gap-1.5 rounded-xl border border-[var(--line)] bg-card px-2.5 text-xs font-black text-primary"
            aria-label="Abrir material de apoyo"
          >
            <BookOpen className="size-4" />
            <span className="hidden sm:inline">Repasar</span>
          </button>
          <div className="flex items-center gap-1 text-sm font-black text-[var(--salmon)]">
            <Heart className="size-5 fill-current" /> 5
          </div>
        </div>
      </header>

      {guideOpen && (
        <dialog
          open
          className="fixed inset-0 z-50 m-0 grid h-full max-h-none w-full max-w-none place-items-center border-0 bg-[#23332f]/45 p-4"
          aria-label="Material de apoyo"
        >
          <section className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-[var(--canvas)] p-5 shadow-2xl sm:p-7">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.12em] text-primary">
                  Material de apoyo
                </p>
                <h2 className="mt-1 font-heading text-2xl font-black">
                  {lesson.title}
                </h2>
              </div>
              <button
                onClick={() => setGuideOpen(false)}
                aria-label="Cerrar material"
                className="grid size-9 shrink-0 place-items-center rounded-xl bg-card text-muted-foreground"
              >
                <X className="size-5" />
              </button>
            </div>
            <LessonGuide lesson={lesson} />
            <div className="mt-4 flex gap-3 rounded-2xl bg-[var(--salmon-soft)] p-4">
              <Lightbulb className="size-5 shrink-0 text-[var(--salmon)]" />
              <p className="text-sm leading-6 text-[#7f504c]">
                {lesson.introduction.tip}
              </p>
            </div>
            <Button
              onClick={() => setGuideOpen(false)}
              className="mt-5 h-11 w-full rounded-xl font-extrabold"
            >
              Volver al ejercicio
            </Button>
          </section>
        </dialog>
      )}

      <section className="mx-auto flex min-h-[calc(100vh-65px)] max-w-3xl flex-col px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-6 rounded-2xl border border-[var(--line)] bg-card/65 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-primary">
              {lesson.level} · {lesson.title}
            </p>
            <span className="rounded-full bg-[var(--orange-soft)] px-2.5 py-1 text-[10px] font-black text-[#a95c14]">
              {phaseLabels[exercise.phase]}
            </span>
          </div>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            {lesson.objective}
          </p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-black uppercase tracking-[0.13em] text-primary">
            Ejercicio {index + 1} de {lesson.exercises.length}
          </p>
          <h1 className="mt-2 max-w-2xl font-heading text-2xl font-black leading-tight tracking-[-0.035em] sm:text-3xl">
            {exercise.prompt}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{exercise.hint}</p>

          {exercise.kind === 'choice' && (
            <div className="mt-7 space-y-3">
              {exercise.options.map((option, optionIndex) => {
                const isSelected = selected === option;
                const isCorrect = checked && option === exercise.answer;
                const isWrong = checked && isSelected && !isCorrect;
                return (
                  <button
                    key={option}
                    disabled={checked}
                    onClick={() => setSelected(option)}
                    className={`flex w-full items-center gap-4 rounded-2xl border-2 bg-card p-4 text-left text-sm font-bold transition sm:p-5 ${isCorrect ? 'border-primary bg-[var(--primary-soft)] text-[#216e59]' : isWrong ? 'border-[var(--salmon)] bg-[var(--salmon-soft)] text-[#9f4039]' : isSelected ? 'border-[var(--orange)] bg-[var(--orange-soft)]' : 'border-[var(--line)] hover:border-[#bdc7c1]'}`}
                  >
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-xl text-xs font-black ${isCorrect ? 'bg-primary text-white' : isWrong ? 'bg-[var(--salmon)] text-white' : isSelected ? 'bg-[var(--orange)] text-white' : 'bg-[#eee5df] text-muted-foreground'}`}
                    >
                      {isCorrect ? (
                        <Check className="size-4" />
                      ) : isWrong ? (
                        <X className="size-4" />
                      ) : (
                        String.fromCharCode(65 + optionIndex)
                      )}
                    </span>
                    {option}
                  </button>
                );
              })}
            </div>
          )}

          {exercise.kind === 'order' && (
            <div className="mt-7">
              <div className="min-h-20 rounded-2xl border-2 border-dashed border-[var(--line)] bg-card/60 p-3">
                <div className="flex flex-wrap gap-2">
                  {ordered.map((token, i) => (
                    <button
                      key={`${token}-${i}`}
                      disabled={checked}
                      onClick={() =>
                        setOrdered(ordered.filter((_, x) => x !== i))
                      }
                      className="rounded-xl bg-primary px-3 py-2 text-sm font-bold text-white"
                    >
                      {token}
                    </button>
                  ))}
                </div>
                {ordered.length === 0 && (
                  <p className="p-2 text-sm text-muted-foreground">
                    Selecciona las piezas en el orden correcto.
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {exercise.tokens.map((token, i) => {
                  const used = ordered.filter((x) => x === token).length;
                  const availableBefore = exercise.tokens
                    .slice(0, i)
                    .filter((x) => x === token).length;
                  const disabled = used > availableBefore;
                  return (
                    <button
                      key={`${token}-${i}`}
                      disabled={disabled || checked}
                      onClick={() => setOrdered([...ordered, token])}
                      className="rounded-xl border border-[var(--line)] bg-card px-3 py-2 text-sm font-bold shadow-sm disabled:opacity-30"
                    >
                      {token}
                    </button>
                  );
                })}
              </div>
              {ordered.length > 0 && !checked && (
                <Button
                  variant="ghost"
                  onClick={() => setOrdered([])}
                  className="mt-3"
                >
                  <Undo2 /> Reiniciar orden
                </Button>
              )}
            </div>
          )}

          {exercise.kind === 'open' && (
            <div className="mt-7">
              <textarea
                value={written}
                disabled={checked}
                onChange={(event) => setWritten(event.target.value)}
                rows={4}
                className="w-full resize-none rounded-2xl border-2 border-[var(--line)] bg-card p-4 text-base font-medium outline-none transition focus:border-primary"
                placeholder="Escribe tu respuesta…"
              />
              {virtualKeys[course] && (
                <div
                  className="mt-3 rounded-2xl border border-[var(--line)] bg-card/70 p-3"
                  aria-label={`Teclado virtual de ${languageNames[course]}`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-black uppercase tracking-[0.11em] text-primary">
                      Teclado de apoyo
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      Toca los caracteres para escribir
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {course === 'ru' && (
                      <button
                        type="button"
                        disabled={checked}
                        onClick={() => setKeyboardUppercase((value) => !value)}
                        className={`min-w-10 rounded-lg border px-2.5 py-2 text-xs font-black ${keyboardUppercase ? 'border-primary bg-[var(--primary-soft)] text-primary' : 'border-[var(--line)] bg-[#fffaf6]'}`}
                        aria-pressed={keyboardUppercase}
                      >
                        ⇧
                      </button>
                    )}
                    {virtualKeys[course]?.map((key, index) => {
                      const displayed =
                        course === 'ru' && keyboardUppercase
                          ? key.toLocaleUpperCase('ru-RU')
                          : key;
                      return (
                        <button
                          type="button"
                          key={`${key}-${index}`}
                          disabled={checked}
                          onClick={() =>
                            setWritten((value) => value + displayed)
                          }
                          className="min-w-9 rounded-lg border border-[var(--line)] bg-[#fffaf6] px-2.5 py-2 text-base font-bold shadow-sm transition hover:border-primary hover:bg-[var(--primary-soft)] active:translate-y-px"
                        >
                          {displayed}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      disabled={checked || written.length === 0}
                      onClick={() =>
                        setWritten((value) =>
                          Array.from(value).slice(0, -1).join(''),
                        )
                      }
                      className="rounded-lg border border-[var(--line)] bg-[#fffaf6] px-3 py-2 text-xs font-black"
                    >
                      ⌫ Borrar
                    </button>
                    <button
                      type="button"
                      disabled={checked || written.length === 0}
                      onClick={() => setWritten('')}
                      className="rounded-lg border border-[var(--line)] bg-[#fffaf6] px-3 py-2 text-xs font-black"
                    >
                      Limpiar
                    </button>
                    {course !== 'ja' && (
                      <button
                        type="button"
                        disabled={checked}
                        onClick={() => setWritten((value) => value + ' ')}
                        className="rounded-lg border border-[var(--line)] bg-[#fffaf6] px-5 py-2 text-xs font-black"
                      >
                        Espacio
                      </button>
                    )}
                  </div>
                </div>
              )}
              <p className="mt-2 text-xs text-muted-foreground">
                {exercise.accepted.length === 0
                  ? 'Producción libre: se evalúa automáticamente con la rúbrica de esta unidad.'
                  : 'Se aceptan variantes equivalentes previstas en la rúbrica.'}
              </p>
            </div>
          )}
        </div>

        <footer
          className={`mt-8 rounded-2xl border p-4 transition sm:flex sm:items-center sm:justify-between sm:gap-5 ${checked ? (correct ? 'border-primary/25 bg-[var(--primary-soft)]' : 'border-[var(--salmon)]/35 bg-[var(--salmon-soft)]') : 'border-transparent'}`}
        >
          {checked && (
            <div className="mb-4 sm:mb-0">
              <p
                className={`font-heading text-base font-black ${correct ? 'text-[#216e59]' : 'text-[#a7323c]'}`}
              >
                {correct
                    ? '¡Muy bien!'
                    : exercise.kind === 'order'
                      ? `Orden: ${exercise.answer.join(' ')}`
                      : exercise.kind === 'open'
                        ? `Modelo: ${exercise.modelAnswer}`
                        : `Respuesta: ${exercise.answer}`}
              </p>
              <p className="mt-1 max-w-lg text-xs leading-5 text-muted-foreground">
                {exercise.explanation}
              </p>
              {exercise.kind === 'open' && (
                <p className="mt-1 text-xs font-bold">
                  Modelo: {exercise.modelAnswer}
                </p>
              )}
            </div>
          )}
          {!checked ? (
            <Button
              disabled={!answerProvided}
              onClick={checkAnswer}
              className="ml-auto h-11 w-full rounded-xl px-6 font-extrabold shadow-[0_4px_0_var(--primary-shadow)] sm:w-auto"
            >
              Comprobar
            </Button>
          ) : (
            <Button
              onClick={nextExercise}
              className="ml-auto h-11 w-full shrink-0 rounded-xl px-6 font-extrabold shadow-[0_4px_0_var(--primary-shadow)] sm:w-auto"
            >
              Continuar <ChevronRight />
            </Button>
          )}
        </footer>
      </section>
    </main>
  );
}
