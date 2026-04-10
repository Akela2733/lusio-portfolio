import React, { useRef, useEffect } from 'react';

const ParallaxSticker = ({
    src = '/spider images/parallax sticker.png',
    speed = 0.3,
    size = 350
}) => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 768;

        // 📱 MOBILE VERSION (simple static sticker)
        if (isMobile) {
            if (imgRef.current) {
                imgRef.current.style.position = 'fixed';
                imgRef.current.style.bottom = '20px';
                imgRef.current.style.right = '10px';
                imgRef.current.style.top = 'auto';
                imgRef.current.style.left = 'auto';
                imgRef.current.style.width = '120px';
                imgRef.current.style.opacity = '0.6';
            }
            if (lineRef.current) {
                lineRef.current.style.display = 'none';
            }
            return;
        }

        // 💻 DESKTOP PARALLAX VERSION
        const initialTop = 0;

        const handleScroll = () => {
            if (!imgRef.current || !lineRef.current) return;

            const scrollY = window.scrollY;
            const translateY = scrollY * speed;

            const imgHeight = imgRef.current.offsetHeight || size;

            const minTop = 0;
            const maxTop = Math.max(0, window.innerHeight - imgHeight);

            let stickerTop = initialTop + translateY;
            stickerTop = Math.min(Math.max(stickerTop, minTop), maxTop);

            imgRef.current.style.top = `${stickerTop}px`;

            const centerY = Math.min(window.innerHeight, stickerTop + imgHeight / 2);
            const lineHeight = Math.max(0, centerY);
            lineRef.current.style.height = `${lineHeight}px`;

            const opacity = Math.max(
                0,
                1 - scrollY / (document.body.scrollHeight - window.innerHeight)
            );

            imgRef.current.style.opacity = opacity;
            lineRef.current.style.opacity = opacity;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('load', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', handleScroll);
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
            {/* 🧵 Rope (desktop only) */}
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

            {/* 🕷 Sticker */}
            <img
                ref={imgRef}
                src={src}
                alt="parallax sticker"
                style={{
                    position: 'absolute',
                    top: `${Math.max(-size * 0.5, -50)}px`,
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