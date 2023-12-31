import { RefObject } from "react";

/**Remove all children of a referenced element of the DOM*/
export default function removeChildren(ref: RefObject<HTMLElement>) {
    if (ref.current) {
        while (ref.current.lastChild) {
            ref.current.removeChild(ref.current.lastChild);
        }
    }    
}