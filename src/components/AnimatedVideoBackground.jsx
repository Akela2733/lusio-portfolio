import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedVideoBackground = ({ children }) => {
    // Generate animated canvas-based video
    const generateAnimatedCanvas = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 600;
        const ctx = canvas.getContext('2d');

        let frame = 0;
        const animate = () => {
            frame += 1;

            // Dark gradient background
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            gradient.addColorStop(0, '#0a0000');
            gradient.addColorStop(0.5, '#1a0000');
            gradient.addColorStop(1, '#050000');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw animated web strands
            ctx.strokeStyle = `rgba(210, 19, 18, ${0.3 + Math.sin(frame * 0.02) * 0.2})`;
            ctx.lineWidth = 2;

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                const x = (canvas.width / 5) * (i + 1);
                const y = Math.sin(frame * 0.01 + i) * 100 + canvas.height / 2;
                ctx.moveTo(x, 0);
                ctx.lineTo(x + Math.sin(frame * 0.015 + i) * 50, y);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Draw circular waves
            ctx.strokeStyle = `rgba(210, 19, 18, ${0.2 + Math.cos(frame * 0.015) * 0.15})`;
            ctx.lineWidth = 1;
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;
            for (let i = 1; i < 4; i++) {
                const radius = (frame * 0.5 + i * 20) % 300;
                ctx.beginPath();
                ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Draw animated particles
            ctx.fillStyle = `rgba(210, 19, 18, 0.6)`;
            for (let i = 0; i < 20; i++) {
                const x = (Math.sin(frame * 0.01 + i) + 1) * canvas.width / 2;
                const y = (Math.cos(frame * 0.008 + i * 1.5) + 1) * canvas.height / 2;
                ctx.beginPath();
                ctx.arc(x, y, 2 + Math.sin(frame * 0.05 + i) * 1.5, 0, Math.PI * 2);
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };

        animate();
        return canvas;
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            {children}
        </div>
    );
};

export default AnimatedVideoBackground;
