import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedSVGWeb = ({ width = 400, height = 400, animated = true }) => {
    return (
        <motion.svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{ position: 'absolute', top: 0, left: 0 }}
            animate={animated ? { opacity: [0.3, 0.6, 0.3] } : {}}
            transition={{ duration: 4, repeat: Infinity }}
        >
            {/* Concentric circles */}
            <circle
                cx={width / 2}
                cy={height / 2}
                r="50"
                fill="none"
                stroke="rgba(210, 19, 18, 0.5)"
                strokeWidth="1"
            />
            <circle
                cx={width / 2}
                cy={height / 2}
                r="100"
                fill="none"
                stroke="rgba(210, 19, 18, 0.3)"
                strokeWidth="1"
            />
            <circle
                cx={width / 2}
                cy={height / 2}
                r="150"
                fill="none"
                stroke="rgba(210, 19, 18, 0.2)"
                strokeWidth="1"
            />

            {/* Web strands */}
            {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * Math.PI * 2;
                const x2 = width / 2 + Math.cos(angle) * 150;
                const y2 = height / 2 + Math.sin(angle) * 150;
                return (
                    <line
                        key={`strand-${i}`}
                        x1={width / 2}
                        y1={height / 2}
                        x2={x2}
                        y2={y2}
                        stroke="rgba(210, 19, 18, 0.4)"
                        strokeWidth="1"
                    />
                );
            })}

            {/* Animated particles */}
            {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * Math.PI * 2;
                const radius = 80;
                const cx = width / 2 + Math.cos(angle) * radius;
                const cy = height / 2 + Math.sin(angle) * radius;
                return (
                    <motion.circle
                        key={`particle-${i}`}
                        cx={cx}
                        cy={cy}
                        r="2"
                        fill="rgba(210, 19, 18, 0.8)"
                        animate={{
                            r: [2, 4, 2],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                        }}
                    />
                );
            })}
        </motion.svg>
    );
};

export default AnimatedSVGWeb;
