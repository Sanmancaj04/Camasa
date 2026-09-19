import type { AuditLanguage } from '@/lib/course-audit';

export type SourceLink = {
  title: string;
  publisher: string;
  url: string;
  supports: string;
  exerciseIds: string[];
  accessedAt: string;
};

export type UnitSourceRecord = {
  unitId: string;
  language: AuditLanguage;
  sources: SourceLink[];
};

const generated80Traceability: UnitSourceRecord[] = [
  ...Array.from({ length: 10 }, (_, index) => `en-${index + 12}`).map(
    (unitId) => ({
      unitId,
      language: 'en' as const,
      sources: [
        {
          title: 'B1–B2 grammar and skills resources',
          publisher: 'British Council LearnEnglish',
          url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2',
          supports:
            'Gramática, comprensión y producción comunicativa de nivel B1–B2.',
          exerciseIds: Array.from(
            { length: 8 },
            (_, exercise) =>
              `${unitId}-${String(exercise + 1).padStart(2, '0')}`,
          ),
          accessedAt: '2026-09-16',
        },
        {
          title: 'B1 writing and speaking',
          publisher: 'British Council LearnEnglish',
          url: 'https://learnenglish.britishcouncil.org/free-resources/writing/b1',
          supports: 'Textos conectados, interacción y tareas comunicativas.',
          exerciseIds: [`${unitId}-06`, `${unitId}-08`],
          accessedAt: '2026-09-16',
        },
      ],
    }),
  ),
  ...Array.from({ length: 10 }, (_, index) => `ja-${index + 20}`).map(
    (unitId) => ({
      unitId,
      language: 'ja' as const,
      sources: [
        {
          title: 'IRODORI Elementary 2 and Pre-Intermediate materials',
          publisher: 'The Japan Foundation',
          url: 'https://www.irodori.jpf.go.jp/en/pre-intermediate/pdf.html',
          supports:
            'Can-do, gramática y situaciones comunicativas de japonés A2–B1.',
          exerciseIds: Array.from(
            { length: 8 },
            (_, exercise) =>
              `${unitId}-${String(exercise + 1).padStart(2, '0')}`,
          ),
          accessedAt: '2026-09-16',
        },
        {
          title: 'IRODORI Grammar Worksheets',
          publisher: 'The Japan Foundation',
          url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_Z.pdf',
          supports: 'Práctica estructurada y transferencia de formas A2–B1.',
          exerciseIds: [`${unitId}-04`, `${unitId}-06`, `${unitId}-08`],
          accessedAt: '2026-09-16',
        },
      ],
    }),
  ),
];

const finalCurriculumTraceability: UnitSourceRecord[] = [
  ...['en-22', 'en-23', 'en-24'].map((unitId) => ({
    unitId,
    language: 'en' as const,
    sources: [
      {
        title: 'B2 writing',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/writing/b2',
        supports:
          'Registro, organización, argumentación y tareas escritas de nivel B2.',
        exerciseIds: Array.from(
          { length: 8 },
          (_, exercise) => `${unitId}-${String(exercise + 1).padStart(2, '0')}`,
        ),
        accessedAt: '2026-09-17',
      },
      {
        title: 'Business English',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/business',
        supports:
          'Comunicación profesional, reuniones y correspondencia laboral.',
        exerciseIds: [`${unitId}-01`, `${unitId}-03`, `${unitId}-05`],
        accessedAt: '2026-09-17',
      },
    ],
  })),
  ...Array.from({ length: 7 }, (_, index) => `ja-${index + 30}`).map(
    (unitId) => ({
      unitId,
      language: 'ja' as const,
      sources: [
        {
          title: 'JF Standard for Japanese-Language Education',
          publisher: 'The Japan Foundation',
          url: 'https://www.jfstandard.jpf.go.jp/',
          supports:
            'Diseño por Can-do, competencia comunicativa y niveles de dominio.',
          exerciseIds: Array.from(
            { length: 8 },
            (_, exercise) =>
              `${unitId}-${String(exercise + 1).padStart(2, '0')}`,
          ),
          accessedAt: '2026-09-17',
        },
        {
          title: 'Marugoto: Japanese language and culture',
          publisher: 'The Japan Foundation',
          url: 'https://marugoto.jpf.go.jp/en/',
          supports:
            'Situaciones comunicativas, estrategias y progresión funcional.',
          exerciseIds: [`${unitId}-04`, `${unitId}-06`, `${unitId}-08`],
          accessedAt: '2026-09-17',
        },
      ],
    }),
  ),
];

const russianCurriculumTraceability: UnitSourceRecord[] = Array.from(
  { length: 35 },
  (_, index) => `ru-${String(index + 2).padStart(2, '0')}`,
).map((unitId) => ({
  unitId,
  language: 'ru' as const,
  sources: [
    {
      title: 'Учить русский: уровни A1–B2',
      publisher: 'Государственный институт русского языка им. А. С. Пушкина',
      url: 'https://pushkininstitute.ru/learn',
      supports:
        'Progresión comunicativa y correspondencia de los niveles ТЭУ, ТБУ, ТРКИ-1 y ТРКИ-2 con A1–B2.',
      exerciseIds: Array.from(
        { length: 8 },
        (_, exercise) => `${unitId}-${String(exercise + 1).padStart(2, '0')}`,
      ),
      accessedAt: '2026-09-17',
    },
    {
      title: 'Русский язык: справочники и словари',
      publisher: 'Грамота.ру',
      url: 'https://gramota.ru/',
      supports:
        'Norma ortográfica, morfología, régimen verbal, casos y uso escrito estándar.',
      exerciseIds: [`${unitId}-04`, `${unitId}-05`, `${unitId}-06`],
      accessedAt: '2026-09-17',
    },
  ],
}));

export const sourceTraceability: UnitSourceRecord[] = [
  ...generated80Traceability,
  ...finalCurriculumTraceability,
  ...russianCurriculumTraceability,
  {
    unitId: 'en-10',
    language: 'en',
    sources: [
      {
        title: 'Present perfect',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect',
        supports:
          'Experiencia conectada al presente y estados vigentes con for/since.',
        exerciseIds: [
          'en-10-01',
          'en-10-02',
          'en-10-03',
          'en-10-04',
          'en-10-07',
          'en-10-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Present perfect simple and continuous',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous',
        supports: 'Duración de actividades y situaciones actuales.',
        exerciseIds: ['en-10-02', 'en-10-03', 'en-10-04', 'en-10-07'],
        accessedAt: '2026-09-16',
      },
      {
        title: 'B1 speaking',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/b1',
        supports:
          'Descripción funcional de habilidades y objetivos personales.',
        exerciseIds: ['en-10-05', 'en-10-06', 'en-10-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-11',
    language: 'en',
    sources: [
      {
        title: "Contrasting ideas: 'although', 'despite' and others",
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/contrasting-ideas-although-despite-others',
        supports:
          'Contraste de argumentos con although y estructuras relacionadas.',
        exerciseIds: ['en-11-04', 'en-11-07', 'en-11-08'],
        accessedAt: '2026-09-16',
      },
      {
        title: "Intensifiers: 'so' and 'such'",
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/intensifiers-so-such',
        supports: 'Grado e intensidad en valoraciones B1.',
        exerciseIds: ['en-11-05', 'en-11-08'],
        accessedAt: '2026-09-16',
      },
      {
        title: 'B1 speaking',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/b1',
        supports: 'Expresión y justificación de opiniones.',
        exerciseIds: [
          'en-11-01',
          'en-11-02',
          'en-11-03',
          'en-11-06',
          'en-11-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-18',
    language: 'ja',
    sources: [
      {
        title:
          'Irodori Elementary 2 — Lesson 10: What kind of clothes should I wear?',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/elementary02/pdf/Z_contents_en.pdf',
        supports:
          'Reglas sociales, prohibición con てはいけません y obligación.',
        exerciseIds: [
          'ja-18-03',
          'ja-18-04',
          'ja-18-05',
          'ja-18-06',
          'ja-18-07',
          'ja-18-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Grammar Worksheets — Elementary 1 and 2',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_Z.pdf',
        supports: 'Permiso, prohibición y práctica contextual de reglas.',
        exerciseIds: [
          'ja-18-01',
          'ja-18-02',
          'ja-18-03',
          'ja-18-05',
          'ja-18-07',
          'ja-18-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-19',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Grammar Worksheets — Elementary 2 Lesson 6',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_Z.pdf',
        supports:
          'Planes con つもりです y 予定です en contextos de viaje y coordinación.',
        exerciseIds: [
          'ja-19-01',
          'ja-19-02',
          'ja-19-04',
          'ja-19-05',
          'ja-19-07',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Elementary 2',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/elementary02/pdf.html',
        supports:
          'Negociación de alternativas y coordinación práctica en nivel A2.',
        exerciseIds: ['ja-19-03', 'ja-19-06', 'ja-19-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-08',
    language: 'en',
    sources: [
      {
        title: 'Body parts 1',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/vocabulary/a1-a2/body-parts-1',
        supports: 'Vocabulario corporal para localizar y describir molestias.',
        exerciseIds: [
          'en-08-01',
          'en-08-02',
          'en-08-04',
          'en-08-07',
          'en-08-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Health',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/vocabulary/b1-b2/health',
        supports: 'Vocabulario funcional de síntomas y atención sanitaria.',
        exerciseIds: [
          'en-08-01',
          'en-08-02',
          'en-08-04',
          'en-08-06',
          'en-08-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title:
          'LearnEnglish Elementary Podcasts — Giving and asking for advice',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/sites/podcasts/files/learnenglish-elementary-podcasts-s04e02-support-pack.pdf',
        supports: 'Consejos con should y shouldn’t.',
        exerciseIds: ['en-08-03', 'en-08-05', 'en-08-07', 'en-08-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-09',
    language: 'en',
    sources: [
      {
        title: 'Past continuous and past simple',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/past-continuous-past-simple',
        supports:
          'Relación entre contexto en progreso y acontecimiento en pasado simple.',
        exerciseIds: [
          'en-09-01',
          'en-09-02',
          'en-09-03',
          'en-09-04',
          'en-09-07',
          'en-09-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Past perfect',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-perfect',
        supports: 'Secuencia narrativa y orden explícito de acciones pasadas.',
        exerciseIds: ['en-09-05', 'en-09-06', 'en-09-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-16',
    language: 'ja',
    sources: [
      {
        title:
          'Irodori Elementary 1 — Lesson 15: I have a fever, and my throat is sore',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_L15.pdf',
        supports:
          'Descripción de síntomas con んです e interacciones básicas de consulta.',
        exerciseIds: ['ja-16-01', 'ja-16-02', 'ja-16-07', 'ja-16-08'],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Elementary 1 Grammar Worksheets',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_Y.pdf',
        supports:
          'Indicaciones con ないでください y recomendaciones con ほうがいい.',
        exerciseIds: [
          'ja-16-03',
          'ja-16-04',
          'ja-16-05',
          'ja-16-06',
          'ja-16-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-17',
    language: 'ja',
    sources: [
      {
        title:
          'Irodori Elementary 1 — Lesson 8: Have you ever played baseball?',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/elementary01/pdf.html',
        supports:
          'Experiencias con Vたことがあります y respuestas afirmativas o negativas.',
        exerciseIds: [
          'ja-17-01',
          'ja-17-02',
          'ja-17-06',
          'ja-17-07',
          'ja-17-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Elementary 1 Grammar Worksheets',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_Y.pdf',
        supports:
          'Práctica de experiencia, capacidad con ことができます y enumeración.',
        exerciseIds: ['ja-17-03', 'ja-17-04', 'ja-17-05', 'ja-17-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-06',
    language: 'en',
    sources: [
      {
        title: 'Question forms',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/question-forms',
        supports:
          'Formación de preguntas directas y base para preguntas indirectas de viaje.',
        exerciseIds: [
          'en-06-02',
          'en-06-03',
          'en-06-05',
          'en-06-07',
          'en-06-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'A2 speaking',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a2',
        supports:
          'Interacciones funcionales A2 para solicitar información, ayuda y servicios.',
        exerciseIds: [
          'en-06-01',
          'en-06-04',
          'en-06-06',
          'en-06-07',
          'en-06-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-07',
    language: 'en',
    sources: [
      {
        title: "Future forms: 'will', 'be going to' and present continuous",
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous',
        supports:
          'Distinción entre intención previa y arreglo futuro confirmado.',
        exerciseIds: [
          'en-07-01',
          'en-07-02',
          'en-07-04',
          'en-07-07',
          'en-07-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Present continuous',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous',
        supports: 'Presente continuo para planes o arreglos futuros.',
        exerciseIds: ['en-07-02', 'en-07-07'],
        accessedAt: '2026-09-16',
      },
      {
        title: 'A2 speaking',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a2',
        supports: 'Propuestas, aceptación, rechazo cortés y coordinación.',
        exerciseIds: ['en-07-03', 'en-07-05', 'en-07-06', 'en-07-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-14',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Elementary 1 — Lesson 1: I work in a restaurant',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/elementary01/pdf/Y_L01.pdf',
        supports:
          'Situación actual, ocupaciones, 働いています y preguntas sobre trabajo.',
        exerciseIds: [
          'ja-14-01',
          'ja-14-02',
          'ja-14-03',
          'ja-14-04',
          'ja-14-05',
          'ja-14-06',
          'ja-14-07',
          'ja-14-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-15',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Elementary 1 — Lessons 3 and 4: Seasons and weather',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/elementary01/pdf.html',
        supports:
          'Vocabulario meteorológico, cambios con なります y pronósticos básicos.',
        exerciseIds: [
          'ja-15-01',
          'ja-15-02',
          'ja-15-03',
          'ja-15-04',
          'ja-15-06',
          'ja-15-07',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Elementary 1 Grammar Worksheets',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_Y.pdf',
        supports: 'Práctica de 〜く/になります y comparación meteorológica.',
        exerciseIds: ['ja-15-02', 'ja-15-03', 'ja-15-05', 'ja-15-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-04',
    language: 'en',
    sources: [
      {
        title: 'Nouns: countable and uncountable',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable',
        supports:
          'Sustantivos contables e incontables, some/any, how much y how many.',
        exerciseIds: [
          'en-04-01',
          'en-04-02',
          'en-04-03',
          'en-04-04',
          'en-04-06',
          'en-04-07',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Comparative adjectives',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/comparative-adjectives',
        supports:
          'Comparación de precios y productos con adjetivos comparativos.',
        exerciseIds: ['en-04-05', 'en-04-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-05',
    language: 'en',
    sources: [
      {
        title: 'Past simple',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple',
        supports:
          'Pasado regular e irregular, preguntas con did y oraciones negativas.',
        exerciseIds: [
          'en-05-01',
          'en-05-02',
          'en-05-03',
          'en-05-04',
          'en-05-07',
          'en-05-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Adverbials of time',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/adverbials-time',
        supports:
          'Expresiones de tiempo para situar y ordenar acontecimientos pasados.',
        exerciseIds: ['en-05-05', 'en-05-06', 'en-05-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-12',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter — Lesson 16: How much is this?',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L16.pdf',
        supports:
          'これ/それ/あれ, preguntas de precio y peticiones con cantidades.',
        exerciseIds: [
          'ja-12-01',
          'ja-12-02',
          'ja-12-03',
          'ja-12-04',
          'ja-12-05',
          'ja-12-06',
          'ja-12-07',
          'ja-12-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-13',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter — Lessons 17 and 18',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/starter/pdf.html',
        supports:
          'Acciones pasadas con ました, deseos con たいです y secuencia con それから.',
        exerciseIds: [
          'ja-13-01',
          'ja-13-02',
          'ja-13-03',
          'ja-13-04',
          'ja-13-05',
          'ja-13-06',
          'ja-13-07',
          'ja-13-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Starter Grammar Worksheets — Lesson 18',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_X.pdf',
        supports: 'Transformaciones de ます a たいです y relatos con ました.',
        exerciseIds: [
          'ja-13-02',
          'ja-13-03',
          'ja-13-04',
          'ja-13-05',
          'ja-13-06',
          'ja-13-07',
          'ja-13-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-01',
    language: 'en',
    sources: [
      {
        title: 'Present simple: to be',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be',
        supports:
          'Preguntas y respuestas con be sobre identidad, origen y estado.',
        exerciseIds: ['en-01-01', 'en-01-05', 'en-01-06', 'en-01-08'],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Present simple',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple',
        supports:
          'Preguntas con do, respuestas cortas y palabras interrogativas.',
        exerciseIds: [
          'en-01-02',
          'en-01-03',
          'en-01-04',
          'en-01-07',
          'en-01-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-03',
    language: 'en',
    sources: [
      {
        title: 'Using there is and there are',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/using-there-is-there-are',
        supports: 'Existencia, concordancia singular/plural y uso de some/any.',
        exerciseIds: [
          'en-03-01',
          'en-03-02',
          'en-03-03',
          'en-03-06',
          'en-03-07',
          'en-03-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: "Prepositions of place: 'in', 'on', 'at'",
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place',
        supports:
          'Preposiciones y expresiones básicas para situar objetos y lugares.',
        exerciseIds: ['en-03-04', 'en-03-05', 'en-03-07', 'en-03-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-10',
    language: 'ja',
    sources: [
      {
        title:
          'Irodori Starter — Lesson 12: Would you like to go for a drink together?',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L12.pdf',
        supports:
          'Invitaciones con ませんか y respuestas afirmativas o indirectamente negativas.',
        exerciseIds: [
          'ja-10-01',
          'ja-10-02',
          'ja-10-03',
          'ja-10-04',
          'ja-10-05',
          'ja-10-06',
          'ja-10-07',
          'ja-10-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-11',
    language: 'ja',
    sources: [
      {
        title: 'Irodori grammar notes — Lesson 13',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/Grammar_all.pdf',
        supports:
          'Destino con へ, transporte con で y preguntas con どうやって.',
        exerciseIds: [
          'ja-11-01',
          'ja-11-02',
          'ja-11-03',
          'ja-11-04',
          'ja-11-05',
          'ja-11-06',
          'ja-11-07',
          'ja-11-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-07',
    language: 'en',
    sources: [
      {
        title: 'Using there is and there are',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/comment/205438',
        supports: 'Existencia de lugares en singular/plural.',
        exerciseIds: [
          'en-a1-07-01',
          'en-a1-07-02',
          'en-a1-07-03',
          'en-a1-07-04',
          'en-a1-07-05',
          'en-a1-07-06',
          'en-a1-07-07',
          'en-a1-07-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Prepositions of place',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place',
        supports: 'In, on y next to para ubicación.',
        exerciseIds: ['en-a1-07-03', 'en-a1-07-07'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-08',
    language: 'en',
    sources: [
      {
        title: 'A1 Elementary',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/level/understand-your-level/a1-elementary',
        supports:
          'Desempeños integrados de presentación e intercambios personales A1.',
        exerciseIds: [
          'en-a1-08-01',
          'en-a1-08-02',
          'en-a1-08-03',
          'en-a1-08-04',
          'en-a1-08-05',
          'en-a1-08-06',
          'en-a1-08-07',
          'en-a1-08-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'A1 speaking',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/speaking/a1',
        supports: 'Interacción y estrategias para comprobar comprensión.',
        exerciseIds: ['en-a1-08-01', 'en-a1-08-02', 'en-a1-08-07'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-08',
    language: 'ja',
    sources: [
      {
        title: 'Irodori grammar notes — Lesson 8',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/Grammar_all.pdf',
        supports: 'あります/います, に y preguntas de ubicación.',
        exerciseIds: [
          'ja-08-01',
          'ja-08-02',
          'ja-08-03',
          'ja-08-04',
          'ja-08-05',
          'ja-08-06',
          'ja-08-07',
          'ja-08-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-09',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter grammar worksheets — Lesson 9',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/resources/Grammar_Worksheets_X.pdf',
        supports: 'Horas, 時/分, acciones con に y periodos con から/まで.',
        exerciseIds: [
          'ja-09-01',
          'ja-09-02',
          'ja-09-03',
          'ja-09-04',
          'ja-09-05',
          'ja-09-06',
          'ja-09-07',
          'ja-09-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-05',
    language: 'en',
    sources: [
      {
        title: 'Daily routine vocabulary',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/vocabulary/a1-a2/daily-routine-vocabulary-a1-beginner-english-vocabulary-lesson',
        supports: 'Horas, presente simple y secuencia de rutinas.',
        exerciseIds: [
          'en-a1-05-01',
          'en-a1-05-02',
          'en-a1-05-03',
          'en-a1-05-04',
          'en-a1-05-05',
          'en-a1-05-06',
          'en-a1-05-07',
          'en-a1-05-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-06',
    language: 'en',
    sources: [
      {
        title: 'What do you like doing?',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/comment/206651',
        supports: 'Likes, dislikes y preguntas sobre preferencias en A1–A2.',
        exerciseIds: [
          'en-a1-06-01',
          'en-a1-06-02',
          'en-a1-06-03',
          'en-a1-06-04',
          'en-a1-06-05',
          'en-a1-06-06',
          'en-a1-06-07',
          'en-a1-06-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-06',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter Lesson 4',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L04.pdf',
        supports:
          'Vocabulario familiar, identificación en fotos y comprensión de relaciones.',
        exerciseIds: [
          'ja-06-01',
          'ja-06-02',
          'ja-06-03',
          'ja-06-04',
          'ja-06-05',
          'ja-06-06',
          'ja-06-07',
          'ja-06-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori grammar notes',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/Grammar_all.pdf',
        supports: 'Uso de の para relaciones familiares y nominales.',
        exerciseIds: [
          'ja-06-02',
          'ja-06-04',
          'ja-06-05',
          'ja-06-07',
          'ja-06-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-07',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter Lessons 5–6',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/starter/pdf.html',
        supports: 'Comida, patrón Nが好きです y pedidos con Nをください.',
        exerciseIds: [
          'ja-07-01',
          'ja-07-02',
          'ja-07-03',
          'ja-07-04',
          'ja-07-05',
          'ja-07-06',
          'ja-07-07',
          'ja-07-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-03',
    language: 'en',
    sources: [
      {
        title: 'Articles: a, an, the',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the',
        supports:
          'Uso de a/an con sustantivos contables singulares y determinantes como this/that.',
        exerciseIds: [
          'en-a1-03-01',
          'en-a1-03-02',
          'en-a1-03-03',
          'en-a1-03-04',
          'en-a1-03-05',
          'en-a1-03-06',
          'en-a1-03-07',
          'en-a1-03-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-04',
    language: 'en',
    sources: [
      {
        title: 'Present simple: have got',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-have-got',
        supports: 'Have/has got para familia, apariencia y posesión.',
        exerciseIds: [
          'en-a1-04-01',
          'en-a1-04-02',
          'en-a1-04-03',
          'en-a1-04-04',
          'en-a1-04-05',
          'en-a1-04-06',
          'en-a1-04-07',
          'en-a1-04-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Family photos',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/general/video-series/starting-out/episode-09-family-photos',
        supports: 'Relaciones familiares, posesivos y descripciones en A1–A2.',
        exerciseIds: [
          'en-a1-04-01',
          'en-a1-04-03',
          'en-a1-04-04',
          'en-a1-04-06',
          'en-a1-04-07',
          'en-a1-04-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-04',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter lessons 1–2',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/starter/pdf.html',
        supports:
          'Saludos, agradecimiento, falta de comprensión y petición de repetición.',
        exerciseIds: [
          'ja-04-01',
          'ja-04-02',
          'ja-04-03',
          'ja-04-04',
          'ja-04-05',
          'ja-04-06',
          'ja-04-07',
          'ja-04-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-05',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter Lesson 3',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L03_au.pdf',
        supports:
          'Autopresentación con nombre, origen, Nです, は y から来ました.',
        exerciseIds: [
          'ja-05-01',
          'ja-05-02',
          'ja-05-03',
          'ja-05-04',
          'ja-05-05',
          'ja-05-06',
          'ja-05-07',
          'ja-05-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Starter grammar notes',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/Grammar_all.pdf',
        supports: 'Explicación de Nです, は, も y lugar + から来ました.',
        exerciseIds: [
          'ja-05-01',
          'ja-05-02',
          'ja-05-03',
          'ja-05-04',
          'ja-05-05',
          'ja-05-07',
          'ja-05-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Starter table of contents and Can-do',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_contents_en.pdf',
        supports:
          'Objetivos iniciales para decir qué idiomas se hablan y presentarse.',
        exerciseIds: ['ja-05-06', 'ja-05-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-01',
    language: 'en',
    sources: [
      {
        title: 'A1 Elementary',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/level/understand-your-level/a1-elementary',
        supports:
          'Presentarse, usar expresiones cotidianas e interactuar de forma sencilla en A1.',
        exerciseIds: [
          'en-a1-01-01',
          'en-a1-01-02',
          'en-a1-01-03',
          'en-a1-01-04',
          'en-a1-01-05',
          'en-a1-01-06',
          'en-a1-01-07',
          'en-a1-01-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Meeting people at a dinner',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/meeting-people-dinner',
        supports:
          'Saludos, presentaciones, Nice to meet you, please y thanks en interacción A1.',
        exerciseIds: [
          'en-a1-01-01',
          'en-a1-01-02',
          'en-a1-01-03',
          'en-a1-01-06',
          'en-a1-01-07',
          'en-a1-01-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-a1-02',
    language: 'en',
    sources: [
      {
        title: 'A1 Elementary',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/level/understand-your-level/a1-elementary',
        supports: 'Preguntar y responder información personal elemental.',
        exerciseIds: [
          'en-a1-02-01',
          'en-a1-02-02',
          'en-a1-02-03',
          'en-a1-02-04',
          'en-a1-02-05',
          'en-a1-02-06',
          'en-a1-02-07',
          'en-a1-02-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Meeting other students',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/listening/a1/meeting-other-students',
        supports:
          'Nombre, origen y materias o idiomas en una primera conversación.',
        exerciseIds: [
          'en-a1-02-01',
          'en-a1-02-03',
          'en-a1-02-07',
          'en-a1-02-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Online course introductions',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/writing/a1/online-course-introductions',
        supports:
          'Presentaciones escritas breves, claras y sin datos privados.',
        exerciseIds: ['en-a1-02-07', 'en-a1-02-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'en-02',
    language: 'en',
    sources: [
      {
        title: 'Present simple',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple',
        supports:
          'Uso del presente simple para rutinas y -s/-es en tercera persona.',
        exerciseIds: [
          'en-model-01',
          'en-model-02',
          'en-model-05',
          'en-model-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'How often',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/comment/185766',
        supports:
          'Posición de adverbios de frecuencia, contraste con be y expresiones once/twice.',
        exerciseIds: [
          'en-model-01',
          'en-model-04',
          'en-model-06',
          'en-model-07',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Daily routine vocabulary',
        publisher: 'British Council LearnEnglish',
        url: 'https://learnenglish.britishcouncil.org/free-resources/vocabulary/a1-a2/daily-routine-vocabulary-a1-beginner-english-vocabulary-lesson',
        supports:
          'Vocabulario, preguntas funcionales y expresiones temporales para rutinas cotidianas.',
        exerciseIds: [
          'en-model-01',
          'en-model-03',
          'en-model-05',
          'en-model-07',
          'en-model-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-01',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter, Lesson 1',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L01_au.pdf',
        supports:
          'Correspondencia y orden あ・い・う・え・お y tabla inicial de hiragana.',
        exerciseIds: [
          'ja-model-01',
          'ja-model-02',
          'ja-model-03',
          'ja-model-04',
          'ja-model-05',
          'ja-model-06',
          'ja-model-07',
          'ja-model-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Lesson 1 audio',
        publisher: 'The Japan Foundation — Irodori',
        url: 'https://www.irodori.jpf.go.jp/starter/audio/lesson01.html',
        supports:
          'Modelo sonoro oficial para la serie vocálica y el inicio del hiragana.',
        exerciseIds: ['ja-model-01', 'ja-model-02', 'ja-model-03'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-02',
    language: 'ja',
    sources: [
      {
        title: 'Irodori Starter, Lesson 1',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L01_au.pdf',
        supports: 'Series completas de hiragana, dakuten y sonidos contraídos.',
        exerciseIds: [
          'ja-02-01',
          'ja-02-02',
          'ja-02-03',
          'ja-02-04',
          'ja-02-05',
          'ja-02-06',
          'ja-02-07',
          'ja-02-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Irodori Starter resources',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/en/resources.html',
        supports: 'Materiales compilados de palabras en hiragana y katakana.',
        exerciseIds: ['ja-02-05', 'ja-02-06', 'ja-02-07', 'ja-02-08'],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ja-03',
    language: 'ja',
    sources: [
      {
        title: 'How to use Irodori Starter',
        publisher: 'The Japan Foundation',
        url: 'https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_howto_en.pdf',
        supports: 'Katakana se introduce en la lección 2 de Starter.',
        exerciseIds: [
          'ja-03-01',
          'ja-03-02',
          'ja-03-03',
          'ja-03-04',
          'ja-03-05',
          'ja-03-06',
          'ja-03-07',
          'ja-03-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Kana compiled materials',
        publisher: 'The Japan Foundation — Irodori',
        url: 'https://www.irodori.jpf.go.jp/assets/data/Kana_all.pdf',
        supports:
          'Katakana para préstamos, combinaciones y marca de vocal larga.',
        exerciseIds: [
          'ja-03-01',
          'ja-03-02',
          'ja-03-03',
          'ja-03-04',
          'ja-03-05',
          'ja-03-06',
          'ja-03-07',
          'ja-03-08',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'fr-01',
    language: 'fr',
    sources: [
      {
        title: 'Les salutations — Première classe',
        publisher: 'TV5MONDE',
        url: 'https://apprendre.tv5monde.com/fr/exercices/premiere-classe/les-salutations',
        supports:
          'Objetivos A1 de presentarse, hacer preguntas y emplear tu/vous según la situación.',
        exerciseIds: [
          'fr-model-01',
          'fr-model-02',
          'fr-model-04',
          'fr-model-05',
          'fr-model-06',
          'fr-model-07',
          'fr-model-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Première classe 2022',
        publisher: 'TV5MONDE',
        url: 'https://presse.tv5monde.com/premiere-classe-avec-tv5monde-un-parcours-dapprentissage-gratuit-pour-les-debutants-en-francaisversion-2022/?lang=fr',
        supports:
          'Adecuación de saludos, pronunciación y comunicación inicial al nivel A1.',
        exerciseIds: [
          'fr-model-01',
          'fr-model-02',
          'fr-model-03',
          'fr-model-04',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  {
    unitId: 'ru-01',
    language: 'ru',
    sources: [
      {
        title: 'Русский алфавит',
        publisher: 'Грамота.ру — Большой универсальный словарь',
        url: 'https://gramota.ru/biblioteka/slovari/bolshoj-universalnyj-slovar-russkogo-yazyka/russkiy-alfavit-129',
        supports: 'Inventario y nombres de las letras А, К, М, Н, О, Р y Т.',
        exerciseIds: [
          'ru-model-01',
          'ru-model-02',
          'ru-model-03',
          'ru-model-04',
          'ru-model-05',
          'ru-model-06',
          'ru-model-07',
          'ru-model-08',
        ],
        accessedAt: '2026-09-16',
      },
      {
        title: 'Звук и буква',
        publisher: 'Грамота.ру',
        url: 'https://gramota.ru/biblioteka/spravochniki/russkij-yazyk-kratkij-teoreticheskij-kurs-dlya-shkolnikov/zvuk-i-bukva',
        supports:
          'Relación entre letras cirílicas y sonidos; clasificación de consonantes y vocales.',
        exerciseIds: [
          'ru-model-01',
          'ru-model-02',
          'ru-model-03',
          'ru-model-06',
        ],
        accessedAt: '2026-09-16',
      },
    ],
  },
  ...['pt-01', 'pt-02', 'pt-03', 'pt-04', 'pt-05', 'pt-06', 'pt-07', 'pt-08', 'pt-09', 'pt-10', 'pt-11', 'pt-12', 'pt-13', 'pt-14', 'pt-15', 'pt-16', 'pt-17', 'pt-18', 'pt-19', 'pt-20', 'pt-21', 'pt-22', 'pt-23', 'pt-24', 'pt-25', 'pt-26', 'pt-27', 'pt-28', 'pt-29', 'pt-30', 'pt-31', 'pt-32'].map((unitId) => ({
    unitId,
    language: 'pt' as const,
    sources: [
      {
        title: 'Referencial Camões PLE',
        publisher: 'Camões, I.P.',
        url: 'https://www.instituto-camoes.pt/index.php?Itemid=2966',
        supports:
          'Descritores y contenidos A1 de portugués como lengua extranjera para interacción, datos personales y vida cotidiana.',
        exerciseIds: Array.from(
          { length: 8 },
          (_, index) => `${unitId}-${String(index + 1).padStart(2, '0')}`,
        ),
        accessedAt: '2026-09-18',
      },
      {
        title: 'QECR / CEFR Companion Volume',
        publisher: 'Council of Europe',
        url: 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors',
        supports:
          'Progresión por tareas comunicativas, interacción y producción breve alineada con A1.',
        exerciseIds: [`${unitId}-07`, `${unitId}-08`],
        accessedAt: '2026-09-18',
      },
    ],
  })),
];

export function sourcesForUnit(unitId: string) {
  return (
    sourceTraceability.find((record) => record.unitId === unitId)?.sources ?? []
  );
}
