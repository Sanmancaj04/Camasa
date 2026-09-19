import { createLesson, type LessonSpec } from '@/lib/lesson-factory';

const japaneseSpecs: LessonSpec[] = [
  {
    id: 'ja-20',
    language: 'ja',
    title: 'Proyecto de vida diaria',
    level: 'A2 consolidación',
    objective:
      'Puedo resolver una secuencia de tareas cotidianas usando japonés sencillo.',
    summary:
      'Integra compras, transporte, horarios, reglas y estrategias para reparar la comunicación.',
    concepts: [
      {
        title: 'Resolver tareas',
        explanation: 'Combina preguntas conocidas según la meta.',
        examples: ['これはいくらですか。', '駅へはどうやって行きますか。'],
      },
      {
        title: 'Reparar',
        explanation: 'Pide repetición o una explicación más sencilla.',
        examples: ['もう一度お願いします。', 'もっとゆっくり話してください。'],
      },
      {
        title: 'Kanji elemental',
        explanation: 'Reconoce palabras frecuentes dentro de frases conocidas.',
        examples: ['駅・時間・入口・出口'],
      },
    ],
    tip: 'Identifica primero la meta práctica y luego elige la pregunta más directa.',
    choices: [
      {
        prompt: 'Quieres saber el precio. ¿Qué preguntas?',
        hint: 'Usa いくら.',
        options: [
          'これはいくらですか。',
          'これはどこですか。',
          'これは何時ですか。',
        ],
        answer: 'これはいくらですか。',
        explanation: 'いくら pregunta el precio.',
      },
      {
        prompt: 'No entendiste. ¿Qué dices?',
        hint: 'Pide repetición.',
        options: [
          'もう一度お願いします。',
          'だいじょうぶです。',
          'いただきます。',
        ],
        answer: 'もう一度お願いします。',
        explanation: 'La frase pide que repitan.',
      },
      {
        prompt: '¿Qué kanji significa estación?',
        hint: 'Aparece en 駅へ行きます.',
        options: ['駅', '時', '口'],
        answer: '駅',
        explanation: '駅 significa estación.',
      },
      {
        prompt: 'Una señal dice 出口. ¿Qué indica?',
        hint: '出 + 口.',
        options: ['salida', 'entrada', 'horario'],
        answer: 'salida',
        explanation: '出口 significa salida.',
      },
      {
        prompt: '¿Qué pregunta averigua cómo llegar?',
        hint: 'Usa どうやって.',
        options: [
          '駅へはどうやって行きますか。',
          '駅はいくらですか。',
          '駅を食べますか。',
        ],
        answer: '駅へはどうやって行きますか。',
        explanation: 'どうやって pregunta el medio o la ruta.',
      },
    ],
    order: {
      prompt: 'Ordena la petición de habla lenta.',
      hint: 'Adverbio + verbo + ください.',
      tokens: ['話してください。', 'もっとゆっくり'],
      answer: ['もっとゆっくり', '話してください。'],
      explanation: 'La frase pide que hablen más despacio.',
    },
    exactOpen: {
      prompt: 'Escribe: “¿Dónde está la entrada?”.',
      hint: 'Usa 入口 y どこですか.',
      accepted: ['入口はどこですか。', '入口はどこですか'],
      modelAnswer: '入口はどこですか。',
      explanation: '入口 significa entrada.',
    },
    freeOpen: {
      prompt: 'Escribe una misión cotidiana con tres intercambios.',
      hint: 'Incluye una pregunta, una aclaración y un cierre.',
      modelAnswer:
        '駅はどこですか。すみません、もう一度お願いします。ありがとうございます。',
      explanation: 'Debe resolver una necesidad y reparar la comunicación.',
    },
  },
  {
    id: 'ja-21',
    language: 'ja',
    title: 'Relatar experiencias',
    level: 'B1.1',
    objective:
      'Puedo narrar una experiencia personal con una secuencia clara y detalles relevantes.',
    summary:
      'Usa la forma informal dentro de estructuras narrativas y conecta acciones con とき y secuenciadores.',
    concepts: [
      {
        title: '普通形',
        explanation:
          'La forma llana aparece antes de とき y dentro de frases complejas.',
        examples: ['日本へ行ったとき', '時間があるとき'],
      },
      {
        title: 'Momento',
        explanation:
          'Vるとき sitúa algo antes o durante; Vたとき mira desde después de la acción.',
        examples: [
          '寝るとき、電気を消します。',
          '駅に着いたとき、電話しました。',
        ],
      },
      {
        title: 'Secuencia',
        explanation: 'まず, それから y 最後に ordenan el relato.',
        examples: ['まず切符を買いました。', '最後に写真を撮りました。'],
      },
    ],
    tip: 'Comprueba si la acción de とき ya terminó para elegir forma presente o pasada.',
    choices: [
      {
        prompt: '「日本へ行ったとき」 significa…',
        hint: '行った es pasado.',
        options: [
          'cuando fui a Japón',
          'cuando voy a Japón',
          'para ir a Japón',
        ],
        answer: 'cuando fui a Japón',
        explanation: '行ったとき sitúa el momento después de ir.',
      },
      {
        prompt: 'Completa: 駅に___とき、電話しました。',
        hint: 'Primero llegué y entonces llamé.',
        options: ['着いた', '着く', '着いて'],
        answer: '着いた',
        explanation: '着いたとき presenta la llegada completada.',
      },
      {
        prompt: '¿Qué marcador abre la secuencia?',
        hint: 'Equivale a primero.',
        options: ['まず', '最後に', 'でも'],
        answer: 'まず',
        explanation: 'まず introduce el primer paso.',
      },
      {
        prompt: '¿Qué forma es 普通形 de 食べました?',
        hint: 'Forma pasada llana.',
        options: ['食べた', '食べる', '食べて'],
        answer: '食べた',
        explanation: '食べた es pasado informal.',
      },
      {
        prompt: '¿Qué frase aporta un detalle relevante?',
        hint: 'Añade contexto temporal.',
        options: [
          '雨が降っていたので、傘を買いました。',
          '傘です。',
          '雨、傘。',
        ],
        answer: '雨が降っていたので、傘を買いました。',
        explanation: 'La causa conecta contexto y acción.',
      },
    ],
    order: {
      prompt: 'Ordena el relato.',
      hint: 'Primero, después, al final.',
      tokens: [
        '最後に、家へ帰りました。',
        'まず、友だちに会いました。',
        'それから、昼ご飯を食べました。',
      ],
      answer: [
        'まず、友だちに会いました。',
        'それから、昼ご飯を食べました。',
        '最後に、家へ帰りました。',
      ],
      explanation: 'Los conectores hacen visible la secuencia.',
    },
    exactOpen: {
      prompt: 'Escribe: “Cuando llegué a casa, descansé”.',
      hint: 'Usa 家に帰ったとき y 休みました.',
      accepted: ['家に帰ったとき、休みました。', '家に帰ったとき、休みました'],
      modelAnswer: '家に帰ったとき、休みました。',
      explanation: '帰ったとき sitúa el descanso tras llegar.',
    },
    freeOpen: {
      prompt: 'Narra una experiencia en cuatro frases.',
      hint: 'Usa まず, それから y 最後に.',
      modelAnswer:
        'まず、京都へ行きました。それから、お寺を見ました。雨が降ったとき、カフェに入りました。最後に、お土産を買いました。',
      explanation: 'Debe tener secuencia y al menos un detalle contextual.',
    },
  },
  {
    id: 'ja-22',
    language: 'ja',
    title: 'Explicar razones',
    level: 'B1.1',
    objective:
      'Puedo explicar decisiones, causas y consecuencias sobre temas familiares.',
    summary:
      'Distingue razones conversacionales con から/ので y propósitos con ために.',
    concepts: [
      {
        title: 'から',
        explanation: 'Presenta una razón directa y frecuente en conversación.',
        examples: ['雨ですから、行きません。'],
      },
      {
        title: 'ので',
        explanation: 'Presenta una razón con tono explicativo o más suave.',
        examples: ['用事があるので、先に帰ります。'],
      },
      {
        title: 'ために',
        explanation: 'Vる/Nの + ために expresa propósito.',
        examples: ['日本で働くために、日本語を勉強しています。'],
      },
    ],
    tip: 'Razón: から/ので. Meta que motiva una acción: ために.',
    choices: [
      {
        prompt: '「雨ですから、行きません。」 ¿Por qué no va?',
        hint: 'La razón está antes de から.',
        options: ['Porque llueve.', 'Porque hace calor.', 'Porque ya fue.'],
        answer: 'Porque llueve.',
        explanation: '雨ですから introduce la causa.',
      },
      {
        prompt: 'Completa suavemente: 用事がある___、先に帰ります。',
        hint: 'Usa la forma explicativa.',
        options: ['ので', 'ために', 'でも'],
        answer: 'ので',
        explanation: 'ので conecta la razón con tono explicativo.',
      },
      {
        prompt: '¿Cuál expresa propósito?',
        hint: 'Busca ために.',
        options: [
          '日本で働くために勉強します。',
          '雨なので帰ります。',
          '忙しいから寝ます。',
        ],
        answer: '日本で働くために勉強します。',
        explanation: '働くために explica la meta del estudio.',
      },
      {
        prompt: '¿Cuál es causa y consecuencia?',
        hint: 'La segunda parte es resultado.',
        options: [
          '電車が遅れたので、遅刻しました。',
          '電車に乗るために、駅です。',
          '電車やバス。',
        ],
        answer: '電車が遅れたので、遅刻しました。',
        explanation: 'El retraso del tren causa la tardanza.',
      },
      {
        prompt: '¿Qué respuesta explica una decisión?',
        hint: 'Debe contestar なぜ.',
        options: [
          '近いから、この店にしました。',
          'この店をしますか。',
          '店は近いですか。',
        ],
        answer: '近いから、この店にしました。',
        explanation: 'から justifica la elección.',
      },
    ],
    order: {
      prompt: 'Ordena el propósito.',
      hint: 'Meta + ために + acción.',
      tokens: ['毎日練習しています。', '上手になるために、'],
      answer: ['上手になるために、', '毎日練習しています。'],
      explanation: 'ために enlaza objetivo y acción.',
    },
    exactOpen: {
      prompt: 'Escribe: “Como estoy cansado, descanso”.',
      hint: 'Usa 疲れたので.',
      accepted: [
        '疲れたので、休みます。',
        '疲れたので休みます。',
        '疲れたから、休みます。',
      ],
      modelAnswer: '疲れたので、休みます。',
      explanation: 'ので/から introducen la razón.',
    },
    freeOpen: {
      prompt: 'Explica una decisión, su razón y su propósito.',
      hint: 'Usa ので o から y ために.',
      modelAnswer:
        '仕事で日本語が必要なので、クラスに入りました。上手になるために、毎日勉強します。',
      explanation: 'Debe diferenciar causa y finalidad.',
    },
  },
  {
    id: 'ja-23',
    language: 'ja',
    title: 'Opiniones cotidianas',
    level: 'B1.1',
    objective:
      'Puedo expresar una opinión sencilla y reaccionar respetuosamente a otra.',
    summary:
      'Expresa postura con と思います, posibilidad con かもしれません y desacuerdo cortés.',
    concepts: [
      {
        title: 'Opinión',
        explanation: '普通形 + と思います presenta lo que piensas.',
        examples: ['この方法がいいと思います。'],
      },
      {
        title: 'Posibilidad',
        explanation: '普通形 + かもしれません expresa incertidumbre.',
        examples: ['明日は雨かもしれません。'],
      },
      {
        title: 'Reaccionar',
        explanation:
          'そうですね reconoce; でも o 私は…と思います introduce otra perspectiva.',
        examples: ['そうですね。でも、少し高いと思います。'],
      },
    ],
    tip: 'Reconoce primero la opinión ajena y después añade tu matiz.',
    choices: [
      {
        prompt: '「便利だと思います。」 ¿Qué expresa?',
        hint: 'と思います marca postura.',
        options: [
          'Creo que es conveniente.',
          'Fue conveniente.',
          'Debe ser conveniente.',
        ],
        answer: 'Creo que es conveniente.',
        explanation: 'と思います presenta una opinión.',
      },
      {
        prompt: 'Completa: 明日は雨___。',
        hint: 'No estás seguro.',
        options: ['かもしれません', 'と思いましたか', 'にします'],
        answer: 'かもしれません',
        explanation: 'かもしれません expresa posibilidad.',
      },
      {
        prompt: '¿Cuál discrepa con respeto?',
        hint: 'Reconoce antes de contrastar.',
        options: [
          'そうですね。でも、私は少し違うと思います。',
          '違います。終わり。',
          'あなたはだめです。',
        ],
        answer: 'そうですね。でも、私は少し違うと思います。',
        explanation: 'La frase reconoce y matiza.',
      },
      {
        prompt: '¿Qué forma va antes de と思います?',
        hint: 'Usa forma llana.',
        options: ['便利だ', '便利です', '便利に'],
        answer: '便利だ',
        explanation: 'Los nombres y adjetivos な usan だ antes de と思います.',
      },
      {
        prompt: '¿Cuál evita afirmar con certeza?',
        hint: 'Busca posibilidad.',
        options: [
          'この計画は難しいかもしれません。',
          'この計画は絶対に失敗します。',
          '計画がありません。',
        ],
        answer: 'この計画は難しいかもしれません。',
        explanation: 'かもしれません reduce la certeza.',
      },
    ],
    order: {
      prompt: 'Ordena la opinión.',
      hint: 'Contenido + と思います.',
      tokens: ['この案が', 'いいと思います。'],
      answer: ['この案が', 'いいと思います。'],
      explanation: 'La proposición precede a と思います.',
    },
    exactOpen: {
      prompt: 'Escribe: “Creo que mañana hará frío”.',
      hint: 'Usa 明日は寒いと思います.',
      accepted: ['明日は寒いと思います。', '明日は寒いと思います'],
      modelAnswer: '明日は寒いと思います。',
      explanation: '寒い en forma llana precede a と思います.',
    },
    freeOpen: {
      prompt: 'Da una opinión, reconoce otra y añade un matiz.',
      hint: 'Usa と思います, そうですね y でも.',
      modelAnswer:
        '電車が便利だと思います。そうですね。でも、バスのほうが安いかもしれません。',
      explanation: 'Debe mostrar postura y reacción respetuosa.',
    },
  },
  {
    id: 'ja-24',
    language: 'ja',
    title: 'Noticias cercanas',
    level: 'B1.1',
    objective:
      'Puedo comprender los puntos principales de noticias claras sobre temas conocidos.',
    summary:
      'Reconoce hechos en pasiva, información de segunda mano con そうです y lenguaje informativo.',
    concepts: [
      {
        title: '受身',
        explanation: 'La pasiva destaca la persona o cosa afectada.',
        examples: ['新しい駅が作られました。'],
      },
      {
        title: 'そうです',
        explanation:
          '普通形 + そうです comunica información recibida de otra fuente.',
        examples: ['ニュースによると、台風が来るそうです。'],
      },
      {
        title: 'Puntos principales',
        explanation: 'Identifica evento, lugar, fecha y fuente.',
        examples: ['市によると、来月始まります。'],
      },
    ],
    tip: 'No confundas “parece” con el そうです de información transmitida; aquí hay una fuente.',
    choices: [
      {
        prompt: '「新しい駅が作られました。」 ¿Qué ocurrió?',
        hint: '作られました es pasiva.',
        options: [
          'Se construyó una estación nueva.',
          'La estación construyó algo.',
          'Cerraron todas las estaciones.',
        ],
        answer: 'Se construyó una estación nueva.',
        explanation: 'La pasiva enfoca la estación creada.',
      },
      {
        prompt:
          '「ニュースによると、台風が来るそうです。」 ¿Qué marca la fuente?',
        hint: 'Equivale a según las noticias.',
        options: ['ニュースによると', '台風が', '来る'],
        answer: 'ニュースによると',
        explanation: 'によると identifica la fuente.',
      },
      {
        prompt: '¿Qué significa 来るそうです?',
        hint: 'Es información recibida.',
        options: ['Dicen que vendrá.', 'Parece venir visualmente.', 'Ya vino.'],
        answer: 'Dicen que vendrá.',
        explanation: '普通形 + そうです transmite información.',
      },
      {
        prompt: '¿Cuál parece un titular neutral?',
        hint: 'Evita valoración.',
        options: [
          '市内に新しい病院が開かれました',
          'すばらしい病院が最高です',
          '病院はぜったい必要',
        ],
        answer: '市内に新しい病院が開かれました',
        explanation: 'Informa del hecho sin juicio.',
      },
      {
        prompt: '¿Qué dato responde いつ?',
        hint: 'Busca fecha.',
        options: ['来月から', '市役所で', '百人が'],
        answer: '来月から',
        explanation: '来月から indica desde cuándo.',
      },
    ],
    order: {
      prompt: 'Ordena la noticia.',
      hint: 'Lugar + sujeto + pasiva.',
      tokens: ['開かれました。', '新しい図書館が', '駅の近くに'],
      answer: ['駅の近くに', '新しい図書館が', '開かれました。'],
      explanation: 'La frase sitúa y presenta el hecho.',
    },
    exactOpen: {
      prompt: 'Escribe: “Según las noticias, nevará”.',
      hint: 'Usa ニュースによると y 雪が降るそうです.',
      accepted: [
        'ニュースによると、雪が降るそうです。',
        'ニュースによると雪が降るそうです。',
      ],
      modelAnswer: 'ニュースによると、雪が降るそうです。',
      explanation: 'La estructura atribuye la previsión.',
    },
    freeOpen: {
      prompt: 'Resume una noticia en dos frases e indica la fuente.',
      hint: 'Incluye によると y el hecho principal.',
      modelAnswer:
        '市によると、新しいバス路線が作られるそうです。来月から運行します。',
      explanation: 'Debe distinguir fuente, hecho y fecha.',
    },
  },
  {
    id: 'ja-25',
    language: 'ja',
    title: 'Trabajo y estudio',
    level: 'B1.1',
    objective:
      'Puedo describir responsabilidades, procedimientos y metas personales.',
    summary:
      'Explica reglas establecidas con ことになっています y hábitos deliberados con ようにしています.',
    concepts: [
      {
        title: 'Regla establecida',
        explanation:
          'Vる/ない + ことになっています expresa una norma o procedimiento.',
        examples: ['九時までに来ることになっています。'],
      },
      {
        title: 'Hábito deliberado',
        explanation:
          'Vる/ない + ようにしています expresa un esfuerzo habitual.',
        examples: ['毎日復習するようにしています。'],
      },
      {
        title: 'Metas',
        explanation: '目標は…ことです presenta un objetivo concreto.',
        examples: ['目標は日本語で発表することです。'],
      },
    ],
    tip: 'Norma externa: ことになっています. Esfuerzo personal: ようにしています.',
    choices: [
      {
        prompt: '「制服を着ることになっています。」 ¿Qué expresa?',
        hint: 'Es una norma.',
        options: [
          'Está establecido que se use uniforme.',
          'Quiero comprar uniforme.',
          'Usé uniforme una vez.',
        ],
        answer: 'Está establecido que se use uniforme.',
        explanation: 'ことになっています presenta una regla.',
      },
      {
        prompt: '「毎日復習するようにしています。」 ¿Qué expresa?',
        hint: 'Es un hábito intencional.',
        options: [
          'Procuro repasar todos los días.',
          'Está prohibido repasar.',
          'Repasé ayer solamente.',
        ],
        answer: 'Procuro repasar todos los días.',
        explanation: 'ようにしています expresa esfuerzo habitual.',
      },
      {
        prompt: '¿Cuál es una meta?',
        hint: 'Busca 目標.',
        options: [
          '目標は試験に合格することです。',
          '試験は昨日でした。',
          '試験を受けません。',
        ],
        answer: '目標は試験に合格することです。',
        explanation: 'La estructura define un objetivo.',
      },
      {
        prompt: '¿Cuál es un procedimiento?',
        hint: 'Debe indicar algo establecido.',
        options: [
          '終わったら、報告することになっています。',
          '報告したいです。',
          '報告が好きです。',
        ],
        answer: '終わったら、報告することになっています。',
        explanation: 'La frase presenta una acción requerida.',
      },
      {
        prompt: '¿Qué hábito mejora el estudio?',
        hint: 'Usa ようにしています.',
        options: [
          '新しい言葉を毎日使うようにしています。',
          '言葉を使ってはいけません。',
          '言葉でした。',
        ],
        answer: '新しい言葉を毎日使うようにしています。',
        explanation: 'Expresa práctica deliberada.',
      },
    ],
    order: {
      prompt: 'Ordena la regla.',
      hint: 'Acción + ことになっています.',
      tokens: ['ことになっています。', '八時に始める'],
      answer: ['八時に始める', 'ことになっています。'],
      explanation: 'La estructura indica una hora establecida.',
    },
    exactOpen: {
      prompt: 'Escribe: “Procuro llegar temprano”.',
      hint: 'Usa 早く来るようにしています.',
      accepted: ['早く来るようにしています。', '早く来るようにしています'],
      modelAnswer: '早く来るようにしています。',
      explanation: 'ようにしています presenta el esfuerzo habitual.',
    },
    freeOpen: {
      prompt: 'Describe una responsabilidad, un hábito y una meta.',
      hint: 'Usa las tres estructuras de la guía.',
      modelAnswer:
        '毎週報告することになっています。間違いを確認するようにしています。目標はチームをまとめることです。',
      explanation: 'Debe distinguir norma, práctica y objetivo.',
    },
  },
  {
    id: 'ja-26',
    language: 'ja',
    title: 'Resolver problemas',
    level: 'B1.2',
    objective:
      'Puedo explicar un problema, pedir ayuda y negociar una solución práctica.',
    summary:
      'Explica un resultado no deseado con てしまいました, pide ayuda y plantea condiciones con たら.',
    concepts: [
      {
        title: 'Problema',
        explanation: 'Vてしまいました expresa finalización y a menudo pesar.',
        examples: ['鍵をなくしてしまいました。'],
      },
      {
        title: 'Pedir ayuda',
        explanation: 'Vてもらえませんか solicita una acción de forma cortés.',
        examples: ['確認してもらえませんか。'],
      },
      {
        title: 'Condición',
        explanation: 'Vたら presenta una condición práctica.',
        examples: ['見つかったら、連絡してください。'],
      },
    ],
    tip: 'Explica el problema antes de pedir una acción específica.',
    choices: [
      {
        prompt: '「鍵をなくしてしまいました。」 ¿Qué pasó?',
        hint: 'なくす es perder.',
        options: [
          'Perdí las llaves.',
          'Encontré las llaves.',
          'Voy a copiar las llaves.',
        ],
        answer: 'Perdí las llaves.',
        explanation: 'てしまいました comunica el resultado problemático.',
      },
      {
        prompt: '¿Cuál pide ayuda cortésmente?',
        hint: 'Busca てもらえませんか.',
        options: [
          'もう一度確認してもらえませんか。',
          '確認しなさい。',
          '確認しましたかね。',
        ],
        answer: 'もう一度確認してもらえませんか。',
        explanation: 'La forma solicita que otra persona compruebe.',
      },
      {
        prompt: '「見つかったら、連絡してください。」 ¿Cuándo debe llamar?',
        hint: 'たら marca condición.',
        options: [
          'Si aparece.',
          'Antes de buscar.',
          'Aunque no aparezca nunca.',
        ],
        answer: 'Si aparece.',
        explanation: '見つかったら significa “si/cuando se encuentra”.',
      },
      {
        prompt: '¿Cuál explica primero y pide después?',
        hint: 'Busca dos funciones completas.',
        options: [
          '予約を間違えてしまいました。変更してもらえませんか。',
          '変更です。',
          '間違いませんか。',
        ],
        answer: '予約を間違えてしまいました。変更してもらえませんか。',
        explanation: 'Presenta problema y solicitud concreta.',
      },
      {
        prompt: '¿Qué solución es condicional?',
        hint: 'Busca たら.',
        options: [
          '空いていたら、別の部屋を使いましょう。',
          '別の部屋でした。',
          '部屋が好きです。',
        ],
        answer: '空いていたら、別の部屋を使いましょう。',
        explanation: 'La solución depende de disponibilidad.',
      },
    ],
    order: {
      prompt: 'Ordena la petición.',
      hint: 'Objeto + verbo + もらえませんか.',
      tokens: ['もらえませんか。', 'この書類を', '見て'],
      answer: ['この書類を', '見て', 'もらえませんか。'],
      explanation: 'La frase pide revisar el documento.',
    },
    exactOpen: {
      prompt: 'Escribe: “Olvidé el teléfono”.',
      hint: 'Usa 忘れてしまいました.',
      accepted: ['電話を忘れてしまいました。', '電話を忘れてしまいました'],
      modelAnswer: '電話を忘れてしまいました。',
      explanation: 'てしまいました expresa el resultado lamentado.',
    },
    freeOpen: {
      prompt: 'Explica un problema, pide ayuda y ofrece una alternativa.',
      hint: 'Usa てしまいました, てもらえませんか y たら.',
      modelAnswer:
        '切符をなくしてしまいました。調べてもらえませんか。見つからなかったら、新しい切符を買います。',
      explanation: 'Debe cubrir problema, petición y plan condicional.',
    },
  },
  {
    id: 'ja-27',
    language: 'ja',
    title: 'Cultura y recomendaciones',
    level: 'B1.2',
    objective:
      'Puedo reseñar una experiencia cultural y recomendarla dando razones.',
    summary:
      'Acumula razones con し, compara con ほうが y formula recomendaciones matizadas.',
    concepts: [
      {
        title: 'Varias razones',
        explanation:
          '～し、～し enumera razones sin cerrar necesariamente la lista.',
        examples: ['景色もきれいだし、料理もおいしいです。'],
      },
      {
        title: 'Comparar',
        explanation: 'AよりBのほうが… compara opciones.',
        examples: ['映画より本のほうが詳しいです。'],
      },
      {
        title: 'Recomendar',
        explanation:
          'Vたほうがいいです aconseja; おすすめです recomienda de forma general.',
        examples: ['予約したほうがいいです。', 'この展覧会がおすすめです。'],
      },
    ],
    tip: 'Una recomendación útil combina valoración, razones y consejo práctico.',
    choices: [
      {
        prompt: '¿Cuántas razones sugiere ～し、～し?',
        hint: 'La estructura acumula.',
        options: ['Más de una.', 'Ninguna.', 'Solo una obligatoriamente.'],
        answer: 'Más de una.',
        explanation: 'し permite enumerar varias razones.',
      },
      {
        prompt: '「映画より本のほうが詳しいです。」 ¿Cuál tiene más detalle?',
        hint: 'Bのほうが marca el elemento comparado.',
        options: ['El libro.', 'La película.', 'Son iguales.'],
        answer: 'El libro.',
        explanation: '本のほうが señala al libro.',
      },
      {
        prompt: '¿Qué consejo es apropiado para un lugar popular?',
        hint: 'Recomienda reservar.',
        options: [
          '予約したほうがいいです。',
          '予約してはいけません。',
          '予約でした。',
        ],
        answer: '予約したほうがいいです。',
        explanation: 'La frase aconseja reservar.',
      },
      {
        prompt: '¿Cuál es una reseña razonada?',
        hint: 'Incluye dos cualidades.',
        options: [
          '音楽もいいし、話もおもしろいです。',
          'いいです。',
          '見ました。',
        ],
        answer: '音楽もいいし、話もおもしろいです。',
        explanation: 'し conecta dos razones.',
      },
      {
        prompt: '¿Cuál recomienda sin imponer?',
        hint: 'Busca おすすめ.',
        options: [
          'この美術館がおすすめです。',
          '必ず行かなければなりません。',
          '美術館は禁止です。',
        ],
        answer: 'この美術館がおすすめです。',
        explanation: 'おすすめです formula una recomendación general.',
      },
    ],
    order: {
      prompt: 'Ordena la valoración.',
      hint: 'Razón 1 + し + razón 2.',
      tokens: ['料理もおいしいです。', '景色もきれいだし、'],
      answer: ['景色もきれいだし、', '料理もおいしいです。'],
      explanation: 'し acumula motivos positivos.',
    },
    exactOpen: {
      prompt: 'Escribe: “Es mejor reservar”.',
      hint: 'Usa 予約したほうがいいです.',
      accepted: ['予約したほうがいいです。', '予約したほうがいいです'],
      modelAnswer: '予約したほうがいいです。',
      explanation: 'La forma pasada + ほうがいい expresa consejo.',
    },
    freeOpen: {
      prompt: 'Reseña una experiencia y recomienda una opción con dos razones.',
      hint: 'Usa し y おすすめです.',
      modelAnswer:
        'この祭りは音楽も楽しいし、食べ物もおいしいです。家族にもおすすめです。',
      explanation: 'Debe contener experiencia, dos razones y recomendación.',
    },
  },
  {
    id: 'ja-28',
    language: 'ja',
    title: 'Proyecto B1',
    level: 'B1 consolidación',
    objective:
      'Puedo investigar un tema familiar y presentar conclusiones conectadas.',
    summary:
      'Organiza pregunta, datos, conclusión y límites; usa estrategias de autocorrección.',
    concepts: [
      {
        title: 'Estructura',
        explanation: 'テーマ, 方法, 結果 y まとめ organizan una presentación.',
        examples: ['テーマは通学時間です。', '結果は次のとおりです。'],
      },
      {
        title: 'Conectar',
        explanation: 'まず, 次に, そのため y 一方で relacionan etapas e ideas.',
        examples: ['まず質問しました。', '一方で、問題もあります。'],
      },
      {
        title: 'Autocorregir',
        explanation: 'すみません、～ではなく… corrige un dato.',
        examples: ['火曜日ではなく、水曜日です。'],
      },
    ],
    tip: 'No presentes datos sin explicar qué pregunta responden y qué límite tienen.',
    choices: [
      {
        prompt: '¿Qué sección explica cómo se obtuvieron los datos?',
        hint: 'Método.',
        options: ['方法', '結果', 'まとめ'],
        answer: '方法',
        explanation: '方法 describe el procedimiento.',
      },
      {
        prompt: '¿Qué conector introduce contraste?',
        hint: 'Equivale a por otra parte.',
        options: ['一方で', 'まず', 'そのため'],
        answer: '一方で',
        explanation: '一方で presenta otra perspectiva.',
      },
      {
        prompt: 'Dijiste 30 pero era 13. ¿Cómo corriges?',
        hint: 'Usa ではなく.',
        options: ['30ではなく、13です。', '30と13です。', '30かもしれません。'],
        answer: '30ではなく、13です。',
        explanation: 'ではなく sustituye el dato anterior.',
      },
      {
        prompt: '¿Qué frase presenta una conclusión prudente?',
        hint: 'Evita una generalización total.',
        options: [
          'この結果から、時間が一つの要因だと考えられます。',
          'これですべてが分かります。',
          '全員が同じです。',
        ],
        answer: 'この結果から、時間が一つの要因だと考えられます。',
        explanation: 'Limita la conclusión a un factor.',
      },
      {
        prompt: '¿Qué pregunta del público pide evidencia?',
        hint: 'Pregunta por el número.',
        options: ['何人に聞きましたか。', '好きですか。', '終わりましたか。'],
        answer: '何人に聞きましたか。',
        explanation: 'La pregunta verifica el tamaño de la muestra.',
      },
    ],
    order: {
      prompt: 'Ordena la presentación.',
      hint: 'Tema, método, resultado.',
      tokens: [
        '結果を説明します。',
        '次に、方法を紹介します。',
        'まず、テーマを説明します。',
      ],
      answer: [
        'まず、テーマを説明します。',
        '次に、方法を紹介します。',
        '結果を説明します。',
      ],
      explanation: 'La secuencia guía a la audiencia.',
    },
    exactOpen: {
      prompt: 'Escribe: “No es martes, sino miércoles”.',
      hint: 'Usa 火曜日ではなく.',
      accepted: ['火曜日ではなく、水曜日です。', '火曜日ではなく水曜日です。'],
      modelAnswer: '火曜日ではなく、水曜日です。',
      explanation: 'ではなく corrige el primer dato.',
    },
    freeOpen: {
      prompt: 'Presenta un mini proyecto con tema, método, resultado y límite.',
      hint: 'Escribe cuatro o cinco frases conectadas.',
      modelAnswer:
        'テーマは通学時間です。十人に聞きました。半分の人は三十分以上かかります。この結果から、時間が大切だと考えられます。一方で、人数が少ないという問題があります。',
      explanation: 'Debe incluir las cuatro partes y una conclusión prudente.',
    },
  },
  {
    id: 'ja-29',
    language: 'ja',
    title: 'Argumentar y matizar',
    level: 'B2.1',
    objective:
      'Puedo defender una postura, reconocer otra perspectiva y matizar afirmaciones.',
    summary:
      'Contrasta perspectivas con 一方で, limita generalizaciones y usa lenguaje tentativo.',
    concepts: [
      {
        title: 'Contraste',
        explanation: '一方で presenta otra cara de la cuestión.',
        examples: ['便利な一方で、費用が高いです。'],
      },
      {
        title: 'Limitar',
        explanation: '～とは限らない evita afirmar que algo siempre es cierto.',
        examples: ['高いものがいいとは限りません。'],
      },
      {
        title: 'Matizar',
        explanation:
          '～と考えられます y ～のではないでしょうか presentan conclusiones prudentes.',
        examples: ['別の方法も必要だと考えられます。'],
      },
    ],
    tip: 'Reconocer límites aumenta la credibilidad de una postura.',
    choices: [
      {
        prompt: '「便利な一方で、費用が高いです。」 ¿Qué relación expresa?',
        hint: 'Presenta dos caras.',
        options: ['Contraste.', 'Causa única.', 'Secuencia temporal.'],
        answer: 'Contraste.',
        explanation: '一方で contrapone ventaja y desventaja.',
      },
      {
        prompt: '「高いものがいいとは限りません。」 significa…',
        hint: 'とは限らない limita la regla.',
        options: [
          'Lo caro no siempre es bueno.',
          'Lo caro siempre es bueno.',
          'Nada caro es bueno.',
        ],
        answer: 'Lo caro no siempre es bueno.',
        explanation: 'La estructura niega una generalización absoluta.',
      },
      {
        prompt: '¿Cuál es la afirmación más prudente?',
        hint: 'Busca と考えられます.',
        options: [
          'この方法も必要だと考えられます。',
          'この方法だけが絶対に正しいです。',
          '全員が同じです。',
        ],
        answer: 'この方法も必要だと考えられます。',
        explanation: 'La forma presenta una conclusión razonada, no absoluta.',
      },
      {
        prompt: '¿Qué frase reconoce otra perspectiva?',
        hint: 'Usa 一方で.',
        options: [
          '効果がある一方で、負担もあります。',
          '効果だけです。',
          '負担はありません。',
        ],
        answer: '効果がある一方で、負担もあります。',
        explanation: 'Presenta beneficio y coste.',
      },
      {
        prompt: '¿Cuál responde a una generalización?',
        hint: 'Limita su alcance.',
        options: [
          'いつもそうだとは限りません。',
          '絶対にそうです。',
          'そうでした。',
        ],
        answer: 'いつもそうだとは限りません。',
        explanation: 'とは限りません evita aceptar el absoluto.',
      },
    ],
    order: {
      prompt: 'Ordena el contraste.',
      hint: 'Ventaja + 一方で + límite.',
      tokens: ['時間がかかります。', '便利な一方で、'],
      answer: ['便利な一方で、', '時間がかかります。'],
      explanation: '一方で enlaza dos evaluaciones opuestas.',
    },
    exactOpen: {
      prompt: 'Escribe: “No siempre es fácil”.',
      hint: 'Usa 簡単だとは限りません.',
      accepted: ['簡単だとは限りません。', '簡単だとは限りません'],
      modelAnswer: '簡単だとは限りません。',
      explanation: 'とは限りません limita la afirmación.',
    },
    freeOpen: {
      prompt:
        'Defiende una postura, reconoce una desventaja y matiza la conclusión.',
      hint: 'Usa 一方で y とは限らない.',
      modelAnswer:
        'オンライン授業は便利です。一方で、一人で勉強するのは難しいこともあります。すべての人に合うとは限りませんが、選択肢として必要だと考えられます。',
      explanation:
        'Debe incluir postura, perspectiva contraria y conclusión limitada.',
    },
  },
];

export const batch12Lessons = Object.fromEntries(
  japaneseSpecs.map((spec) => [spec.id, createLesson(spec)]),
);
