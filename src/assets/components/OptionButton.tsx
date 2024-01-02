import React from "react";
import style from './styles/OptionButton.module.css';
import { CiCircleCheck as Check } from "react-icons/ci";

type OptionButtonProps = {
    id: number;
    isSelected?: boolean,
    children?: React.ReactNode | React.ReactNode[],
    className?: string,
    buttonStyles?: React.CSSProperties,
    checkStyles?: React.CSSProperties,
    onClick?: (id: number) => void;
};

export default function OptionButton ({ id, isSelected, className, children, buttonStyles, checkStyles, onClick }: OptionButtonProps) {
    return (
        <button 
            className={`${style.optionButton} ${className}`} 
            style={buttonStyles}
            onClick={() => onClick && onClick(id)}
        >
            <div className={style.childrenContainer} >
                <Check 
                    className={`${isSelected ? `${style.isSelected}` : ``} ${style.checkIcon}`} 
                    style={checkStyles}
                />
                {children}            
            </div>            
        </button>
    );
}