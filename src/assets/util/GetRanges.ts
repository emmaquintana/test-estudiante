import getMaximumQuestionsScore from "./MaximumScore";
import getMinimumQuestionsScore from "./MinimumScore";

export default function getRanges(rangesQuantity : number) : number[][] {
    
    // ranges'll store our number: [lowLimit][topLimit]
    let ranges : number[][] = [];
    
    // These are our limits.
    let minimumScore = getMinimumQuestionsScore();
    let maximumScore = getMaximumQuestionsScore();

    // We define the range size
    let rangeSize = (maximumScore - minimumScore) / rangesQuantity;
    
    // Generate ranges
    let lowLimit = minimumScore;
    for (let i = 0; i < rangesQuantity; i++) {
        const topLimit = Math.floor(lowLimit + rangeSize);        
        ranges.push([lowLimit, topLimit]);
        lowLimit = topLimit + 1; // Actualizamos el límite inferior para el próximo rango
    }    

    return ranges;
}