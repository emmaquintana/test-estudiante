import { Question } from "../Types/Question";

export const Questions: Question[] = [
    {
        id: 1,
        desc: '¿Cómo sueles prepararte para los exámenes?',        
        options: [
            {
                id: 1,
                desc: '¿Prepararse? ¿Se come?',
                score: 0
            },
            {
                id: 2,
                desc: 'Analizo lo que tengo para estudiar y el tiempo que resta para el examen',
                score: 10
            },
            {
                id: 3,
                desc: 'Empiezo a estudiar y rezo para llegar',
                score: 5
            }
        ],        
    },
    {
        id: 2,
        desc: '¿Cómo es tu comida antes de ir a la escuela/universidad?',
        options: [
            {
                id: 1,
                desc: '¡¿Se supone que tenía que comer?! 😰',
                score: 0
            },
            {
                id: 2,
                desc: 'Un alimento no abundante pero tampoco escaso',
                score: 10
            },
            {
                id: 3,
                desc: 'Agarro lo primero que veo en la heladera',
                score: 5
            }
        ],        
    },
    {
        id: 3,
        desc: '¿Participas en actividades extracurriculares?',
        options: [
            {
                id: 1,
                desc: 'Nah ni en pedo. No hay ganas rey',
                score: 5
            },
            {
                id: 2,
                desc: 'Sip, siempre',
                score: 5
            },
            {
                id: 3,
                desc: 'Sip, pero teniendo en cuenta si estoy disponible o no',
                score: 10
            }
        ]
    },
    {
        id: 4,
        desc: '¿Cuál es tu enfoque para manejar el estrés durante examenes?',
        options: [
            {
                id: 1,
                desc: '¿Manejar el estrés? JAJAJAJA *llora*',
                score: 0
            },
            {
                id: 2,
                desc: 'Intento organizarme bien para no llegar al punto de estresarme',
                score: 10
            },
            {
                id: 3,
                desc: 'Realizo meditación o hago ejercicio',
                score: 5
            }
        ]
    },
    {
        id: 5,
        desc: '¿Qué haces para mantenerte concentrado mientras estudias?',
        options: [
            {
                id: 1,
                desc: 'Escucho música relajante',
                score: 5
            },
            {
                id: 2,
                desc: 'Aparto el celular, quedándome solo con mi estudio',
                score: 10
            },
            {
                id: 3,
                desc: '¿Concentrarme? El conocimiento entra solo 😎',
                score: 0
            }
        ]
    },
    {
        id: 6,
        desc: '¿Cómo te mantienes al tanto de fechas de examenes y prácticos?',
        options: [
            {
                id: 1,
                desc: 'Memorizo las fechas',
                score: 5
            },
            {
                id: 2,
                desc: 'Me termino enterando por algún compañero xd',
                score: 0
            },
            {
                id: 3,
                desc: 'Uso un calendario o una app para agendar todo',
                score: 10
            }
        ]
    }
];