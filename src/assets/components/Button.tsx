import Unit from "../util/Types/Units";
import btnStyles from './styles/Button.module.css';

type ButtonProps =  {
    // Custom properties
    variant?: 'light' | 'dark';
    fontSize?: `${number}${Unit}`;
    children?: React.ReactNode | React.ReactNode[];
    styles?: React.CSSProperties;
    onClick?: () => void;    
}

export default function Button({
    variant = "light",
    fontSize,
    children,
    styles,
    onClick
}: ButtonProps) {
    return (
        <button
            style={variant === null ? undefined : variant === 'light' ? {                
                backgroundColor: '#fff',
                color: '#000',
                border: '2px solid #000',
                fontSize: fontSize,
                ...styles
            } : {
                backgroundColor: '#000',
                color: '#fff',
                border: '2px solid #fff',
                fontSize: fontSize,
                ...styles
            }}
            className={btnStyles.btn}
            onClick={onClick}
        >
            {children}
        </button>
    );
}