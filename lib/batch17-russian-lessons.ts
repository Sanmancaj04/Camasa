import {
  createCompactRussianLesson,
  type CompactRussianSeed,
} from '@/lib/russian-lesson-factory';

const seeds: CompactRussianSeed[] = [
  {
    id: 'ru-25',
    title: 'Решения',
    level: 'B1.2',
    objective: 'Puedo comparar opciones y explicar consecuencias posibles.',
    summary:
      'Compara alternativas con comparativos y condiciones reales o hipotéticas.',
    concepts: [
      [
        'Condición real',
        'если + futuro/presente presenta una posibilidad real.',
        'Если будет дождь, мы останемся дома.',
      ],
      [
        'Hipótesis',
        'бы con pasado expresa una situación hipotética.',
        'Я бы выбрал поезд.',
      ],
      [
        'Comparación',
        'лучше/хуже y чем comparan opciones.',
        'Поезд быстрее, чем автобус.',
      ],
    ],
    scenario: {
      prompt: 'Quieres dar una preferencia hipotética. ¿Qué dices?',
      options: [
        'Я бы выбрал поезд.',
        'Я выберу вчера.',
        'Я выбирал бы сейчас факт.',
      ],
      answer: 'Я бы выбрал поезд.',
      explanation: 'бы + pasado expresa una elección hipotética.',
    },
    exact: {
      prompt: 'Escribe: “El tren es más rápido que el autobús”.',
      answer: 'Поезд быстрее, чем автобус.',
      distractors: ['Поезд быстрый автобусом.', 'Автобус чем поезд быстро.'],
      explanation: 'El comparativo быстрее se combina con чем.',
    },
    free: {
      prompt: 'Compara dos opciones y recomienda una con una condición.',
      model:
        'Поезд быстрее, чем автобус. Я бы выбрал поезд. Если билеты будут дорогими, можно поехать на автобусе.',
      explanation: 'Se revisan comparación, recomendación y condición',
    },
  },
  {
    id: 'ru-26',
    title: 'Отношения',
    level: 'B1.2',
    objective: 'Puedo reaccionar a noticias y manejar desacuerdos cotidianos.',
    summary: 'Responde con empatía, matiza opiniones y desacuerda sin atacar.',
    concepts: [
      [
        'Buena noticia',
        'Поздравляю y Это замечательно reaccionan positivamente.',
        'Поздравляю!',
      ],
      ['Empatía', 'Мне жаль reconoce una noticia negativa.', 'Мне очень жаль.'],
      [
        'Desacuerdo',
        'Я понимаю, но… atenúa una posición diferente.',
        'Я понимаю, но не совсем согласен.',
      ],
    ],
    scenario: {
      prompt: 'Un amigo perdió el trabajo. ¿Cómo reaccionas?',
      options: ['Мне очень жаль.', 'Поздравляю!', 'Это смешно.'],
      answer: 'Мне очень жаль.',
      explanation: 'Мне жаль expresa empatía ante una noticia negativa.',
    },
    exact: {
      prompt: 'Escribe: “Entiendo, pero no estoy del todo de acuerdo”.',
      answer: 'Я понимаю, но не совсем согласен.',
      accepted: [
        'Я понимаю, но не совсем согласен.',
        'Я понимаю, но не совсем согласен',
        'Я понимаю, но не совсем согласна.',
        'Я понимаю, но не совсем согласна',
      ],
      distractors: ['Я понимаю и согласен полностью.', 'Ты неправ.'],
      explanation:
        'не совсем suaviza el desacuerdo; согласна corresponde a una hablante.',
    },
    free: {
      prompt:
        'Escribe un diálogo con una noticia, reacción empática y desacuerdo cortés.',
      model:
        '— Я решил переехать. — Понимаю, это важное решение. Но я не совсем согласен, что нужно спешить.',
      explanation: 'Se revisan reacción, atenuación y tono',
    },
  },
  {
    id: 'ru-27',
    title: 'Культура',
    level: 'B1.2',
    objective: 'Puedo reseñar una obra y recomendarla con razones.',
    summary: 'Describe una obra, usa который y justifica una evaluación.',
    concepts: [
      [
        'Identificar',
        'который conecta un sustantivo con información adicional.',
        'Это фильм, который получил премию.',
      ],
      [
        'Evaluar',
        'интересный, убедительный y трогательный precisan la valoración.',
        'Сюжет был убедительным.',
      ],
      [
        'Recomendar',
        'советовать + dativo + infinitivo formula una recomendación.',
        'Я советую вам посмотреть этот фильм.',
      ],
    ],
    scenario: {
      prompt: '¿Cuál frase recomienda una película?',
      options: [
        'Я советую вам посмотреть этот фильм.',
        'Я смотрел фильм вчера.',
        'Фильм на столе.',
      ],
      answer: 'Я советую вам посмотреть этот фильм.',
      explanation: 'советую вам + infinitivo recomienda una acción.',
    },
    exact: {
      prompt: 'Escribe: “Es una película que recibió un premio”.',
      answer: 'Это фильм, который получил премию.',
      distractors: [
        'Это фильм, кто получил премию.',
        'Фильм который премия получил это.',
      ],
      explanation:
        'который concuerda con фильм y funciona como sujeto de получил.',
    },
    free: {
      prompt:
        'Escribe una reseña breve con descripción, valoración y recomendación.',
      model:
        'Это фильм, который рассказывает о семье. Сюжет убедительный, а актёры играют отлично. Я советую его посмотреть.',
      explanation: 'Se revisan cohesión, evaluación y recomendación',
    },
  },
  {
    id: 'ru-28',
    title: 'Проект B1',
    level: 'B1 consolidación',
    objective:
      'Puedo investigar un tema familiar y presentar conclusiones conectadas.',
    summary:
      'Integra fuentes, opinión, comparación y revisión en un proyecto B1.',
    concepts: [
      [
        'Pregunta',
        'Una pregunta acotada orienta la búsqueda.',
        'Как жители добираются до работы?',
      ],
      [
        'Dato',
        'по данным… atribuye evidencia.',
        'По данным опроса, половина жителей ездит на автобусе.',
      ],
      [
        'Conclusión',
        'Таким образом resume una inferencia.',
        'Таким образом, автобусы играют важную роль.',
      ],
    ],
    scenario: {
      prompt: '¿Qué expresión introduce una conclusión?',
      options: ['Таким образом', 'Например', 'Во-первых'],
      answer: 'Таким образом',
      explanation: 'Таким образом sintetiza una conclusión derivada.',
    },
    exact: {
      prompt: 'Escribe: “Según la encuesta, la mitad usa el autobús”.',
      answer: 'По данным опроса, половина пользуется автобусом.',
      distractors: ['Опрос половина автобус.', 'По опросу все автобусом.'],
      explanation:
        'по данным atribuye la fuente y пользоваться exige instrumental.',
    },
    free: {
      prompt: 'Presenta una conclusión B1 con pregunta, dato y recomendación.',
      model:
        'Я изучил, как жители ездят на работу. По данным опроса, половина пользуется автобусом. Таким образом, городу стоит улучшить автобусные маршруты.',
      explanation: 'Se revisan investigación, atribución y conclusión',
    },
  },
  {
    id: 'ru-29',
    title: 'Аргументация',
    level: 'B2.1',
    objective:
      'Puedo defender una postura, matizarla y responder a objeciones.',
    summary:
      'Construye tesis, concesiones y respuestas prudentes a contraargumentos.',
    concepts: [
      [
        'Tesis',
        'Я убеждён, что… presenta una postura firme.',
        'Я убеждён, что изменения необходимы.',
      ],
      [
        'Concesión',
        'Хотя… reconoce un punto contrario.',
        'Хотя проект дорогой, он принесёт пользу.',
      ],
      [
        'Matiz',
        'вероятно y в определённой степени limitan la certeza.',
        'Это, вероятно, улучшит ситуацию.',
      ],
    ],
    scenario: {
      prompt: '¿Qué frase reconoce una objeción sin abandonar la postura?',
      options: [
        'Хотя проект дорогой, он принесёт пользу.',
        'Проект дешёвый и всё.',
        'Возражений не существует.',
      ],
      answer: 'Хотя проект дорогой, он принесёт пользу.',
      explanation:
        'Хотя concede el costo y la principal mantiene el argumento.',
    },
    exact: {
      prompt: 'Escribe: “Creo firmemente que los cambios son necesarios”.',
      answer: 'Я убеждён, что изменения необходимы.',
      accepted: [
        'Я убеждён, что изменения необходимы.',
        'Я убеждён, что изменения необходимы',
        'Я убеждена, что изменения необходимы.',
        'Я убеждена, что изменения необходимы',
      ],
      distractors: ['Изменения может необходимость.', 'Я изменения необходим.'],
      explanation:
        'убеждён/убеждена expresa convicción y что introduce la tesis.',
    },
    free: {
      prompt: 'Defiende una postura e incluye una objeción y respuesta.',
      model:
        'Я убеждён, что центр города должен стать пешеходным. Хотя это создаст трудности для водителей, общественный транспорт может их уменьшить.',
      explanation: 'Se revisan tesis, concesión y respuesta',
    },
  },
  {
    id: 'ru-30',
    title: 'Сложные тексты',
    level: 'B2.1',
    objective:
      'Puedo identificar tesis, estructura e implicaciones en textos complejos.',
    summary:
      'Sigue nominalizaciones, referencias y conectores para reconstruir un argumento.',
    concepts: [
      [
        'Nominalización',
        'Sustantivos como развитие condensan procesos.',
        'развитие общественного транспорта',
      ],
      [
        'Referencia',
        'этот подход retoma una idea anterior.',
        'Этот подход требует инвестиций.',
      ],
      [
        'Implicación',
        'следовательно introduce una conclusión lógica.',
        'Следовательно, план нужно изменить.',
      ],
    ],
    scenario: {
      prompt: '¿Qué marcador introduce una conclusión lógica?',
      options: ['следовательно', 'например', 'между тем'],
      answer: 'следовательно',
      explanation: 'следовательно presenta una consecuencia inferida.',
    },
    exact: {
      prompt: 'Escribe: “Por consiguiente, hay que cambiar el plan”.',
      answer: 'Следовательно, план нужно изменить.',
      distractors: ['Например, план изменился.', 'План следствие менять.'],
      explanation:
        'следовательно marca la inferencia y нужно + infinitivo expresa necesidad.',
    },
    free: {
      prompt: 'Resume un argumento indicando tesis, evidencia e implicación.',
      model:
        'Автор считает, что транспорт нужно развивать. Он приводит данные о росте пассажиров. Следовательно, городу потребуются новые инвестиции.',
      explanation: 'Se revisan jerarquía, cohesión e inferencia',
    },
  },
  {
    id: 'ru-31',
    title: 'Естественная речь',
    level: 'B2.1',
    objective:
      'Puedo seguir y participar en conversaciones extensas con fluidez razonable.',
    summary:
      'Interpreta partículas, administra turnos y repara interrupciones.',
    concepts: [
      ['Turno', 'Можно я добавлю? solicita la palabra.', 'Можно я добавлю?'],
      [
        'Actitud',
        'же puede recordar o enfatizar información compartida.',
        'Мы же договорились.',
      ],
      [
        'Reparación',
        'Если я правильно понял… verifica una interpretación.',
        'Если я правильно понял, встреча в шесть.',
      ],
    ],
    scenario: {
      prompt: 'Quieres intervenir sin interrumpir bruscamente. ¿Qué dices?',
      options: ['Можно я добавлю?', 'Замолчи.', 'Я говорю сейчас всегда.'],
      answer: 'Можно я добавлю?',
      explanation: 'La pregunta negocia el turno cortésmente.',
    },
    exact: {
      prompt: 'Escribe: “Si entendí bien, la reunión es a las seis”.',
      answer: 'Если я правильно понял, встреча в шесть.',
      accepted: [
        'Если я правильно понял, встреча в шесть.',
        'Если я правильно понял, встреча в шесть',
        'Если я правильно поняла, встреча в шесть.',
        'Если я правильно поняла, встреча в шесть',
      ],
      distractors: ['Я понял встречу шесть.', 'Если встреча правильно.'],
      explanation:
        'понял/поняла concuerda con quien habla y la cláusula verifica información.',
    },
    free: {
      prompt: 'Escribe una conversación con toma de turno y verificación.',
      model:
        '— Нам нужно перенести встречу. — Можно я добавлю? Если я правильно понял, новый срок — пятница?',
      explanation: 'Se revisan turnos, comprensión y naturalidad',
    },
  },
  {
    id: 'ru-32',
    title: 'Общество',
    level: 'B2.1',
    objective: 'Puedo discutir temas sociales usando evidencia y ejemplos.',
    summary:
      'Atribuye fuentes, explica causas y limita conclusiones al alcance de los datos.',
    concepts: [
      [
        'Fuente',
        'согласно + dativo atribuye información.',
        'Согласно исследованию, спрос растёт.',
      ],
      [
        'Causa',
        'из-за suele introducir una causa negativa o problemática.',
        'Из-за пробок люди опаздывают.',
      ],
      [
        'Ejemplo',
        'в частности destaca un caso pertinente.',
        'В частности, вырос спрос на автобусы.',
      ],
    ],
    scenario: {
      prompt: '¿Cuál afirmación limita adecuadamente su alcance?',
      options: [
        'Согласно этому опросу, молодые участники чаще ездят на велосипеде.',
        'Все люди всегда выбирают велосипед.',
        'Это никогда не изменится.',
      ],
      answer:
        'Согласно этому опросу, молодые участники чаще ездят на велосипеде.',
      explanation: 'La frase identifica fuente y población concreta.',
    },
    exact: {
      prompt: 'Escribe: “Según el estudio, la demanda está creciendo”.',
      answer: 'Согласно исследованию, спрос растёт.',
      distractors: ['Исследование согласно спрос.', 'Спрос исследует рост.'],
      explanation: 'согласно rige dativo: исследованию.',
    },
    free: {
      prompt: 'Discute un tema social con fuente, causa y ejemplo.',
      model:
        'Согласно исследованию, общественный транспорт используют чаще. Это связано с ростом цен на топливо. В частности, вырос спрос на автобусы.',
      explanation: 'Se revisan atribución, causalidad y alcance',
    },
  },
  {
    id: 'ru-33',
    title: 'Профессиональная среда',
    level: 'B2.2',
    objective:
      'Puedo participar en reuniones y redactar comunicación profesional.',
    summary:
      'Emplea registro formal, colocaciones laborales y acuerdos verificables.',
    concepts: [
      [
        'Correo formal',
        'Благодарю за… y Прошу… mantienen un tono profesional.',
        'Благодарю за ваше письмо.',
      ],
      [
        'Reunión',
        'Позвольте уточнить… introduce una aclaración cortés.',
        'Позвольте уточнить один вопрос.',
      ],
      [
        'Acuerdo',
        'подтвердить договорённость fija lo acordado.',
        'Хотел бы подтвердить нашу договорённость.',
      ],
    ],
    scenario: {
      prompt: '¿Qué frase pide una aclaración profesional?',
      options: [
        'Позвольте уточнить один вопрос.',
        'Объясните нормально.',
        'Я ничего не понял вообще.',
      ],
      answer: 'Позвольте уточнить один вопрос.',
      explanation:
        'Позвольте уточнить mantiene un registro formal y cooperativo.',
    },
    exact: {
      prompt: 'Escribe: “Gracias por su carta”.',
      answer: 'Благодарю за ваше письмо.',
      distractors: ['Спасибо твоё письмо формально.', 'Благодарю ваше письмо.'],
      explanation:
        'благодарить/благодарю за + acusativo expresa agradecimiento.',
    },
    free: {
      prompt: 'Redacta un correo que confirme una tarea y una fecha.',
      model:
        'Благодарю за ваше письмо. Хотел бы подтвердить нашу договорённость: я отправлю исправленный отчёт до пятницы.',
      explanation: 'Se revisan registro, responsabilidad y plazo',
    },
  },
  {
    id: 'ru-34',
    title: 'Медиация',
    level: 'B2.2',
    objective:
      'Puedo reformular y explicar información compleja para otra persona.',
    summary:
      'Define términos, parafrasea y organiza procesos sin alterar el grado de certeza.',
    concepts: [
      [
        'Definir',
        'Под… понимается… introduce una definición formal.',
        'Под инфляцией понимается рост общего уровня цен.',
      ],
      [
        'Parafrasear',
        'Иными словами señala una formulación equivalente.',
        'Иными словами, расходы растут.',
      ],
      [
        'Organizar',
        'прежде всего, затем y наконец estructuran información.',
        'Прежде всего нужно собрать данные.',
      ],
    ],
    scenario: {
      prompt: '¿Qué marcador introduce una paráfrasis?',
      options: ['Иными словами', 'Несмотря на', 'В результате'],
      answer: 'Иными словами',
      explanation:
        'Иными словами anuncia la misma idea expresada de otra forma.',
    },
    exact: {
      prompt: 'Escribe: “En otras palabras, los gastos están aumentando”.',
      answer: 'Иными словами, расходы растут.',
      distractors: ['Другими расходы словами.', 'Расходы потому что слова.'],
      explanation: 'Иными словами introduce una reformulación equivalente.',
    },
    free: {
      prompt: 'Explica un concepto y un proceso en lenguaje accesible.',
      model:
        'Под инфляцией понимается рост общего уровня цен. Иными словами, на ту же сумму можно купить меньше. Сначала сравнивают цены, затем рассчитывают изменение.',
      explanation: 'Se revisan fidelidad, definición y organización',
    },
  },
  {
    id: 'ru-35',
    title: 'Точность и стиль',
    level: 'B2.2',
    objective: 'Puedo adaptar estilo y registro y revisar textos detallados.',
    summary:
      'Usa participios y gerundios con control y edita registro, claridad y cohesión.',
    concepts: [
      [
        'Participio',
        'Un participio comprime una relativa y concuerda con el sustantivo.',
        'документ, подписанный директором',
      ],
      [
        'Gerundio',
        'El gerundio comparte sujeto con el verbo principal.',
        'Проверив данные, аналитик отправил отчёт.',
      ],
      [
        'Edición',
        'La revisión elimina ambigüedad y ajusta registro.',
        'Просим вас подтвердить получение.',
      ],
    ],
    scenario: {
      prompt: '¿Cuál gerundio comparte correctamente el sujeto?',
      options: [
        'Проверив данные, аналитик отправил отчёт.',
        'Проверив данные, отчёт был отправлен аналитиком.',
        'Проверяя, данные отправили аналитика.',
      ],
      answer: 'Проверив данные, аналитик отправил отчёт.',
      explanation: 'El analista realiza tanto la comprobación como el envío.',
    },
    exact: {
      prompt: 'Escribe: “El documento firmado por el director”.',
      answer: 'Документ, подписанный директором.',
      distractors: [
        'Документ, подписавший директора.',
        'Директор подписанный документом.',
      ],
      explanation:
        'подписанный es participio pasivo y директором marca al agente.',
    },
    free: {
      prompt: 'Reescribe un mensaje informal como correo profesional.',
      model:
        'Благодарю за сообщение. Просим вас подтвердить получение документа, подписанного директором.',
      explanation: 'Se revisan registro, precisión y construcción participial',
    },
  },
  {
    id: 'ru-36',
    title: 'Проект B2',
    level: 'B2 consolidación',
    objective:
      'Puedo investigar, presentar y defender una propuesta detallada.',
    summary:
      'Integra fuentes, argumento, mediación, registro y revisión en una propuesta B2.',
    concepts: [
      [
        'Propuesta',
        'предлагаю + infinitivo o sustantivo presenta una medida.',
        'Предлагаю запустить пилотный проект.',
      ],
      [
        'Evidencia',
        'данные показывают, что… relaciona la fuente con una conclusión.',
        'Данные показывают, что спрос растёт.',
      ],
      [
        'Objeción',
        'Несмотря на… permite reconocer una dificultad.',
        'Несмотря на затраты, проект оправдан.',
      ],
    ],
    scenario: {
      prompt: '¿Cuál respuesta aborda el riesgo sin negarlo?',
      options: [
        'Несмотря на затраты, короткий пилотный проект снизит риск.',
        'Риска вообще нет.',
        'Затраты не важны никому.',
      ],
      answer: 'Несмотря на затраты, короткий пилотный проект снизит риск.',
      explanation: 'La frase reconoce el costo y propone mitigación concreta.',
    },
    exact: {
      prompt: 'Escribe: “Propongo iniciar un proyecto piloto”.',
      answer: 'Предлагаю запустить пилотный проект.',
      distractors: [
        'Я предложение проект пилота.',
        'Проект предлагает запускал.',
      ],
      explanation: 'предлагаю + infinitivo formula una recomendación directa.',
    },
    free: {
      prompt:
        'Escribe una propuesta B2 con fuente, recomendación, objeción y siguiente paso.',
      model:
        'Данные опроса показывают, что спрос на вечерние автобусы растёт. Предлагаю запустить трёхмесячный пилотный проект. Несмотря на дополнительные затраты, ограниченный срок снизит риск. После пилота следует оценить число пассажиров и расходы.',
      explanation:
        'Se revisan tarea, evidencia, concesión, registro y precisión',
    },
  },
];

export const batch17RussianLessons = Object.fromEntries(
  seeds.map((seed) => [seed.id, createCompactRussianLesson(seed)]),
);
