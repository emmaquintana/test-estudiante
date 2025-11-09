# Test de Estudiantes

Este proyecto ofrece un sistema de evaluación para estudiantes **flexible y personalizable**, diseñado para adaptarse fácilmente a distintos tipos de preguntas, respuestas y modelos de evaluación.  

## Cómo funciona

El test utiliza un **modelo basado en puntaje**, lo que significa que no existen respuestas estrictamente “correctas”.  
En su lugar, cada respuesta se clasifica en una de las siguientes categorías:

- **Perfecta**
- **Regular**
- **Mala**

Cada categoría tiene un valor asociado.  
Al finalizar el test, se calcula un **puntaje total** que determina el **resultado final**.

## Flexibilidad y personalización

Puedes modificar este proyecto sin necesidad de escribir nueva lógica ni funciones —  
a menos que desees cambiar el funcionamiento interno del modelo del test.

### Elementos fácilmente modificables

- Preguntas  
- Respuestas  
- Resultados  

Estos archivos se encuentran en:
- src/assets/util/Info/

Si deseas agregar imágenes a las preguntas o respuestas, deberás actualizar las definiciones de tipo en:
- src/assets/util/Types/Question.ts
- src/assets/util/Types/Answer.ts


### Cambios que requieren modificaciones más profundas

Si tu intención es alterar la **lógica del test** (es decir, cómo se evalúan y calculan los resultados), deberás editar los siguientes archivos:
- src/assets/util/Functions/getResult.ts
- src/assets/util/Info/QA.ts
- src/(Pages)/Questions/page.tsx
- src/(Pages)/Questions/Result/page.tsx
