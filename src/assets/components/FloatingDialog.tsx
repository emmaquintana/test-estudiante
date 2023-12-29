import fdStyles from './styles/FloatingDialog.module.css';
import { PiWarningCircle as WarningIcon } from "react-icons/pi";

type FloatingDialogProps = {
    onClick?: () => void;
    styles?: React.CSSProperties;   
    message?: String;
    className?: String;
    children?: React.ReactNode | React.ReactNode[]
}

export default function FloatingDialog({ onClick, styles, message, className, children } : FloatingDialogProps) {
    return (
        <div 
            className={`${fdStyles.container} ${className}`}
            style={styles}
            onClick={onClick}
        >
            <WarningIcon />
            <span>{children ?? message}</span>
        </div>
    );
}