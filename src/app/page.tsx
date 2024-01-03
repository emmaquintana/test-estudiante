"use client";

import replaceWithLoadingScreen from "@/assets/util/Functions/ReplaceWithLoadingScreen";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function Home() {
    
    const router = useRouter();    
    const divRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // It loads once the page is rendered
        replaceWithLoadingScreen(divRef);
        {router.push('/Home')}
    }, []);
    
    return (
        <div ref={divRef}></div>
    );
}