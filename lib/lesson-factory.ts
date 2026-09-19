import type { ModelLesson } from '@/lib/model-lessons';

type Concept = ModelLesson['introduction']['concepts'][number];

export type LessonSpec = {
  id: string;
  language: ModelLesson['language'];
  title: string;
  level: string;
  objective: string;
  summary: string;
  concepts: [Concept, Concept, Concept];
  tip: string;
  choices: [
    {
      prompt: string;
      hint: string;
      options: string[];
      answer: string;
      explanation: string;
    },
    {
      prompt: string;
      hint: string;
      options: string[];
      answer: string;
      explanation: string;
    },
    {
      prompt: string;
      hint: string;
      options: string[];
      answer: string;
      explanation: string;
    },
    {
      prompt: string;
      hint: string;
      options: string[];
      answer: string;
      explanation: string;
    },
    {
      prompt: string;
      hint: string;
      options: string[];
      answer: string;
      explanation: string;
    },
  ];
  order: {
    prompt: string;
    hint: string;
    tokens: string[];
    answer: string[];
    explanation: string;
    acceptedOrders?: string[][];
  };
  exactOpen: {
    prompt: string;
    hint: string;
    accepted: string[];
    modelAnswer: string;
    explanation: string;
  };
  freeOpen: {
    prompt: string;
    hint: string;
    modelAnswer: string;
    explanation: string;
  };
};

export function createLesson(spec: LessonSpec): ModelLesson {
  const [activate, understand, practiceOne, practiceTwo, transferChoice] =
    spec.choices;
  return {
    language: spec.language,
    title: spec.title,
    level: spec.level,
    duration: '12–15 min',
    objective: spec.objective,
    introduction: {
      summary: spec.summary,
      concepts: spec.concepts,
      tip: spec.tip,
    },
    exercises: [
      { id: `${spec.id}-01`, kind: 'choice', phase: 'activar', ...activate },
      {
        id: `${spec.id}-02`,
        kind: 'choice',
        phase: 'comprender',
        ...understand,
      },
      {
        id: `${spec.id}-03`,
        kind: 'choice',
        phase: 'comprender',
        ...practiceOne,
      },
      { id: `${spec.id}-04`, kind: 'order', phase: 'practicar', ...spec.order },
      {
        id: `${spec.id}-05`,
        kind: 'choice',
        phase: 'practicar',
        ...practiceTwo,
      },
      {
        id: `${spec.id}-06`,
        kind: 'open',
        phase: 'practicar',
        ...spec.exactOpen,
      },
      {
        id: `${spec.id}-07`,
        kind: 'choice',
        phase: 'transferir',
        ...transferChoice,
      },
      {
        id: `${spec.id}-08`,
        kind: 'open',
        phase: 'transferir',
        accepted: [],
        ...spec.freeOpen,
      },
    ],
  };
}
