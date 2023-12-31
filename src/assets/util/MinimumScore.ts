import { Questions } from "./QA";

//Obtain the minimum possible score of Questions
export default function getMinimumQuestionsScore() : number {
    let minScore: number = 0;
    let questions = Questions;

    for (let i = 0; i < questions.length; i++) {
        let question = Questions[i]        

        if (question.options) {
            let questionMinScore = Math.min(...question.options.filter(option => typeof option.score === 'number')
                                                               .map(option => option.score as number));
                                                               minScore += questionMinScore;
        }
    }

    console.log(minScore)
                
    return minScore;
}