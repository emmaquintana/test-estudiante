import styles from './styles/WrapperText.module.css';

type WrapperTextProps = {
    children?: React.ReactNode | React.ReactNode[];
}

export default function WrapperText({ children }: WrapperTextProps) {        
    return (
        <div className={styles.wrapperText}>
            {children}
        </div>
    );
}