import { Results } from "../Info/Results";
import { Result } from "../Types/Result";
import getRanges from "./GetRanges";

export default function getResult(score: number) : Result {
    const ranges = getRanges(Results.length);
    let result : Result = Results[0];

    for (let i = 0; i < ranges.length; i++) {
        if (score >= ranges[i][0] && score <= ranges[i][1]) {
            result = Results[i];
        }
    }

    return result ?? null;
}