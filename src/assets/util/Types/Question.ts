import { Answer } from "./Answer"

export type Question = {
    id: number,
    desc: string,
    options?: Answer[],
    correctAnswerIndex?: number[] | number,    
}