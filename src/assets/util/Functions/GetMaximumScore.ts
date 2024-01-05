import { Questions } from "../Info/QA";

//Obtain the maximum possible score of Questions
export default function getMaximumQuestionsScore() : number {
    let maxScore: number = 0;
    let questions = Questions;

    for (let i = 0; i < questions.length; i++) {
        let question = Questions[i]        

        if (question.options) {
            let questionMaxScore = Math.max(...question.options.filter(option => typeof option.score === 'number')
                                                               .map(option => option.score as number));
            maxScore += questionMaxScore;
        }
    }
                
    return maxScore;
}