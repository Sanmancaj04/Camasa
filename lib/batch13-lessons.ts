import { createLesson, type LessonSpec } from '@/lib/lesson-factory';

const englishSpecs: LessonSpec[] = [
  {
    id: 'en-22',
    language: 'en',
    title: 'Entornos profesionales',
    level: 'B2.2',
    objective:
      'Puedo participar en reuniones, negociar opciones y escribir mensajes profesionales claros.',
    summary:
      'Practica registro formal, colocaciones laborales y condiciones para negociar con precisión.',
    concepts: [
      {
        title: 'Registro profesional',
        explanation:
          'Las peticiones indirectas y los verbos precisos mantienen un tono cortés.',
        examples: [
          'Could you clarify the deadline?',
          'I would appreciate your feedback.',
        ],
      },
      {
        title: 'Negociar',
        explanation:
          'Condiciones y concesiones permiten proponer soluciones realistas.',
        examples: [
          'If we extended the deadline, we could improve the report.',
          'We could agree, provided that costs remain stable.',
        ],
      },
      {
        title: 'Colocaciones',
        explanation: 'En contextos laborales ciertas palabras aparecen juntas.',
        examples: ['meet a deadline', 'reach an agreement', 'raise a concern'],
      },
    ],
    tip: 'Expón el problema, ofrece una alternativa y confirma el acuerdo.',
    choices: [
      {
        prompt: '¿Cuál petición tiene el registro más profesional?',
        hint: 'Busca una petición indirecta y específica.',
        options: [
          'Could you clarify which figures need updating?',
          'Tell me the numbers again.',
          'What numbers?',
        ],
        answer: 'Could you clarify which figures need updating?',
        explanation:
          'Could you clarify… formula una petición cortés y concreta.',
      },
      {
        prompt: 'Completa la colocación: We need to ___ the deadline.',
        hint: 'La colocación significa cumplir a tiempo.',
        options: ['meet', 'touch', 'arrive'],
        answer: 'meet',
        explanation: 'Meet a deadline es la colocación habitual.',
      },
      {
        prompt: 'Elige la propuesta negociadora más clara.',
        hint: 'Debe incluir condición y resultado.',
        options: [
          'If we reduced the scope, we could deliver on Friday.',
          'We reduce maybe Friday.',
          'Friday is a scope.',
        ],
        answer: 'If we reduced the scope, we could deliver on Friday.',
        explanation:
          'La condicional presenta una alternativa hipotética y su resultado.',
      },
      {
        prompt: '¿Qué frase introduce una preocupación con tacto?',
        hint: 'Evita una acusación directa.',
        options: [
          "I'd like to raise a concern about the timeline.",
          'The timeline is your fault.',
          'This plan is terrible.',
        ],
        answer: "I'd like to raise a concern about the timeline.",
        explanation:
          'Raise a concern identifica el problema sin personalizarlo.',
      },
      {
        prompt: '¿Cuál cierre confirma lo acordado?',
        hint: 'Resume acción y fecha.',
        options: [
          "So, we'll send the revised proposal by Tuesday.",
          'Anyway, that is all.',
          'Maybe something will happen.',
        ],
        answer: "So, we'll send the revised proposal by Tuesday.",
        explanation: 'El cierre asigna una acción y un plazo verificables.',
      },
    ],
    order: {
      prompt: 'Ordena una condición profesional.',
      hint: 'Condición + resultado posible.',
      tokens: [
        'we could approve the plan.',
        'If the budget remained unchanged,',
      ],
      answer: [
        'If the budget remained unchanged,',
        'we could approve the plan.',
      ],
      explanation:
        'La if-clause establece la condición antes del resultado hipotético.',
    },
    exactOpen: {
      prompt:
        'Escribe en inglés: “Agradecería sus comentarios antes del viernes”.',
      hint: 'Usa I would appreciate…',
      accepted: [
        'I would appreciate your feedback before Friday.',
        'I would appreciate your feedback before Friday',
        "I'd appreciate your feedback before Friday.",
        "I'd appreciate your feedback before Friday",
      ],
      modelAnswer: 'I would appreciate your feedback before Friday.',
      explanation: 'Would appreciate mantiene un registro profesional cortés.',
    },
    freeOpen: {
      prompt:
        'Redacta un correo breve que plantee un retraso, proponga una solución y confirme el siguiente paso.',
      hint: 'Usa tres partes: problema, alternativa y acción acordada.',
      modelAnswer:
        'We may need two more days to verify the figures. If we moved the review to Thursday, we could deliver a more reliable report. Please let me know whether that works for you.',
      explanation:
        'Se revisan claridad, tono, negociación y cierre; requiere revisión manual.',
    },
  },
  {
    id: 'en-23',
    language: 'en',
    title: 'Presentar y mediar',
    level: 'B2.2',
    objective:
      'Puedo explicar información compleja de manera accesible y guiar una presentación clara.',
    summary:
      'Organiza ideas, reformula términos complejos y describe datos sin exagerar sus conclusiones.',
    concepts: [
      {
        title: 'Señalización',
        explanation:
          'Los marcadores indican dónde estás y cómo se relacionan las ideas.',
        examples: [
          'First, I will outline the problem.',
          'Let us now turn to the results.',
        ],
      },
      {
        title: 'Reformular',
        explanation:
          'Una paráfrasis conserva el significado con palabras más accesibles.',
        examples: [
          'In other words, demand is falling.',
          'What this means is that fewer people are buying it.',
        ],
      },
      {
        title: 'Hablar de datos',
        explanation:
          'Los verbos y modificadores deben reflejar la magnitud real.',
        examples: ['Sales rose slightly.', 'There was a sharp decline in May.'],
      },
    ],
    tip: 'Presenta una idea, explícala de otra forma y comprueba que el ejemplo la respalde.',
    choices: [
      {
        prompt: '¿Qué frase anuncia la estructura de una presentación?',
        hint: 'Busca una vista previa de las partes.',
        options: [
          "I'll begin with the context, then discuss two options.",
          'Here are some things.',
          'The context was yesterday.',
        ],
        answer: "I'll begin with the context, then discuss two options.",
        explanation: 'La frase anticipa el orden de la presentación.',
      },
      {
        prompt: 'Reformula: “The measure is not cost-effective.”',
        hint: 'Explica el término sin repetirlo.',
        options: [
          'In other words, its benefits do not justify its cost.',
          'In other words, it costs.',
          'The measure is effective and cheap.',
        ],
        answer: 'In other words, its benefits do not justify its cost.',
        explanation:
          'La paráfrasis conserva la relación entre costo y beneficio.',
      },
      {
        prompt: 'Los datos pasan de 50 a 53. ¿Cuál descripción es prudente?',
        hint: 'El cambio es pequeño.',
        options: [
          'The figure rose slightly.',
          'The figure soared dramatically.',
          'The figure collapsed.',
        ],
        answer: 'The figure rose slightly.',
        explanation: 'Slightly representa un aumento pequeño sin exagerarlo.',
      },
      {
        prompt: '¿Qué marcador introduce un contraste?',
        hint: 'La segunda idea difiere de la primera.',
        options: ['However,', 'For example,', 'As a result,'],
        answer: 'However,',
        explanation: 'However introduce una relación de contraste.',
      },
      {
        prompt:
          '¿Cuál explicación es más accesible para un público no especialista?',
        hint: 'Define el término mediante su efecto.',
        options: [
          'Liquidity means how easily an asset can be turned into cash.',
          'Liquidity is liquidity.',
          'Liquidity operationalises asset fungibility.',
        ],
        answer: 'Liquidity means how easily an asset can be turned into cash.',
        explanation:
          'La definición usa vocabulario cotidiano y explica la función.',
      },
    ],
    order: {
      prompt: 'Ordena la transición de una presentación.',
      hint: 'Cierra la sección y anuncia la siguiente.',
      tokens: [
        'let us turn to the proposed solution.',
        'Having explained the problem,',
      ],
      answer: [
        'Having explained the problem,',
        'let us turn to the proposed solution.',
      ],
      explanation:
        'La primera parte recupera lo anterior y la segunda guía al nuevo punto.',
    },
    exactOpen: {
      prompt:
        'Escribe una reformulación equivalente a “En otras palabras, necesitamos simplificar el proceso”.',
      hint: 'Empieza con In other words.',
      accepted: [
        'In other words, we need to simplify the process.',
        'In other words, we need to simplify the process',
      ],
      modelAnswer: 'In other words, we need to simplify the process.',
      explanation: 'In other words señala explícitamente una reformulación.',
    },
    freeOpen: {
      prompt:
        'Explica un dato o concepto técnico a una persona no especialista en 3–4 frases.',
      hint: 'Incluye señalización, paráfrasis y un ejemplo.',
      modelAnswer:
        'First, let us look at response time. In other words, this is how long a user waits for the page to load. It fell slightly last month, from 2.4 to 2.1 seconds. For example, users now see the home page sooner.',
      explanation:
        'Se revisan accesibilidad, fidelidad, estructura y lenguaje de datos; requiere revisión manual.',
    },
  },
  {
    id: 'en-24',
    language: 'en',
    title: 'Proyecto B2',
    level: 'B2 consolidación',
    objective:
      'Puedo investigar, presentar y defender una propuesta detallada para un público definido.',
    summary:
      'Integra evidencia, estructura argumentativa, precisión léxica y revisión para producir una propuesta B2.',
    concepts: [
      {
        title: 'Tesis y evidencia',
        explanation:
          'Cada recomendación necesita una razón y evidencia pertinente.',
        examples: [
          'I recommend flexible hours because…',
          'Survey data suggests that…',
        ],
      },
      {
        title: 'Concesión y respuesta',
        explanation:
          'Reconocer una objeción fortalece una propuesta si después respondes a ella.',
        examples: [
          'Although the initial cost is high, the long-term savings are substantial.',
        ],
      },
      {
        title: 'Revisión',
        explanation:
          'Revisa propósito, organización, registro y precisión antes de corregir detalles menores.',
        examples: [
          'Is the recommendation explicit?',
          'Does each paragraph support it?',
        ],
      },
    ],
    tip: 'No acumules datos: conecta cada evidencia con la decisión que sustenta.',
    choices: [
      {
        prompt: '¿Cuál tesis es más clara para una propuesta?',
        hint: 'Debe recomendar una acción concreta.',
        options: [
          'The council should extend library hours on weekdays.',
          'Libraries are interesting.',
          'There are several possible topics.',
        ],
        answer: 'The council should extend library hours on weekdays.',
        explanation: 'La tesis identifica actor, acción y alcance.',
      },
      {
        prompt: '¿Qué frase vincula evidencia con recomendación?',
        hint: 'Busca una inferencia prudente.',
        options: [
          'The survey results suggest that an evening trial would meet local demand.',
          'The survey has numbers.',
          'Everyone definitely wants this forever.',
        ],
        answer:
          'The survey results suggest that an evening trial would meet local demand.',
        explanation:
          'Suggest evita certeza excesiva y explica la relevancia del dato.',
      },
      {
        prompt: 'Elige la concesión mejor construida.',
        hint: 'Reconoce un costo y conserva la recomendación.',
        options: [
          'Although training requires time, it should reduce errors later.',
          'Training takes time, so nothing can be done.',
          'Although training and errors.',
        ],
        answer:
          'Although training requires time, it should reduce errors later.',
        explanation:
          'Although introduce la objeción y la principal responde con un beneficio.',
      },
      {
        prompt: '¿Qué revisión debe hacerse primero?',
        hint: 'Prioriza el propósito sobre la puntuación.',
        options: [
          'Confirm that the recommendation answers the stated problem.',
          'Change every comma immediately.',
          'Replace every short word with a longer one.',
        ],
        answer: 'Confirm that the recommendation answers the stated problem.',
        explanation: 'La revisión global precede a la corrección superficial.',
      },
      {
        prompt:
          '¿Cuál respuesta defiende una propuesta sin ignorar la objeción?',
        hint: 'Reconoce y responde con una medida.',
        options: [
          "That's a valid concern; a three-month pilot would limit the financial risk.",
          'That concern is wrong.',
          'There are no risks at all.',
        ],
        answer:
          "That's a valid concern; a three-month pilot would limit the financial risk.",
        explanation:
          'La respuesta valida la objeción y propone mitigación concreta.',
      },
    ],
    order: {
      prompt: 'Ordena el núcleo de una recomendación.',
      hint: 'Concesión + propuesta principal.',
      tokens: [
        'a limited pilot is worth testing.',
        'Although implementation will require training,',
      ],
      answer: [
        'Although implementation will require training,',
        'a limited pilot is worth testing.',
      ],
      explanation:
        'La concesión anticipa el costo antes de sostener la propuesta.',
    },
    exactOpen: {
      prompt:
        'Escribe en inglés: “Los datos sugieren que el plan reduciría los tiempos de espera”.',
      hint: 'Usa suggest that y would.',
      accepted: [
        'The data suggests that the plan would reduce waiting times.',
        'The data suggests that the plan would reduce waiting times',
        'The data suggest that the plan would reduce waiting times.',
        'The data suggest that the plan would reduce waiting times',
      ],
      modelAnswer:
        'The data suggests that the plan would reduce waiting times.',
      explanation:
        'Suggests/suggest presenta la evidencia con cautela y would expresa el efecto previsto.',
    },
    freeOpen: {
      prompt:
        'Escribe una propuesta B2 de 120–160 palabras con recomendación, evidencia, objeción y respuesta.',
      hint: 'Define el público y termina con un siguiente paso verificable.',
      modelAnswer:
        'I recommend a three-month evening-hours pilot at the community library. Recent attendance figures suggest that many residents arrive shortly before closing. Although extending hours would involve staffing costs, limiting the trial to two weekdays would control the risk. The council could compare attendance, cost per visitor and user feedback before deciding whether to continue. I therefore propose launching the pilot in October and reviewing the results in January.',
      explanation:
        'Se evalúan cumplimiento de tarea, coherencia, evidencia, registro y precisión; requiere revisión manual.',
    },
  },
];

export const batch13Lessons = Object.fromEntries(
  englishSpecs.map((spec) => [spec.id, createLesson(spec)]),
);
