import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollSnapProps {
    children: React.ReactNode[];
}

const ScrollSnap: React.FC<ScrollSnapProps> = ({ children }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [ref, inView] = useInView({ threshold: 0 });

    useEffect(() => {
        if (inView && scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth;
        }
    }, [inView]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollLeft += scrollContainerRef.current.offsetWidth;
            }
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={ref} style={{ scrollSnapType: 'x mandatory', overflowX: 'scroll' }}>
            <div ref={scrollContainerRef} style={{ display: 'flex', scrollSnapAlign: 'start' }}>
                {children.map((child, index) => (
                    <div key={index} style={{ flex: '0 0 100%', scrollSnapAlign: 'start' }}>
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollSnap;
