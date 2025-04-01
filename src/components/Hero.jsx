import { useEffect, useRef } from "react";

function Hero({ hero }) {

    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 0) {
                videoRef.current?.play();
            } else {
                videoRef.current?.pause();
                videoRef.current.currentTime = 0;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="layout">
            <div className="layout__header">
                <h1>{hero.title}</h1>
                <p>{hero.lead}</p>
                <p>{hero.prod}</p>
            </div>
            <div className="layout__side">
                <video
                    ref={videoRef}
                    src="/videos/LIA-inflated.mp4"
                    muted
                />
            </div>
        </header>
    );
}

export default Hero;