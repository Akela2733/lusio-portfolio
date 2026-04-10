import React, { useRef, useEffect } from 'react';

const ParallaxBackground = ({ src = '/spider images/background.jpeg', speed = 0.5, opacity = 0.6 }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;
            const scrollY = window.scrollY;
            const translateY = scrollY * speed;
            bgRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={bgRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
                opacity: opacity,
                zIndex: -1,
                pointerEvents: 'none',
                transition: 'transform 0.1s ease-out'
            }}
        />
    );
};

export default ParallaxBackground;
