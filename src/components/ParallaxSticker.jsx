import React, { useRef, useEffect } from 'react';

const ParallaxSticker = ({ src = '/spider images/parallax sticker.png', speed = 0.3, size = 350 }) => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        // start at top of viewport
        const initialTop = 0;

        const handleScroll = () => {
            if (!imgRef.current || !lineRef.current) return;
            const scrollY = window.scrollY;
            const translateY = scrollY * speed;

            const imgHeight = imgRef.current.offsetHeight || size;
            // compute min/max so the sticker stays fully visible in viewport
            const minTop = 0; // cannot go above top
            const maxTop = Math.max(0, window.innerHeight - imgHeight); // cannot go below viewport

            let stickerTop = initialTop + translateY;
            // clamp into visible area
            stickerTop = Math.min(Math.max(stickerTop, minTop), maxTop);

            // update image position
            imgRef.current.style.top = `${stickerTop}px`;

            // compute center of image to draw rope to (clamped to viewport height)
            const centerY = Math.min(window.innerHeight, stickerTop + imgHeight / 2);
            const lineHeight = Math.max(0, centerY);
            lineRef.current.style.height = `${lineHeight}px`;

            // fade out near bottom of document
            const opacity = Math.max(0, 1 - scrollY / (document.body.scrollHeight - window.innerHeight));
            imgRef.current.style.opacity = opacity;
            lineRef.current.style.opacity = opacity;
        };

        const handleLoad = () => handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('load', handleLoad);
        // also call once
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleLoad);
        };
    }, [speed, size]);

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                right: '5%',
                width: `${size}px`,
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 9999,
                overflow: 'visible'
            }}
        >
            {/* vertical white rope */}
            <div
                ref={lineRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '2px',
                    height: '0px',
                    background: 'white',
                    opacity: 1,
                    transition: 'height 0.08s linear, opacity 0.2s linear'
                }}
            />

            <img
                ref={imgRef}
                src={src}
                alt="parallax sticker"
                style={{
                    position: 'absolute',
                    top: `${Math.max(-size * 0.5, -50)}px`, // start slightly above viewport center
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: `${size}px`,
                    height: 'auto',
                    pointerEvents: 'none',
                    transition: 'top 0.08s linear, opacity 0.2s linear'
                }}
            />
        </div>
    );
};

export default ParallaxSticker;
