"use client"

import animations from '@/assets/animations/animations.module.css'
import { useSearchParams } from 'next/navigation';

export default function Result() {

    const searchParams = useSearchParams();
    const score = searchParams.get("score");
    
    return (
        <section className={`${animations.fadeAppear}`}>
            Resultado: {score}
        </section>
    );
}