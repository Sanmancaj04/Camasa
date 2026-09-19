import {
  createRussianLesson,
  type RussianLessonSeed,
} from '@/lib/russian-lesson-factory';

const seeds: RussianLessonSeed[] = [
  {
    id: 'ru-02',
    title: 'Кириллица II',
    level: 'Pre-A1',
    objective:
      'Puedo distinguir letras cirílicas nuevas y falsos amigos gráficos.',
    summary:
      'Relaciona Б, В, Г, Д, Ж, З, Н, Р, С, У y Х con sus sonidos sin leerlas como letras latinas.',
    concepts: [
      {
        title: 'Letras nuevas',
        explanation: 'Б, Г, Д, Ж y З representan b, g, d, zh y z.',
        example: 'Б = b',
      },
      {
        title: 'Falsos amigos',
        explanation:
          'В, Н, Р y С se parecen a letras latinas, pero suenan v, n, r y s.',
        example: 'Р = r',
      },
      {
        title: 'У y Х',
        explanation: 'У representa u y Х un sonido parecido a la j española.',
        example: 'У = u',
      },
    ],
    tip: 'Pronuncia el sonido antes de asociar la letra a una forma latina.',
    questions: [
      {
        prompt: '¿Cómo se lee aproximadamente СУП?',
        options: ['sup', 'cyn', 'syp'],
        answer: 'sup',
        explanation: 'С = s, У = u y П = p.',
      },
      {
        prompt: '¿Qué letra cirílica representa /v/?',
        options: ['В', 'Б', 'Н'],
        answer: 'В',
        explanation: 'В representa el sonido /v/.',
      },
    ],
    order: {
      prompt: 'Ordena las letras para formar ДОМ (casa).',
      hint: 'D-o-m.',
      tokens: ['М', 'Д', 'О'],
      answer: ['Д', 'О', 'М'],
      explanation: 'Д-О-М forma ДОМ.',
    },
    exactOpen: {
      prompt: 'Escribe en cirílico “VODA” (agua).',
      hint: 'V = В y D = Д.',
      accepted: ['ВОДА', 'вода'],
      modelAnswer: 'ВОДА',
      explanation: 'В-О-Д-А forma ВОДА, “agua”; no se presenta como topónimo.',
    },
    freeOpen: {
      prompt: 'Escribe tres pares letra-sonido de esta unidad.',
      hint: 'Ejemplo: В = v.',
      modelAnswer: 'В = v, Н = n, С = s.',
      explanation:
        'Se revisa la correspondencia entre grafía y sonido; requiere revisión manual.',
    },
  },
  {
    id: 'ru-03',
    title: 'Sonidos y acento',
    level: 'Pre-A1',
    objective:
      'Puedo reconocer la sílaba tónica y contrastes básicos de pronunciación.',
    summary:
      'Observa que el acento ruso es móvil, que о átona puede reducirse y que ь suaviza la consonante anterior.',
    concepts: [
      {
        title: 'Acento',
        explanation:
          'El acento no es fijo y suele marcarse solo en materiales didácticos.',
        example: 'вода́',
      },
      {
        title: 'Reducción vocálica',
        explanation:
          'La о no acentuada suele acercarse a [a] en la pronunciación estándar.',
        example: 'молоко́',
      },
      {
        title: 'Palatalización',
        explanation:
          'El signo ь no tiene sonido propio: suaviza la consonante anterior.',
        example: 'день',
      },
    ],
    tip: 'Aprende cada palabra junto con su acento.',
    questions: [
      {
        prompt: 'En вода́, ¿qué sílaba lleva el acento?',
        options: ['да', 'во', 'las dos'],
        answer: 'да',
        explanation: 'La marca aguda señala la sílaba да.',
      },
      {
        prompt: '¿Qué función tiene ь en день?',
        options: ['suaviza н', 'añade una vocal', 'marca plural'],
        answer: 'suaviza н',
        explanation: 'ь indica palatalización de la consonante anterior.',
      },
    ],
    order: {
      prompt: 'Ordena las sílabas para formar молоко́.',
      hint: 'mo-lo-KÓ.',
      tokens: ['ко́', 'мо', 'ло'],
      answer: ['мо', 'ло', 'ко́'],
      explanation: 'La palabra termina en la sílaba acentuada ко́.',
    },
    exactOpen: {
      prompt: 'Copia “agua” conservando la marca didáctica de acento.',
      hint: 'во + да́.',
      accepted: ['вода́'],
      modelAnswer: 'вода́',
      explanation: 'El acento recae en la última sílaba.',
    },
    freeOpen: {
      prompt: 'Escribe dos palabras rusas con el acento didáctico marcado.',
      hint: 'Puedes usar вода́ y молоко́.',
      modelAnswer: 'вода́, молоко́',
      explanation:
        'Se revisa la colocación del acento; requiere revisión manual.',
    },
  },
  {
    id: 'ru-04',
    title: 'Leer palabras',
    level: 'Pre-A1',
    objective: 'Puedo leer palabras breves y señales frecuentes.',
    summary:
      'Combina el alfabeto, reconoce ь/ъ y segmenta grupos consonánticos sin insertar vocales.',
    concepts: [
      {
        title: 'Señales',
        explanation:
          'Palabras en mayúsculas aparecen con frecuencia en espacios públicos.',
        example: 'ВХОД — entrada',
      },
      {
        title: 'Signo blando',
        explanation: 'ь suaviza la consonante anterior.',
        example: 'ДВЕРЬ — puerta',
      },
      {
        title: 'Signo duro',
        explanation:
          'ъ separa una consonante de una vocal siguiente en ciertas palabras.',
        example: 'ПОДЪЕЗД — entrada del edificio',
      },
    ],
    tip: 'Divide palabras largas en bloques reconocibles antes de leerlas completas.',
    questions: [
      {
        prompt: '¿Qué señal indica salida?',
        options: ['ВЫХОД', 'ВХОД', 'ДВЕРЬ'],
        answer: 'ВЫХОД',
        explanation: 'ВЫХОД significa salida.',
      },
      {
        prompt: '¿Cuál palabra contiene signo blando?',
        options: ['ДВЕРЬ', 'ВХОД', 'ДОМ'],
        answer: 'ДВЕРЬ',
        explanation: 'ДВЕРЬ termina en ь.',
      },
    ],
    order: {
      prompt: 'Ordena las letras de ВХОД.',
      hint: 'V-j-o-d.',
      tokens: ['О', 'В', 'Д', 'Х'],
      answer: ['В', 'Х', 'О', 'Д'],
      explanation: 'ВХОД significa entrada.',
    },
    exactOpen: {
      prompt: 'Escribe en ruso “salida”.',
      hint: 'La señal comienza con ВЫ-.',
      accepted: ['ВЫХОД', 'выход'],
      modelAnswer: 'ВЫХОД',
      explanation: 'ВЫХОД es la señal habitual de salida.',
    },
    freeOpen: {
      prompt: 'Copia y explica dos señales rusas de la introducción.',
      hint: 'Incluye la palabra y su significado.',
      modelAnswer: 'ВХОД — entrada; ВЫХОД — salida.',
      explanation:
        'Se revisan lectura y significado; requiere revisión manual.',
    },
  },
  {
    id: 'ru-05',
    title: 'Привет!',
    level: 'A1.1',
    objective: 'Puedo saludar, despedirme, agradecer y disculparme.',
    summary:
      'Elige saludos y despedidas según la relación y el grado de formalidad.',
    concepts: [
      {
        title: 'Saludo informal',
        explanation: 'Привет se usa con amigos y personas cercanas.',
        example: 'Привет!',
      },
      {
        title: 'Saludo formal',
        explanation:
          'Здравствуйте es adecuado con desconocidos y en situaciones formales.',
        example: 'Здравствуйте!',
      },
      {
        title: 'Cortesía',
        explanation:
          'Спасибо agradece y извините sirve para disculparse o llamar la atención.',
        example: 'Спасибо.',
      },
    ],
    tip: 'Ante la duda con una persona desconocida, usa la forma formal.',
    questions: [
      {
        prompt: '¿Cómo saludas a un profesor?',
        options: ['Здравствуйте!', 'Привет!', 'Пока!'],
        answer: 'Здравствуйте!',
        explanation: 'Здравствуйте mantiene un registro formal.',
      },
      {
        prompt: '¿Qué dices al despedirte formalmente?',
        options: ['До свидания!', 'Пока!', 'Спасибо!'],
        answer: 'До свидания!',
        explanation: 'До свидания es una despedida neutral o formal.',
      },
    ],
    order: {
      prompt: 'Ordena el diálogo.',
      hint: 'Saludo, saludo, despedida.',
      tokens: ['До свидания!', 'Здравствуйте!', 'Здравствуйте!'],
      answer: ['Здравствуйте!', 'Здравствуйте!', 'До свидания!'],
      acceptedOrders: [['Здравствуйте!', 'Здравствуйте!', 'До свидания!']],
      explanation: 'Ambas personas se saludan antes de despedirse.',
    },
    exactOpen: {
      prompt: 'Escribe “Muchas gracias” en ruso.',
      hint: 'Большое + спасибо.',
      accepted: ['Большое спасибо.', 'Большое спасибо', 'большое спасибо'],
      modelAnswer: 'Большое спасибо.',
      explanation: 'Большое спасибо expresa un agradecimiento enfático.',
    },
    freeOpen: {
      prompt: 'Escribe un intercambio de saludo y despedida formal.',
      hint: 'Usa Здравствуйте y До свидания.',
      modelAnswer: '— Здравствуйте! — Здравствуйте! — До свидания!',
      explanation: 'Se revisan secuencia y registro; requiere revisión manual.',
    },
  },
  {
    id: 'ru-06',
    title: 'О себе',
    level: 'A1.1',
    objective: 'Puedo decir mi nombre, origen, idioma y ocupación.',
    summary:
      'Preséntate con pronombres, это y oraciones nominales sin verbo “ser” en presente.',
    concepts: [
      {
        title: 'Nombre',
        explanation: 'Меня зовут… es la fórmula habitual para decir el nombre.',
        example: 'Меня зовут Сантьяго.',
      },
      {
        title: 'Origen',
        explanation: 'Я из + genitivo expresa procedencia.',
        example: 'Я из Мексики.',
      },
      {
        title: 'Ocupación',
        explanation:
          'En presente no se escribe una cópula equivalente a “soy”.',
        example: 'Я студент.',
      },
    ],
    tip: 'No añadas есть entre Я y la profesión.',
    questions: [
      {
        prompt: 'Completa: Меня ___ Диана.',
        options: ['зовут', 'живу', 'говорю'],
        answer: 'зовут',
        explanation: 'Меня зовут… introduce el nombre.',
      },
      {
        prompt: '¿Cómo dices “Hablo español”?',
        options: [
          'Я говорю по-испански.',
          'Я из испанский.',
          'Меня испанский.',
        ],
        answer: 'Я говорю по-испански.',
        explanation: 'говорить по-… expresa el idioma hablado.',
      },
    ],
    order: {
      prompt: 'Ordena la presentación.',
      hint: 'Pronombre + profesión.',
      tokens: ['студент.', 'Я'],
      answer: ['Я', 'студент.'],
      explanation: 'El presente nominal ruso no necesita cópula.',
    },
    exactOpen: {
      prompt: 'Escribe: “Soy de México”.',
      hint: 'Я из…',
      accepted: ['Я из Мексики.', 'Я из Мексики', 'я из Мексики'],
      modelAnswer: 'Я из Мексики.',
      explanation: 'из exige Мексики en genitivo.',
    },
    freeOpen: {
      prompt: 'Preséntate en tres frases: nombre, origen e idioma.',
      hint: 'Usa Меня зовут…, Я из… y Я говорю…',
      modelAnswer: 'Меня зовут Сантьяго. Я из Мексики. Я говорю по-испански.',
      explanation:
        'Se revisan contenido y formas introductorias; requiere revisión manual.',
    },
  },
  {
    id: 'ru-07',
    title: 'Люди и семья',
    level: 'A1.1',
    objective: 'Puedo presentar a familiares y describir personas brevemente.',
    summary:
      'Usa género, posesivos y nominativo para identificar y describir personas.',
    concepts: [
      {
        title: 'Este/esta',
        explanation:
          'Это presenta tanto personas como objetos sin cambiar de forma.',
        example: 'Это моя сестра.',
      },
      {
        title: 'Posesivos',
        explanation: 'мой, моя y моё concuerdan con el género del sustantivo.',
        example: 'мой брат',
      },
      {
        title: 'Adjetivos',
        explanation:
          'El adjetivo concuerda con el sustantivo en género y número.',
        example: 'добрая мама',
      },
    ],
    tip: 'Mira el género del sustantivo antes de elegir el posesivo o el adjetivo.',
    questions: [
      {
        prompt: 'Completa: Это ___ брат.',
        options: ['мой', 'моя', 'моё'],
        answer: 'мой',
        explanation: 'брат es masculino y requiere мой.',
      },
      {
        prompt: 'Completa: Анна — ___ сестра.',
        options: ['моя', 'мой', 'моё'],
        answer: 'моя',
        explanation: 'сестра es femenino y requiere моя.',
      },
    ],
    order: {
      prompt: 'Ordena la presentación.',
      hint: 'Это + posesivo + familiar.',
      tokens: ['моя', 'Это', 'мама.'],
      answer: ['Это', 'моя', 'мама.'],
      explanation: 'Это моя мама significa “Esta es mi madre”.',
    },
    exactOpen: {
      prompt: 'Escribe: “Este es mi hermano”.',
      hint: 'Это мой брат.',
      accepted: ['Это мой брат.', 'Это мой брат', 'это мой брат'],
      modelAnswer: 'Это мой брат.',
      explanation: 'мой concuerda con брат.',
    },
    freeOpen: {
      prompt: 'Presenta a dos personas de una familia y describe una cualidad.',
      hint: 'Usa Это…, мой/моя y un adjetivo.',
      modelAnswer: 'Это моя сестра Анна. Она добрая. Это мой брат Иван.',
      explanation:
        'Se revisan presentación y concordancia; requiere revisión manual.',
    },
  },
  {
    id: 'ru-08',
    title: 'Числа и время',
    level: 'A1.1',
    objective: 'Puedo comprender números, edades, teléfonos y horas.',
    summary:
      'Reconoce números frecuentes y usa las fórmulas básicas para edad y hora.',
    concepts: [
      {
        title: 'Números',
        explanation:
          'один, два, три… forman la base de teléfonos y cantidades.',
        example: 'один, два, три',
      },
      {
        title: 'Edad',
        explanation: 'Мне + número + год/года/лет expresa edad.',
        example: 'Мне двадцать лет.',
      },
      {
        title: 'Hora',
        explanation: 'Который час? pregunta la hora.',
        example: 'Сейчас три часа.',
      },
    ],
    tip: 'Aprende la edad como una expresión completa con мне y лет.',
    questions: [
      {
        prompt: '¿Qué significa “Мне двадцать лет”?',
        options: ['Tengo veinte años.', 'Son las veinte.', 'Cuesta veinte.'],
        answer: 'Tengo veinte años.',
        explanation: 'La construcción dativa expresa edad.',
      },
      {
        prompt: '¿Cómo preguntas la hora?',
        options: ['Который час?', 'Сколько лет?', 'Как дела?'],
        answer: 'Который час?',
        explanation: 'Который час? significa “¿Qué hora es?”.',
      },
    ],
    order: {
      prompt: 'Ordena la edad.',
      hint: 'Мне + número + лет.',
      tokens: ['лет.', 'двадцать', 'Мне'],
      answer: ['Мне', 'двадцать', 'лет.'],
      explanation: 'La persona que tiene la edad aparece en dativo.',
    },
    exactOpen: {
      prompt: 'Escribe: “Ahora son las tres”.',
      hint: 'Сейчас три часа.',
      accepted: ['Сейчас три часа.', 'Сейчас три часа', 'сейчас три часа'],
      modelAnswer: 'Сейчас три часа.',
      explanation: 'три часа expresa “las tres”.',
    },
    freeOpen: {
      prompt: 'Escribe tu edad y una hora de encuentro.',
      hint: 'Usa Мне… лет y Встреча в…',
      modelAnswer: 'Мне двадцать пять лет. Встреча в три часа.',
      explanation: 'Se revisan número, edad y hora; requiere revisión manual.',
    },
  },
  {
    id: 'ru-09',
    title: 'Мой день',
    level: 'A1.2',
    objective: 'Puedo describir acciones cotidianas en presente.',
    summary:
      'Conjuga verbos frecuentes y organiza la rutina con marcadores temporales.',
    concepts: [
      {
        title: 'Primera conjugación',
        explanation: 'работать forma я работаю, ты работаешь.',
        example: 'Я работаю утром.',
      },
      {
        title: 'Segunda conjugación',
        explanation: 'говорить forma я говорю, ты говоришь.',
        example: 'Я говорю по-русски.',
      },
      {
        title: 'Secuencia diaria',
        explanation: 'утром, днём y вечером sitúan acciones.',
        example: 'Вечером я читаю.',
      },
    ],
    tip: 'Aprende cada verbo con su forma de я y ты.',
    questions: [
      {
        prompt: 'Completa: Утром я ___.',
        options: ['работаю', 'работаешь', 'работает'],
        answer: 'работаю',
        explanation: 'Con я se usa работаю.',
      },
      {
        prompt: 'Completa: Вечером она ___ книгу.',
        options: ['читает', 'читаю', 'читаешь'],
        answer: 'читает',
        explanation: 'Con она se usa читает.',
      },
    ],
    order: {
      prompt: 'Ordena la rutina.',
      hint: 'Marcador + sujeto + verbo.',
      tokens: ['я', 'Вечером', 'читаю.'],
      answer: ['Вечером', 'я', 'читаю.'],
      explanation: 'El marcador temporal puede abrir la oración.',
    },
    exactOpen: {
      prompt: 'Escribe: “Trabajo por la mañana”.',
      hint: 'Утром я работаю.',
      accepted: [
        'Утром я работаю.',
        'Утром я работаю',
        'Я работаю утром.',
        'Я работаю утром',
      ],
      modelAnswer: 'Утром я работаю.',
      explanation: 'Ambos órdenes son naturales en este contexto.',
    },
    freeOpen: {
      prompt: 'Describe tu rutina en tres momentos del día.',
      hint: 'Usa утром, днём y вечером.',
      modelAnswer: 'Утром я работаю. Днём я обедаю. Вечером я читаю.',
      explanation:
        'Se revisan secuencia y conjugación; requiere revisión manual.',
    },
  },
  {
    id: 'ru-10',
    title: 'Где это?',
    level: 'A1.2',
    objective: 'Puedo preguntar y decir dónde se encuentra algo.',
    summary:
      'Usa где y el caso prepositivo después de в y на para localizar lugares.',
    concepts: [
      {
        title: 'Pregunta',
        explanation: 'Где…? pregunta dónde se encuentra algo.',
        example: 'Где музей?',
      },
      {
        title: 'В + prepositivo',
        explanation: 'в suele situar algo dentro de un espacio.',
        example: 'в банке',
      },
      {
        title: 'На + prepositivo',
        explanation: 'на aparece con ciertos lugares y superficies.',
        example: 'на работе',
      },
    ],
    tip: 'Aprende cada lugar junto con su preposición habitual.',
    questions: [
      {
        prompt: 'Completa: Я ___ банке.',
        options: ['в', 'на', 'из'],
        answer: 'в',
        explanation: 'Se dice в банке.',
      },
      {
        prompt: '¿Cómo dices “en el trabajo”?',
        options: ['на работе', 'в работе', 'из работы'],
        answer: 'на работе',
        explanation: 'работа usa на para localización.',
      },
    ],
    order: {
      prompt: 'Ordena la pregunta.',
      hint: 'Где + lugar?',
      tokens: ['музей?', 'Где'],
      answer: ['Где', 'музей?'],
      explanation: 'Где музей? pregunta la ubicación del museo.',
    },
    exactOpen: {
      prompt: 'Escribe: “El libro está en la mesa”.',
      hint: 'Книга на столе.',
      accepted: ['Книга на столе.', 'Книга на столе', 'книга на столе'],
      modelAnswer: 'Книга на столе.',
      explanation: 'на столе usa el prepositivo de стол.',
    },
    freeOpen: {
      prompt: 'Describe dónde están tres lugares u objetos.',
      hint: 'Usa в/на + prepositivo.',
      modelAnswer: 'Книга на столе. Анна в банке. Иван на работе.',
      explanation:
        'Se revisan preposición y terminación contextual; requiere revisión manual.',
    },
  },
  {
    id: 'ru-11',
    title: 'Еда и покупки',
    level: 'A1.2',
    objective: 'Puedo pedir productos, comprender precios y expresar gustos.',
    summary:
      'Combina acusativo, хотеть/любить y cantidades en una compra sencilla.',
    concepts: [
      {
        title: 'Pedir',
        explanation: 'Я хочу… expresa lo que deseas.',
        example: 'Я хочу чай.',
      },
      {
        title: 'Gustos y acusativo',
        explanation:
          'Я люблю… expresa gustos; пицца cambia a пиццу en acusativo.',
        example: 'Я люблю пиццу.',
      },
      {
        title: 'Precio',
        explanation: 'Сколько стоит…? pregunta cuánto cuesta algo.',
        example: 'Сколько стоит хлеб?',
      },
    ],
    tip: 'Usa пожалуйста para convertir una selección en una petición cortés.',
    questions: [
      {
        prompt: '¿Cómo preguntas el precio del pan?',
        options: ['Сколько стоит хлеб?', 'Где хлеб?', 'Кто хлеб?'],
        answer: 'Сколько стоит хлеб?',
        explanation: 'Сколько стоит… pregunta el precio.',
      },
      {
        prompt: 'Completa con acusativo: Я люблю ___.',
        options: ['пиццу', 'пицца', 'пиццей'],
        answer: 'пиццу',
        explanation: 'El objeto femenino пицца cambia a пиццу en acusativo.',
      },
    ],
    order: {
      prompt: 'Ordena la petición.',
      hint: 'Producto + пожалуйста.',
      tokens: ['пожалуйста.', 'Кофе,'],
      answer: ['Кофе,', 'пожалуйста.'],
      explanation: 'Кофе, пожалуйста es una petición breve y cortés.',
    },
    exactOpen: {
      prompt: 'Escribe: “Quiero pizza”.',
      hint: 'Usa пицца en acusativo.',
      accepted: ['Я хочу пиццу.', 'Я хочу пиццу', 'я хочу пиццу'],
      modelAnswer: 'Я хочу пиццу.',
      explanation: 'El objeto femenino пицца toma la forma acusativa пиццу.',
    },
    freeOpen: {
      prompt:
        'Escribe un diálogo de compra con producto, precio y agradecimiento.',
      hint: 'Incluye пожалуйста, сколько стоит y спасибо.',
      modelAnswer:
        '— Хлеб, пожалуйста. Сколько стоит? — Сто рублей. — Спасибо.',
      explanation:
        'Se revisan las tres funciones comunicativas; requiere revisión manual.',
    },
  },
  {
    id: 'ru-12',
    title: 'Проект: обо мне',
    level: 'A1 consolidación',
    objective:
      'Puedo presentarme y resolver intercambios cotidianos elementales.',
    summary:
      'Integra presentación, familia, rutina, lugares, hora y compras en una misión A1.',
    concepts: [
      {
        title: 'Presentarse',
        explanation: 'Incluye nombre, origen y lengua.',
        example: 'Меня зовут Анна. Я из России.',
      },
      {
        title: 'Resolver',
        explanation: 'Una pregunta directa permite obtener datos prácticos.',
        example: 'Где магазин?',
      },
      {
        title: 'Reparar',
        explanation:
          'Извините y повторите, пожалуйста ayudan cuando no entiendes.',
        example: 'Повторите, пожалуйста.',
      },
    ],
    tip: 'Identifica primero la meta de cada intercambio y usa una frase corta y clara.',
    questions: [
      {
        prompt: 'No entendiste. ¿Qué dices?',
        options: ['Повторите, пожалуйста.', 'До свидания.', 'Я из Мексики.'],
        answer: 'Повторите, пожалуйста.',
        explanation: 'La frase pide repetición cortésmente.',
      },
      {
        prompt: 'Quieres localizar una tienda. ¿Qué preguntas?',
        options: ['Где магазин?', 'Сколько магазин?', 'Кто магазин?'],
        answer: 'Где магазин?',
        explanation: 'Где pregunta ubicación.',
      },
    ],
    order: {
      prompt: 'Ordena la petición de repetición.',
      hint: 'Verbo + пожалуйста.',
      tokens: ['пожалуйста.', 'Повторите,'],
      answer: ['Повторите,', 'пожалуйста.'],
      explanation: 'La coma separa el verbo de пожалуйста.',
    },
    exactOpen: {
      prompt: 'Escribe: “Me llamo Santiago y soy de México”.',
      hint: 'Меня зовут… Я из…',
      accepted: [
        'Меня зовут Сантьяго. Я из Мексики.',
        'Меня зовут Сантьяго, и я из Мексики.',
        'Меня зовут Сантьяго и я из Мексики',
      ],
      modelAnswer: 'Меня зовут Сантьяго. Я из Мексики.',
      explanation: 'Las dos fórmulas completan la presentación.',
    },
    freeOpen: {
      prompt:
        'Crea una presentación A1 de 5–6 frases con un dato personal, rutina y necesidad cotidiana.',
      hint: 'Integra al menos tres unidades anteriores.',
      modelAnswer:
        'Меня зовут Сантьяго. Я из Мексики. Я говорю по-испански. Утром я работаю. Я люблю кофе. Где кафе?',
      explanation:
        'Se evalúan cobertura, comprensibilidad y control A1; requiere revisión manual.',
    },
  },
];

export const batch15RussianLessons = Object.fromEntries(
  seeds.map((seed) => [seed.id, createRussianLesson(seed)]),
);
