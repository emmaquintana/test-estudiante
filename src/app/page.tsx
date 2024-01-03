"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    
    const router = useRouter();    
    
    useEffect(() => {
        // It loads once the page is rendered
        {router.push('/Home')}
    }, []);
    
    return;
}