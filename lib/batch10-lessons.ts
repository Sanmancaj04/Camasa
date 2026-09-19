import type { ModelLesson } from '@/lib/model-lessons';

export const batch10Lessons: Record<string, ModelLesson> = {
  'en-10': {
    language: 'en',
    title: 'Trabajo y estudios',
    level: 'B1.1',
    duration: '12–14 min',
    objective: 'Puedo explicar responsabilidades, habilidades y objetivos.',
    introduction: {
      summary:
        'Describe tu experiencia hasta el presente, el tiempo que llevas realizándola y tus capacidades.',
      concepts: [
        {
          title: 'Experiencia vigente',
          explanation:
            'El presente perfecto conecta una experiencia pasada con la situación actual.',
          examples: [
            "I've worked in customer service.",
            "She's completed three courses.",
          ],
        },
        {
          title: 'For y since',
          explanation: 'For indica duración; since marca el punto de inicio.',
          examples: [
            "I've studied English for two years.",
            "I've worked here since 2024.",
          ],
        },
        {
          title: 'Habilidades y objetivos',
          explanation:
            'Can y be able to expresan capacidad; would like to presenta un objetivo.',
          examples: [
            'I can manage a small team.',
            "I'd like to improve my writing.",
          ],
        },
      ],
      tip: 'Usa for con un periodo y since con una fecha o momento inicial.',
    },
    exercises: [
      {
        id: 'en-10-01',
        kind: 'choice',
        phase: 'activar',
        prompt: 'Completa: I ___ three online courses this year.',
        hint: 'El año aún no ha terminado.',
        options: ['have completed', 'completed yesterday', 'am complete'],
        answer: 'have completed',
        explanation:
          'El presente perfecto resume resultados dentro de un periodo aún vigente.',
      },
      {
        id: 'en-10-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: She has worked here ___ 2023.',
        hint: '2023 es el punto de inicio.',
        options: ['since', 'for', 'during'],
        answer: 'since',
        explanation: 'Since introduce el momento en que comenzó la situación.',
      },
      {
        id: 'en-10-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: We have studied together ___ six months.',
        hint: 'Six months es una duración.',
        options: ['for', 'since', 'from'],
        answer: 'for',
        explanation: 'For introduce un periodo de tiempo.',
      },
      {
        id: 'en-10-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la experiencia profesional.',
        hint: 'Sujeto + have + participio + complemento.',
        tokens: ['in marketing', 'worked', 'I have', 'for two years.'],
        answer: ['I have', 'worked', 'in marketing', 'for two years.'],
        explanation:
          'La estructura conecta experiencia y duración hasta el presente.',
      },
      {
        id: 'en-10-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué frase expresa una habilidad actual?',
        hint: 'Busca capacidad.',
        options: [
          'I can use spreadsheet software.',
          'I used software tomorrow.',
          'I have a software.',
        ],
        answer: 'I can use spreadsheet software.',
        explanation: 'Can + verbo base expresa capacidad.',
      },
      {
        id: 'en-10-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué opción expresa un objetivo profesional?',
        hint: 'Would like to presenta una aspiración.',
        options: [
          "I'd like to lead a project.",
          'I lead yesterday.',
          'I can project since Monday.',
        ],
        answer: "I'd like to lead a project.",
        explanation:
          'Would like to + verbo expresa un objetivo de forma cortés.',
      },
      {
        id: 'en-10-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “He estudiado japonés durante un año”.',
        hint: 'Usa present perfect y for.',
        accepted: [
          'I have studied Japanese for one year.',
          "I've studied Japanese for one year.",
          'I have studied Japanese for a year.',
          "I've studied Japanese for a year.",
        ],
        modelAnswer: "I've studied Japanese for a year.",
        explanation: 'For a year expresa la duración hasta el presente.',
      },
      {
        id: 'en-10-08',
        kind: 'open',
        phase: 'transferir',
        prompt:
          'Resume tu experiencia, una habilidad y un objetivo en tres frases.',
        hint: 'Usa present perfect, can y would like to.',
        accepted: [],
        modelAnswer:
          "I've worked with customers for two years. I can solve problems calmly. I'd like to become a team leader.",
        explanation: 'Debe cubrir experiencia, capacidad y meta futura.',
      },
    ],
  },
  'en-11': {
    language: 'en',
    title: 'Opiniones y razones',
    level: 'B1.1',
    duration: '12–14 min',
    objective:
      'Puedo expresar una opinión y justificarla con razones sencillas.',
    introduction: {
      summary:
        'Presenta tu postura, explica sus causas y reconoce un punto contrario sin perder claridad.',
      concepts: [
        {
          title: 'Dar una opinión',
          explanation:
            'I think, In my opinion e I believe introducen una postura personal.',
          examples: [
            'I think public transport is essential.',
            'In my opinion, the course is useful.',
          ],
        },
        {
          title: 'Causa y resultado',
          explanation: 'Because introduce la razón; so introduce el resultado.',
          examples: [
            'I stayed home because I was tired.',
            'I was tired, so I stayed home.',
          ],
        },
        {
          title: 'Contrastar y graduar',
          explanation:
            'Although conecta ideas contrastantes; really, quite y a little ajustan la intensidad.',
          examples: [
            'Although it is expensive, it is reliable.',
            'It is quite useful.',
          ],
        },
      ],
      tip: 'Because responde “¿por qué?”; so responde “¿qué ocurrió como resultado?”.',
    },
    exercises: [
      {
        id: 'en-11-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '¿Cuál introduce claramente una opinión?',
        hint: 'Busca una postura personal.',
        options: [
          'In my opinion, online classes are useful.',
          'Online classes yesterday.',
          'Because online classes.',
        ],
        answer: 'In my opinion, online classes are useful.',
        explanation: 'In my opinion introduce explícitamente una valoración.',
      },
      {
        id: 'en-11-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: I prefer the train ___ it is more comfortable.',
        hint: 'La segunda parte explica la razón.',
        options: ['because', 'so', 'although'],
        answer: 'because',
        explanation: 'Because introduce la causa de la preferencia.',
      },
      {
        id: 'en-11-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: The bus was late, ___ I took a taxi.',
        hint: 'La segunda parte es el resultado.',
        options: ['so', 'because', 'although'],
        answer: 'so',
        explanation: 'So conecta una situación con su consecuencia.',
      },
      {
        id: 'en-11-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena el contraste.',
        hint: 'Although + oración, oración principal.',
        tokens: ['I enjoyed it.', 'the film was long,', 'Although'],
        answer: ['Although', 'the film was long,', 'I enjoyed it.'],
        explanation:
          'Although introduce una idea que contrasta con la valoración principal.',
      },
      {
        id: 'en-11-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué opción significa “bastante útil”, sin máxima intensidad?',
        hint: 'Quite modera la valoración.',
        options: ['quite useful', 'absolutely useless', 'useful because'],
        answer: 'quite useful',
        explanation:
          'Quite suele expresar un grado considerable pero moderado.',
      },
      {
        id: 'en-11-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Elige el argumento mejor justificado.',
        hint: 'Debe incluir postura y razón.',
        options: [
          'I think parks are important because people need green spaces.',
          'Parks important.',
          'Because I think parks.',
        ],
        answer: 'I think parks are important because people need green spaces.',
        explanation:
          'La oración presenta una postura y la apoya con una causa.',
      },
      {
        id: 'en-11-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “Aunque es caro, creo que vale la pena”.',
        hint: 'Usa although e I think.',
        accepted: [
          'Although it is expensive, I think it is worth it.',
          "Although it's expensive, I think it's worth it.",
        ],
        modelAnswer: "Although it's expensive, I think it's worth it.",
        explanation:
          'Although marca contraste y I think expresa la valoración.',
      },
      {
        id: 'en-11-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Expresa una opinión con dos razones y un contraste.',
        hint: 'Usa because, also y although.',
        accepted: [],
        modelAnswer:
          'I think cycling is a good option because it is cheap and healthy. It is also quiet, although it can be difficult in bad weather.',
        explanation:
          'Debe presentar una postura, dos apoyos y un matiz contrario.',
      },
    ],
  },
  'ja-18': {
    language: 'ja',
    title: 'Reglas y convivencia',
    level: 'A2.2',
    duration: '12–14 min',
    objective: 'Puedo comprender reglas y explicar permiso u obligación.',
    introduction: {
      summary:
        'Distingue lo permitido, lo prohibido y lo obligatorio en espacios compartidos.',
      concepts: [
        {
          title: 'Permiso',
          explanation:
            'Vてもいいです indica que una acción está permitida; la pregunta solicita permiso.',
          examples: ['ここに座ってもいいです。', '写真を撮ってもいいですか。'],
        },
        {
          title: 'Prohibición',
          explanation:
            'Vてはいけません expresa que no está permitido hacer algo.',
          examples: ['ここでたばこを吸ってはいけません。'],
        },
        {
          title: 'Obligación',
          explanation:
            'Vなければなりません indica que una acción es necesaria u obligatoria.',
          examples: ['ごみを分けなければなりません。'],
        },
      ],
      tip: 'て-form + もいい = permiso; て-form + はいけない = prohibición; ない-form sin い + ければならない = obligación.',
    },
    exercises: [
      {
        id: 'ja-18-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '「写真を撮ってもいいです。」 ¿Qué indica?',
        hint: 'てもいい expresa permiso.',
        options: [
          'Se permite tomar fotos.',
          'Está prohibido tomar fotos.',
          'Hay que tomar fotos.',
        ],
        answer: 'Se permite tomar fotos.',
        explanation: '撮ってもいいです concede permiso.',
      },
      {
        id: 'ja-18-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Cómo preguntas “¿Puedo sentarme aquí?”?',
        hint: 'Usa てもいいですか.',
        options: [
          'ここに座ってもいいですか。',
          'ここに座ってはいけません。',
          'ここに座らなければなりません。',
        ],
        answer: 'ここに座ってもいいですか。',
        explanation: 'La forma interrogativa solicita permiso.',
      },
      {
        id: 'ja-18-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '「ここでたばこを吸ってはいけません。」 ¿Qué significa?',
        hint: 'てはいけません es prohibición.',
        options: [
          'Aquí no se puede fumar.',
          'Aquí se puede fumar.',
          'Aquí hay que fumar.',
        ],
        answer: 'Aquí no se puede fumar.',
        explanation: 'La estructura prohíbe fumar en ese lugar.',
      },
      {
        id: 'ja-18-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Hay que separar la basura”.',
        hint: 'Verbo negativo transformado + なければなりません.',
        tokens: ['なければなりません。', 'ごみを分け'],
        answer: ['ごみを分け', 'なければなりません。'],
        explanation: '分けなければなりません expresa obligación.',
      },
      {
        id: 'ja-18-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Una señal dice 撮ってはいけません. ¿Qué acción prohíbe?',
        hint: '撮る significa tomar una foto.',
        options: ['Tomar fotografías.', 'Sentarse.', 'Hablar.'],
        answer: 'Tomar fotografías.',
        explanation:
          '撮ってはいけません significa que no se pueden tomar fotos.',
      },
      {
        id: 'ja-18-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Elige la regla de obligación.',
        hint: 'Busca なければなりません.',
        options: [
          '靴を脱がなければなりません。',
          '靴を脱いでもいいです。',
          '靴を脱いではいけません。',
        ],
        answer: '靴を脱がなければなりません。',
        explanation: 'La frase indica que quitarse los zapatos es obligatorio.',
      },
      {
        id: 'ja-18-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “Aquí no se puede comer”.',
        hint: 'Usa ここで y 食べてはいけません.',
        accepted: ['ここで食べてはいけません。', 'ここで食べてはいけません'],
        modelAnswer: 'ここで食べてはいけません。',
        explanation: 'で marca el lugar y てはいけません expresa prohibición.',
      },
      {
        id: 'ja-18-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe una regla permitida, una prohibida y una obligatoria.',
        hint: 'Usa las tres estructuras de la guía.',
        accepted: [],
        modelAnswer:
          'ここに座ってもいいです。写真を撮ってはいけません。ごみを分けなければなりません。',
        explanation:
          'Debe distinguir claramente permiso, prohibición y obligación.',
      },
    ],
  },
  'ja-19': {
    language: 'ja',
    title: 'Planes y coordinación',
    level: 'A2.2',
    duration: '12–14 min',
    objective: 'Puedo acordar lugar, hora y cambios sencillos en un plan.',
    introduction: {
      summary:
        'Expresa intenciones y planes programados, y propone ajustes según una condición.',
      concepts: [
        {
          title: 'Intención con つもり',
          explanation:
            'V辞書形 + つもりです expresa una decisión o intención personal.',
          examples: ['週末、京都へ行くつもりです。'],
        },
        {
          title: 'Plan con 予定',
          explanation:
            'V辞書形 + 予定です presenta un plan o evento programado.',
          examples: ['会議は三時に始まる予定です。'],
        },
        {
          title: 'Proponer con なら',
          explanation:
            'なら toma una condición o tema mencionado para hacer una sugerencia.',
          examples: [
            '土曜日なら、だいじょうぶです。',
            '駅なら、六時に会いましょう。',
          ],
        },
      ],
      tip: 'つもり enfatiza tu intención; 予定 enfatiza un plan establecido o calendario.',
    },
    exercises: [
      {
        id: 'ja-19-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '「京都へ行くつもりです。」 ¿Qué expresa?',
        hint: 'つもり indica intención.',
        options: [
          'Tengo la intención de ir a Kioto.',
          'Fui a Kioto.',
          'No puedo ir a Kioto.',
        ],
        answer: 'Tengo la intención de ir a Kioto.',
        explanation: '行くつもりです expresa un plan decidido por quien habla.',
      },
      {
        id: 'ja-19-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '「会議は三時に始まる予定です。」 ¿Qué comunica?',
        hint: '予定 refiere a programación.',
        options: [
          'Está previsto que la reunión empiece a las tres.',
          'La reunión terminó a las tres.',
          'Quiero cancelar la reunión.',
        ],
        answer: 'Está previsto que la reunión empiece a las tres.',
        explanation: '予定です presenta un horario establecido.',
      },
      {
        id: 'ja-19-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'No puedes el viernes, pero sí el sábado. ¿Qué dices?',
        hint: 'なら retoma la alternativa.',
        options: [
          '土曜日なら、だいじょうぶです。',
          '土曜日を行きました。',
          '土曜日はいけませんか。',
        ],
        answer: '土曜日なら、だいじょうぶです。',
        explanation:
          '土曜日なら significa “si es el sábado” y acepta la alternativa.',
      },
      {
        id: 'ja-19-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Pienso viajar con mi familia”.',
        hint: 'Compañía + acción + つもりです.',
        tokens: ['旅行するつもりです。', '家族と'],
        answer: ['家族と', '旅行するつもりです。'],
        explanation: 'La frase expresa una intención personal de viaje.',
      },
      {
        id: 'ja-19-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Cuál es un plan programado?',
        hint: 'Busca 予定です.',
        options: [
          '来週、出張する予定です。',
          '来週、出張しました。',
          '来週、出張できますか。',
        ],
        answer: '来週、出張する予定です。',
        explanation: '予定です señala un plan previsto para la próxima semana.',
      },
      {
        id: 'ja-19-06',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Reconstruye el acuerdo.',
        hint: 'Problema, alternativa y confirmación.',
        tokens: [
          'はい、だいじょうぶです。',
          '六時はどうですか。',
          '五時はちょっと…。',
        ],
        answer: [
          '五時はちょっと…。',
          '六時はどうですか。',
          'はい、だいじょうぶです。',
        ],
        explanation:
          'El diálogo rechaza suavemente, propone otra hora y la acepta.',
      },
      {
        id: 'ja-19-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “El domingo tengo previsto encontrarme con Diana”.',
        hint: 'Usa 日曜日, ディアナさんに会う y 予定です.',
        accepted: [
          '日曜日、ディアナさんに会う予定です。',
          '日曜日にディアナさんに会う予定です。',
          '日曜日、ディアナさんに会う予定です',
          '日曜日にディアナさんに会う予定です',
        ],
        modelAnswer: '日曜日、ディアナさんに会う予定です。',
        explanation: '会う予定です expresa una cita planificada.',
      },
      {
        id: 'ja-19-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Propón y confirma un lugar y una hora en dos frases.',
        hint: 'Usa なら y 〜時に会いましょう.',
        accepted: [],
        modelAnswer: '駅なら、六時に会いましょう。はい、だいじょうぶです。',
        explanation: 'Debe contener lugar, hora, propuesta y confirmación.',
      },
    ],
  },
};
