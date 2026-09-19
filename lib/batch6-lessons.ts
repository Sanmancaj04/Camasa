import type { ModelLesson } from '@/lib/model-lessons';

export const batch6Lessons: Record<string, ModelLesson> = {
  'en-01': {
    language: 'en',
    title: 'Punto de partida',
    level: 'A2.1',
    duration: '10–12 min',
    objective:
      'Puedo presentarme, pedir información personal y mantener un intercambio breve.',
    introduction: {
      summary:
        'Repasa cómo intercambiar datos personales usando be y el presente simple.',
      concepts: [
        {
          title: 'Preguntas con be',
          explanation:
            'Pon am, is o are antes del sujeto para preguntar por identidad, origen o estado.',
          examples: ['Where are you from?', 'Are you a student?'],
        },
        {
          title: 'Preguntas con do',
          explanation:
            'Usa do + sujeto + verbo base para preguntar por acciones y hábitos.',
          examples: ['Where do you live?', 'Do you speak English?'],
        },
        {
          title: 'Información personal',
          explanation:
            'Responde con frases breves y después añade un detalle para mantener el intercambio.',
          examples: [
            "I'm from Mexico.",
            'I live in Puebla and I work from home.',
          ],
        },
      ],
      tip: 'Si la respuesta lleva am/is/are, pregunta con be; si lleva otro verbo, normalmente usa do.',
    },
    exercises: [
      {
        id: 'en-01-01',
        kind: 'choice',
        phase: 'activar',
        prompt: 'Completa: Where ___ you from?',
        hint: 'La respuesta sería “I am from…”.',
        options: ['are', 'do', 'is'],
        answer: 'are',
        explanation: 'Con you, el presente de be es are.',
      },
      {
        id: 'en-01-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Qué pregunta pide el lugar donde vives?',
        hint: 'Live es un verbo de acción.',
        options: [
          'Where do you live?',
          'Where are you live?',
          'Where you do live?',
        ],
        answer: 'Where do you live?',
        explanation:
          'Las preguntas en presente simple usan do + sujeto + verbo base.',
      },
      {
        id: 'en-01-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '“Do you speak English?” Elige una respuesta natural.',
        hint: 'La pregunta usa do.',
        options: ['Yes, I do.', 'Yes, I am.', 'Yes, I speak do.'],
        answer: 'Yes, I do.',
        explanation: 'La respuesta corta conserva el auxiliar do.',
      },
      {
        id: 'en-01-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la pregunta sobre profesión.',
        hint: 'Empieza con What.',
        tokens: ['do', 'What', 'do?', 'you'],
        answer: ['What', 'do', 'you', 'do?'],
        explanation:
          'What do you do? es una pregunta habitual sobre ocupación.',
      },
      {
        id: 'en-01-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'A: “Nice to meet you.” B: ___',
        hint: 'Responde a la fórmula social.',
        options: ['Nice to meet you, too.', 'I meet nice.', 'How old meet?'],
        answer: 'Nice to meet you, too.',
        explanation: 'Too expresa reciprocidad: “Igualmente”.',
      },
      {
        id: 'en-01-06',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena el intercambio.',
        hint: 'Pregunta, respuesta y devolución.',
        tokens: ['And you?', "I'm from Mexico.", 'Where are you from?'],
        answer: ['Where are you from?', "I'm from Mexico.", 'And you?'],
        explanation:
          'And you? devuelve la pregunta y mantiene la conversación.',
      },
      {
        id: 'en-01-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en inglés: “¿Hablas español?”.',
        hint: 'Usa do y el verbo base speak.',
        accepted: ['Do you speak Spanish?', 'Do you speak Spanish'],
        modelAnswer: 'Do you speak Spanish?',
        explanation:
          'Do you + verbo base forma una pregunta de presente simple.',
      },
      {
        id: 'en-01-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Preséntate con nombre, ciudad y ocupación en tres frases.',
        hint: "Usa I'm…, I live in… e I work/study…",
        accepted: [],
        modelAnswer: "I'm Santiago. I live in Mexico City. I work from home.",
        explanation:
          'La respuesta debe comunicar tres datos personales comprensibles.',
      },
    ],
  },
  'en-03': {
    language: 'en',
    title: 'Hogar y comunidad',
    level: 'A2.1',
    duration: '10–12 min',
    objective: 'Puedo describir mi casa, mi barrio y dónde están las cosas.',
    introduction: {
      summary:
        'Describe lo que existe en un lugar, cuántos elementos hay y dónde se encuentran.',
      concepts: [
        {
          title: 'There is / there are',
          explanation:
            'Usa there is con singular o incontable y there are con plural.',
          examples: ['There is a balcony.', 'There are two bedrooms.'],
        },
        {
          title: 'Some y any',
          explanation:
            'Some es común en afirmativas; any aparece normalmente en preguntas y negativas.',
          examples: ['There are some shops.', "There isn't any traffic."],
        },
        {
          title: 'Lugar',
          explanation:
            'In, on, next to, opposite y between sitúan personas, objetos y edificios.',
          examples: [
            'The keys are on the table.',
            'The bank is opposite the park.',
          ],
        },
      ],
      tip: 'Antes de elegir is o are, localiza el primer sustantivo que estás presentando.',
    },
    exercises: [
      {
        id: 'en-03-01',
        kind: 'choice',
        phase: 'activar',
        prompt: 'Completa: There ___ a small kitchen.',
        hint: 'Kitchen es singular.',
        options: ['is', 'are', 'have'],
        answer: 'is',
        explanation: 'There is presenta un elemento singular.',
      },
      {
        id: 'en-03-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: There are ___ cafés near my house.',
        hint: 'Es una afirmación plural.',
        options: ['some', 'any', 'a'],
        answer: 'some',
        explanation:
          'Some acompaña aquí a un plural en una oración afirmativa.',
      },
      {
        id: 'en-03-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa la pregunta: Are there ___ parks nearby?',
        hint: 'En preguntas suele usarse any.',
        options: ['any', 'some', 'an'],
        answer: 'any',
        explanation: 'Any es la opción habitual en preguntas de existencia.',
      },
      {
        id: 'en-03-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la descripción.',
        hint: 'Sujeto + be + ubicación.',
        tokens: ['the sofa.', 'next to', 'The lamp', 'is'],
        answer: ['The lamp', 'is', 'next to', 'the sofa.'],
        explanation: 'Next to indica que la lámpara está al lado del sofá.',
      },
      {
        id: 'en-03-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'The pharmacy is opposite the supermarket. ¿Dónde está?',
        hint: 'Opposite indica que está enfrente.',
        options: [
          'Enfrente del supermercado.',
          'Dentro del supermercado.',
          'Entre dos supermercados.',
        ],
        answer: 'Enfrente del supermercado.',
        explanation:
          'Opposite significa enfrente de, normalmente al otro lado.',
      },
      {
        id: 'en-03-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Elige la frase correcta.',
        hint: 'Traffic es incontable.',
        options: [
          "There isn't any traffic.",
          "There aren't any traffic.",
          "There isn't a traffic.",
        ],
        answer: "There isn't any traffic.",
        explanation: 'Traffic es incontable y concuerda con there is.',
      },
      {
        id: 'en-03-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “Hay dos tiendas cerca de mi casa”.',
        hint: 'Usa there are y near.',
        accepted: [
          'There are two shops near my house.',
          'There are two stores near my house.',
        ],
        modelAnswer: 'There are two shops near my house.',
        explanation: 'There are presenta el plural y near expresa cercanía.',
      },
      {
        id: 'en-03-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Describe tu habitación o barrio con dos frases.',
        hint: 'Incluye there is/are y una expresión de lugar.',
        accepted: [],
        modelAnswer:
          'There is a desk in my bedroom. There are some cafés near my house.',
        explanation:
          'Debe incluir existencia y ubicación en dos frases comprensibles.',
      },
    ],
  },
  'ja-10': {
    language: 'ja',
    title: 'Aficiones e invitaciones',
    level: 'A1.2',
    duration: '12–14 min',
    objective: 'Puedo hablar de aficiones e invitar a una actividad.',
    introduction: {
      summary:
        'Habla de actividades habituales y usa ませんか para invitar con cortesía.',
      concepts: [
        {
          title: 'Aficiones con ます',
          explanation:
            'La partícula を marca aquello que ves, lees, escuchas o practicas.',
          examples: ['映画を見ます。', '音楽を聞きます。'],
        },
        {
          title: 'Invitar con ませんか',
          explanation:
            'La forma negativa cortés usada como pregunta propone hacer algo juntos.',
          examples: ['いっしょに行きませんか。', 'コーヒーを飲みませんか。'],
        },
        {
          title: 'Aceptar o declinar',
          explanation:
            'いいですね acepta con entusiasmo; ちょっと… permite rechazar de forma indirecta.',
          examples: [
            'いいですね。行きましょう。',
            'すみません。土曜日はちょっと…。',
          ],
        },
      ],
      tip: 'En una invitación, ませんか no funciona como una simple negación: equivale a “¿te gustaría…?”.',
    },
    exercises: [
      {
        id: 'ja-10-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '映画を見ます。 ¿Qué actividad es?',
        hint: '映画 significa película.',
        options: ['Ver una película.', 'Escuchar música.', 'Leer un libro.'],
        answer: 'Ver una película.',
        explanation: '映画を見ます significa “veo una película”.',
      },
      {
        id: 'ja-10-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Cuál es una invitación a tomar café?',
        hint: 'Busca la terminación ませんか.',
        options: [
          'コーヒーを飲みませんか。',
          'コーヒーを飲みません。',
          'コーヒーですか。',
        ],
        answer: 'コーヒーを飲みませんか。',
        explanation: 'Vませんか formula una invitación cortés.',
      },
      {
        id: 'ja-10-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '「いっしょに行きませんか。」「___」',
        hint: 'Acepta la invitación.',
        options: ['いいですね。', 'どこですか。', 'ありません。'],
        answer: 'いいですね。',
        explanation: 'いいですね expresa una reacción positiva a la propuesta.',
      },
      {
        id: 'ja-10-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la invitación: “¿No vamos juntos?”.',
        hint: 'いっしょに va antes del verbo.',
        tokens: ['行きませんか。', 'いっしょに'],
        answer: ['いっしょに', '行きませんか。'],
        explanation: 'いっしょに行きませんか es una invitación natural.',
      },
      {
        id: 'ja-10-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'No puedes ir el sábado. Elige la respuesta más natural.',
        hint: 'En japonés puede suavizarse el rechazo.',
        options: [
          'すみません。土曜日はちょっと…。',
          'いいですね。土曜日です。',
          'はい、行きません。',
        ],
        answer: 'すみません。土曜日はちょっと…。',
        explanation:
          'ちょっと… deja implícita la dificultad y suaviza el rechazo.',
      },
      {
        id: 'ja-10-06',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Escucho música”.',
        hint: 'Objeto + を + verbo.',
        tokens: ['聞きます。', '音楽を'],
        answer: ['音楽を', '聞きます。'],
        explanation: 'を marca el objeto directo 音楽.',
      },
      {
        id: 'ja-10-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en japonés: “¿No vemos una película?”.',
        hint: 'Usa 映画, を y 見ませんか.',
        accepted: ['映画を見ませんか。', '映画を見ませんか'],
        modelAnswer: '映画を見ませんか。',
        explanation: '映画を見ませんか invita a ver una película.',
      },
      {
        id: 'ja-10-08',
        kind: 'open',
        phase: 'transferir',
        prompt:
          'Invita a alguien a hacer una actividad y añade una respuesta positiva.',
        hint: 'Usa ませんか y いいですね.',
        accepted: [],
        modelAnswer: 'いっしょにコーヒーを飲みませんか。いいですね。',
        explanation:
          'Debe contener una invitación comprensible y una aceptación adecuada.',
      },
    ],
  },
  'ja-11': {
    language: 'ja',
    title: 'Moverme por la ciudad',
    level: 'A1.2',
    duration: '12–14 min',
    objective:
      'Puedo preguntar por transporte y comprender indicaciones simples.',
    introduction: {
      summary:
        'Pregunta el destino y el medio de transporte, y comprende giros e indicaciones básicas.',
      concepts: [
        {
          title: 'Destino con へ',
          explanation:
            'へ, pronunciada e, marca la dirección del desplazamiento.',
          examples: ['駅へ行きます。', '東京へ行きます。'],
        },
        {
          title: 'Medio con で',
          explanation:
            'Después de un vehículo, で indica el medio usado para viajar.',
          examples: ['バスで行きます。', '電車で来ます。'],
        },
        {
          title: 'Preguntar y orientar',
          explanation:
            'どうやって pregunta cómo llegar; まっすぐ, 右 y 左 ayudan a indicar la ruta.',
          examples: [
            'どうやって行きますか。',
            'まっすぐ行って、右に曲がります。',
          ],
        },
      ],
      tip: 'Recuerda la pareja: lugar + へ para el destino; vehículo + で para el medio.',
    },
    exercises: [
      {
        id: 'ja-11-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '駅へ行きます。 ¿Qué significa?',
        hint: '駅 es estación.',
        options: [
          'Voy a la estación.',
          'Vengo en tren.',
          'La estación está aquí.',
        ],
        answer: 'Voy a la estación.',
        explanation: 'へ marca el destino del movimiento.',
      },
      {
        id: 'ja-11-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: バス___行きます。',
        hint: 'Marca el medio de transporte.',
        options: ['で', 'へ', 'を'],
        answer: 'で',
        explanation: 'で indica que el autobús es el medio usado.',
      },
      {
        id: 'ja-11-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Cómo preguntas “¿Cómo vas?”?',
        hint: 'Busca どうやって.',
        options: [
          'どうやって行きますか。',
          'どこへ行きますか。',
          '何時に行きますか。',
        ],
        answer: 'どうやって行きますか。',
        explanation: 'どうやって pregunta por el medio o la manera.',
      },
      {
        id: 'ja-11-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Voy a Tokio en tren”.',
        hint: 'Destino + へ, medio + で, verbo.',
        tokens: ['行きます。', '電車で', '東京へ'],
        answer: ['東京へ', '電車で', '行きます。'],
        acceptedOrders: [['電車で', '東京へ', '行きます。']],
        explanation:
          'El destino lleva へ y el medio lleva で; ambos complementos pueden intercambiar su orden.',
      },
      {
        id: 'ja-11-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '「まっすぐ行ってください。」 ¿Qué debes hacer?',
        hint: 'まっすぐ significa recto.',
        options: ['Seguir derecho.', 'Girar a la derecha.', 'Detenerse.'],
        answer: 'Seguir derecho.',
        explanation: 'まっすぐ行ってください pide continuar en línea recta.',
      },
      {
        id: 'ja-11-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Cuál indica “Gire a la izquierda”?',
        hint: '左 es izquierda.',
        options: [
          '左に曲がってください。',
          '右に曲がってください。',
          'まっすぐ行ってください。',
        ],
        answer: '左に曲がってください。',
        explanation: '左に曲がる significa girar a la izquierda.',
      },
      {
        id: 'ja-11-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en japonés: “Voy en tren”.',
        hint: 'Usa 電車 + で + 行きます.',
        accepted: ['電車で行きます。', '電車で行きます'],
        modelAnswer: '電車で行きます。',
        explanation: '電車で identifica el tren como medio de transporte.',
      },
      {
        id: 'ja-11-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Da una indicación con “siga derecho” y “gire a la derecha”.',
        hint: 'Usa まっすぐ y 右.',
        accepted: [],
        modelAnswer: 'まっすぐ行って、右に曲がってください。',
        explanation: 'Debe encadenar ambas acciones en el orden solicitado.',
      },
    ],
  },
};
