"use client"

import { useRef } from 'react';
import styles from './page.module.css';
import animations from '../../../assets/animations/animations.module.css'
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/assets/components/LoadingScreen';
import React from 'react';
import { createRoot } from 'react-dom/client';

export default function Home() {                

    const sectionRef = useRef<HTMLBodyElement>(null);
    const titleContainerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    function handleClick() {
        if (sectionRef.current && titleContainerRef.current) {
            // Disappear all section's element with a fadeInToOut animation            
            titleContainerRef.current.classList.add(animations.fadeInToOut_increaseSize);   
            sectionRef.current.classList.add(animations.fadeInToOut);
            
            // When previous animation ends, then LoadingScreen is displayed
            sectionRef.current.addEventListener('animationend', () => {
                if (sectionRef.current) {                                        
                    // Displays <LoadingScreen /> component with a FadeOutToIn animation                                
                    createRoot(sectionRef.current).render(<LoadingScreen />);
                    
                    // Handles fade animation
                    sectionRef.current?.classList.remove(animations.fadeInToOut);
                    titleContainerRef.current?.classList.remove(animations.fadeInToOut_increaseSize)                    
                    sectionRef.current?.classList.add(animations.fadeOutToIn);                                          

                    // Goes to the questions page
                    router.push("/Questions");
                }                
            }, {once: true});
        }                                
    }

    return (
        <section className={styles.container} ref={sectionRef}>
            <div className={styles.titleContainer} ref={titleContainerRef}>
                <h1>Test</h1>                
                <h2 className={styles.title}>¿Qué tan buen estudiante sos?</h2>    
                <button className={styles.btn} onClick={handleClick}>
                    Iniciar Test
                </button>      
            </div>                  
        </section>
    );
}