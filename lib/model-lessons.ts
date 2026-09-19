import { portugueseLessons } from './portuguese-lessons';

export type ChoiceExercise = {
  id: string;
  kind: 'choice';
  phase: 'activar' | 'comprender' | 'practicar' | 'transferir';
  prompt: string;
  hint: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type OrderExercise = {
  id: string;
  kind: 'order';
  phase: 'practicar' | 'transferir';
  prompt: string;
  hint: string;
  tokens: string[];
  answer: string[];
  acceptedOrders?: string[][];
  explanation: string;
};

export type OpenExercise = {
  id: string;
  kind: 'open';
  phase: 'practicar' | 'transferir';
  prompt: string;
  hint: string;
  accepted: string[];
  modelAnswer: string;
  explanation: string;
};

export type ModelExercise = ChoiceExercise | OrderExercise | OpenExercise;

export type ModelLesson = {
  language: 'en' | 'ja' | 'fr' | 'ru' | 'pt';
  title: string;
  level: string;
  objective: string;
  duration: string;
  introduction: {
    summary: string;
    concepts: { title: string; explanation: string; examples: string[] }[];
    tip: string;
  };
  exercises: ModelExercise[];
};

export const modelLessons: Record<ModelLesson['language'], ModelLesson> = {
  en: {
    language: 'en',
    title: 'Tu rutina diaria',
    level: 'A2.1',
    duration: '10–12 min',
    objective:
      'Puedo describir una rutina y expresar con qué frecuencia hago actividades cotidianas.',
    introduction: {
      summary:
        'Antes de practicar, repasa cómo se construyen las rutinas en presente simple y dónde se colocan las expresiones de frecuencia.',
      concepts: [
        {
          title: 'Presente simple',
          explanation:
            'Usa el verbo base con I, you, we y they. Con he, she o it normalmente agregamos -s.',
          examples: ['I drink coffee.', 'She drinks coffee.'],
        },
        {
          title: 'Frecuencia',
          explanation:
            'Usually, sometimes y never suelen ir antes del verbo principal, pero después del verbo be.',
          examples: ['I usually get up at seven.', 'We are never late.'],
        },
        {
          title: 'Preguntar cómo',
          explanation:
            'How do you get to work? pregunta por el medio o la manera de llegar.',
          examples: ['I walk to work.', 'I go by bus.'],
        },
      ],
      tip: 'No memorices frases completas: identifica sujeto, verbo, actividad y frecuencia.',
    },
    exercises: [
      {
        id: 'en-model-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '¿Cómo dirías “Normalmente me levanto a las siete”?',
        hint: 'Elige la oración más natural.',
        options: [
          'I usually get up at seven.',
          'I get usually up at seven.',
          'I am get up at seven.',
        ],
        answer: 'I usually get up at seven.',
        explanation:
          '“Usually” va antes del verbo principal. “Get up” permanece unido; “am get” mezcla incorrectamente be con el verbo base.',
      },
      {
        id: 'en-model-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Completa: She ___ coffee before work.',
        hint: 'Recuerda la tercera persona del singular.',
        options: ['drink', 'drinks', 'drinking'],
        answer: 'drinks',
        explanation: 'En presente simple añadimos “-s” con he, she o it.',
      },
      {
        id: 'en-model-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Qué pregunta corresponde a “Voy caminando al trabajo”?',
        hint: 'Busca una pregunta sobre el medio de transporte.',
        options: [
          'When do you work?',
          'Where is your work?',
          'How do you get to work?',
        ],
        answer: 'How do you get to work?',
        explanation:
          '“How do you get to work?” pregunta de qué manera llegas al trabajo.',
      },
      {
        id: 'en-model-04',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Selecciona la frase correcta.',
        hint: 'Con el verbo be, el adverbio cambia de posición.',
        options: [
          'We never are late.',
          'We are never late.',
          'We are late never.',
        ],
        answer: 'We are never late.',
        explanation:
          'Con el verbo “to be”, el adverbio de frecuencia va después del verbo.',
      },
      {
        id: 'en-model-05',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la oración.',
        hint: 'Forma una oración sobre una rutina matutina.',
        tokens: ['breakfast', 'I', 'at 8:00', 'have'],
        answer: ['I', 'have', 'breakfast', 'at 8:00'],
        explanation:
          'El orden neutro es sujeto + verbo + objeto + expresión de tiempo.',
      },
      {
        id: 'en-model-06',
        kind: 'choice',
        phase: 'practicar',
        prompt:
          'Alex goes to the gym on Mondays and Thursdays. How often does Alex go?',
        hint: 'Dos veces por semana.',
        options: ['Once a week.', 'Twice a week.', 'Every day.'],
        answer: 'Twice a week.',
        explanation: 'Monday and Thursday son dos ocasiones: “twice a week”.',
      },
      {
        id: 'en-model-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en inglés: “A veces cocino por la noche”.',
        hint: 'Usa sometimes antes del verbo principal.',
        accepted: [
          'Sometimes I cook at night.',
          'I sometimes cook at night.',
          'Sometimes I cook in the evening.',
          'I sometimes cook in the evening.',
        ],
        modelAnswer: 'I sometimes cook at night.',
        explanation:
          '“Sometimes” puede ir al inicio o antes del verbo principal. “At night” e “in the evening” cambian ligeramente el momento, pero ambas son válidas aquí.',
      },
      {
        id: 'en-model-08',
        kind: 'open',
        phase: 'transferir',
        prompt:
          'Describe una actividad de tu rutina y su frecuencia en una oración.',
        hint: 'Ejemplo: I usually read before bed.',
        accepted: [],
        modelAnswer: 'I usually read before bed.',
        explanation:
          'Respuesta abierta: debe incluir una actividad cotidiana y una expresión de frecuencia en una oración comprensible.',
      },
    ],
  },
  ja: {
    language: 'ja',
    title: 'Hiragana: las vocales',
    level: 'Pre-A1',
    duration: '10–12 min',
    objective:
      'Puedo reconocer, ordenar y escribir las cinco vocales del hiragana.',
    introduction: {
      summary:
        'El hiragana es uno de los sistemas de escritura del japonés. En este módulo aprenderás primero sus cinco vocales.',
      concepts: [
        {
          title: 'Las cinco vocales',
          explanation:
            'Cada símbolo representa una mora. Léelos siempre en este orden.',
          examples: ['あ = a', 'い = i', 'う = u', 'え = e', 'お = o'],
        },
        {
          title: 'Forma y sonido',
          explanation:
            'La pronunciación es breve y estable. う se aproxima a una “u” sin redondear mucho los labios.',
          examples: ['あ → a, como en “casa”', 'え → e, como en “mesa”'],
        },
        {
          title: 'Orden básico',
          explanation:
            'El orden あ・い・う・え・お será la base para aprender después las filas de consonantes.',
          examples: ['あ → い → う → え → お'],
        },
      ],
      tip: 'Mira el carácter, pronúncialo y trázalo mentalmente. Puedes volver a esta guía durante la práctica.',
    },
    exercises: [
      {
        id: 'ja-model-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '¿Qué sonido representa あ?',
        hint: 'Elige la vocal correcta.',
        options: ['a', 'i', 'u'],
        answer: 'a',
        explanation: 'あ representa la vocal “a”.',
      },
      {
        id: 'ja-model-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Relaciona el carácter い con su sonido.',
        hint: 'Es una vocal breve y clara.',
        options: ['e', 'i', 'o'],
        answer: 'i',
        explanation: 'い representa el sonido “i”.',
      },
      {
        id: 'ja-model-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Cuál se pronuncia “u”?',
        hint: 'Reconoce la forma correcta.',
        options: ['う', 'え', 'お'],
        answer: 'う',
        explanation:
          'う corresponde a “u”; fonéticamente suele realizarse cerca de [ɯ], con poca labialización.',
      },
      {
        id: 'ja-model-04',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Selecciona la secuencia correcta.',
        hint: 'El orden comienza con a, i, u…',
        options: [
          'あ・い・う・え・お',
          'あ・え・い・お・う',
          'お・え・う・い・あ',
        ],
        answer: 'あ・い・う・え・お',
        explanation: 'El orden básico es あ、い、う、え、お.',
      },
      {
        id: 'ja-model-05',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena las vocales del hiragana.',
        hint: 'Construye la secuencia completa.',
        tokens: ['お', 'う', 'あ', 'え', 'い'],
        answer: ['あ', 'い', 'う', 'え', 'お'],
        explanation: 'La secuencia vocálica fija es あ・い・う・え・お.',
      },
      {
        id: 'ja-model-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Qué carácter falta? あ・い・＿・え・お',
        hint: 'Está entre い y え.',
        options: ['う', 'か', 'ん'],
        answer: 'う',
        explanation: 'La tercera vocal es う.',
      },
      {
        id: 'ja-model-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en hiragana la vocal “e”.',
        hint: 'Es un solo carácter.',
        accepted: ['え'],
        modelAnswer: 'え',
        explanation: 'え representa el sonido “e”.',
      },
      {
        id: 'ja-model-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe las cinco vocales en orden, sin romanización.',
        hint: 'Puedes separarlas con espacios o signos japoneses.',
        accepted: [
          'あいうえお',
          'あ い う え お',
          'あ・い・う・え・お',
          'あ、い、う、え、お',
        ],
        modelAnswer: 'あいうえお',
        explanation:
          'Se aceptan las cinco vocales en orden con o sin separadores.',
      },
    ],
  },
  fr: {
    language: 'fr',
    title: 'Premiers contacts',
    level: 'A1.1',
    duration: '10–12 min',
    objective:
      'Puedo saludar, despedirme y elegir entre tu y vous en intercambios básicos.',
    introduction: {
      summary:
        'Aprenderás expresiones breves para iniciar una conversación y elegir un tratamiento adecuado.',
      concepts: [
        {
          title: 'Saludos',
          explanation:
            'Bonjour sirve durante el día; bonsoir se usa al final de la tarde o por la noche. Salut es informal.',
          examples: ['Bonjour, madame.', 'Salut, Léa !'],
        },
        {
          title: 'Presentarte',
          explanation:
            'La estructura je m’appelle seguida del nombre significa “me llamo”.',
          examples: ['Je m’appelle Diana.', 'Bonjour, je m’appelle Santiago.'],
        },
        {
          title: 'Tu o vous',
          explanation: 'Tu es informal y singular. Vous es formal o plural.',
          examples: ['Comment tu t’appelles ?', 'Comment vous vous appelez ?'],
        },
      ],
      tip: 'Antes de elegir una frase, fíjate si la situación es formal o entre personas cercanas.',
    },
    exercises: [
      {
        id: 'fr-model-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '¿Qué saludo puedes usar durante el día?',
        hint: 'Elige la opción neutral.',
        options: ['Bonjour', 'Bonsoir', 'Bonne nuit'],
        answer: 'Bonjour',
        explanation:
          '“Bonjour” es el saludo habitual durante el día; “bonsoir” se usa por la tarde-noche y “bonne nuit” al irse a dormir.',
      },
      {
        id: 'fr-model-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'Hablas por primera vez con una profesora. ¿Qué eliges?',
        hint: 'Usa el tratamiento formal.',
        options: [
          'Comment tu t’appelles ?',
          'Comment vous vous appelez ?',
          'Ça roule ?',
        ],
        answer: 'Comment vous vous appelez ?',
        explanation: '“Vous” es apropiado en un primer contacto formal.',
      },
      {
        id: 'fr-model-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Qué expresión significa “Muchas gracias”?',
        hint: 'Busca una fórmula de cortesía.',
        options: ['Merci beaucoup', 'S’il vous plaît', 'Excusez-moi'],
        answer: 'Merci beaucoup',
        explanation: '“Merci beaucoup” significa “Muchas gracias”.',
      },
      {
        id: 'fr-model-04',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Tu ami dit « Salut ! ». Quelle réponse est naturelle ?',
        hint: 'Es un contexto informal.',
        options: ['Salut !', 'Bonne nuit, madame.', 'Je vous en prie.'],
        answer: 'Salut !',
        explanation:
          'Entre amigos, “Salut !” funciona como saludo o despedida informal.',
      },
      {
        id: 'fr-model-05',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena la presentación.',
        hint: 'Forma “Me llamo Diana”.',
        tokens: ['Diana', 'm’appelle', 'Je'],
        answer: ['Je', 'm’appelle', 'Diana'],
        explanation: 'La estructura es “Je m’appelle + nombre”.',
      },
      {
        id: 'fr-model-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Completa: Bonjour, je ___ Santiago.',
        hint: 'Verbo s’appeler.',
        options: ['m’appelle', 't’appelles', 'appelez'],
        answer: 'm’appelle',
        explanation: 'Con “je”, la forma es “je m’appelle”.',
      },
      {
        id: 'fr-model-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en francés: “Hola, me llamo Diana”.',
        hint: 'Usa Bonjour y je m’appelle.',
        accepted: [
          'Bonjour, je m’appelle Diana.',
          'Bonjour ! Je m’appelle Diana.',
          'Bonjour je m’appelle Diana',
        ],
        modelAnswer: 'Bonjour, je m’appelle Diana.',
        explanation: 'Se aceptan variaciones razonables de puntuación.',
      },
      {
        id: 'fr-model-08',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Saluda y preséntate en una frase en francés.',
        hint: 'Puedes usar Bonjour/Salut + je m’appelle…',
        accepted: [],
        modelAnswer: 'Bonjour, je m’appelle Santiago.',
        explanation:
          'Respuesta abierta: debe incluir un saludo apropiado y una presentación comprensible.',
      },
    ],
  },
  ru: {
    language: 'ru',
    title: 'Кириллица: первые буквы',
    level: 'Pre-A1',
    duration: '10–12 min',
    objective:
      'Puedo reconocer y ordenar letras cirílicas transparentes y distinguir Р de la P latina.',
    introduction: {
      summary:
        'El ruso usa el alfabeto cirílico. Algunas letras son familiares y otras parecen latinas, pero representan otro sonido.',
      concepts: [
        {
          title: 'Letras transparentes',
          explanation:
            'Estas letras se parecen a las latinas y conservan un sonido fácil de reconocer.',
          examples: ['А = a', 'К = k', 'М = m', 'О = o', 'Т = t'],
        },
        {
          title: 'Amigos falsos',
          explanation:
            'No leas Р como p ni Н como h: sus sonidos son distintos.',
          examples: ['Р = r', 'Н = n'],
        },
        {
          title: 'Tu primera lectura',
          explanation:
            'Combinando letras transparentes ya puedes leer una palabra sencilla.',
          examples: ['М-А-М-А → МАМА → mama'],
        },
      ],
      tip: 'Observa primero la forma y luego di el sonido; evita interpretar automáticamente la letra como si fuera latina.',
    },
    exercises: [
      {
        id: 'ru-model-01',
        kind: 'choice',
        phase: 'activar',
        prompt: '¿Qué sonido representa la letra cirílica М?',
        hint: 'Es transparente para hispanohablantes.',
        options: ['m', 'n', 't'],
        answer: 'm',
        explanation: 'La letra cirílica М representa /m/.',
      },
      {
        id: 'ru-model-02',
        kind: 'choice',
        phase: 'comprender',
        prompt: '¿Qué sonido representa Т?',
        hint: 'Su forma y sonido son familiares.',
        options: ['t', 'g', 'd'],
        answer: 't',
        explanation: 'Т representa /t/.',
      },
      {
        id: 'ru-model-03',
        kind: 'choice',
        phase: 'comprender',
        prompt: 'La letra rusa Р se pronuncia…',
        hint: 'No confíes en su apariencia latina.',
        options: ['r', 'p', 'b'],
        answer: 'r',
        explanation:
          'La Р cirílica representa /r/, aunque se parece a la P latina.',
      },
      {
        id: 'ru-model-04',
        kind: 'choice',
        phase: 'practicar',
        prompt: '¿Cuál palabra se lee aproximadamente “mama”?',
        hint: 'Busca letras transparentes.',
        options: ['МАМА', 'РАРА', 'ТАТА'],
        answer: 'МАМА',
        explanation: 'М-А-М-А se lee “mama”.',
      },
      {
        id: 'ru-model-05',
        kind: 'order',
        phase: 'practicar',
        prompt: 'Ordena las letras para formar МАМА.',
        hint: 'Alterna М y А.',
        tokens: ['А', 'М', 'А', 'М'],
        answer: ['М', 'А', 'М', 'А'],
        explanation: 'La secuencia М-А-М-А forma МАМА.',
      },
      {
        id: 'ru-model-06',
        kind: 'choice',
        phase: 'practicar',
        prompt: 'Selecciona la pareja con el mismo sonido.',
        hint: 'Compara cirílico y latino.',
        options: ['К — k', 'Р — p', 'Н — h'],
        answer: 'К — k',
        explanation: 'К representa /k/. Р representa /r/ y Н representa /n/.',
      },
      {
        id: 'ru-model-07',
        kind: 'open',
        phase: 'transferir',
        prompt: 'Escribe en cirílico la secuencia “MAMA”.',
        hint: 'Usa М y А cirílicas.',
        accepted: ['МАМА'],
        modelAnswer: 'МАМА',
        explanation: 'La forma cirílica correcta es МАМА.',
      },
      {
        id: 'ru-model-08',
        kind: 'open',
        phase: 'transferir',
        prompt:
          'Escribe las letras cirílicas equivalentes a K, M, O y T, en ese orden.',
        hint: 'Son letras transparentes.',
        accepted: ['КМОТ', 'К М О Т', 'К-М-О-Т', 'К, М, О, Т'],
        modelAnswer: 'К М О Т',
        explanation: 'Las equivalencias transparentes son К, М, О y Т.',
      },
    ],
  },
  pt: portugueseLessons['pt-01'],
};
