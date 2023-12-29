import React, { ButtonHTMLAttributes } from "react";
import { FaArrowRightLong as ArrowRight } from "react-icons/fa6";
import style from './styles/NextButton.module.css';
import animations from '../animations/animations.module.css'

type NextButtonProps = {
    pulseAnimation?: boolean,
    styles?: React.CSSProperties,
    onClick?: () => void,
    className?: string,
    ref?: React.RefObject<HTMLButtonElement>
};

export default function NextButton({ className, pulseAnimation, styles, onClick, ref } : NextButtonProps) {
    return (
        <button 
            onClick={onClick}
            className={`${style.nextButton} ${pulseAnimation ? `${animations.pulse}` : ``} ${className}`} 
            style = {styles}
            ref={ref}
        >
            <ArrowRight />
        </button>
    );
}