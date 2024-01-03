import { RefObject } from "react";
import { createRoot } from "react-dom/client";
import LoadingScreen from "../../components/LoadingScreen";
import animations from '@/assets/animations/animations.module.css';

export default function replaceWithLoadingScreen(ref: RefObject<HTMLElement>, animation: boolean = true) {
    if (ref.current) {        
        createRoot(ref.current).render(<LoadingScreen />);        
        if (animation) {
            ref.current.classList.remove(animations.fadeInToOut);
            ref.current.classList.add(animations.fadeOutToIn);
        }
    }
}