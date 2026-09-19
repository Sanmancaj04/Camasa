import { createLesson, type LessonSpec } from '@/lib/lesson-factory';
import {
  russianAcceptedOrderSentences,
  russianDiagnosticChecks,
} from '@/lib/russian-diagnostic-checks';

type RussianConcept = {
  title: string;
  explanation: string;
  example: string;
};

type Question = {
  prompt: string;
  options: [string, string, string];
  answer: string;
  explanation: string;
};

export type RussianLessonSeed = {
  id: string;
  title: string;
  level: string;
  objective: string;
  summary: string;
  concepts: [RussianConcept, RussianConcept, RussianConcept];
  tip: string;
  questions: [Question, Question];
  order: LessonSpec['order'];
  exactOpen: LessonSpec['exactOpen'];
  freeOpen: LessonSpec['freeOpen'];
  diagnosticQuestions?: [Question, Question, Question];
};

export function createRussianLesson(seed: RussianLessonSeed) {
  const conceptChoices = seed.concepts.map((concept, index) => ({
    prompt: `¿Qué ejemplo corresponde a «${concept.title}»?`,
    hint: concept.explanation,
    options: seed.concepts.map((item) => item.example),
    answer: concept.example,
    explanation: `${concept.example} — ${concept.explanation}`,
    index,
  }));
  const diagnosticChoices = (
    seed.diagnosticQuestions ?? [
      conceptChoices[0],
      conceptChoices[1],
      conceptChoices[2],
    ]
  ).map((question) => ({
    ...question,
    hint: 'Detecta la forma que cumple la función indicada.',
  }));

  return createLesson({
    id: seed.id,
    language: 'ru',
    title: seed.title,
    level: seed.level,
    objective: seed.objective,
    summary: seed.summary,
    concepts: seed.concepts.map(({ title, explanation, example }) => ({
      title,
      explanation,
      examples: [example],
    })) as LessonSpec['concepts'],
    tip: seed.tip,
    choices: [
      diagnosticChoices[0],
      diagnosticChoices[1],
      diagnosticChoices[2],
      {
        ...seed.questions[0],
        hint: 'Relaciona la forma con su función en este contexto.',
      },
      {
        ...seed.questions[1],
        hint: 'Elige la opción gramatical y pragmáticamente adecuada.',
      },
    ],
    order: seed.order,
    exactOpen: seed.exactOpen,
    freeOpen: seed.freeOpen,
  });
}

function tokenizeRussian(sentence: string) {
  return sentence.match(/[\p{L}\p{N}-]+|[.,!?;:—]/gu) ?? [];
}

function genderVariants(answer: string) {
  const pairs: [RegExp, string][] = [
    [/прочитал/u, 'прочитала'],
    [/окончил/u, 'окончила'],
    [/шёл/u, 'шла'],
    [/встретил/u, 'встретила'],
    [/работал/u, 'работала'],
    [/приехал/u, 'приехала'],
    [/уехал/u, 'уехала'],
    [/выбрал/u, 'выбрала'],
    [/согласен/u, 'согласна'],
    [/убеждён/u, 'убеждена'],
    [/понял/u, 'поняла'],
  ];
  const variants = new Set([answer, answer.replace(/[.!?]$/u, '')]);
  for (const [pattern, feminine] of pairs) {
    for (const value of Array.from(variants)) {
      if (pattern.test(value)) {
        const replacement = value.replace(pattern, feminine);
        variants.add(replacement);
        variants.add(replacement.replace(/[.!?]$/u, ''));
      }
    }
  }
  return [...variants];
}

type CompactConcept = [title: string, explanation: string, example: string];

export type CompactRussianSeed = {
  id: string;
  title: string;
  level: string;
  objective: string;
  summary: string;
  concepts: [CompactConcept, CompactConcept, CompactConcept];
  scenario: Question;
  exact: {
    prompt: string;
    answer: string;
    accepted?: string[];
    distractors: [string, string];
    explanation: string;
  };
  free: { prompt: string; model: string; explanation: string };
};

export function createCompactRussianLesson(seed: CompactRussianSeed) {
  const concepts = seed.concepts.map(([title, explanation, example]) => ({
    title,
    explanation,
    example,
  })) as RussianLessonSeed['concepts'];
  const tokens = tokenizeRussian(seed.exact.answer);
  const shuffled = [
    ...tokens.filter((token) => /[\p{L}\p{N}-]/u.test(token)).reverse(),
    ...tokens.filter((token) => !/[\p{L}\p{N}-]/u.test(token)),
  ];
  const diagnosticQuestions = russianDiagnosticChecks[seed.id]?.map(
    ([prompt, answer, wrongOne, wrongTwo, explanation]) => ({
      prompt,
      options: [answer, wrongOne, wrongTwo],
      answer,
      explanation,
    }),
  ) as RussianLessonSeed['diagnosticQuestions'];
  const acceptedOrders = (russianAcceptedOrderSentences[seed.id] ?? [])
    .map(tokenizeRussian)
    .filter(
      (order) =>
        [...order]
          .map((token) => token.toLocaleLowerCase())
          .sort()
          .join('\u0000') ===
        [...tokens]
          .map((token) => token.toLocaleLowerCase())
          .sort()
          .join('\u0000'),
    );
  return createRussianLesson({
    id: seed.id,
    title: seed.title,
    level: seed.level,
    objective: seed.objective,
    summary: seed.summary,
    concepts,
    diagnosticQuestions,
    tip: 'Relaciona la forma con la intención comunicativa antes de responder.',
    questions: [
      seed.scenario,
      {
        prompt: seed.exact.prompt,
        options: [seed.exact.answer, ...seed.exact.distractors],
        answer: seed.exact.answer,
        explanation: seed.exact.explanation,
      },
    ],
    order: {
      prompt: `Ordena: ${seed.exact.prompt}`,
      hint: 'Reconstruye la frase modelo.',
      tokens: shuffled,
      answer: tokens,
      acceptedOrders,
      explanation: seed.exact.explanation,
    },
    exactOpen: {
      prompt: seed.exact.prompt,
      hint: 'Escribe la frase rusa completa.',
      accepted: seed.exact.accepted ?? genderVariants(seed.exact.answer),
      modelAnswer: seed.exact.answer,
      explanation: seed.exact.explanation,
    },
    freeOpen: {
      prompt: seed.free.prompt,
      hint: 'Usa las formas de la introducción y añade información propia.',
      modelAnswer: seed.free.model,
      explanation: `${seed.free.explanation}; requiere revisión manual.`,
    },
  });
}
