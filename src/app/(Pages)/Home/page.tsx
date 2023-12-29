"use client"

import { useRouter } from "next/navigation";
import styles from './page.module.css';

export default function Home() {                

    const router = useRouter();

    function handleClick() {        
        router.push('/Questions')
    }

    return (
        <section className={styles.container}>
            <div className={styles.titleContainer}>
                <h1>Test</h1>                
                <h2 className={styles.title}>¿Qué tan buen estudiante sos?</h2>    
            </div>            
            <button className={styles.btn} onClick={handleClick}>Iniciar Test</button>
        </section>
    );
}