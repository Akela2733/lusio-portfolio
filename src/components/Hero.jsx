import React from 'react';
import { motion } from 'framer-motion';
import { Download, Feather } from 'lucide-react';

// ✅ Import video (recommended way)
import bgVideo from "../assets/Spider-images/miles-morales-in-the-rain-spiderman-into-the-spiderverse-moewalls-com.mp4";

const Hero = () => {
    const name = "LUCAS";

    // Animation variants for each letter
    const letterVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="home"
            className="section"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                paddingTop: '100px',
                position: 'relative',
                overflow: 'hidden'
            }}
        >

            {/* 🎥 Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            >
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* 🌑 Dark Overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    zIndex: 1,
                }}
            />

            {/* 📦 Content */}
            <div
                className="container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    zIndex: 2,
                    position: 'relative'
                }}
            >

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 500px', paddingRight: '2rem' }}
                >
                    <h1
                        style={{
                            fontSize: 'var(--title-size, 6rem)',
                            color: 'white',
                            textShadow: '0 0 20px rgba(210, 19, 18, 0.5)',
                            margin: '0 0 1rem 0',
                            lineHeight: '0.9'
                        }}
                    >
                        HELLO,<br />
                        I'M{' '}
                        {name.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariant}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay: i * 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                    repeatType: "loop",
                                }}
                                style={{
                                    color: 'var(--primary-red)',
                                    display: 'inline-block'
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <p
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '450px',
                            marginBottom: '2rem',
                            borderLeft: '4px solid var(--primary-red)',
                            paddingLeft: '1rem'
                        }}
                    >
                        Creative cartoon art bringing characters to life through bold lines, expressive style, and powerful visual storytelling.
                    </p>

                    {/* Buttons */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            marginTop: '3rem'
                        }}
                    >
                        <button
                            className="btn-primary"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            HIRE ME
                        </button>

                        <button
                            className="btn-outline"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Download size={20} /> RESUME
                        </button>
                    </div>

                    {/* Skills */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            marginTop: '4rem',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            paddingTop: '2rem'
                        }}
                    >
                        {['Sketching', 'Inking', 'Design'].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                <Feather size={28} color="var(--text-secondary)" />
                                <span
                                    style={{
                                        fontFamily: 'Bebas Neue',
                                        letterSpacing: '1px',
                                        color: 'var(--text-secondary)'
                                    }}
                                >
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>

                </motion.div>

                {/* Right side (optional image / 3D content later) */}

            </div>
        </section>
    );
};

export default Hero;