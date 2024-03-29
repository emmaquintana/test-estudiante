import {CgSpinner} from 'react-icons/cg'; 
import animations from '@/assets/animations/animations.module.css';

export default function LoadingScreen() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100dvh'
            }}
            className={animations.fadeOutToIn}
        >
            <CgSpinner 
                className={animations.rotate} 
                style={{
                    fontSize: '12vh',
                    color: 'black'
                }}
            />            
        </div>
    );
}