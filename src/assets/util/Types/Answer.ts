export type Answer = {
    id: number,
    desc: string,
    score?: number
    //The score could follow the following rules:
    //10: Perfect
    //5: Regular
    //0: Bad
    //This is in case we want to qualify the answer
    //by the quality and not by correct/wrong.
    //This is useful for many cases such as some tests with questions like
    //"How do you prepare yourself for a test/examen?"
}