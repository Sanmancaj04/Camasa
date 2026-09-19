import type { ModelLesson } from '@/lib/model-lessons';

export const batch9Lessons: Record<string, ModelLesson> = {
  'en-08': {
    language: 'en',
    title: 'Salud cotidiana',
    level: 'A2.2',
    duration: '10–12 min',
    objective: 'Puedo describir síntomas y comprender consejos sencillos.',
    introduction: {
      summary:
        'Nombra síntomas comunes, explica cómo te sientes y comprende recomendaciones básicas.',
      concepts: [
        {
          title: 'Síntomas',
          explanation:
            'Have got se usa para expresar dolencias; ache forma nombres de dolores comunes.',
          examples: ["I've got a headache.", "She's got a stomach ache."],
        },
        {
          title: 'Partes del cuerpo',
          explanation:
            'Identificar la zona afectada permite explicar un problema con precisión.',
          examples: ['My back hurts.', 'I hurt my ankle.'],
        },
        {
          title: 'Consejos con should',
          explanation:
            'Should recomienda una acción; shouldn’t aconseja evitarla.',
          examples: ['You should rest.', "You shouldn't go to work."],
        },
      ],
      tip: 'Describe primero el síntoma y después añade cuándo comenzó o qué tan intenso es.',
    },
    exercises: [
      {
        id: 'en-08-01',
        kind: 'choice',
        phase: 'activar',
        prompt: 'Completa: I’ve got a ___. My head hurts.',
        hint: 'El dolor está en la cabeza.',
        options: ['headache', 'stomach ache', 'sore throat'],
        answer: 'headache',
        explanation: 'Headache significa dolor de cabeza.',
      },
      {
        id: 'en-08-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '“My throat is sore.” ¿Qué problema tiene?',
        hint: 'Throat significa garganta.',
        options: ['Dolor de garganta.', 'Dolor de espalda.', 'Dolor de oído.'],
        answer: 'Dolor de garganta.',
        explanation: 'A sore throat es una garganta irritada o dolorida.',
      },
      {
        id: 'en-08-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Tienes fiebre. Elige el consejo adecuado.',
        hint: 'Necesitas descansar y beber líquidos.',
        options: [
          'You should rest and drink water.',
          'You should run a marathon.',
          "You shouldn't sleep.",
        ],
        answer: 'You should rest and drink water.',
        explanation: 'Should introduce una recomendación apropiada.',
      },
      {
        id: 'en-08-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la descripción del síntoma.',
        hint: 'Have got + artículo + síntoma.',
        tokens: ['a bad cough.', "I've", 'got'],
        answer: ["I've", 'got', 'a bad cough.'],
        explanation: "I've got a bad cough expresa que tienes mucha tos.",
      },
      {
        id: 'en-08-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Completa el consejo negativo: You ___ eat so much sugar.',
        hint: 'Aconseja evitarlo.',
        options: ["shouldn't", 'should', "haven't"],
        answer: "shouldn't",
        explanation: 'Shouldn’t indica que no es recomendable hacerlo.',
      },
      {
        id: 'en-08-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'El médico pregunta cuándo comenzó. ¿Qué opción responde?',
        hint: 'Da una referencia temporal.',
        options: [
          'It started two days ago.',
          'It starts tomorrow.',
          'It is my arm.',
        ],
        answer: 'It started two days ago.',
        explanation: 'Started y ago sitúan el inicio del síntoma en el pasado.',
      },
      {
        id: 'en-08-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “Me duele la espalda y debería descansar”.',
        hint: 'Usa My back hurts y should.',
        accepted: [
          'My back hurts and I should rest.',
          'My back hurts. I should rest.',
        ],
        modelAnswer: 'My back hurts. I should rest.',
        explanation: 'La respuesta combina síntoma y recomendación.',
      },
      {
        id: 'en-08-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Describe dos síntomas y pide un consejo.',
        hint: 'Termina con What should I do?',
        accepted: [],
        modelAnswer: "I've got a headache and a sore throat. What should I do?",
        explanation:
          'Debe incluir dos síntomas comprensibles y una petición de consejo.',
      },
    ],
  },
  'en-09': {
    language: 'en',
    title: 'Historias y recuerdos',
    level: 'B1.1',
    duration: '12–14 min',
    objective: 'Puedo narrar una experiencia conectando acciones y contexto.',
    introduction: {
      summary:
        'Combina acciones principales con el contexto en progreso y organiza el relato con secuenciadores.',
      concepts: [
        {
          title: 'Acción y contexto',
          explanation:
            'El pasado continuo presenta el fondo; el pasado simple cuenta el evento principal.',
          examples: [
            'I was walking home when I saw an old friend.',
            'It was raining when the bus arrived.',
          ],
        },
        {
          title: 'When y while',
          explanation:
            'When suele introducir el evento breve; while acompaña frecuentemente a una acción en progreso.',
          examples: [
            'When the phone rang, I was sleeping.',
            'While I was cooking, Diana set the table.',
          ],
        },
        {
          title: 'Secuenciar',
          explanation:
            'At first, then, suddenly, after that y finally guían al oyente por la historia.',
          examples: [
            'At first, everything was quiet.',
            'Suddenly, the lights went out.',
          ],
        },
      ],
      tip: 'Pregunta qué estaba ocurriendo como fondo y qué pasó de repente; así eliges cada tiempo.',
    },
    exercises: [
      {
        id: 'en-09-01',
        kind: 'choice',
        phase: 'activar',
        prompt: 'Completa: I ___ home when I saw the accident.',
        hint: 'Era una acción en progreso.',
        options: ['was walking', 'walked', 'am walking'],
        answer: 'was walking',
        explanation: 'Was walking establece el contexto en progreso.',
      },
      {
        id: 'en-09-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: We were having dinner when the lights ___.',
        hint: 'El apagón interrumpe la acción.',
        options: ['went out', 'were going out', 'go out'],
        answer: 'went out',
        explanation: 'El pasado simple marca el evento breve que interrumpe.',
      },
      {
        id: 'en-09-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Elige la combinación natural.',
        hint: 'While introduce aquí la acción larga.',
        options: [
          'While I was studying, my friend called.',
          'While I studied, my friend was call.',
          'When I was study, my friend calling.',
        ],
        answer: 'While I was studying, my friend called.',
        explanation:
          'El continuo da el fondo y called marca el evento completo.',
      },
      {
        id: 'en-09-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la oración.',
        hint: 'Contexto + when + evento.',
        tokens: ['the phone rang.', 'I was sleeping', 'when'],
        answer: ['I was sleeping', 'when', 'the phone rang.'],
        explanation: 'La llamada ocurre durante la acción de dormir.',
      },
      {
        id: 'en-09-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué secuenciador introduce un giro inesperado?',
        hint: 'Equivale a “de repente”.',
        options: ['Suddenly', 'Usually', 'Every day'],
        answer: 'Suddenly',
        explanation: 'Suddenly anuncia un acontecimiento inesperado.',
      },
      {
        id: 'en-09-06',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la mini historia.',
        hint: 'Inicio, giro y cierre.',
        tokens: [
          'Finally, we found the hotel.',
          'At first, we followed the map.',
          'Then, we took the wrong street.',
        ],
        answer: [
          'At first, we followed the map.',
          'Then, we took the wrong street.',
          'Finally, we found the hotel.',
        ],
        explanation: 'Los secuenciadores construyen una cronología clara.',
      },
      {
        id: 'en-09-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “Estaba lloviendo cuando llegamos”.',
        hint: 'Usa past continuous + when + past simple.',
        accepted: [
          'It was raining when we arrived.',
          'It was raining when we got there.',
          'When we arrived, it was raining.',
          'When we got there, it was raining.',
        ],
        modelAnswer: 'It was raining when we arrived.',
        explanation:
          'Was raining describe el fondo; arrived es el evento puntual.',
      },
      {
        id: 'en-09-08',
        kind: 'open',
        phase: 'transferir',
        prompt:
          'Narra un recuerdo en cuatro frases con contexto, giro y desenlace.',
        hint: 'Usa past continuous, past simple y al menos dos secuenciadores.',
        accepted: [],
        modelAnswer:
          'I was walking home after work. Suddenly, I heard music in the park. I stopped and saw an outdoor concert. Finally, I stayed until the end.',
        explanation:
          'Debe conectar el contexto, un evento y su desenlace de forma comprensible.',
      },
    ],
  },
  'ja-16': {
    language: 'ja',
    title: 'Salud y bienestar',
    level: 'A2.1',
    duration: '12–14 min',
    objective: 'Puedo describir mi estado y comprender consejos básicos.',
    introduction: {
      summary:
        'Explica síntomas con contexto y comprende indicaciones o recomendaciones de cuidado.',
      concepts: [
        {
          title: 'Explicar con んです',
          explanation:
            'んです presenta una situación que necesita explicación o atención.',
          examples: ['熱があるんです。', 'のどが痛いんです。'],
        },
        {
          title: 'No hacer algo',
          explanation:
            'Vないでください pide cortésmente que no se realice una acción.',
          examples: [
            '今日は運動しないでください。',
            'お酒を飲まないでください。',
          ],
        },
        {
          title: 'Recomendar',
          explanation:
            'Vたほうがいいです aconseja hacer algo; Vないほうがいいです aconseja evitarlo.',
          examples: [
            '病院に行ったほうがいいです。',
            '無理しないほうがいいです。',
          ],
        },
      ],
      tip: 'En una consulta: síntoma + んです; recomendación + ほうがいいです.',
    },
    exercises: [
      {
        id: 'ja-16-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '「のどが痛いんです。」 ¿Qué ocurre?',
        hint: 'のど significa garganta.',
        options: [
          'Le duele la garganta.',
          'Le duele la espalda.',
          'Tiene sueño.',
        ],
        answer: 'Le duele la garganta.',
        explanation:
          'のどが痛い describe dolor de garganta y んです lo presenta como explicación.',
      },
      {
        id: 'ja-16-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Cuál significa “Tengo fiebre”?',
        hint: '熱 es fiebre.',
        options: [
          '熱があるんです。',
          '熱を飲むんです。',
          '熱がないでください。',
        ],
        answer: '熱があるんです。',
        explanation: '熱がある es la expresión habitual para tener fiebre.',
      },
      {
        id: 'ja-16-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '「今日は運動しないでください。」 ¿Qué indica?',
        hint: 'ないでください pide no hacer algo.',
        options: [
          'Hoy no haga ejercicio.',
          'Haga ejercicio hoy.',
          'Ayer hizo ejercicio.',
        ],
        answer: 'Hoy no haga ejercicio.',
        explanation: '運動しないでください pide evitar el ejercicio.',
      },
      {
        id: 'ja-16-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Es mejor ir al hospital”.',
        hint: 'Forma pasada + ほうがいいです.',
        tokens: ['ほうがいいです。', '病院に行った'],
        answer: ['病院に行った', 'ほうがいいです。'],
        explanation: '行ったほうがいいです expresa una recomendación.',
      },
      {
        id: 'ja-16-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Estás muy cansado. Elige el consejo apropiado.',
        hint: '休む significa descansar.',
        options: [
          'ゆっくり休んだほうがいいです。',
          'もっと走ったほうがいいです。',
          '休まないでください。',
        ],
        answer: 'ゆっくり休んだほうがいいです。',
        explanation: 'La frase recomienda descansar bien.',
      },
      {
        id: 'ja-16-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Cuál aconseja “Es mejor no esforzarse demasiado”?',
        hint: '無理する significa forzarse.',
        options: [
          '無理しないほうがいいです。',
          '無理したほうがいいです。',
          '無理しています。',
        ],
        answer: '無理しないほうがいいです。',
        explanation:
          'La forma negativa + ほうがいい aconseja evitar una acción.',
      },
      {
        id: 'ja-16-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en japonés: “Me duele la cabeza”.',
        hint: 'Usa 頭が痛いんです.',
        accepted: [
          '頭が痛いんです。',
          '頭が痛いんです',
          '頭が痛いです。',
          '頭が痛いです',
        ],
        modelAnswer: '頭が痛いんです。',
        explanation:
          '頭が痛い describe dolor de cabeza y んです aporta contexto explicativo.',
      },
      {
        id: 'ja-16-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Describe un síntoma y da un consejo adecuado.',
        hint: 'Combina んです y ほうがいいです.',
        accepted: [],
        modelAnswer: '熱があるんです。病院に行ったほうがいいです。',
        explanation: 'Debe incluir un síntoma y una recomendación coherente.',
      },
    ],
  },
  'ja-17': {
    language: 'ja',
    title: 'Experiencias',
    level: 'A2.1',
    duration: '12–14 min',
    objective: 'Puedo hablar de experiencias y actividades que sé hacer.',
    introduction: {
      summary:
        'Pregunta por experiencias previas, expresa capacidades y enumera ejemplos de actividades.',
      concepts: [
        {
          title: 'Experiencia',
          explanation:
            'Vたことがあります expresa que se ha realizado alguna vez una actividad.',
          examples: [
            '富士山に登ったことがあります。',
            'すしを作ったことがありますか。',
          ],
        },
        {
          title: 'Capacidad',
          explanation:
            'V辞書形 + ことができます expresa que alguien sabe o puede hacer algo.',
          examples: [
            '日本語を読むことができます。',
            'ピアノを弾くことができます。',
          ],
        },
        {
          title: 'Dar ejemplos',
          explanation:
            'や conecta ejemplos y など indica que la lista no es completa.',
          examples: ['サッカーやテニスなどができます。'],
        },
      ],
      tip: 'Experiencia pasada: forma た + ことがあります. Capacidad actual: diccionario + ことができます.',
    },
    exercises: [
      {
        id: 'ja-17-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '「富士山に登ったことがあります。」 ¿Qué expresa?',
        hint: 'ことがあります habla de experiencia.',
        options: [
          'He subido al monte Fuji alguna vez.',
          'Voy a subir mañana.',
          'Subo todos los días.',
        ],
        answer: 'He subido al monte Fuji alguna vez.',
        explanation: '登ったことがあります expresa una experiencia previa.',
      },
      {
        id: 'ja-17-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Cuál pregunta “¿Has hecho sushi alguna vez?”?',
        hint: 'Usa forma た + ことがありますか.',
        options: [
          'すしを作ったことがありますか。',
          'すしを作ることができますか。',
          'すしを作っていますか。',
        ],
        answer: 'すしを作ったことがありますか。',
        explanation: '作ったことがありますか pregunta por experiencia previa.',
      },
      {
        id: 'ja-17-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '「日本語を読むことができます。」 ¿Qué significa?',
        hint: 'ことができます expresa capacidad.',
        options: [
          'Sé leer japonés.',
          'Leí japonés una vez.',
          'Quiero leer japonés.',
        ],
        answer: 'Sé leer japonés.',
        explanation: '読むことができます expresa la capacidad de leer.',
      },
      {
        id: 'ja-17-04',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena: “Sé tocar el piano”.',
        hint: 'Verbo en diccionario + ことができます.',
        tokens: ['ことができます。', 'ピアノを弾く'],
        answer: ['ピアノを弾く', 'ことができます。'],
        explanation: '弾くことができます expresa capacidad musical.',
      },
      {
        id: 'ja-17-05',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué frase da una lista abierta de deportes?',
        hint: 'Busca や y など.',
        options: [
          'サッカーやテニスなどができます。',
          'サッカーとテニスだけです。',
          'サッカーをしましたか。',
        ],
        answer: 'サッカーやテニスなどができます。',
        explanation: 'や…など presenta ejemplos sin cerrar la lista.',
      },
      {
        id: 'ja-17-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Nunca has esquiado. ¿Qué respondes?',
        hint: 'La negativa de あります es ありません.',
        options: [
          'いいえ、したことがありません。',
          'いいえ、することができます。',
          'はい、しませんか。',
        ],
        answer: 'いいえ、したことがありません。',
        explanation: 'したことがありません niega una experiencia previa.',
      },
      {
        id: 'ja-17-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe: “He comido ramen alguna vez”.',
        hint: 'Usa ラーメンを食べたことがあります.',
        accepted: [
          'ラーメンを食べたことがあります。',
          'ラーメンを食べたことがあります',
        ],
        modelAnswer: 'ラーメンを食べたことがあります。',
        explanation:
          '食べたことがあります expresa la experiencia de haberlo comido.',
      },
      {
        id: 'ja-17-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe una experiencia y una actividad que sabes hacer.',
        hint: 'Combina たことがあります y ことができます.',
        accepted: [],
        modelAnswer:
          '京都に行ったことがあります。日本語を少し話すことができます。',
        explanation:
          'Debe distinguir una experiencia pasada de una capacidad actual.',
      },
    ],
  },
};
