import React, { useRef, useEffect } from 'react';

const SectionParallaxBackground = ({ src, speed = 0.4, opacity = 0.4 }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;
            const element = bgRef.current.closest('section');
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;
            const distance = elementCenter - viewportCenter;

            // parallax offset based on distance from viewport center
            const translateY = distance * speed;
            bgRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [speed]);

    return (
        <div
            ref={bgRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url('${src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'scroll',
                opacity: opacity,
                zIndex: 0,
                pointerEvents: 'none',
                transition: 'transform 0.1s ease-out'
            }}
        />
    );
};

export default SectionParallaxBackground;
