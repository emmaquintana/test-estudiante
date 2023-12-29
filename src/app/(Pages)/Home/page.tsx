"use client"

import { useRef } from 'react';
import styles from './page.module.css';
import animations from '../../../assets/animations/animations.module.css'
import { useRouter } from 'next/navigation';

export default function Home() {                

    const sectionRef = useRef<HTMLBodyElement>(null);
    const router = useRouter();

    function handleClick() {
        if (sectionRef.current) {
            sectionRef.current.classList.add(animations.fadeDisappear);            

            sectionRef.current.addEventListener('animationend', () => {
                router.push("/Questions");
            }, {once: true});
        }                                
    }

    return (
        <section className={styles.container} ref={sectionRef}>
            <div className={styles.titleContainer}>
                <h1>Test</h1>                
                <h2 className={styles.title}>¿Qué tan buen estudiante sos?</h2>    
                <button className={styles.btn} onClick={handleClick}>
                    Iniciar Test
                </button>      
            </div>                  
        </section>
    );
}