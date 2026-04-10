import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
    { num: '01', title: 'Cartoon Illustration', desc: 'Creating bold expressive cartoon artwork with clear shapes and strong visual style.' },
    { num: '02', title: 'Sketching', desc: 'Developing ideas through quick sketches and rough drawings before final artwork.' },
    { num: '03', title: 'Inking', desc: 'Adding clean, bold lines to sketches to give clarity and definition.' },
    { num: '04', title: 'Character Design', desc: 'Designing unique characters with personality, emotion, and visual balance.' }
];

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-color)', position: 'relative' }}>

            {/* Decorative top spider logo if available */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '4rem', color: 'white' }}>
                    <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--primary-red)' }}>S</span>KILLS
                </h2>
            </div>

            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                {/* Left Side: Image/Character */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
                >
                    <div style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(210,19,18,0.3) 0%, rgba(11,0,0,0) 70%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src="/spider images/spider2.png" alt="Spider Details" style={{ width: '130%', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.8))' }} />
                    </div>
                </motion.div>

                {/* Right Side: Skills List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {skillsList.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                        >
                            <div style={{
                                fontFamily: 'Bebas Neue',
                                fontSize: '3rem',
                                color: 'var(--primary-red)',
                                minWidth: '60px',
                                lineHeight: '0.8'
                            }}>
                                {skill.num}
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '0.5rem', letterSpacing: '1px' }}>
                                    {skill.title}
                                </h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                    {skill.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
