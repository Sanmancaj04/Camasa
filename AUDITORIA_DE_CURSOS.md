# Auditoría general de cursos

El panel **Calidad** separa tres cosas que no deben confundirse:

1. el mapa curricular planeado;
2. las unidades realmente implementadas y jugables;
3. las unidades aprobadas mediante revisión lingüística y pedagógica.

## Alta de un idioma nuevo

Para que un idioma aparezca en el auditor se debe:

1. añadir su identificador al tipo `ModelLesson['language']`;
2. crear su mapa de unidades en `lib/curriculum.ts`;
3. registrar el mapa en `courseData`, dentro de `lib/course-audit.ts`;
4. crear al menos una lección modelo con introducción, ejemplos y ejercicios;
5. definir su regla lingüística específica;
6. añadir una ruta rápida representativa;
7. completar las revisiones lingüística y pedagógica con `content-review-template.json`;
8. vincular las fuentes utilizadas con las unidades y ejercicios correspondientes.

## Estados

- `blocked`: existe al menos un error crítico.
- `review_required`: la estructura está completa, pero existen advertencias o revisiones pendientes.
- `approved`: no quedan errores, advertencias ni aprobaciones pendientes.

## Puerta de publicación

Un curso no debe considerarse completo hasta tener todas sus unidades jugables, objetivos evaluados, introducciones pedagógicas, fuentes trazables y revisiones expertas aprobadas. El informe JSON exportado desde el panel sirve como paquete general para otra IA o para una persona revisora.
