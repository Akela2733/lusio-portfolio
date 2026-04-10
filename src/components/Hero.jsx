import React from 'react';
import { motion } from 'framer-motion';
import { Download, Feather } from 'lucide-react';

const Hero = () => {
    const name = "LUCAS";

    // Animation variants for each letter
    const letterVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px', position: 'relative', overflow: 'hidden' }}>

            {/* Decorative Web Background */}
            <div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                    backgroundImage: 'radial-gradient(circle, rgba(210,19,18,0.15) 0%, transparent 70%)',
                    zIndex: 0,
                }}
            />

            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', zIndex: 1 }}>

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ flex: '1 1 500px', paddingRight: '2rem' }}
                >
                    <h1 style={{
                        fontSize: 'var(--title-size, 6rem)',
                        color: 'white',
                        textShadow: '0 0 20px rgba(210, 19, 18, 0.5)',
                        margin: '0 0 1rem 0',
                        lineHeight: '0.9'
                    }}>
                        HELLO,<br />
                        I'M{' '}
                        {/*
                            Wrap each letter in a motion.span to animate typing
                        */}
                        {name.split('').map((char, i) => (
                            <motion.span
                                key={i}
                                variants={letterVariant}
                                initial="hidden"
                                animate="visible"
                                transition={{
                                    delay: i * 0.5, // stagger letters
                                    repeat: Infinity, // continuously
                                    repeatDelay: 5,
                                    repeatType: "loop",
                                }}
                                style={{ color: 'var(--primary-red)', display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>

                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--text-secondary)',
                        maxWidth: '450px',
                        marginBottom: '2rem',
                        borderLeft: '4px solid var(--primary-red)',
                        paddingLeft: '1rem'
                    }}>
                        Creative cartoon art bringing characters to life through bold lines, expressive style, and powerful visual storytelling.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', marginTop: '3rem' }}>
                        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            HIRE ME
                        </button>
                        <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Download size={20} /> RESUME
                        </button>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        marginTop: '4rem',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        paddingTop: '2rem'
                    }}>
                        {['Sketching', 'Inking', 'Design'].map((item, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                                <Feather size={28} color="var(--text-secondary)" />
                                <span style={{ fontFamily: 'Bebas Neue', letterSpacing: '1px', color: 'var(--text-secondary)' }}>{item}</span>
                            </div>
                        ))}
                    </div>

                </motion.div>

                {/* Right Image Container with 3D Animation */}
                
            </div>
        </section>
    );
};

export default Hero;