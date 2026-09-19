import { createLesson, type LessonSpec } from '@/lib/lesson-factory';

const englishSpecs: LessonSpec[] = [
  {
    id: 'en-12',
    language: 'en',
    title: 'Noticias y medios',
    level: 'B1.1',
    objective: 'Puedo comprender los puntos principales de noticias claras.',
    summary:
      'Reconoce el foco de un titular, la voz pasiva y la información atribuida a una fuente.',
    concepts: [
      {
        title: 'Titulares',
        explanation:
          'Los titulares omiten palabras menores y destacan la información nueva.',
        examples: ['Storm closes schools', 'New bridge opened'],
      },
      {
        title: 'Voz pasiva',
        explanation:
          'Be + participio centra la noticia en el hecho o la persona afectada.',
        examples: ['The road was closed.', 'Two people were rescued.'],
      },
      {
        title: 'Información atribuida',
        explanation:
          'Reported y according to indican de dónde procede la información.',
        examples: [
          'Police reported that the road was safe.',
          'According to officials, nobody was hurt.',
        ],
      },
    ],
    tip: 'Separa siempre qué ocurrió, dónde, cuándo y quién lo afirma.',
    choices: [
      {
        prompt:
          'Titular: “Local library reopened”. ¿Cuál es la idea principal?',
        hint: 'Reopened significa que volvió a abrir.',
        options: [
          'La biblioteca local volvió a abrir.',
          'Construirán una biblioteca.',
          'La biblioteca perdió libros.',
        ],
        answer: 'La biblioteca local volvió a abrir.',
        explanation: 'El titular informa de una reapertura.',
      },
      {
        prompt: 'Completa: The airport ___ closed because of fog.',
        hint: 'La noticia enfoca el aeropuerto afectado.',
        options: ['was', 'did', 'has'],
        answer: 'was',
        explanation: 'Was + closed forma una pasiva en pasado.',
      },
      {
        prompt: '“Officials said the water was safe.” ¿Quién es la fuente?',
        hint: 'Busca quién dijo la información.',
        options: ['Officials', 'The water', 'The readers'],
        answer: 'Officials',
        explanation: 'Officials identifica la fuente atribuida.',
      },
      {
        prompt: '¿Cuál es un resumen neutral?',
        hint: 'Debe recoger el hecho sin opinión.',
        options: [
          'The city opened two new health centres on Monday.',
          'The fantastic city finally did something.',
          'Health centres are always perfect.',
        ],
        answer: 'The city opened two new health centres on Monday.',
        explanation: 'Incluye hecho, cantidad y fecha sin valoración.',
      },
      {
        prompt: '¿Qué frase usa estilo indirecto?',
        hint: 'Reporta palabras sin comillas.',
        options: [
          'She said that the train was delayed.',
          '“The train is delayed,” she said.',
          'Delay the train.',
        ],
        answer: 'She said that the train was delayed.',
        explanation: 'Said that introduce el contenido reportado.',
      },
    ],
    order: {
      prompt: 'Ordena la noticia breve.',
      hint: 'Hecho + causa.',
      tokens: ['because of heavy rain.', 'Several roads', 'were closed'],
      answer: ['Several roads', 'were closed', 'because of heavy rain.'],
      explanation: 'La pasiva presenta las carreteras y después la causa.',
    },
    exactOpen: {
      prompt: 'Escribe: “El museo fue abierto en 2020”.',
      hint: 'Usa was opened.',
      accepted: [
        'The museum was opened in 2020.',
        'The museum was opened in 2020',
      ],
      modelAnswer: 'The museum was opened in 2020.',
      explanation: 'Was opened es la pasiva de pasado.',
    },
    freeOpen: {
      prompt: 'Resume una noticia en dos frases e identifica la fuente.',
      hint: 'Incluye el hecho principal y according to…',
      modelAnswer:
        'A new park opened downtown today. According to the council, it includes 500 trees.',
      explanation: 'La respuesta debe distinguir el hecho de su fuente.',
    },
  },
  {
    id: 'en-13',
    language: 'en',
    title: 'Relaciones y comunicación',
    level: 'B1.1',
    objective:
      'Puedo pedir favores, responder a noticias y aclarar malentendidos.',
    summary:
      'Formula peticiones corteses, reacciona con empatía y repara mensajes poco claros.',
    concepts: [
      {
        title: 'Favores',
        explanation: 'Could you y Would you mind suavizan una petición.',
        examples: [
          'Could you call me later?',
          'Would you mind closing the door?',
        ],
      },
      {
        title: 'Reaccionar',
        explanation:
          'La respuesta cambia según la noticia sea positiva o negativa.',
        examples: ["That's great news!", "I'm sorry to hear that."],
      },
      {
        title: 'Aclarar',
        explanation: 'Pide reformulación o confirma tu interpretación.',
        examples: ['What do you mean?', 'Do you mean next Friday?'],
      },
    ],
    tip: 'Primero reconoce la noticia; después pregunta o responde.',
    choices: [
      {
        prompt: 'Elige la petición más cortés.',
        hint: 'No uses un imperativo directo.',
        options: [
          'Could you send me the file, please?',
          'Send the file.',
          'You send file?',
        ],
        answer: 'Could you send me the file, please?',
        explanation: 'Could you… please? es una petición cortés.',
      },
      {
        prompt: '“I got the job!” ¿Cómo reaccionas?',
        hint: 'Es una buena noticia.',
        options: [
          "That's fantastic!",
          "I'm sorry to hear that.",
          'Never mind the job.',
        ],
        answer: "That's fantastic!",
        explanation: 'La respuesta expresa entusiasmo apropiado.',
      },
      {
        prompt: 'No entendiste “next one”. ¿Qué dices?',
        hint: 'Pide precisión.',
        options: [
          'What do you mean by “the next one”?',
          'Yes, next.',
          'You are wrong.',
        ],
        answer: 'What do you mean by “the next one”?',
        explanation: 'La pregunta localiza la parte ambigua.',
      },
      {
        prompt: '¿Qué significa “look after” en “Can you look after my cat?”?',
        hint: 'Es un phrasal verb de cuidado.',
        options: ['cuidar', 'buscar', 'mirar hacia arriba'],
        answer: 'cuidar',
        explanation: 'Look after significa cuidar a alguien o algo.',
      },
      {
        prompt: '“I’m afraid I can’t help today.” ¿Qué función cumple?',
        hint: 'Observa I’m afraid.',
        options: [
          'Rechaza con cortesía.',
          'Acepta con entusiasmo.',
          'Pide repetición.',
        ],
        answer: 'Rechaza con cortesía.',
        explanation: 'I’m afraid suaviza una respuesta negativa.',
      },
    ],
    order: {
      prompt: 'Ordena la aclaración.',
      hint: 'Pregunta + interpretación.',
      tokens: ['tomorrow morning?', 'Do you mean', 'the meeting is'],
      answer: ['Do you mean', 'the meeting is', 'tomorrow morning?'],
      explanation: 'Do you mean…? comprueba la interpretación.',
    },
    exactOpen: {
      prompt: 'Escribe: “¿Te importaría hablar más despacio?”.',
      hint: 'Usa Would you mind + -ing.',
      accepted: [
        'Would you mind speaking more slowly?',
        'Would you mind speaking more slowly, please?',
      ],
      modelAnswer: 'Would you mind speaking more slowly?',
      explanation: 'Would you mind se construye con verbo en -ing.',
    },
    freeOpen: {
      prompt: 'Escribe un diálogo breve con noticia, reacción y aclaración.',
      hint: 'Incluye una reacción adecuada y Do you mean…?',
      modelAnswer:
        'I’m moving next month. — That’s exciting! Do you mean to Puebla?',
      explanation: 'Debe mostrar reacción y reparación comunicativa.',
    },
  },
  {
    id: 'en-14',
    language: 'en',
    title: 'Decisiones y posibilidades',
    level: 'B1.2',
    objective: 'Puedo comparar opciones y explicar consecuencias posibles.',
    summary:
      'Evalúa alternativas con comparativos, grados de posibilidad y el primer condicional.',
    concepts: [
      {
        title: 'Primer condicional',
        explanation:
          'If + presente, will + verbo expresa una consecuencia futura posible.',
        examples: ['If we leave now, we will arrive early.'],
      },
      {
        title: 'Posibilidad',
        explanation: 'May y might indican que algo es posible, no seguro.',
        examples: ['It may rain.', 'We might need more time.'],
      },
      {
        title: 'Comparar',
        explanation: 'Much, slightly y a bit modifican comparativos.',
        examples: [
          'This option is much cheaper.',
          'The train is slightly faster.',
        ],
      },
    ],
    tip: 'No uses will después de if en el primer condicional básico.',
    choices: [
      {
        prompt: 'Completa: If we book today, we ___ money.',
        hint: 'Consecuencia futura.',
        options: ['will save', 'save will', 'saved'],
        answer: 'will save',
        explanation: 'La oración principal usa will + verbo base.',
      },
      {
        prompt: '¿Cuál expresa posibilidad, no certeza?',
        hint: 'Busca might.',
        options: [
          'The plan might work.',
          'The plan definitely works.',
          'The plan worked yesterday.',
        ],
        answer: 'The plan might work.',
        explanation: 'Might marca una posibilidad.',
      },
      {
        prompt: 'A cuesta $20 y B $50. ¿Qué comparación es correcta?',
        hint: 'La diferencia es grande.',
        options: [
          'A is much cheaper than B.',
          'A is much expensive than B.',
          'A is slightly more than B.',
        ],
        answer: 'A is much cheaper than B.',
        explanation: 'Much intensifica el comparativo cheaper.',
      },
      {
        prompt: 'Completa: If it ___, we’ll stay home.',
        hint: 'Después de if usa presente.',
        options: ['rains', 'will rain', 'rained'],
        answer: 'rains',
        explanation:
          'El primer condicional usa presente simple en la cláusula con if.',
      },
      {
        prompt: '¿Qué recomendación reconoce incertidumbre?',
        hint: 'No promete un resultado.',
        options: [
          'The train may be better because traffic is unpredictable.',
          'The train is always perfect.',
          'Take train because yes.',
        ],
        answer: 'The train may be better because traffic is unpredictable.',
        explanation: 'May y because expresan posibilidad y razón.',
      },
    ],
    order: {
      prompt: 'Ordena la consecuencia.',
      hint: 'If + presente, will + verbo.',
      tokens: ['we will take a taxi.', 'If the bus is late,'],
      answer: ['If the bus is late,', 'we will take a taxi.'],
      explanation: 'La condición precede a la consecuencia posible.',
    },
    exactOpen: {
      prompt: 'Escribe: “Quizá necesitemos más tiempo”.',
      hint: 'Usa might.',
      accepted: ['We might need more time.', 'We may need more time.'],
      modelAnswer: 'We might need more time.',
      explanation: 'Might/may + verbo base expresa posibilidad.',
    },
    freeOpen: {
      prompt: 'Compara dos opciones y explica qué harás si eliges una.',
      hint: 'Usa un comparativo y un primer condicional.',
      modelAnswer:
        'The train is more expensive but faster. If we take it, we will arrive before noon.',
      explanation: 'Debe comparar y presentar una consecuencia posible.',
    },
  },
  {
    id: 'en-15',
    language: 'en',
    title: 'Tecnología diaria',
    level: 'B1.2',
    objective: 'Puedo explicar un problema técnico y seguir instrucciones.',
    summary:
      'Identifica dispositivos mediante cláusulas relativas y organiza pasos de solución.',
    concepts: [
      {
        title: 'Definir',
        explanation: 'Who define personas; which/that definen cosas.',
        examples: [
          'An app that stores passwords',
          'The person who manages the account',
        ],
      },
      {
        title: 'Problemas',
        explanation:
          'Freeze, crash, run out of battery y connect describen fallos frecuentes.',
        examples: ['The screen has frozen.', 'The battery has run out.'],
      },
      {
        title: 'Secuenciar',
        explanation: 'First, next, then y finally ordenan instrucciones.',
        examples: ['First, restart the device.', 'Finally, sign in again.'],
      },
    ],
    tip: 'Describe el síntoma exacto antes de intentar una solución.',
    choices: [
      {
        prompt: '¿Qué significa “The app keeps crashing”?',
        hint: 'Crashing es un fallo.',
        options: [
          'La aplicación se cierra inesperadamente.',
          'La aplicación se actualiza.',
          'La aplicación carga rápido.',
        ],
        answer: 'La aplicación se cierra inesperadamente.',
        explanation: 'Crash describe un cierre o fallo repentino.',
      },
      {
        prompt: 'Completa: This is the cable ___ connects the monitor.',
        hint: 'Define una cosa.',
        options: ['that', 'who', 'where'],
        answer: 'that',
        explanation: 'That introduce una relativa para cosas.',
      },
      {
        prompt: 'El teléfono no responde. ¿Qué paso es razonable primero?',
        hint: 'Empieza por una acción reversible.',
        options: [
          'First, restart the phone.',
          'Delete everything immediately.',
          'Break the screen.',
        ],
        answer: 'First, restart the phone.',
        explanation: 'Reiniciar es un primer diagnóstico seguro.',
      },
      {
        prompt: '¿Cuál describe batería agotada?',
        hint: 'Busca run out.',
        options: [
          'The battery has run out.',
          'The battery logged in.',
          'The battery clicked.',
        ],
        answer: 'The battery has run out.',
        explanation: 'Run out significa agotarse.',
      },
      {
        prompt: '¿Qué pregunta aporta información útil al soporte?',
        hint: 'Debe precisar el momento del fallo.',
        options: [
          'When did the problem start?',
          'Is technology bad?',
          'Why computers?',
        ],
        answer: 'When did the problem start?',
        explanation: 'La pregunta acota el diagnóstico.',
      },
    ],
    order: {
      prompt: 'Ordena los pasos.',
      hint: 'Apagar antes de desconectar.',
      tokens: [
        'Then unplug the cable.',
        'First, turn off the device.',
        'Finally, reconnect it.',
      ],
      answer: [
        'First, turn off the device.',
        'Then unplug the cable.',
        'Finally, reconnect it.',
      ],
      explanation: 'Los marcadores presentan un procedimiento seguro y claro.',
    },
    exactOpen: {
      prompt: 'Escribe: “Es una aplicación que guarda contraseñas”.',
      hint: 'Usa that stores.',
      accepted: [
        'It is an app that stores passwords.',
        "It's an app that stores passwords.",
      ],
      modelAnswer: "It's an app that stores passwords.",
      explanation: 'That stores passwords define la aplicación.',
    },
    freeOpen: {
      prompt: 'Describe un problema técnico y tres pasos para resolverlo.',
      hint: 'Incluye el síntoma y first/then/finally.',
      modelAnswer:
        'The screen has frozen. First, close the app. Then restart the device. Finally, open the app again.',
      explanation: 'Debe separar claramente problema y procedimiento.',
    },
  },
  {
    id: 'en-16',
    language: 'en',
    title: 'Cultura y entretenimiento',
    level: 'B1.2',
    objective: 'Puedo reseñar una obra y recomendarla con razones.',
    summary:
      'Distingue experiencia y fecha, describe reacciones y estructura una recomendación.',
    concepts: [
      {
        title: 'Experiencia o momento',
        explanation:
          'Present perfect habla de experiencia; past simple de un momento terminado.',
        examples: ["I've seen the film twice.", 'I saw it last Friday.'],
      },
      {
        title: '-ed y -ing',
        explanation:
          '-ed describe cómo se siente alguien; -ing describe lo que causa la emoción.',
        examples: ['I was surprised.', 'The ending was surprising.'],
      },
      {
        title: 'Reseñar',
        explanation:
          'Resume sin revelar demasiado, valora y justifica la recomendación.',
        examples: ['The story follows…', 'I recommend it because…'],
      },
    ],
    tip: 'No confundas boring —la obra— con bored —la persona—.',
    choices: [
      {
        prompt: 'Completa: I ___ this series three times.',
        hint: 'Experiencia hasta ahora.',
        options: ['have watched', 'watched yesterday', 'am watch'],
        answer: 'have watched',
        explanation: 'El presente perfecto expresa experiencia acumulada.',
      },
      {
        prompt: 'Completa: I ___ the final episode last night.',
        hint: 'Last night es tiempo terminado.',
        options: ['watched', 'have watched', 'watching'],
        answer: 'watched',
        explanation: 'El pasado simple acompaña un momento terminado.',
      },
      {
        prompt: 'The documentary was ___. I learned a lot.',
        hint: 'Describe la obra.',
        options: ['interesting', 'interested', 'interest'],
        answer: 'interesting',
        explanation: 'Interesting describe algo que provoca interés.',
      },
      {
        prompt: 'I was ___ by the ending.',
        hint: 'Describe cómo se sintió la persona.',
        options: ['surprised', 'surprising', 'surprise'],
        answer: 'surprised',
        explanation: 'Surprised describe la reacción de la persona.',
      },
      {
        prompt: '¿Cuál es una recomendación justificada?',
        hint: 'Incluye una razón concreta.',
        options: [
          'I recommend it because the characters are believable.',
          'It is good because good.',
          'Watch it always.',
        ],
        answer: 'I recommend it because the characters are believable.',
        explanation: 'La razón aporta evidencia a la valoración.',
      },
    ],
    order: {
      prompt: 'Ordena la recomendación.',
      hint: 'Valoración + razón.',
      tokens: ['because the story is original.', 'I highly recommend it'],
      answer: ['I highly recommend it', 'because the story is original.'],
      explanation: 'Because introduce la justificación.',
    },
    exactOpen: {
      prompt: 'Escribe: “Vi la película el sábado y fue emocionante”.',
      hint: 'Usa past simple y exciting.',
      accepted: [
        'I saw the film on Saturday and it was exciting.',
        'I saw the movie on Saturday and it was exciting.',
      ],
      modelAnswer: 'I saw the film on Saturday and it was exciting.',
      explanation: 'Saw sitúa el evento; exciting describe la película.',
    },
    freeOpen: {
      prompt: 'Escribe una reseña de tres frases sin spoilers.',
      hint: 'Resume, valora y recomienda con una razón.',
      modelAnswer:
        'The film follows a family on a long journey. The acting is moving and the story feels honest. I recommend it because it stays interesting until the end.',
      explanation: 'Debe incluir resumen, evaluación y recomendación razonada.',
    },
  },
  {
    id: 'en-17',
    language: 'en',
    title: 'Medio ambiente',
    level: 'B1.2',
    objective: 'Puedo explicar un problema y proponer medidas realistas.',
    summary:
      'Relaciona causas y efectos, interpreta cantidades y propone acciones mediante lenguaje claro.',
    concepts: [
      {
        title: 'Causa y efecto',
        explanation:
          'Because of introduce una causa nominal; therefore/so presentan resultado.',
        examples: [
          'Air quality fell because of traffic.',
          'Waste increased, so costs rose.',
        ],
      },
      {
        title: 'Pasiva',
        explanation: 'La pasiva centra la medida o el problema.',
        examples: ['Plastic is recycled.', 'New trees were planted.'],
      },
      {
        title: 'Cantidades',
        explanation:
          'Too much va con incontables; too many con plurales contables.',
        examples: ['too much waste', 'too many cars'],
      },
    ],
    tip: 'Una propuesta realista indica acción, responsable y resultado esperado.',
    choices: [
      {
        prompt: 'Completa: There is ___ plastic waste.',
        hint: 'Waste es incontable.',
        options: ['too much', 'too many', 'too few'],
        answer: 'too much',
        explanation: 'Too much modifica nombres incontables.',
      },
      {
        prompt: 'Completa: There are ___ cars in the centre.',
        hint: 'Cars es plural contable.',
        options: ['too many', 'too much', 'a little'],
        answer: 'too many',
        explanation: 'Too many modifica plurales contables.',
      },
      {
        prompt: '¿Cuál es una pasiva?',
        hint: 'Busca be + participio.',
        options: [
          'Glass is recycled locally.',
          'People recycle glass.',
          'Glass recycling people.',
        ],
        answer: 'Glass is recycled locally.',
        explanation: 'Is recycled es presente pasivo.',
      },
      {
        prompt: 'Completa: The river is polluted ___ factory waste.',
        hint: 'La causa es un grupo nominal.',
        options: ['because of', 'so', 'therefore'],
        answer: 'because of',
        explanation: 'Because of introduce la causa nominal.',
      },
      {
        prompt: '¿Qué propuesta es más verificable?',
        hint: 'Incluye una medida concreta.',
        options: [
          'The school should add three recycling bins.',
          'Everyone should be better.',
          'Pollution is bad.',
        ],
        answer: 'The school should add three recycling bins.',
        explanation: 'La acción, responsable y cantidad son concretos.',
      },
    ],
    order: {
      prompt: 'Ordena la relación causa-efecto.',
      hint: 'Problema + so + resultado.',
      tokens: ['so air quality is poor.', 'There are too many cars,'],
      answer: ['There are too many cars,', 'so air quality is poor.'],
      explanation: 'So introduce el efecto.',
    },
    exactOpen: {
      prompt: 'Escribe: “Se plantaron cien árboles”.',
      hint: 'Usa were planted.',
      accepted: [
        'One hundred trees were planted.',
        'A hundred trees were planted.',
      ],
      modelAnswer: 'One hundred trees were planted.',
      explanation: 'Were planted es la pasiva plural en pasado.',
    },
    freeOpen: {
      prompt: 'Explica un problema ambiental y propón dos medidas.',
      hint: 'Incluye causa, efecto y acciones concretas.',
      modelAnswer:
        'There is too much traffic, so the air is polluted. The city should improve buses and create safer cycle lanes.',
      explanation: 'Debe conectar problema y soluciones realistas.',
    },
  },
  {
    id: 'en-18',
    language: 'en',
    title: 'Consolidación B1',
    level: 'B1 consolidación',
    objective:
      'Puedo integrar comprensión, interacción y producción en situaciones familiares.',
    summary:
      'Recupera estrategias B1 para comprender, aclarar, organizar y autocorregir mensajes.',
    concepts: [
      {
        title: 'Compensar',
        explanation:
          'Parafrasea o pide una palabra cuando no recuerdas una expresión.',
        examples: ["It's a tool that…", 'How do you say…?'],
      },
      {
        title: 'Organizar',
        explanation:
          'Firstly, however y finally hacen visible la relación entre ideas.',
        examples: ['Firstly, we need a plan.', 'However, cost is a problem.'],
      },
      {
        title: 'Autocorregir',
        explanation:
          'Sorry, I mean… permite reparar un dato sin abandonar el turno.',
        examples: ['We meet on Thursday—sorry, I mean Friday.'],
      },
    ],
    tip: 'La comunicación eficaz incluye reparar y reformular, no solo hablar sin errores.',
    choices: [
      {
        prompt: 'No recuerdas “destornillador”. ¿Qué estrategia ayuda?',
        hint: 'Describe la función.',
        options: [
          "It's a tool that you use to turn screws.",
          'I stop speaking.',
          'Tool thing no.',
        ],
        answer: "It's a tool that you use to turn screws.",
        explanation: 'La paráfrasis mantiene la comunicación.',
      },
      {
        prompt: '¿Qué conector introduce contraste?',
        hint: 'Equivale a “sin embargo”.',
        options: ['However', 'Firstly', 'Therefore'],
        answer: 'However',
        explanation: 'However contrasta con la idea anterior.',
      },
      {
        prompt: 'Dijiste Tuesday pero querías decir Thursday. ¿Qué haces?',
        hint: 'Autocorrige explícitamente.',
        options: [
          'Sorry, I mean Thursday.',
          'Tuesday is wrong you.',
          'No more.',
        ],
        answer: 'Sorry, I mean Thursday.',
        explanation: 'I mean introduce la corrección.',
      },
      {
        prompt: '¿Qué pregunta comprueba comprensión?',
        hint: 'Reformula lo escuchado.',
        options: [
          'So, do you mean we should wait?',
          'Do you speak?',
          'Why mean?',
        ],
        answer: 'So, do you mean we should wait?',
        explanation: 'La pregunta confirma la interpretación.',
      },
      {
        prompt: '¿Qué respuesta integra opinión y razón?',
        hint: 'Debe ser conectada.',
        options: [
          'I prefer the first option because it is cheaper and easier.',
          'First option good.',
          'Cheaper although.',
        ],
        answer: 'I prefer the first option because it is cheaper and easier.',
        explanation: 'La preferencia está apoyada por dos razones.',
      },
    ],
    order: {
      prompt: 'Ordena el argumento.',
      hint: 'Idea inicial, contraste y cierre.',
      tokens: [
        'Finally, we need to decide.',
        'However, it is expensive.',
        'Firstly, the plan is practical.',
      ],
      answer: [
        'Firstly, the plan is practical.',
        'However, it is expensive.',
        'Finally, we need to decide.',
      ],
      explanation: 'Los marcadores estructuran el razonamiento.',
    },
    exactOpen: {
      prompt: 'Escribe una petición de aclaración cortés.',
      hint: 'Usa Could you explain…?',
      accepted: [
        'Could you explain that again, please?',
        'Could you explain that again?',
      ],
      modelAnswer: 'Could you explain that again, please?',
      explanation: 'Could you…? formula una petición cortés.',
    },
    freeOpen: {
      prompt:
        'Resuelve una situación: explica un problema, pide aclaración y propone una solución.',
      hint: 'Escribe tres o cuatro frases conectadas.',
      modelAnswer:
        'The booking date looks wrong. Could you confirm whether it is Friday or Saturday? If it is Saturday, we can change our train.',
      explanation: 'Debe integrar explicación, reparación y propuesta.',
    },
  },
  {
    id: 'en-19',
    language: 'en',
    title: 'Argumentar con claridad',
    level: 'B2.1',
    objective:
      'Puedo sostener una postura, matizarla y responder a otra opinión.',
    summary:
      'Construye una postura con razones, evidencia, matices y una respuesta respetuosa a objeciones.',
    concepts: [
      {
        title: 'Estructurar',
        explanation:
          'From my perspective, moreover y therefore guían un argumento.',
        examples: [
          'From my perspective, access matters.',
          'Moreover, the change would reduce costs.',
        ],
      },
      {
        title: 'Matizar',
        explanation:
          'Tend to, may y in many cases evitan generalizaciones absolutas.',
        examples: [
          'Remote work may improve flexibility.',
          'This tends to affect small firms.',
        ],
      },
      {
        title: 'Responder',
        explanation:
          'Acknowledge + contrast reconoce la otra postura antes de contestar.',
        examples: ['I see your point; however, the evidence suggests…'],
      },
    ],
    tip: 'Una postura fuerte no necesita afirmaciones absolutas; necesita razones y límites claros.',
    choices: [
      {
        prompt: '¿Qué frase está mejor matizada?',
        hint: 'Evita always y never.',
        options: [
          'This policy may help in many cases.',
          'This policy always solves everything.',
          'Everyone knows it works.',
        ],
        answer: 'This policy may help in many cases.',
        explanation: 'May e in many cases limitan el alcance.',
      },
      {
        prompt: '¿Qué conector añade otra razón?',
        hint: 'Busca moreover.',
        options: ['Moreover', 'However', 'In contrast'],
        answer: 'Moreover',
        explanation: 'Moreover agrega apoyo al argumento.',
      },
      {
        prompt: '¿Cuál responde respetuosamente a una objeción?',
        hint: 'Reconoce antes de contrastar.',
        options: [
          'I see your point; however, cost is not the only factor.',
          'You are simply wrong.',
          'No, because no.',
        ],
        answer: 'I see your point; however, cost is not the only factor.',
        explanation: 'Reconoce el punto y presenta un contraargumento.',
      },
      {
        prompt: '¿Qué elemento funciona como evidencia?',
        hint: 'Busca un dato verificable.',
        options: [
          'A survey of 500 residents found that 62% supported the plan.',
          'I strongly feel it.',
          'It is obviously true.',
        ],
        answer: 'A survey of 500 residents found that 62% supported the plan.',
        explanation: 'El dato aporta apoyo comprobable.',
      },
      {
        prompt: '¿Qué conclusión sigue de forma lógica?',
        hint: 'Debe derivarse de las razones.',
        options: [
          'Therefore, a small trial would be a reasonable next step.',
          'Therefore, everyone agrees.',
          'Therefore, evidence is unnecessary.',
        ],
        answer: 'Therefore, a small trial would be a reasonable next step.',
        explanation: 'La conclusión propone una acción proporcional.',
      },
    ],
    order: {
      prompt: 'Ordena el contraargumento.',
      hint: 'Reconocimiento + contraste.',
      tokens: [
        'the long-term benefits may outweigh it.',
        'Although the initial cost is high,',
      ],
      answer: [
        'Although the initial cost is high,',
        'the long-term benefits may outweigh it.',
      ],
      explanation: 'Although reconoce una limitación antes de la respuesta.',
    },
    exactOpen: {
      prompt: 'Escribe: “Desde mi perspectiva, esta medida podría ayudar”.',
      hint: 'Usa From my perspective y could.',
      accepted: [
        'From my perspective, this measure could help.',
        'From my perspective, this policy could help.',
      ],
      modelAnswer: 'From my perspective, this measure could help.',
      explanation: 'La frase marca postura y posibilidad.',
    },
    freeOpen: {
      prompt: 'Defiende una postura, reconoce una objeción y concluye.',
      hint: 'Incluye al menos tres conectores discursivos.',
      modelAnswer:
        'From my perspective, cities should limit traffic because pollution affects health. I see the concern about local businesses; however, better public transport could reduce that impact. Therefore, a gradual trial seems reasonable.',
      explanation:
        'Debe contener postura, apoyo, objeción y conclusión matizada.',
    },
  },
  {
    id: 'en-20',
    language: 'en',
    title: 'Textos complejos',
    level: 'B2.1',
    objective:
      'Puedo identificar tesis, postura e implicaciones en artículos extensos.',
    summary:
      'Sigue referencias, distingue tesis de evidencia e infiere consecuencias prudentes.',
    concepts: [
      {
        title: 'Tesis',
        explanation:
          'La tesis es la afirmación central que el texto desarrolla y defiende.',
        examples: ['The author argues that flexible schedules improve access.'],
      },
      {
        title: 'Cohesión',
        explanation:
          'Pronombres y expresiones como this approach remiten a ideas anteriores.',
        examples: ['The city introduced a fee. This measure reduced traffic.'],
      },
      {
        title: 'Implicación',
        explanation:
          'Una inferencia válida se apoya en el texto sin exagerar sus conclusiones.',
        examples: ['This suggests that cost is one factor, not the only one.'],
      },
    ],
    tip: 'Distingue lo que el autor afirma, la evidencia que ofrece y lo que solo puede inferirse.',
    choices: [
      {
        prompt: '¿Cuál formula una tesis?',
        hint: 'Debe expresar la afirmación central.',
        options: [
          'The article argues that libraries should expand digital access.',
          'The article has four paragraphs.',
          'One library opens at nine.',
        ],
        answer:
          'The article argues that libraries should expand digital access.',
        explanation: 'Presenta la postura central del artículo.',
      },
      {
        prompt:
          '“The council tested night buses. This initiative…” ¿A qué refiere this initiative?',
        hint: 'Busca la acción anterior.',
        options: [
          'A la prueba de autobuses nocturnos.',
          'Al ayuntamiento como edificio.',
          'A la noche en general.',
        ],
        answer: 'A la prueba de autobuses nocturnos.',
        explanation: 'La expresión cohesiva retoma la medida anterior.',
      },
      {
        prompt: '¿Qué diferencia evidencia de opinión?',
        hint: 'Busca un dato atribuido.',
        options: [
          'A 2025 survey found a 12% increase.',
          'The change is wonderful.',
          'Everyone must love it.',
        ],
        answer: 'A 2025 survey found a 12% increase.',
        explanation: 'La fuente y el dato permiten verificar la afirmación.',
      },
      {
        prompt: 'El texto dice “may reduce costs”. ¿Qué inferencia es válida?',
        hint: 'Conserva la incertidumbre.',
        options: [
          'La medida podría reducir costos.',
          'La medida eliminará todos los costos.',
          'Los costos ya desaparecieron.',
        ],
        answer: 'La medida podría reducir costos.',
        explanation: 'May indica posibilidad, no certeza.',
      },
      {
        prompt: '¿Qué resumen evita detalles secundarios?',
        hint: 'Debe conservar tesis y soporte principal.',
        options: [
          'The author supports flexible hours because trials improved access.',
          'The text mentions Tuesday and a blue door.',
          'Everything changed completely.',
        ],
        answer:
          'The author supports flexible hours because trials improved access.',
        explanation: 'Recoge postura y evidencia principal.',
      },
    ],
    order: {
      prompt: 'Ordena el razonamiento.',
      hint: 'Tesis + evidencia + implicación.',
      tokens: [
        'This suggests the policy could work elsewhere.',
        'The author supports the policy.',
        'A local trial reduced waiting times.',
      ],
      answer: [
        'The author supports the policy.',
        'A local trial reduced waiting times.',
        'This suggests the policy could work elsewhere.',
      ],
      explanation: 'La secuencia distingue postura, apoyo e inferencia.',
    },
    exactOpen: {
      prompt: 'Escribe: “Esto sugiere que el acceso está mejorando”.',
      hint: 'Usa This suggests that…',
      accepted: [
        'This suggests that access is improving.',
        'This suggests access is improving.',
      ],
      modelAnswer: 'This suggests that access is improving.',
      explanation: 'Suggests introduce una inferencia prudente.',
    },
    freeOpen: {
      prompt: 'Resume un argumento indicando tesis, evidencia e implicación.',
      hint: 'Usa The author argues…, supports this with… y This suggests…',
      modelAnswer:
        'The author argues that later opening hours improve access. She supports this with attendance data from three libraries. This suggests that schedules can be a barrier.',
      explanation: 'Debe separar explícitamente las tres capas.',
    },
  },
  {
    id: 'en-21',
    language: 'en',
    title: 'Habla natural',
    level: 'B2.1',
    objective:
      'Puedo seguir conversaciones extensas y participar con fluidez razonable.',
    summary:
      'Reconoce marcadores conversacionales, gestiona turnos y usa estrategias de seguimiento.',
    concepts: [
      {
        title: 'Marcadores',
        explanation:
          'Well, actually, anyway y by the way organizan el discurso hablado.',
        examples: [
          'Well, I’m not entirely sure.',
          'Anyway, what happened next?',
        ],
      },
      {
        title: 'Turnos',
        explanation:
          'Señales corteses permiten entrar, mantener o ceder el turno.',
        examples: ['Can I add something?', 'Go ahead.'],
      },
      {
        title: 'Seguimiento',
        explanation: 'Preguntas breves muestran escucha y desarrollan el tema.',
        examples: ['What happened then?', 'How did you feel about that?'],
      },
    ],
    tip: 'La fluidez incluye pausas organizadas y respuestas al interlocutor, no hablar sin detenerse.',
    choices: [
      {
        prompt: '¿Qué marcador cambia de tema?',
        hint: 'Introduce información lateral.',
        options: ['By the way', 'Therefore', 'Despite'],
        answer: 'By the way',
        explanation: 'By the way introduce un tema relacionado o nuevo.',
      },
      {
        prompt: 'Quieres entrar al turno cortésmente. ¿Qué dices?',
        hint: 'Pide espacio para intervenir.',
        options: ['Can I add something?', 'Stop now.', 'My turn because.'],
        answer: 'Can I add something?',
        explanation: 'La pregunta gestiona el turno con cortesía.',
      },
      {
        prompt:
          '“I finally passed the exam.” ¿Qué seguimiento desarrolla el tema?',
        hint: 'Pregunta por la experiencia.',
        options: [
          'How did you feel when you found out?',
          'Exam yes.',
          'What colour was the paper only?',
        ],
        answer: 'How did you feel when you found out?',
        explanation: 'La pregunta muestra escucha y amplía la narración.',
      },
      {
        prompt: '¿Qué función cumple “Anyway, let’s return to the main point”?',
        hint: 'Observa return.',
        options: [
          'Retoma el tema principal.',
          'Interrumpe para despedirse.',
          'Expresa una causa.',
        ],
        answer: 'Retoma el tema principal.',
        explanation: 'Anyway ayuda a cerrar una desviación.',
      },
      {
        prompt: '¿Cuál expresa desacuerdo parcial?',
        hint: 'Evita un no absoluto.',
        options: [
          "I'm not sure I completely agree.",
          'That is totally false.',
          'No.',
        ],
        answer: "I'm not sure I completely agree.",
        explanation: 'La fórmula matiza el desacuerdo.',
      },
    ],
    order: {
      prompt: 'Ordena la intervención.',
      hint: 'Entrada + postura.',
      tokens: ['I see it differently.', 'Can I add something?', 'Actually,'],
      answer: ['Can I add something?', 'Actually,', 'I see it differently.'],
      explanation: 'Primero se pide el turno y después se presenta la postura.',
    },
    exactOpen: {
      prompt: 'Escribe una frase para ceder el turno.',
      hint: 'Usa Go ahead.',
      accepted: [
        'Go ahead.',
        'Go ahead',
        'Please, go ahead.',
        'Please go ahead.',
      ],
      modelAnswer: 'Please, go ahead.',
      explanation: 'Go ahead invita a la otra persona a continuar.',
    },
    freeOpen: {
      prompt:
        'Escribe seis turnos de una conversación con seguimiento y desacuerdo cortés.',
      hint: 'Incluye al menos dos marcadores conversacionales.',
      modelAnswer:
        'I think remote work is useful. — How has it helped you? — Well, I save travel time. — I see your point, but I miss the office. — That’s fair. Can I add one more benefit? — Go ahead.',
      explanation: 'Debe mostrar escucha, gestión de turnos y matiz.',
    },
  },
];

export const batch11Lessons = Object.fromEntries(
  englishSpecs.map((spec) => [spec.id, createLesson(spec)]),
);
