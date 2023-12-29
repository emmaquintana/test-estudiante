import {CgSpinner} from 'react-icons/cg'; 
import animations from '@/assets/animations/animations.module.css';

export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100dvh'
        }}>
            <CgSpinner 
                className={animations.rotate} 
                style={{
                    fontSize: '10vw',
                    color: 'black'
                }}
            />            
        </div>
    );
}