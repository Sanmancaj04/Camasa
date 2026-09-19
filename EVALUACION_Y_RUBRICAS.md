# Camasa: evaluación, rúbricas y aprobación de contenido

Última revisión: 16 de septiembre de 2026.

## 1. Principio de confianza

Los ejemplos y ejercicios de Camasa son **contenido original**, nivelado con los marcos y fuentes descritos en `PEDAGOGIA_Y_FUENTES.md`. No son transcripciones literales de CEFR, DELF, TORFL, Irodori, English Profile ni otras fuentes.

Por ello, ninguna lección debe considerarse correcta solo porque su objetivo esté alineado con una fuente fiable. Antes de publicarse debe pasar controles lingüísticos, pedagógicos, técnicos y de atribución.

Una IA revisora es una herramienta de detección, no una autoridad final. Puede aprobar falsamente un error o inventar una explicación. Para reducir ese riesgo, el proceso exige que resuelva cada ejercicio de forma independiente, justifique su dictamen y señale incertidumbre.

## 2. Estados editoriales

Cada ejercicio y lección utiliza uno de estos estados:

1. `draft`: contenido recién creado; no aparece para estudiantes.
2. `machine_checked`: superó comprobaciones estructurales automáticas.
3. `ai_reviewed`: recibió una revisión lingüística y otra pedagógica estructuradas.
4. `needs_changes`: existe un error, ambigüedad o evidencia insuficiente.
5. `human_reviewed`: una persona revisó los reportes y aceptó o corrigió el contenido.
6. `approved`: puede entrar en una versión del curso.
7. `retired`: se retiró por error, desactualización o bajo valor pedagógico.

Solo `approved` puede llegar al curso publicado.

En la implementación, `ai_checked` identifica una comprobación interna por IA.
No equivale a `approved`, no satisface la validación independiente y no autoriza
publicación. Las métricas de cobertura, revisión interna y validación independiente
deben mostrarse por separado.

## 3. Fallos críticos

Un solo fallo crítico impide aprobar el ejercicio, independientemente de su puntuación:

- la respuesta marcada como correcta es falsa o no es la mejor respuesta;
- existen dos respuestas razonablemente correctas y el ejercicio exige solo una;
- la explicación contradice la respuesta;
- el idioma meta contiene un error gramatical, ortográfico, semántico o pragmático;
- la traducción cambia información esencial o no es natural en el contexto;
- el audio no coincide con el texto o la respuesta;
- el nivel asignado queda claramente fuera del nivel objetivo;
- se necesita conocimiento no enseñado ni inferible para contestar;
- un distractor reproduce una variedad válida del idioma y se presenta como incorrecta;
- el contenido incluye estereotipos, datos personales, material dañino o una atribución falsa;
- se copió material protegido sin permiso compatible;
- el ejercicio no puede evaluarse objetivamente con los criterios declarados.

## 4. Rúbrica general de ejercicios

Cada dimensión recibe de 0 a 4 puntos:

| Dimensión                                | 0                     | 1                        | 2                         | 3                            | 4                                                    |
| ---------------------------------------- | --------------------- | ------------------------ | ------------------------- | ---------------------------- | ---------------------------------------------------- |
| Exactitud lingüística                    | Error grave           | Varios errores           | Comprensible con errores  | Correcto con detalle menor   | Correcto, natural y consistente                      |
| Exactitud de respuesta                   | Clave falsa           | Clave muy dudosa         | Ambigua                   | Correcta con pequeña reserva | Inequívoca y plenamente justificada                  |
| Naturalidad y pragmática                 | Inaceptable           | Artificial o inapropiada | Posible pero poco natural | Natural                      | Natural y adecuada al contexto/registro              |
| Alineación con el objetivo               | No evalúa el objetivo | Relación débil           | Parcial                   | Directa                      | Directa y aporta evidencia clara de dominio          |
| Nivel y andamiaje                        | Muy fuera de nivel    | Exigencia oculta         | Irregular                 | Adecuado                     | Adecuado y progresivo                                |
| Calidad de distractores                  | Engañosos o inválidos | Arbitrarios              | Débiles                   | Plausibles                   | Plausibles, diagnósticos y no ambiguos               |
| Retroalimentación                        | Ausente o falsa       | Solo dice “mal”          | Explicación parcial       | Explica la regla             | Explica, contrasta y ayuda a transferir              |
| Claridad de consigna                     | Incomprensible        | Confusa                  | Requiere interpretación   | Clara                        | Clara, breve y accesible                             |
| Valor comunicativo                       | Ninguno               | Manipulación aislada     | Uso limitado              | Situación útil               | Tarea auténtica y transferible                       |
| Inclusión y seguridad                    | Dañino                | Sesgado                  | Riesgo menor              | Seguro                       | Seguro, respetuoso y culturalmente contextualizado   |
| Audio (si aplica)                        | No coincide           | Errores graves           | Coincidencia parcial      | Correcto                     | Correcto, natural y técnicamente claro               |
| Romanización/transliteración (si aplica) | Falsa                 | Inconsistente            | Parcial                   | Correcta                     | Correcta, consistente y prescindible progresivamente |

Puntuación base máxima: 40. Audio y romanización/transliteración son dimensiones suplementarias: se puntúan cuando aplican y deben obtener al menos 3, pero no alteran el denominador base.

### Regla de aprobación

- **36–40:** candidato a aprobación.
- **32–35:** aprobar solo después de corregir observaciones menores.
- **24–31:** requiere revisión sustancial.
- **0–23:** rechazar y rediseñar.
- Cualquier fallo crítico: `needs_changes` aunque obtenga 40 en las demás dimensiones.

Para aprobar, exactitud lingüística, exactitud de respuesta, naturalidad y alineación deben obtener al menos 3 individualmente.

## 5. Rúbrica de lección completa

Una lección se evalúa después de aprobar sus ejercicios individuales:

| Dimensión                  | Peso | Evidencia esperada                                                              |
| -------------------------- | ---: | ------------------------------------------------------------------------------- |
| Objetivo observable        |  15% | Un “Puedo…” específico que puede demostrarse                                    |
| Secuencia                  |  15% | Activación → presentación → práctica → producción → repaso                      |
| Cobertura del objetivo     |  15% | Varios ejercicios miden componentes distintos del mismo objetivo                |
| Equilibrio de destrezas    |  10% | Combinación apropiada de escuchar, leer, hablar, escribir, interactuar o mediar |
| Progresión de dificultad   |  10% | De apoyo alto a recuperación/producción independiente                           |
| Variedad con propósito     |  10% | Cambia la operación cognitiva, no solo la apariencia                            |
| Evaluación del dominio     |  10% | Al menos una tarea de producción y criterios explícitos                         |
| Repaso y transferencia     |   5% | Recupera contenido anterior y usa el nuevo contenido en otro contexto           |
| Carga cognitiva y duración |   5% | Cantidad, longitud y ritmo razonables para el nivel                             |
| Coherencia editorial       |   5% | Terminología, transliteración, puntuación, audio y estilo consistentes          |

Umbral: 85/100, sin ejercicios con fallos críticos y con al menos 80% en objetivo, cobertura y evaluación del dominio.

## 6. Taxonomía de ejercicios

### Reconocimiento

1. **Opción múltiple contextual**
   - Evalúa significado, forma o intención en contexto.
   - Debe haber una mejor respuesta inequívoca.
   - Los distractores deben corresponder a errores previsibles.

2. **Verdadero/falso/no se menciona**
   - Separa comprensión de conocimiento externo.
   - La evidencia debe localizarse en el estímulo.

3. **Emparejamiento**
   - Sonido–texto, palabra–imagen, intención–respuesta o término–definición.
   - Evitar pistas accidentales por longitud, género o posición.

4. **Clasificación**
   - Agrupa por significado, función, registro, sonido o patrón.
   - Las categorías deben ser mutuamente comprensibles.

### Reconstrucción

5. **Ordenar palabras en una oración**
   - La solución no debe depender de un único orden cuando el idioma acepta varios.
   - Si existen órdenes alternativos naturales, deben aceptarse o evitarse.

6. **Ordenar turnos de un diálogo**
   - Debe existir una progresión pragmática clara.
   - Se aceptan secuencias equivalentes cuando corresponda.

7. **Completar espacios**
   - El contexto debe restringir la respuesta.
   - Deben declararse variantes ortográficas o flexivas aceptables.

8. **Transformación**
   - Cambia tiempo, persona, registro, voz o estructura conservando el significado indicado.
   - La rúbrica compara significado además de forma.

### Comprensión

9. **Escucha global y específica**
   - Primera tarea: situación o idea principal.
   - Siguientes: información, intención, actitud o inferencia según nivel.
   - El audio debe validarse por transcripción y revisión auditiva.

10. **Lectura guiada**
    - Géneros y extensión acordes al nivel.
    - Las preguntas distinguen información explícita, estructura, inferencia y postura.

11. **Dictado y discriminación auditiva**
    - Especificar tolerancia de mayúsculas, puntuación y variantes.
    - En japonés y ruso, separar reconocimiento fonológico de ortografía cuando sea necesario.

### Producción e interacción

12. **Respuesta abierta breve**
    - Se evalúa mediante rasgos requeridos, no mediante coincidencia literal.
    - Debe existir una lista de respuestas válidas y límites de significado.

13. **Pronunciación/shadowing**
    - Evalúa inteligibilidad, segmentos objetivo, ritmo, acento y entonación.
    - No penaliza un acento extranjero comprensible.

14. **Role-play ramificado**
    - Cada opción cambia coherentemente la conversación.
    - Se evalúan logro de tarea, adecuación y reparación.

15. **Texto extendido**
    - Correo, relato, reseña, argumento, informe o mediación.
    - Usa rúbrica analítica de contenido, organización, alcance, precisión y adecuación.

16. **Misión integrada**
    - Combina fuentes y destrezas para lograr una meta realista.
    - Debe permitir más de una solución válida.

## 7. Criterios específicos por tipo

### Preguntas cerradas

- Una sola respuesta óptima o una instrucción explícita de selección múltiple.
- Distractores del mismo tipo gramatical y longitud comparable.
- La posición correcta se distribuye de forma equilibrada.
- No se revela la respuesta por concordancia, mayúsculas o formulación.
- La explicación comenta también por qué el error más probable es incorrecto.

### Ordenamiento

- Se enumeran todos los órdenes naturales aceptables.
- No se fragmentan locuciones que el estudiante aún no sabe reconstruir.
- La puntuación y capitalización no regalan la primera o última pieza salvo que sea el objetivo.

### Respuestas abiertas

- `required_meaning`: información imprescindible.
- `accepted_variants`: variantes correctas conocidas.
- `forbidden_meaning`: contradicciones o cambios de significado.
- `target_features`: elementos que se desean observar.
- `tolerance`: errores menores permitidos para el nivel.
- Si la IA evaluadora tiene confianza inferior a 0.80, debe escalar a revisión humana.

### Pronunciación

- La referencia debe proceder de una voz nativa o TTS validado.
- Se conserva el texto, IPA/transcripción útil, variante regional y audio.
- La calificación prioriza inteligibilidad y rasgo objetivo.
- Nunca se exige imitar identidad, género o timbre de la voz de referencia.

## 8. Protocolo de revisión con otra IA

### Separación de funciones

Se recomiendan dos revisiones independientes:

1. **Revisor lingüístico:** domina el idioma meta y el español; comprueba respuesta, naturalidad, gramática, traducción, registro y variantes.
2. **Revisor pedagógico:** evalúa nivel, objetivo, andamiaje, distractores, carga y valor de aprendizaje.

El revisor no debe recibir como hecho que la respuesta proporcionada es correcta. Debe resolver primero el ejercicio y después comparar.

### Evidencia obligatoria

Para marcar un error, la IA debe proporcionar:

- fragmento exacto problemático;
- tipo de problema;
- explicación breve;
- corrección propuesta;
- nivel de confianza entre 0 y 1;
- fuente verificable cuando la afirmación sea controvertida o específica del nivel;
- posibles variantes dialectales o de registro.

No se exige una cita para reglas elementales ampliamente establecidas, pero sí para afirmaciones de nivelación, frecuencia, uso regional, cultura o terminología especializada.

### Prompt recomendado para revisión lingüística

```text
Actúa como revisor lingüístico independiente de contenido educativo de [IDIOMA META]
para estudiantes hispanohablantes de nivel [NIVEL]. No asumas que la clave dada es
correcta. Resuelve primero cada ejercicio sin mirar la clave; después compara.

Comprueba: corrección gramatical, ortografía, significado, naturalidad, pragmática,
registro, traducción, unicidad de respuesta, variantes válidas, explicación y nivel.
Señala diferencias regionales. No inventes fuentes. Si no tienes certeza, marca
requires_human_review=true.

Devuelve únicamente JSON conforme al esquema solicitado. Todo fallo crítico debe
incluir el texto exacto, una corrección y una justificación verificable.

CONTENIDO:
[JSON DEL EJERCICIO O LECCIÓN]
```

### Prompt recomendado para revisión pedagógica

```text
Actúa como especialista en enseñanza de [IDIOMA META] como lengua extranjera.
Evalúa esta lección para nivel [NIVEL] usando la rúbrica de Camasa. Comprueba que el
objetivo sea observable, que los ejercicios produzcan evidencia del objetivo, que
la dificultad progrese, que los distractores diagnostiquen errores reales y que
exista al menos una tarea de producción o transferencia.

No evalúes la belleza de la redacción: identifica riesgos concretos. Devuelve
únicamente JSON, puntúa cada dimensión, cita evidencia del contenido y marca
requires_human_review=true cuando no puedas decidir con confianza.

CONTENIDO:
[JSON DE LA LECCIÓN]
```

## 9. Flujo de aprobación recomendado

1. Validar esquema, identificadores, campos obligatorios y enlaces internos.
2. Resolver automáticamente preguntas cerradas cuando sea posible.
3. Ejecutar revisión lingüística independiente.
4. Ejecutar revisión pedagógica independiente, idealmente con otro modelo o contexto limpio.
5. Bloquear automáticamente cualquier fallo crítico.
6. Comparar respuesta del autor, solución independiente y dictamen del revisor.
7. Mostrar al humano solo discrepancias, puntuaciones bajas, baja confianza y muestras aleatorias.
8. Corregir y volver a ejecutar las revisiones afectadas.
9. Aprobar una lección únicamente cuando todos sus ejercicios estén aprobados.
10. Tras publicarla, registrar errores reales de estudiantes y reabrir contenido problemático.

### Política inicial de muestreo humano

- Primeras 10 lecciones de cada idioma: revisar 100%.
- Hasta completar 100 ejercicios sin fallo crítico: revisar al menos 50%.
- Después: revisar 20% aleatorio más todos los elementos señalados.
- Pronunciación, cultura, registro y respuestas abiertas: revisión humana obligatoria.
- Un fallo crítico confirmado eleva temporalmente el muestreo del idioma al 100%.

## 10. Métricas posteriores a publicación

- porcentaje de estudiantes que eligen cada distractor;
- ejercicios con acierto excesivamente alto o bajo;
- abandonos y tiempo por ejercicio;
- respuestas abiertas rechazadas que una persona considera válidas;
- diferencias sistemáticas entre perfiles o dispositivos;
- frecuencia de solicitudes de pista;
- retención a 1, 7 y 30 días;
- objetivos que se aprueban en práctica pero fallan en transferencia.

Estas métricas detectan problemas, pero no reemplazan la revisión lingüística.

## 11. Decisión de publicación

El reporte final debe terminar con una de estas decisiones:

- `approve`: cumple umbrales y no tiene fallos críticos.
- `approve_with_minor_changes`: las correcciones son editoriales y deben aplicarse antes de publicar.
- `revise`: necesita cambios lingüísticos o pedagógicos sustanciales.
- `reject`: el diseño no mide el objetivo o contiene problemas fundamentales.
- `human_review_required`: no existe evidencia suficiente para decidir.

La decisión automática nunca puede convertir `human_review_required` en `approve`.
