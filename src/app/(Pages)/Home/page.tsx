"use client"

import { useRef } from 'react';
import styles from './page.module.css';
import animations from '../../../assets/animations/animations.module.css'
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/assets/components/LoadingScreen';
import React from 'react';
import Loading from './loading';
import ReactDOM from 'react-dom';
import removeChildren from '@/assets/util/RemoveChildren';

export default function Home() {                

    const sectionRef = useRef<HTMLBodyElement>(null);
    const router = useRouter();

    function handleClick() {
        if (sectionRef.current) {
            // Disappear all section's element with a FadeInToOut animation
            sectionRef.current.classList.add(animations.fadeDisappear);            

            sectionRef.current.addEventListener('animationend', () => {
                // Remove section's children
                removeChildren(sectionRef);
                
                // Displays <LoadingScreen /> component with a FadeOutToIn animation
                sectionRef.current?.classList.add(animations.fadeAppear);
                const loadingScreenContainer = document.createElement('div');                
                ReactDOM.render(<LoadingScreen />, loadingScreenContainer);
                
                // Goes to the questions page
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