import {
  createCompactRussianLesson,
  type CompactRussianSeed,
} from '@/lib/russian-lesson-factory';

const seeds: CompactRussianSeed[] = [
  {
    id: 'ru-13',
    title: 'Дом и город',
    level: 'A2.1',
    objective: 'Puedo describir vivienda, barrio y servicios cercanos.',
    summary:
      'Describe espacios con adjetivos, preposiciones y el genitivo de ausencia.',
    concepts: [
      ['Ausencia', 'нет exige genitivo.', 'Здесь нет аптеки.'],
      [
        'Descripción',
        'Los adjetivos concuerdan con el sustantivo.',
        'Это тихий район.',
      ],
      [
        'Cercanía',
        'рядом с + instrumental indica proximidad.',
        'Магазин рядом с домом.',
      ],
    ],
    scenario: {
      prompt: '¿Cómo dices que no hay banco?',
      options: ['Здесь нет банка.', 'Здесь есть банк.', 'Банк рядом.'],
      answer: 'Здесь нет банка.',
      explanation: 'нет rige genitivo: банка.',
    },
    exact: {
      prompt: 'Escribe: “La tienda está cerca de la casa”.',
      answer: 'Магазин рядом с домом.',
      distractors: ['Магазин нет дома.', 'Дом рядом магазин.'],
      explanation: 'рядом с exige instrumental: домом.',
    },
    free: {
      prompt: 'Describe tu barrio en tres frases.',
      model: 'Это тихий район. Рядом с домом есть парк. Здесь нет метро.',
      explanation: 'Se revisan descripción, existencia y localización',
    },
  },
  {
    id: 'ru-14',
    title: 'Передвижение',
    level: 'A2.1',
    objective: 'Puedo explicar cómo me desplazo y pedir indicaciones.',
    summary: 'Distingue ir a pie o en transporte y sigue instrucciones breves.',
    concepts: [
      ['A pie', 'идти/ходить describen movimiento a pie.', 'Я иду в магазин.'],
      [
        'En transporte',
        'ехать/ездить describen movimiento en vehículo.',
        'Я еду на автобусе.',
      ],
      ['Indicaciones', 'Imperativos orientan una ruta.', 'Идите прямо.'],
    ],
    scenario: {
      prompt: 'Vas ahora en autobús. ¿Qué dices?',
      options: ['Я еду на автобусе.', 'Я иду на автобусе.', 'Я хожу автобус.'],
      answer: 'Я еду на автобусе.',
      explanation: 'ехать corresponde al desplazamiento en vehículo en curso.',
    },
    exact: {
      prompt: 'Escribe: “Siga todo recto”.',
      answer: 'Идите прямо.',
      distractors: ['Едете прямо.', 'Прямо идти.'],
      explanation: 'Идите es el imperativo cortés/plural de идти.',
    },
    free: {
      prompt: 'Explica una ruta con tres instrucciones.',
      model: 'Идите прямо, потом поверните направо. Метро будет слева.',
      explanation: 'Se revisan secuencia, imperativos y orientación',
    },
  },
  {
    id: 'ru-15',
    title: 'Прошлое',
    level: 'A2.1',
    objective: 'Puedo contar actividades pasadas y ordenar hechos.',
    summary:
      'Forma el pasado, marca género y elige aspecto según proceso o resultado.',
    concepts: [
      [
        'Pasado',
        'El pasado concuerda en género y número.',
        'Анна работала дома.',
      ],
      [
        'Proceso',
        'El imperfectivo presenta actividad o duración.',
        'Вчера я читал два часа.',
      ],
      [
        'Resultado',
        'El perfectivo enfoca una acción completada.',
        'Я прочитал книгу.',
      ],
    ],
    scenario: {
      prompt: 'La hablante Ana trabajó en casa. Completa: Анна ___ дома.',
      options: ['работала', 'работал', 'работали'],
      answer: 'работала',
      explanation: 'El pasado femenino termina en -ла.',
    },
    exact: {
      prompt: 'Escribe: “Leí y terminé el libro”.',
      answer: 'Я прочитал книгу.',
      distractors: ['Я читал книгу сейчас.', 'Я прочитать книгу.'],
      explanation:
        'прочитал presenta la lectura como completada; una hablante usaría прочитала.',
    },
    free: {
      prompt: 'Cuenta tres acciones de ayer en orden.',
      model:
        'Вчера утром я работал. Потом я встретил друга. Вечером я посмотрел фильм.',
      explanation: 'Se revisan pasado, secuencia y aspecto',
    },
  },
  {
    id: 'ru-16',
    title: 'Планы',
    level: 'A2.1',
    objective: 'Puedo expresar planes, intención y acuerdos próximos.',
    summary: 'Usa буду + infinitivo, собираться y expresiones de fecha.',
    concepts: [
      [
        'Futuro imperfectivo',
        'буду + infinitivo expresa una actividad futura.',
        'Завтра я буду работать.',
      ],
      [
        'Intención',
        'собираться + infinitivo expresa un plan.',
        'Я собираюсь учиться.',
      ],
      [
        'Acordar',
        'Давай/давайте propone una actividad compartida.',
        'Давайте встретимся в пять.',
      ],
    ],
    scenario: {
      prompt: '¿Cuál frase propone una cita formal o plural?',
      options: [
        'Давайте встретимся в пять.',
        'Я встречался вчера.',
        'Ты встреча.',
      ],
      answer: 'Давайте встретимся в пять.',
      explanation: 'Давайте + perfectivo propone una acción conjunta.',
    },
    exact: {
      prompt: 'Escribe: “Mañana voy a trabajar”.',
      answer: 'Завтра я буду работать.',
      distractors: ['Вчера я работал.', 'Завтра я работа.'],
      explanation: 'буду + infinitivo forma el futuro imperfectivo.',
    },
    free: {
      prompt: 'Escribe tres planes para la próxima semana.',
      model:
        'В понедельник я буду работать. Во вторник я собираюсь учиться. В субботу мы встретимся.',
      explanation: 'Se revisan futuro, intención y fechas',
    },
  },
  {
    id: 'ru-17',
    title: 'Здоровье',
    level: 'A2.2',
    objective: 'Puedo describir síntomas y comprender consejos sencillos.',
    summary:
      'Expresa estados con dativo y distingue necesidad, permiso y prohibición.',
    concepts: [
      [
        'Estado',
        'Мне + adjetivo/adverbio describe cómo te sientes.',
        'Мне плохо.',
      ],
      [
        'Necesidad',
        'нужно + infinitivo expresa necesidad.',
        'Вам нужно отдыхать.',
      ],
      [
        'Prohibición',
        'нельзя + infinitivo indica que algo no está permitido o no conviene.',
        'Нельзя курить.',
      ],
    ],
    scenario: {
      prompt: 'El médico aconseja descansar. ¿Qué dice?',
      options: ['Вам нужно отдыхать.', 'Вам нельзя отдыхать.', 'Вы отдыхал.'],
      answer: 'Вам нужно отдыхать.',
      explanation: 'нужно + infinitivo expresa consejo o necesidad.',
    },
    exact: {
      prompt: 'Escribe: “Me duele la cabeza”.',
      answer: 'У меня болит голова.',
      distractors: ['Мне голова есть.', 'Я болит голову.'],
      explanation: 'У меня болит + nominativo expresa dolor.',
    },
    free: {
      prompt: 'Escribe un diálogo breve entre paciente y médico.',
      model: '— У меня болит голова. — Вам нужно отдыхать и пить воду.',
      explanation: 'Se revisan síntoma y consejo comprensible',
    },
  },
  {
    id: 'ru-18',
    title: 'Experiencias y habilidades',
    level: 'A2.2',
    objective: 'Puedo hablar de experiencias, intereses y capacidades.',
    summary:
      'Distingue habilidad aprendida, posibilidad y experiencia personal.',
    concepts: [
      ['Habilidad', 'уметь indica saber hacer algo.', 'Я умею плавать.'],
      [
        'Posibilidad',
        'мочь indica poder según capacidad o circunstancia.',
        'Я могу прийти завтра.',
      ],
      [
        'Interés',
        'интересоваться rige instrumental.',
        'Я интересуюсь музыкой.',
      ],
    ],
    scenario: {
      prompt: 'Sabes nadar porque aprendiste. ¿Qué dices?',
      options: ['Я умею плавать.', 'Я могу завтра.', 'Я интересую плавать.'],
      answer: 'Я умею плавать.',
      explanation: 'уметь expresa una habilidad adquirida.',
    },
    exact: {
      prompt: 'Escribe: “Me interesa la música”.',
      answer: 'Я интересуюсь музыкой.',
      distractors: ['Я интересую музыку.', 'Мне музыка умеет.'],
      explanation: 'интересоваться exige instrumental: музыкой.',
    },
    free: {
      prompt: 'Describe dos habilidades, una posibilidad y un interés.',
      model:
        'Я умею готовить и плавать. Завтра я могу прийти рано. Я интересуюсь музыкой.',
      explanation: 'Se revisan los tres contrastes funcionales',
    },
  },
  {
    id: 'ru-19',
    title: 'Comunicación práctica',
    level: 'A2.2',
    objective: 'Puedo pedir ayuda, aclarar y resolver un problema sencillo.',
    summary:
      'Formula peticiones, pide aclaración y expresa ausencia con formas negativas.',
    concepts: [
      [
        'Pedir ayuda',
        'Помогите, пожалуйста es una petición cortés.',
        'Помогите, пожалуйста.',
      ],
      ['Aclarar', 'Что это значит? pide significado.', 'Что это значит?'],
      [
        'Ausencia',
        'У меня нет + genitivo expresa que no tienes algo.',
        'У меня нет билета.',
      ],
    ],
    scenario: {
      prompt: 'No tienes billete. ¿Qué dices?',
      options: ['У меня нет билета.', 'Я не билет.', 'У меня билет есть нет.'],
      answer: 'У меня нет билета.',
      explanation: 'нет exige genitivo: билета.',
    },
    exact: {
      prompt: 'Escribe: “Ayúdeme, por favor”.',
      answer: 'Помогите, пожалуйста.',
      distractors: ['Помогаю, пожалуйста.', 'Помощь ты.'],
      explanation: 'Помогите es el imperativo cortés/plural.',
    },
    free: {
      prompt: 'Crea un diálogo para resolver un problema de billete.',
      model:
        '— Извините, у меня нет билета. Помогите, пожалуйста. — Купите билет в кассе.',
      explanation: 'Se revisan petición, problema y solución',
    },
  },
  {
    id: 'ru-20',
    title: 'Проект A2',
    level: 'A2 consolidación',
    objective: 'Puedo resolver una secuencia de tareas de vida diaria.',
    summary:
      'Integra casos básicos, movimiento, pasado, planes y estrategias de reparación.',
    concepts: [
      [
        'Misión',
        'Encadena preguntas según una meta práctica.',
        'Как доехать до вокзала?',
      ],
      [
        'Tiempo',
        'Combina pasado y futuro para explicar cambios.',
        'Вчера я приехал, а завтра уеду.',
      ],
      [
        'Reparación',
        'Pide repetición o habla más lenta.',
        'Говорите медленнее, пожалуйста.',
      ],
    ],
    scenario: {
      prompt: 'No comprendes una indicación. ¿Qué pides?',
      options: [
        'Говорите медленнее, пожалуйста.',
        'До свидания.',
        'Я всё понял.',
      ],
      answer: 'Говорите медленнее, пожалуйста.',
      explanation: 'La frase solicita una velocidad más lenta.',
    },
    exact: {
      prompt: 'Escribe: “¿Cómo llegar a la estación?”.',
      answer: 'Как доехать до вокзала?',
      distractors: ['Где ехать вокзал?', 'Сколько вокзал?'],
      explanation: 'доехать до + genitivo pregunta cómo llegar en transporte.',
    },
    free: {
      prompt: 'Resuelve una misión A2 con transporte, compra y plan.',
      model:
        'Как доехать до вокзала? Один билет, пожалуйста. Завтра я буду в Москве.',
      explanation: 'Se revisa integración funcional A2',
    },
  },
  {
    id: 'ru-21',
    title: 'Истории',
    level: 'B1.1',
    objective:
      'Puedo narrar experiencias conectando contexto y acontecimientos.',
    summary:
      'Alterna aspecto, movimiento con prefijos y conectores narrativos.',
    concepts: [
      [
        'Contexto',
        'El imperfectivo presenta fondo o proceso.',
        'Когда я шёл домой, шёл дождь.',
      ],
      [
        'Evento',
        'El perfectivo avanza la historia con un resultado.',
        'Я встретил старого друга.',
      ],
      [
        'Movimiento',
        'Prefijos como при- y у- marcan llegada y salida.',
        'Поезд приехал и уехал.',
      ],
    ],
    scenario: {
      prompt: '¿Qué forma presenta un evento completado?',
      options: [
        'Я встретил друга.',
        'Я встречал друга два часа.',
        'Я встречать друга.',
      ],
      answer: 'Я встретил друга.',
      explanation: 'встретил presenta el encuentro como evento completo.',
    },
    exact: {
      prompt: 'Escribe: “Cuando iba a casa, empezó a llover”.',
      answer: 'Когда я шёл домой, начался дождь.',
      distractors: ['Когда я пришёл дождь.', 'Я шёл начаться домой.'],
      explanation: 'шёл crea el fondo y начался introduce el evento.',
    },
    free: {
      prompt: 'Narra una experiencia en 4–5 frases.',
      model:
        'Когда я шёл домой, начался дождь. Я зашёл в кафе и встретил друга. Мы поговорили, а потом я вернулся домой.',
      explanation: 'Se revisan aspecto, secuencia y movimiento',
    },
  },
  {
    id: 'ru-22',
    title: 'Учёба и работа',
    level: 'B1.1',
    objective: 'Puedo explicar responsabilidades, formación y metas.',
    summary: 'Describe experiencia, tareas y objetivos con léxico profesional.',
    concepts: [
      [
        'Responsabilidad',
        'отвечать за + acusativo indica responsabilidad.',
        'Я отвечаю за отчёты.',
      ],
      [
        'Formación',
        'учиться/окончить describen estudios en curso o completados.',
        'Я окончил университет.',
      ],
      [
        'Meta',
        'хотеть y планировать presentan objetivos.',
        'Я планирую развиваться в этой области.',
      ],
    ],
    scenario: {
      prompt: '¿Cómo dices que eres responsable de los informes?',
      options: [
        'Я отвечаю за отчёты.',
        'Я отвечаю отчётами.',
        'Я ответ отчёт.',
      ],
      answer: 'Я отвечаю за отчёты.',
      explanation: 'отвечать за rige acusativo.',
    },
    exact: {
      prompt: 'Escribe: “Terminé la universidad”.',
      answer: 'Я окончил университет.',
      distractors: ['Я учусь университет вчера.', 'Я закончу университет уже.'],
      explanation:
        'окончил presenta la formación como completada; una hablante usaría окончила.',
    },
    free: {
      prompt: 'Escribe un perfil profesional breve.',
      model:
        'Я окончил университет и работаю аналитиком. Я отвечаю за отчёты. Я хочу развиваться в этой области.',
      explanation: 'Se revisan formación, responsabilidad y meta',
    },
  },
  {
    id: 'ru-23',
    title: 'Мнение',
    level: 'B1.1',
    objective: 'Puedo expresar una opinión y justificarla con razones.',
    summary:
      'Distingue causa, consecuencia y concesión al construir un argumento.',
    concepts: [
      [
        'Opinión',
        'Я считаю, что… introduce una postura.',
        'Я считаю, что это полезно.',
      ],
      [
        'Causa',
        'потому что introduce la razón.',
        'Это удобно, потому что экономит время.',
      ],
      [
        'Consecuencia',
        'поэтому introduce el resultado.',
        'Это дорого, поэтому мы отказались.',
      ],
    ],
    scenario: {
      prompt: '¿Qué conector introduce una consecuencia?',
      options: ['поэтому', 'потому что', 'хотя'],
      answer: 'поэтому',
      explanation: 'поэтому enlaza una causa previa con su resultado.',
    },
    exact: {
      prompt: 'Escribe: “Creo que es útil”.',
      answer: 'Я считаю, что это полезно.',
      distractors: ['Я считаю это потому.', 'Это полезно поэтому что.'],
      explanation: 'Я считаю, что introduce una opinión explícita.',
    },
    free: {
      prompt: 'Escribe un párrafo con opinión, razón y consecuencia.',
      model:
        'Я считаю, что общественный транспорт важен, потому что он уменьшает пробки. Поэтому город должен развивать его.',
      explanation: 'Se revisan postura y relaciones lógicas',
    },
  },
  {
    id: 'ru-24',
    title: 'Новости',
    level: 'B1.1',
    objective: 'Puedo comprender los puntos principales de noticias claras.',
    summary:
      'Identifica titular, fuente, idea principal y construcciones pasivas frecuentes.',
    concepts: [
      [
        'Titular',
        'Los titulares condensan el acontecimiento principal.',
        'В городе открыли новую школу',
      ],
      [
        'Fuente',
        'по словам… atribuye información.',
        'По словам мэра, проект завершён.',
      ],
      [
        'Pasiva refleja',
        'Verbos en -ся pueden presentar procesos sin agente explícito.',
        'Мост строится с прошлого года.',
      ],
    ],
    scenario: {
      prompt: 'En “По словам мэра…”, ¿quién es la fuente?',
      options: ['el alcalde', 'el puente', 'el lector'],
      answer: 'el alcalde',
      explanation: 'по словам + genitivo atribuye la información.',
    },
    exact: {
      prompt: 'Escribe: “En la ciudad abrieron una escuela nueva”.',
      answer: 'В городе открыли новую школу.',
      distractors: ['Город открылся школой.', 'В городе новая открыть школа.'],
      explanation:
        'La tercera persona plural indefinida permite omitir al agente.',
    },
    free: {
      prompt: 'Resume una noticia en tres frases e identifica la fuente.',
      model:
        'В городе открыли новую школу. По словам мэра, в ней будут учиться пятьсот детей. Занятия начнутся осенью.',
      explanation: 'Se revisan idea principal, atribución y detalles',
    },
  },
];

export const batch16RussianLessons = Object.fromEntries(
  seeds.map((seed) => [seed.id, createCompactRussianLesson(seed)]),
);
