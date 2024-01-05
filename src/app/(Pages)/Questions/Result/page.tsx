"use client"

import animations from '@/assets/animations/animations.module.css'
import styles from './page.module.css';
import getResult from '@/assets/util/Functions/GetResult';
import { useSearchParams, useRouter } from 'next/navigation';
import Button from '@/assets/components/Button';
import replaceWithLoadingScreen from '@/assets/util/Functions/ReplaceWithLoadingScreen';
import { ElementRef, useRef } from 'react';

export default function Result() {

    const searchParams = useSearchParams();
    const score = Number(searchParams.get("score"));    
    const result = getResult(score);
    const router = useRouter();
    const sectionRef = useRef<ElementRef<"section">>(null);

    function handleClick() {
        replaceWithLoadingScreen(sectionRef);        
        router.push('/Home');
    }

    return (
        <section className={`${animations.fadeAppear} ${styles.container}`} ref={sectionRef}>
            <main className={`${styles.resultContainer}`}>
                <h1 className={`${styles.text}`}>Resultado</h1>
                <h2 className={`${styles.text}`}>{result.title}</h2>                                    
                <p className={`${styles.text} ${styles.desc}`}>{result.desc}</p>                
                <Button 
                    variant='light' 
                    fontSize='25px' 
                    onClick={handleClick}
                    className={styles.btn}
                >
                    Finalizar Test
                </Button>
            </main>            
        </section>
    );
}