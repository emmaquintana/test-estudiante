import { FaArrowLeftLong as ArrowLeft } from "react-icons/fa6";
import style from './styles/NextButton.module.css'; // Same styles than NextButton component
import animations from '../animations/animations.module.css';

type BackButtonProps = {
    onClick?: () => void;
    pulseAnimation?: boolean;
    styles?: React.CSSProperties;
    className?: string
}

export default function BackButton({ onClick, pulseAnimation, styles, className } : BackButtonProps) {
    return (
        <div 
            className={`${style.nextButton} ${pulseAnimation ? `${animations.pulse}` : {}} ${className}`}
            onClick = {onClick}
            style = {styles}
        >
            <ArrowLeft />
        </div>
    );
}