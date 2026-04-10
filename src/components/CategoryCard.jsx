import React from 'react';
import { motion } from 'framer-motion';
import './CategoryCard.css';

/**
 * CategoryCard displays a single image with a subtle parallax/hover effect.
 * Props:
 *  - src: image URL
 *  - alt: alt text
 */
const CategoryCard = ({ src, alt }) => {
    return (
        <motion.div
            className="category-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <img src={src} alt={alt} className="category-card-img" />
        </motion.div>
    );
};

export default CategoryCard;
