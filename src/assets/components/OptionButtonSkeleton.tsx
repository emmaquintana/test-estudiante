import React from "react";
import style from './styles/OptionButtonSkeleton.module.css';
import animations from '../animations/animations.module.css';
import { CiCircleCheck as Check } from "react-icons/ci";

type OptionButtonProps = {
    id?: number;        
    className?: string,
};

export default function OptionButton ({ id, className }: OptionButtonProps) {
    return (
        <button 
            className={`${style.optionButton} ${animations.skeletonLoading} ${className}`}  
            key={id}
        >
            <div className={`${style.childrenContainer}`} >
                <Check className={`${animations.iconSkeletonLoading}`}/>
                <div className={`${style.bar} ${animations.barSkeletonLoading}`}></div>
            </div>            
        </button>
    );
}