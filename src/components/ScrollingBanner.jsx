import { useEffect, useRef } from 'react';

function ScrollingBanner() {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const content = contentRef.current;

        let start = null;
        let rafId;
        let position = 0;
        const speed = 50; // pixels per second

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const delta = timestamp - start;
            start = timestamp;

            position -= (speed * delta) / 1000;

            if (Math.abs(position) >= content.offsetWidth / 2) {
                position = 0;
            }

            content.style.transform = `translateX(${position}px)`;
            rafId = requestAnimationFrame(step);
        };

        rafId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(rafId);
    }, []);

    const message = "⭐️⭐️⭐️⭐️⭐️ Such Wow.....  ";
    return (
        <div className="scrolling-banner" ref={containerRef}>
            <div className="scrolling-banner__content" ref={contentRef}>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span> 
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span>
                <span>{message}</span> 
            </div>
        </div>
    );
}

export default ScrollingBanner;