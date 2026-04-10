import React from 'react';
import { motion } from 'framer-motion';

const FloatingAnimation = ({ children, duration = 6, delay = 0 }) => {
    return (
        <motion.div
            animate={{
                y: [0, -30, 0],
                rotateZ: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                delay: delay,
                ease: 'easeInOut'
            }}
            style={{
                width: '100%',
                height: '100%'
            }}
        >
            {children}
        </motion.div>
    );
};

export default FloatingAnimation;
