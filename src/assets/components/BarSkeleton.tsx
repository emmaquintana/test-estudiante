import animations from '../animations/animations.module.css';

type BarSkeletonProps = {
    children?: React.ReactNode | React.ReactNode[];    
    className?: string;
    variant?: 'ligther' | 'darker';
    styles?: React.CSSProperties
}

export default function BarSkeleton({  
    children, 
    className, 
    variant = 'darker',
    styles
}: BarSkeletonProps) 
{
    return (
        <div 
            className={`
                ${animations.barSkeletonLoading} 
                ${className}
                ${variant === 'ligther' ? animations.barSkeletonLoadingLighter : animations.barSkeletonLoadingDarker}
                `
            } 
            style={styles}        
        >
            {children}
        </div>
    );
}