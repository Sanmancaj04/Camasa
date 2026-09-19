import type { ModelLesson } from '@/lib/model-lessons';

export const batch8Lessons: Record<string, ModelLesson> = {
  'en-06': {
    language: 'en',
    title: 'Viajes prácticos',
    level: 'A2.2',
    duration: '10–12 min',
    objective:
      'Puedo pedir indicaciones, comprar billetes y resolver necesidades de viaje.',
    introduction: {
      summary:
        'Usa instrucciones, peticiones corteses y preguntas indirectas para desenvolverte durante un viaje.',
      concepts: [
        {
          title: 'Indicaciones',
          explanation:
            'Los imperativos indican una ruta; los conectores ordenan los pasos.',
          examples: [
            'Go straight.',
            'Turn left at the bank.',
            'Then cross the street.',
          ],
        },
        {
          title: 'Pedir con cortesía',
          explanation:
            'Can I…? pide algo; Could you…? solicita ayuda de manera más cortés.',
          examples: ['Can I have a return ticket?', 'Could you help me?'],
        },
        {
          title: 'Preguntas indirectas',
          explanation:
            'Después de Could you tell me…, usa el orden de una afirmación.',
          examples: [
            'Could you tell me where the station is?',
            'Do you know what time the bus leaves?',
          ],
        },
      ],
      tip: 'En una pregunta indirecta di where the station is, no where is the station.',
    },
    exercises: [
      {
        id: 'en-06-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '¿Qué instrucción significa “Gira a la derecha”?',
        hint: 'Busca right.',
        options: ['Turn right.', 'Go back.', 'Cross left.'],
        answer: 'Turn right.',
        explanation: 'Turn right indica un giro hacia la derecha.',
      },
      {
        id: 'en-06-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Quieres ayuda de forma cortés. ¿Qué dices?',
        hint: 'Could suaviza la petición.',
        options: [
          'Could you help me, please?',
          'You help me now?',
          'Could help you me?',
        ],
        answer: 'Could you help me, please?',
        explanation: 'Could you + verbo base es una petición cortés.',
      },
      {
        id: 'en-06-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Elige la pregunta indirecta correcta.',
        hint: 'Después de where usa sujeto + verbo.',
        options: [
          'Could you tell me where the station is?',
          'Could you tell me where is the station?',
          'Could you tell where the station?',
        ],
        answer: 'Could you tell me where the station is?',
        explanation: 'La cláusula indirecta mantiene el orden the station is.',
      },
      {
        id: 'en-06-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la compra del billete.',
        hint: 'Petición + producto + destino.',
        tokens: ['to Oxford,', 'please.', "I'd like", 'a return ticket'],
        answer: ["I'd like", 'a return ticket', 'to Oxford,', 'please.'],
        explanation:
          "I'd like a return ticket… es una petición natural en taquilla.",
      },
      {
        id: 'en-06-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué pregunta averigua la hora de salida?',
        hint: 'Usa what time y leaves.',
        options: [
          'What time does the train leave?',
          'How much train leaves?',
          'Where time is the train?',
        ],
        answer: 'What time does the train leave?',
        explanation:
          'What time pregunta la hora y does forma el presente simple.',
      },
      {
        id: 'en-06-06',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la ruta.',
        hint: 'Primero recto, después el giro.',
        tokens: ['Then turn left.', 'Go straight for two blocks.'],
        answer: ['Go straight for two blocks.', 'Then turn left.'],
        explanation: 'Then señala el segundo paso de la ruta.',
      },
      {
        id: 'en-06-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “¿Me puede decir dónde está la parada de autobús?”.',
        hint: 'Usa Could you tell me…',
        accepted: [
          'Could you tell me where the bus stop is?',
          'Could you tell me where the bus stop is, please?',
        ],
        modelAnswer: 'Could you tell me where the bus stop is?',
        explanation: 'La pregunta indirecta usa where + sujeto + verbo.',
      },
      {
        id: 'en-06-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Pide un billete sencillo a Londres y pregunta el precio.',
        hint: 'Usa a single ticket y How much…?',
        accepted: [],
        modelAnswer:
          "I'd like a single ticket to London, please. How much is it?",
        explanation:
          'Debe incluir tipo de billete, destino y pregunta por el precio.',
      },
    ],
  },
  'en-07': {
    language: 'en',
    title: 'Planes y acuerdos',
    level: 'A2.2',
    duration: '10–12 min',
    objective: 'Puedo proponer un plan, aceptar, rechazar y acordar detalles.',
    introduction: {
      summary:
        'Distingue una intención de un acuerdo ya organizado y negocia cuándo y dónde reunirse.',
      concepts: [
        {
          title: 'Be going to',
          explanation: 'Expresa una intención o plan decidido previamente.',
          examples: [
            "I'm going to visit my sister.",
            "We're going to cook tonight.",
          ],
        },
        {
          title: 'Presente continuo futuro',
          explanation:
            'Se usa para un acuerdo confirmado, normalmente con hora o lugar.',
          examples: [
            "I'm meeting Ana at six.",
            "We're having dinner on Friday.",
          ],
        },
        {
          title: 'Acordar detalles',
          explanation:
            'How about…? propone; That works acepta; I’m afraid I can’t rechaza con cortesía.',
          examples: [
            'How about Saturday?',
            'That works for me.',
            "I'm afraid I can't on Friday.",
          ],
        },
      ],
      tip: 'Intención general: going to. Cita ya acordada: presente continuo con un dato concreto.',
    },
    exercises: [
      {
        id: 'en-07-01',
        kind: 'choice',
        phase: 'activar',
        prompt: 'Completa el plan: I ___ visit my parents this weekend.',
        hint: 'Usa be going to.',
        options: ['am going to', 'going', 'am go to'],
        answer: 'am going to',
        explanation: 'I am going to + verbo base expresa un plan.',
      },
      {
        id: 'en-07-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'La reservación ya está hecha. Elige la frase más natural.',
        hint: 'Es un arreglo confirmado.',
        options: [
          "We're having dinner at eight.",
          'We have dinner yesterday.',
          'We going to dinner at eight.',
        ],
        answer: "We're having dinner at eight.",
        explanation:
          'El presente continuo expresa aquí un arreglo futuro confirmado.',
      },
      {
        id: 'en-07-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'A: How about Sunday afternoon? B: ___',
        hint: 'Acepta la propuesta.',
        options: [
          'That works for me.',
          'I worked Sunday.',
          'That is working yesterday.',
        ],
        answer: 'That works for me.',
        explanation: 'That works for me confirma que el horario es adecuado.',
      },
      {
        id: 'en-07-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la pregunta sobre planes.',
        hint: 'Be + sujeto + going to + verbo.',
        tokens: ['this weekend?', 'are', 'What', 'you going to do'],
        answer: ['What', 'are', 'you going to do', 'this weekend?'],
        explanation:
          'What are you going to do…? pregunta por una intención futura.',
      },
      {
        id: 'en-07-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'No puedes el viernes. Elige un rechazo cortés.',
        hint: 'Suaviza y ofrece otra posibilidad.',
        options: [
          "I'm afraid I can't on Friday. How about Saturday?",
          'No Friday.',
          'I am not like Friday.',
        ],
        answer: "I'm afraid I can't on Friday. How about Saturday?",
        explanation:
          'La respuesta rechaza con cortesía y propone una alternativa.',
      },
      {
        id: 'en-07-06',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Reconstruye el acuerdo.',
        hint: 'Propuesta, alternativa y confirmación.',
        tokens: ['Great. See you then!', 'How about six?', "I can't at five."],
        answer: ["I can't at five.", 'How about six?', 'Great. See you then!'],
        explanation: 'La secuencia negocia y confirma una nueva hora.',
      },
      {
        id: 'en-07-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “Me reúno con Diana mañana a las seis”.',
        hint: 'Usa presente continuo para una cita.',
        accepted: [
          "I'm meeting Diana tomorrow at six.",
          'I am meeting Diana tomorrow at six.',
        ],
        modelAnswer: "I'm meeting Diana tomorrow at six.",
        explanation:
          'El presente continuo con hora expresa un acuerdo organizado.',
      },
      {
        id: 'en-07-08',
        kind: 'open',
        phase: 'transferir',
        prompt:
          'Propón una actividad y acuerda día, hora y lugar en un diálogo breve.',
        hint: 'Incluye How about…? y una confirmación.',
        accepted: [],
        modelAnswer:
          "How about seeing a film on Saturday? Let's meet at the cinema at seven. Great, see you then!",
        explanation: 'Debe contener propuesta y detalles concretos aceptados.',
      },
    ],
  },
  'ja-14': {
    language: 'ja',
    title: 'Mi situación actual',
    level: 'A2.1',
    duration: '12–14 min',
    objective: 'Puedo explicar de forma breve dónde vivo, trabajo o estudio.',
    introduction: {
      summary:
        'Describe tu situación actual con ています y pregunta a otra persona por su trabajo o estudios.',
      concepts: [
        {
          title: 'Situación con ています',
          explanation:
            '住んでいます, 働いています y 通っています describen una situación actual continuada.',
          examples: ['東京に住んでいます。', 'レストランで働いています。'],
        },
        {
          title: 'Lugar y actividad',
          explanation:
            'に marca residencia o destino habitual; で marca el lugar donde se realiza una actividad.',
          examples: ['日本に住んでいます。', '工場で働いています。'],
        },
        {
          title: 'Preguntar por ocupación',
          explanation:
            '何をしていますか pregunta qué hace alguien; どんな仕事ですか pide el tipo de trabajo.',
          examples: ['日本では何をしていますか。', 'どんな仕事ですか。'],
        },
      ],
      tip: 'Residencia: lugar + に + 住んでいます. Trabajo: lugar + で + 働いています.',
    },
    exercises: [
      {
        id: 'ja-14-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '東京に住んでいます。 ¿Qué significa?',
        hint: '住んでいます describe residencia.',
        options: ['Vivo en Tokio.', 'Trabajo en Tokio.', 'Voy a Tokio mañana.'],
        answer: 'Vivo en Tokio.',
        explanation: 'Lugar + に住んでいます expresa dónde vive alguien.',
      },
      {
        id: 'ja-14-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: レストラン___働いています。',
        hint: 'Es el lugar donde ocurre la actividad.',
        options: ['で', 'に', 'を'],
        answer: 'で',
        explanation: 'で marca el lugar donde se trabaja.',
      },
      {
        id: 'ja-14-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '「日本では何をしていますか。」 ¿Qué pregunta?',
        hint: 'La respuesta puede ser trabajo o estudios.',
        options: [
          '¿Qué haces en Japón?',
          '¿Cuándo vienes a Japón?',
          '¿Dónde está Japón?',
        ],
        answer: '¿Qué haces en Japón?',
        explanation:
          '何をしていますか pregunta por la actividad o situación actual.',
      },
      {
        id: 'ja-14-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Trabajo en una fábrica”.',
        hint: 'Lugar + で + verbo.',
        tokens: ['働いています。', '工場で'],
        answer: ['工場で', '働いています。'],
        explanation: '工場で señala el lugar de trabajo.',
      },
      {
        id: 'ja-14-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Cuál expresa “Estudio en una escuela de japonés”?',
        hint: '通っています indica asistencia habitual.',
        options: [
          '日本語学校に通っています。',
          '日本語学校で住んでいます。',
          '日本語学校を働いています。',
        ],
        answer: '日本語学校に通っています。',
        explanation:
          '学校に通っています significa asistir regularmente a una escuela.',
      },
      {
        id: 'ja-14-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: '「どんな仕事ですか。」「___」',
        hint: 'Responde con un tipo de trabajo.',
        options: [
          '介護の仕事をしています。',
          '仕事はどこですか。',
          '毎日です。',
        ],
        answer: '介護の仕事をしています。',
        explanation: 'La respuesta identifica el ámbito laboral: cuidados.',
      },
      {
        id: 'ja-14-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en japonés: “Vivo en México”.',
        hint: 'Usa メキシコに住んでいます.',
        accepted: ['メキシコに住んでいます。', 'メキシコに住んでいます'],
        modelAnswer: 'メキシコに住んでいます。',
        explanation: 'に marca el lugar de residencia.',
      },
      {
        id: 'ja-14-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Describe en dos frases dónde vives y qué haces actualmente.',
        hint: 'Usa 住んでいます y una frase de trabajo o estudio.',
        accepted: [],
        modelAnswer: 'メキシコに住んでいます。会社で働いています。',
        explanation:
          'Debe comunicar residencia y situación actual de forma comprensible.',
      },
    ],
  },
  'ja-15': {
    language: 'ja',
    title: 'Clima y estaciones',
    level: 'A2.1',
    duration: '12–14 min',
    objective: 'Puedo comprender un pronóstico y hablar de cambios del tiempo.',
    introduction: {
      summary:
        'Describe el tiempo, entiende un pronóstico básico y explica cómo cambia una estación o condición.',
      concepts: [
        {
          title: 'Tiempo y estaciones',
          explanation:
            '晴れ, 雨, 雪 y くもり nombran condiciones; 春, 夏, 秋 y 冬 son las estaciones.',
          examples: ['今日は晴れです。', '冬は寒いです。'],
        },
        {
          title: 'Cambios con なります',
          explanation:
            'Los adjetivos い cambian a く; los adjetivos な y sustantivos usan に antes de なります.',
          examples: ['寒くなります。', 'きれいになります。'],
        },
        {
          title: 'Comparar',
          explanation:
            'AよりBのほうが… compara dos elementos y señala cuál tiene más de una cualidad.',
          examples: ['東京より札幌のほうが寒いです。'],
        },
      ],
      tip: 'い-adjetivo: elimina い y añade くなります. な-adjetivo: añade になります.',
    },
    exercises: [
      {
        id: 'ja-15-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '「今日は晴れです。」 ¿Qué tiempo hace?',
        hint: '晴れ significa cielo despejado.',
        options: ['Está soleado.', 'Está nevando.', 'Hay tormenta.'],
        answer: 'Está soleado.',
        explanation: '晴れ describe tiempo despejado o soleado.',
      },
      {
        id: 'ja-15-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa el cambio: 寒い → 寒___なります。',
        hint: 'Es un adjetivo い.',
        options: ['く', 'に', 'い'],
        answer: 'く',
        explanation:
          'Los adjetivos い cambian la い final por く antes de なります.',
      },
      {
        id: 'ja-15-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: 春は暖かくなります。',
        hint: 'Interpreta 暖かくなります.',
        options: [
          'En primavera se vuelve cálido.',
          'En primavera fue frío.',
          'La primavera es más corta.',
        ],
        answer: 'En primavera se vuelve cálido.',
        explanation:
          '暖かくなります expresa un cambio hacia una temperatura más cálida.',
      },
      {
        id: 'ja-15-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “En invierno hace mucho frío”.',
        hint: 'Estación + は + descripción.',
        tokens: ['とても寒いです。', '冬は'],
        answer: ['冬は', 'とても寒いです。'],
        explanation: '冬は establece el tema y 寒いです describe la estación.',
      },
      {
        id: 'ja-15-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '東京より札幌のほうが寒いです。 ¿Cuál es más fría?',
        hint: 'Bのほうが señala el elemento con mayor cualidad.',
        options: ['札幌', '東京', 'Son iguales.'],
        answer: '札幌',
        explanation: 'La estructura afirma que Sapporo es más fría que Tokio.',
      },
      {
        id: 'ja-15-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: '「明日は雨が降るでしょう。」 ¿Qué comunica?',
        hint: 'でしょう expresa una previsión.',
        options: [
          'Probablemente lloverá mañana.',
          'Llovió ayer.',
          'Está lloviendo ahora.',
        ],
        answer: 'Probablemente lloverá mañana.',
        explanation: '明日 y でしょう sitúan una previsión para mañana.',
      },
      {
        id: 'ja-15-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en japonés: “En verano hace calor”.',
        hint: 'Usa 夏は暑いです.',
        accepted: ['夏は暑いです。', '夏は暑いです'],
        modelAnswer: '夏は暑いです。',
        explanation:
          '夏は establece verano como tema y 暑い describe calor ambiental.',
      },
      {
        id: 'ja-15-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Compara el clima de dos ciudades con より y のほうが.',
        hint: 'Modelo: AよりBのほうが…です.',
        accepted: [],
        modelAnswer: '東京より札幌のほうが寒いです。',
        explanation:
          'Debe identificar claramente qué ciudad presenta más de la cualidad.',
      },
    ],
  },
};
