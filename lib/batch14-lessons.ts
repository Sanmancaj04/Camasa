import { createLesson, type LessonSpec } from '@/lib/lesson-factory';

const japaneseSpecs: LessonSpec[] = [
  {
    id: 'ja-30',
    language: 'ja',
    title: 'Comprensión extensa',
    level: 'B2.1',
    objective:
      'Puedo distinguir ideas principales, detalles y relaciones en textos y exposiciones complejas.',
    summary:
      'Sigue referencias, nominalizaciones y conectores para reconstruir la organización de un texto.',
    concepts: [
      {
        title: 'Referencia',
        explanation:
          'この点 y その結果 conectan una frase con información anterior.',
        examples: ['この点が重要です。', 'その結果、利用者が増えました。'],
      },
      {
        title: 'Nominalización',
        explanation:
          'こと y ということ convierten una idea en tema o información comentable.',
        examples: [
          '継続することが大切です。',
          '問題は時間が足りないということです。',
        ],
      },
      {
        title: 'Estructura',
        explanation:
          '一方で, つまり y そのため indican contraste, reformulación y consecuencia.',
        examples: [
          '便利です。一方で、費用がかかります。',
          'つまり、計画の変更が必要です。',
        ],
      },
    ],
    tip: 'Antes de traducir palabra por palabra, identifica a qué se refiere cada conector.',
    choices: [
      {
        prompt:
          '「雨が続きました。その結果、試合は中止になりました。」その結果 indica…',
        hint: 'Relaciona la lluvia con la cancelación.',
        options: ['consecuencia', 'ejemplo', 'duda'],
        answer: 'consecuencia',
        explanation: 'その結果 introduce el resultado de lo anterior.',
      },
      {
        prompt:
          '「問題は、参加者が少ないということです。」¿Cuál es el problema?',
        hint: 'La información antes de ということ explica 問題.',
        options: [
          'Hay pocos participantes.',
          'Falta tiempo.',
          'El lugar es pequeño.',
        ],
        answer: 'Hay pocos participantes.',
        explanation: 'ということ nominaliza la proposición 参加者が少ない.',
      },
      {
        prompt: '¿Qué conector introduce contraste?',
        hint: 'Equivale a “por otra parte”.',
        options: ['一方で', 'そのため', 'たとえば'],
        answer: '一方で',
        explanation: '一方で contrapone otra perspectiva.',
      },
      {
        prompt:
          '「この点を改善する必要があります。」この点 se refiere normalmente a…',
        hint: 'Es una referencia anafórica.',
        options: [
          'un asunto mencionado antes',
          'una persona desconocida',
          'una fecha futura',
        ],
        answer: 'un asunto mencionado antes',
        explanation: 'この点 retoma un aspecto del discurso anterior.',
      },
      {
        prompt: '¿Cuál frase expresa la idea principal más general?',
        hint: 'Busca una afirmación que pueda organizar detalles.',
        options: [
          '地域の交通には改善が必要です。',
          'バスは七時に来ました。',
          '切符は三百円でした。',
        ],
        answer: '地域の交通には改善が必要です。',
        explanation:
          'La afirmación general puede desarrollarse con horarios, costos y otros detalles.',
      },
    ],
    order: {
      prompt: 'Ordena causa y consecuencia.',
      hint: 'Causa + conector + resultado.',
      tokens: ['そのため、計画を変更しました。', '予算が足りませんでした。'],
      answer: ['予算が足りませんでした。', 'そのため、計画を変更しました。'],
      explanation:
        'そのため introduce una consecuencia de la falta de presupuesto.',
    },
    exactOpen: {
      prompt: 'Escribe: “En otras palabras, es necesario cambiar el plan”.',
      hint: 'Usa つまり y 必要です.',
      accepted: [
        'つまり、計画を変える必要があります。',
        'つまり、計画を変える必要があります',
        'つまり計画を変える必要があります。',
        'つまり計画を変える必要があります',
      ],
      modelAnswer: 'つまり、計画を変える必要があります。',
      explanation:
        'つまり reformula la conclusión y 必要があります expresa necesidad.',
    },
    freeOpen: {
      prompt:
        'Resume un texto breve distinguiendo idea principal, contraste y resultado.',
      hint: 'Usa 一方で y その結果 o そのため.',
      modelAnswer:
        'オンライン授業は便利です。一方で、交流が少なくなることがあります。そのため、対面活動も必要だと思います。',
      explanation:
        'Se revisan fidelidad, jerarquía de ideas y conectores; requiere revisión manual.',
    },
  },
  {
    id: 'ja-31',
    language: 'ja',
    title: 'Registro y adecuación',
    level: 'B2.1',
    objective:
      'Puedo adaptar mi manera de hablar según la relación, el propósito y la situación.',
    summary:
      'Distingue habla informal, 丁寧語 y expresiones funcionales de respeto y modestia.',
    concepts: [
      {
        title: 'Elegir registro',
        explanation:
          'La relación y la situación determinan si usas forma llana o です・ます.',
        examples: ['友達：明日行く？', '先生：明日いらっしゃいますか。'],
      },
      {
        title: 'Acción propia',
        explanation:
          'Verbos como 伺います y 拝見します presentan humildemente acciones propias.',
        examples: ['三時に伺います。', '資料を拝見しました。'],
      },
      {
        title: 'Mitigar',
        explanation: '恐れ入りますが y よろしければ suavizan una petición.',
        examples: [
          '恐れ入りますが、ご確認ください。',
          'よろしければ、ご参加ください。',
        ],
      },
    ],
    tip: 'El keigo no es sustituir palabras al azar: identifica primero quién realiza la acción.',
    choices: [
      {
        prompt: 'A un amigo cercano: “¿Vienes mañana?”. ¿Qué opción encaja?',
        hint: 'Usa registro informal.',
        options: ['明日来る？', '明日いらっしゃいますか。', '明日伺いますか。'],
        answer: '明日来る？',
        explanation: 'La forma llana es natural entre amigos cercanos.',
      },
      {
        prompt:
          'Dices a un cliente que visitarás su oficina. ¿Qué verbo corresponde a tu acción?',
        hint: 'Usa forma humilde.',
        options: ['伺います', 'いらっしゃいます', '召し上がります'],
        answer: '伺います',
        explanation:
          '伺います es la forma humilde de 行きます/来ます en este contexto.',
      },
      {
        prompt: '¿Cuál petición es adecuada en un correo formal?',
        hint: 'Busca mitigación y forma cortés.',
        options: [
          '恐れ入りますが、ご確認いただけますか。',
          '今すぐ見て。',
          '見る？',
        ],
        answer: '恐れ入りますが、ご確認いただけますか。',
        explanation:
          'La apertura mitigadora y la petición indirecta mantienen el registro formal.',
      },
      {
        prompt: 'Tu profesor llega. ¿Qué forma respeta su acción?',
        hint: 'Es la acción de la persona respetada.',
        options: [
          '先生がいらっしゃいました。',
          '先生が伺いました。',
          '先生が参りました。',
        ],
        answer: '先生がいらっしゃいました。',
        explanation: 'いらっしゃる es respetuoso para la acción del profesor.',
      },
      {
        prompt: '¿Cuál frase ofrece una opción sin presionar?',
        hint: 'よろしければ equivale a “si le parece bien”.',
        options: [
          'よろしければ、ご参加ください。',
          '必ず参加してください。',
          '参加しろ。',
        ],
        answer: 'よろしければ、ご参加ください。',
        explanation: 'よろしければ reduce la imposición.',
      },
    ],
    order: {
      prompt: 'Ordena una petición formal.',
      hint: 'Mitigador + petición.',
      tokens: ['資料をご確認いただけますか。', '恐れ入りますが、'],
      answer: ['恐れ入りますが、', '資料をご確認いただけますか。'],
      explanation: 'El mitigador precede a la petición cortés.',
    },
    exactOpen: {
      prompt: 'Escribe formalmente: “A las tres iré a visitarle”.',
      hint: 'Usa 伺います.',
      accepted: [
        '三時に伺います。',
        '三時に伺います',
        '3時に伺います。',
        '3時に伺います',
      ],
      modelAnswer: '三時に伺います。',
      explanation: '伺います presenta humildemente la visita del hablante.',
    },
    freeOpen: {
      prompt:
        'Escribe dos versiones de una misma petición: una para un amigo y otra para un cliente.',
      hint: 'Cambia registro, no el propósito.',
      modelAnswer:
        '友達：明日までに見てくれる？　お客様：恐れ入りますが、明日までにご確認いただけますか。',
      explanation:
        'Se revisan adecuación, relación entre participantes y naturalidad; requiere revisión manual.',
    },
  },
  {
    id: 'ja-32',
    language: 'ja',
    title: 'Sociedad contemporánea',
    level: 'B2.1',
    objective:
      'Puedo discutir temas sociales conocidos usando fuentes, contrastes y ejemplos.',
    summary:
      'Atribuye información, compara perspectivas y limita afirmaciones al alcance de la evidencia.',
    concepts: [
      {
        title: 'Atribuir',
        explanation: '～によると indica la fuente de la información.',
        examples: ['調査によると、利用者が増えています。'],
      },
      {
        title: 'Contrastar',
        explanation:
          '～に対して compara dos grupos o situaciones; 一方で añade otra perspectiva.',
        examples: ['都市では増えたのに対して、地方では減りました。'],
      },
      {
        title: 'Sostener una opinión',
        explanation: '理由 y 例 convierten una preferencia en argumento.',
        examples: [
          'その理由は費用が低いからです。',
          'たとえば、地域バスがあります。',
        ],
      },
    ],
    tip: 'Distingue siempre dato citado, interpretación y opinión propia.',
    choices: [
      {
        prompt:
          '「市の調査によると、利用者は20％増えました。」¿Cuál es la fuente?',
        hint: 'Aparece antes de によると.',
        options: ['la encuesta municipal', 'los usuarios', 'el hablante'],
        answer: 'la encuesta municipal',
        explanation: '市の調査 está marcado como fuente por によると.',
      },
      {
        prompt:
          'Completa el contraste: 都市では人口が増えた___、地方では減りました。',
        hint: 'Compara dos tendencias.',
        options: ['のに対して', 'によると', 'ために'],
        answer: 'のに対して',
        explanation: 'のに対して contrasta el cambio urbano con el rural.',
      },
      {
        prompt: '¿Qué frase separa opinión de dato?',
        hint: 'Busca una marca explícita de opinión.',
        options: [
          'この結果は重要だと思います。',
          'この結果は事実です。',
          '全員が同意しています。',
        ],
        answer: 'この結果は重要だと思います。',
        explanation:
          'と思います presenta la valoración como opinión del hablante.',
      },
      {
        prompt: '¿Qué marcador introduce un ejemplo?',
        hint: 'Equivale a “por ejemplo”.',
        options: ['たとえば', '一方で', 'つまり'],
        answer: 'たとえば',
        explanation: 'たとえば anuncia un caso concreto.',
      },
      {
        prompt: '¿Cuál afirmación es prudente con evidencia limitada?',
        hint: 'Evita generalizar a toda la población.',
        options: [
          'この調査では、若い参加者の利用が増えました。',
          '日本人は全員このサービスが好きです。',
          'この変化は必ず永遠に続きます。',
        ],
        answer: 'この調査では、若い参加者の利用が増えました。',
        explanation: 'この調査では limita la conclusión al estudio mencionado.',
      },
    ],
    order: {
      prompt: 'Ordena la atribución.',
      hint: 'Fuente + によると + dato.',
      tokens: ['利用者が増えています。', '最近の調査によると、'],
      answer: ['最近の調査によると、', '利用者が増えています。'],
      explanation: 'La fuente se presenta antes de la información atribuida.',
    },
    exactOpen: {
      prompt: 'Escribe: “Según la encuesta, los costos disminuyeron”.',
      hint: 'Usa 調査によると.',
      accepted: [
        '調査によると、費用が減りました。',
        '調査によると、費用が減りました',
        '調査によると費用が減りました。',
        '調査によると費用が減りました',
      ],
      modelAnswer: '調査によると、費用が減りました。',
      explanation: 'によると atribuye el dato a la encuesta.',
    },
    freeOpen: {
      prompt:
        'Compara dos perspectivas sobre un tema social en 3–4 frases y cita una fuente.',
      hint: 'Usa によると, 一方で o に対して y una conclusión limitada.',
      modelAnswer:
        '市の調査によると、自転車の利用が増えています。一方で、安全な道路が少ないという意見もあります。そのため、利用を進める前に道路を改善する必要があると思います。',
      explanation:
        'Se revisan atribución, contraste, alcance y coherencia; requiere revisión manual.',
    },
  },
  {
    id: 'ja-33',
    language: 'ja',
    title: 'Comunicación profesional',
    level: 'B2.2',
    objective:
      'Puedo intervenir en reuniones y escribir mensajes profesionales claros y adecuados.',
    summary:
      'Usa fórmulas de correo, turnos de reunión y confirmaciones concretas.',
    concepts: [
      {
        title: 'Correo',
        explanation:
          'Un correo profesional saluda, declara el propósito y cierra con una petición clara.',
        examples: [
          'お世話になっております。',
          'ご確認のほど、よろしくお願いいたします。',
        ],
      },
      {
        title: 'Intervenir',
        explanation:
          '確認させてください y ご意見を伺いたいです permiten tomar turno con respeto.',
        examples: ['一点、確認させてください。'],
      },
      {
        title: 'Confirmar',
        explanation: 'Fechas, responsables y tareas reducen ambigüedad.',
        examples: ['金曜日までに私が修正版を送ります。'],
      },
    ],
    tip: 'La cortesía no sustituye la información: confirma quién hará qué y cuándo.',
    choices: [
      {
        prompt: '¿Cuál es una apertura habitual de correo profesional?',
        hint: 'Reconoce la relación laboral.',
        options: ['お世話になっております。', '元気？', 'じゃあね。'],
        answer: 'お世話になっております。',
        explanation: 'Es una fórmula convencional de apertura profesional.',
      },
      {
        prompt: 'Quieres confirmar un punto en una reunión. ¿Qué dices?',
        hint: 'Pide permiso implícitamente.',
        options: [
          '一点、確認させてください。',
          '黙ってください。',
          '分からない。',
        ],
        answer: '一点、確認させてください。',
        explanation:
          'La forma causativa con ください introduce una intervención respetuosa.',
      },
      {
        prompt: '¿Cuál cierre asigna una acción claramente?',
        hint: 'Busca responsable y fecha.',
        options: [
          '金曜日までに私が修正版を送ります。',
          '後で何かします。',
          'たぶん大丈夫です。',
        ],
        answer: '金曜日までに私が修正版を送ります。',
        explanation: 'Incluye plazo, responsable y producto.',
      },
      {
        prompt: '¿Cuál petición es más adecuada a un cliente?',
        hint: 'Usa una petición cortés, no una orden.',
        options: [
          'ご検討いただけますでしょうか。',
          'すぐ決めてください。',
          '決めろ。',
        ],
        answer: 'ご検討いただけますでしょうか。',
        explanation:
          'La construcción solicita consideración con un grado alto de cortesía.',
      },
      {
        prompt: '¿Qué frase pide la opinión de otra persona?',
        hint: '伺う funciona humildemente para preguntar.',
        options: [
          'この点についてご意見を伺いたいです。',
          '私の意見だけで十分です。',
          '意見は禁止です。',
        ],
        answer: 'この点についてご意見を伺いたいです。',
        explanation:
          'La frase abre el turno a la perspectiva del interlocutor.',
      },
    ],
    order: {
      prompt: 'Ordena una confirmación de reunión.',
      hint: 'Tema + petición de confirmación.',
      tokens: ['確認させてください。', '次の締め切りについて、'],
      answer: ['次の締め切りについて、', '確認させてください。'],
      explanation: 'El tema se establece antes de la petición.',
    },
    exactOpen: {
      prompt: 'Escribe: “Enviaré la versión revisada antes del viernes”.',
      hint: 'Usa 金曜日までに y 修正版.',
      accepted: [
        '金曜日までに修正版を送ります。',
        '金曜日までに修正版を送ります',
        '金曜日までに、修正版を送ります。',
        '金曜日までに、修正版を送ります',
      ],
      modelAnswer: '金曜日までに修正版を送ります。',
      explanation: 'までに fija el límite para completar el envío.',
    },
    freeOpen: {
      prompt:
        'Redacta un correo profesional breve que explique un retraso y proponga un nuevo plazo.',
      hint: 'Incluye saludo, motivo, propuesta y cierre.',
      modelAnswer:
        'お世話になっております。確認作業に時間がかかっているため、提出が一日遅れる見込みです。恐れ入りますが、金曜日までお待ちいただけますでしょうか。よろしくお願いいたします。',
      explanation:
        'Se revisan claridad, registro, responsabilidad y acción siguiente; requiere revisión manual.',
    },
  },
  {
    id: 'ja-34',
    language: 'ja',
    title: 'Mediar información',
    level: 'B2.2',
    objective:
      'Puedo reformular y explicar información compleja para otra persona.',
    summary:
      'Define, parafrasea y reorganiza información sin cambiar su sentido ni añadir certezas.',
    concepts: [
      {
        title: 'Definir',
        explanation: '～というのは…ことです presenta una explicación.',
        examples: ['時差というのは、地域による時間の違いのことです。'],
      },
      {
        title: 'Parafrasear',
        explanation:
          'つまり y 言い換えると señalan una formulación equivalente.',
        examples: [
          'つまり、予約が必要です。',
          '言い換えると、選択肢は二つです。',
        ],
      },
      {
        title: 'Organizar',
        explanation: 'まず, 次に y 最後に dividen un proceso complejo.',
        examples: ['まず申請し、次に面接を受けます。'],
      },
    ],
    tip: 'Mediar no es traducir cada palabra: conserva propósito, condiciones y límites.',
    choices: [
      {
        prompt: '¿Qué expresión introduce una definición?',
        hint: 'Presenta un término y explica qué es.',
        options: ['～というのは…ことです', '～によると', '～たことがあります'],
        answer: '～というのは…ことです',
        explanation: 'La estructura enmarca una definición explicativa.',
      },
      {
        prompt:
          '「予約なしでは入れません。」¿Cuál paráfrasis conserva el sentido?',
        hint: 'Expresa la misma condición.',
        options: [
          'つまり、予約が必要です。',
          'つまり、予約は禁止です。',
          'つまり、だれでも入れます。',
        ],
        answer: 'つまり、予約が必要です。',
        explanation:
          'No poder entrar sin reserva equivale a necesitar reserva.',
      },
      {
        prompt: '¿Qué marcador presenta el segundo paso?',
        hint: 'Sigue a まず.',
        options: ['次に', '一方で', 'たとえば'],
        answer: '次に',
        explanation: '次に ordena el paso siguiente.',
      },
      {
        prompt: 'Un texto dice “puede causar”. ¿Qué mediación es fiel?',
        hint: 'Conserva la incertidumbre.',
        options: [
          '原因になる可能性があります。',
          '必ず原因になります。',
          '原因にはなりません。',
        ],
        answer: '原因になる可能性があります。',
        explanation:
          '可能性があります conserva el carácter posible, no seguro.',
      },
      {
        prompt: '¿Qué detalle no debe perderse al explicar instrucciones?',
        hint: 'Afecta si la acción es válida.',
        options: [
          'el plazo',
          'el color del ejemplo decorativo',
          'una palabra repetida',
        ],
        answer: 'el plazo',
        explanation:
          'Un plazo es una condición esencial para completar la tarea.',
      },
    ],
    order: {
      prompt: 'Ordena la reformulación.',
      hint: 'Marcador + explicación equivalente.',
      tokens: ['選択肢は二つしかありません。', '言い換えると、'],
      answer: ['言い換えると、', '選択肢は二つしかありません。'],
      explanation:
        '言い換えると anuncia que lo siguiente expresa la idea de otra forma.',
    },
    exactOpen: {
      prompt: 'Escribe: “En otras palabras, se necesita una reserva”.',
      hint: 'Usa つまり y 予約が必要です.',
      accepted: [
        'つまり、予約が必要です。',
        'つまり、予約が必要です',
        'つまり予約が必要です。',
        'つまり予約が必要です',
      ],
      modelAnswer: 'つまり、予約が必要です。',
      explanation: 'つまり introduce una síntesis equivalente.',
    },
    freeOpen: {
      prompt:
        'Explica en japonés un procedimiento de tres pasos a alguien que no conoce el sistema.',
      hint: 'Usa まず, 次に, 最後に y conserva condiciones importantes.',
      modelAnswer:
        'まず、オンラインで申し込みます。次に、確認メールのリンクを開きます。最後に、金曜日までに必要な書類を送ります。',
      explanation:
        'Se revisan fidelidad, orden, claridad y conservación de condiciones; requiere revisión manual.',
    },
  },
  {
    id: 'ja-35',
    language: 'ja',
    title: 'Narrativa y perspectiva',
    level: 'B2.2',
    objective:
      'Puedo interpretar y producir narraciones detalladas diferenciando voces y puntos de vista.',
    summary:
      'Maneja discurso referido, perspectiva y conectores temporales para narrar sin confundir voces.',
    concepts: [
      {
        title: 'Discurso referido',
        explanation:
          '～と言いました reporta palabras; ～そうです atribuye información recibida.',
        examples: ['田中さんは行くと言いました。', '明日は雨だそうです。'],
      },
      {
        title: 'Perspectiva',
        explanation:
          'あげる, くれる y もらう muestran desde qué participante se presenta una acción.',
        examples: [
          '友達が手伝ってくれました。',
          '友達に手伝ってもらいました。',
        ],
      },
      {
        title: 'Secuencia',
        explanation:
          'そのとき, しばらくして y 最後に sitúan cambios narrativos.',
        examples: ['しばらくして、電車が動き始めました。'],
      },
    ],
    tip: 'Marca quién habló, quién supo la información y quién recibió el beneficio.',
    choices: [
      {
        prompt:
          '「田中さんは来週戻ると言いました。」¿Quién afirmó que volvería?',
        hint: 'El hablante está antes de は.',
        options: ['Tanaka', 'el narrador', 'nadie'],
        answer: 'Tanaka',
        explanation: 'と言いました atribuye la proposición a Tanaka.',
      },
      {
        prompt:
          '「友達が駅まで送ってくれました。」¿Qué perspectiva expresa くれました?',
        hint: 'La acción beneficia al hablante o su grupo.',
        options: [
          'El amigo hizo algo por el hablante.',
          'El hablante llevó al amigo.',
          'Nadie recibió ayuda.',
        ],
        answer: 'El amigo hizo algo por el hablante.',
        explanation:
          '～てくれる presenta una acción de otra persona beneficiosa para el hablante.',
      },
      {
        prompt: '¿Cuál forma indica información que el hablante oyó?',
        hint: 'Equivale a “según dicen”.',
        options: ['雨だそうです。', '雨にします。', '雨でしたか。'],
        answer: '雨だそうです。',
        explanation:
          '～そうです de reporte atribuye la información a otra fuente.',
      },
      {
        prompt: '¿Qué marcador significa “después de un rato”?',
        hint: 'Introduce avance temporal.',
        options: ['しばらくして', 'そのため', '一方で'],
        answer: 'しばらくして',
        explanation: 'しばらくして mueve la narración a un momento posterior.',
      },
      {
        prompt: '¿Cuál frase mantiene clara la voz citada?',
        hint: 'Debe identificar hablante y contenido.',
        options: [
          '母は「心配しないで」と言いました。',
          '心配しないでと言いましたが誰もいません。',
          '母は心配ですと言葉。',
        ],
        answer: '母は「心配しないで」と言いました。',
        explanation: 'La frase identifica a la madre y delimita sus palabras.',
      },
    ],
    order: {
      prompt: 'Ordena el avance narrativo.',
      hint: 'Marcador temporal + suceso.',
      tokens: ['電車が動き始めました。', 'しばらくして、'],
      answer: ['しばらくして、', '電車が動き始めました。'],
      explanation: 'El marcador temporal precede al nuevo acontecimiento.',
    },
    exactOpen: {
      prompt: 'Escribe: “Mi amigo dijo que vendría mañana”.',
      hint: 'Usa 友達, 明日来る y と言いました.',
      accepted: [
        '友達は明日来ると言いました。',
        '友達は明日来ると言いました',
        '友達が明日来ると言いました。',
        '友達が明日来ると言いました',
      ],
      modelAnswer: '友達は明日来ると言いました。',
      explanation: 'La forma llana 来る aparece antes de と言いました.',
    },
    freeOpen: {
      prompt:
        'Narra un acontecimiento en 4–5 frases incluyendo una voz citada y un cambio de perspectiva.',
      hint: 'Identifica participantes y usa al menos un marcador temporal.',
      modelAnswer:
        '昨日、駅で電車が止まりました。駅員は「再開まで三十分かかります」と言いました。しばらくして、友達が車で迎えに来てくれました。私は本当に助かりました。',
      explanation:
        'Se revisan secuencia, atribución, perspectiva y coherencia; requiere revisión manual.',
    },
  },
  {
    id: 'ja-36',
    language: 'ja',
    title: 'Proyecto B2',
    level: 'B2 consolidación',
    objective:
      'Puedo investigar, presentar y defender una propuesta detallada en japonés.',
    summary:
      'Integra fuentes, comparación, registro, mediación y revisión pragmática en una propuesta completa.',
    concepts: [
      {
        title: 'Propuesta',
        explanation:
          'Una recomendación clara conecta problema, medida y resultado esperado.',
        examples: ['地域バスを増やすことを提案します。'],
      },
      {
        title: 'Evidencia y límite',
        explanation:
          '～によると atribuye datos y ～と考えられます evita certeza injustificada.',
        examples: [
          '調査によると、需要が増えています。',
          '効果があると考えられます。',
        ],
      },
      {
        title: 'Defensa',
        explanation:
          'Reconoce una dificultad y propone una medida para reducirla.',
        examples: ['費用はかかりますが、試験的に始めることができます。'],
      },
    ],
    tip: 'Relaciona cada dato con la recomendación y adapta el registro al público.',
    choices: [
      {
        prompt: '¿Cuál frase contiene una propuesta concreta?',
        hint: 'Busca una acción recomendada.',
        options: [
          '週末のバスを増やすことを提案します。',
          'バスについて話します。',
          '交通はいろいろです。',
        ],
        answer: '週末のバスを増やすことを提案します。',
        explanation: 'La frase recomienda una medida definida.',
      },
      {
        prompt: '¿Qué expresión atribuye correctamente un dato?',
        hint: 'Identifica la fuente.',
        options: [
          '市の調査によると、利用者が増えています。',
          '利用者は絶対に増えます。',
          '私は数字です。',
        ],
        answer: '市の調査によると、利用者が増えています。',
        explanation: 'によると separa la fuente del contenido reportado.',
      },
      {
        prompt: '¿Cuál conclusión evita certeza excesiva?',
        hint: 'Presenta una inferencia razonada.',
        options: [
          '待ち時間が短くなると考えられます。',
          '待ち時間は必ずゼロになります。',
          '問題は絶対にありません。',
        ],
        answer: '待ち時間が短くなると考えられます。',
        explanation: 'と考えられます presenta una conclusión prudente.',
      },
      {
        prompt: '¿Cuál respuesta aborda una objeción de costo?',
        hint: 'Reconoce y mitiga el riesgo.',
        options: [
          '費用はかかりますが、三か月の試験ならリスクを減らせます。',
          '費用は関係ありません。',
          '反対意見は聞きません。',
        ],
        answer: '費用はかかりますが、三か月の試験ならリスクを減らせます。',
        explanation: 'La frase concede el costo y propone un piloto limitado.',
      },
      {
        prompt: 'Antes de entregar, ¿qué revisión es prioritaria?',
        hint: 'Comprueba primero propósito y evidencia.',
        options: [
          '提案と根拠が明確につながっているか確認する。',
          '難しい漢字をできるだけ増やす。',
          '全部の文を長くする。',
        ],
        answer: '提案と根拠が明確につながっているか確認する。',
        explanation:
          'La relación entre propuesta y evidencia determina la eficacia del texto.',
      },
    ],
    order: {
      prompt: 'Ordena objeción y respuesta.',
      hint: 'Concesión con が + medida.',
      tokens: ['試験的に始めることができます。', '費用はかかりますが、'],
      answer: ['費用はかかりますが、', '試験的に始めることができます。'],
      explanation:
        'が reconoce la dificultad antes de presentar una solución viable.',
    },
    exactOpen: {
      prompt: 'Escribe: “Según la encuesta, la demanda está aumentando”.',
      hint: 'Usa 調査によると y 需要が増えています.',
      accepted: [
        '調査によると、需要が増えています。',
        '調査によると、需要が増えています',
        '調査によると需要が増えています。',
        '調査によると需要が増えています',
      ],
      modelAnswer: '調査によると、需要が増えています。',
      explanation:
        'La estructura atribuye a la encuesta la tendencia observada.',
    },
    freeOpen: {
      prompt:
        'Escribe una propuesta B2 de 180–250 caracteres con fuente, recomendación, dificultad y respuesta.',
      hint: 'Define un público y termina con un siguiente paso concreto.',
      modelAnswer:
        '市の調査によると、週末のバス利用者が増えています。そこで、土曜日の運行本数を増やすことを提案します。費用はかかりますが、まず三か月の試験として実施すれば、リスクを抑えられると考えられます。その後、利用者数と意見を確認し、継続するか決めます。',
      explanation:
        'Se evalúan tarea, fuentes, argumentación, registro y precisión pragmática; requiere revisión manual.',
    },
  },
];

export const batch14Lessons = Object.fromEntries(
  japaneseSpecs.map((spec) => [spec.id, createLesson(spec)]),
);
