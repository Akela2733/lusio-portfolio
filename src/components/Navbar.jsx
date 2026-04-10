import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About Me', 'Skills', 'Projects', 'Contact'];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1.5rem 0',
        background: scrolled ? 'rgba(11, 0, 0, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Desktop Menu */}
        <div style={{ display: 'flex', gap: '3rem' }} className="desktop-menu">
          {navLinks.map((link, i) => (
             <a 
              key={i} 
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              style={{
                fontFamily: `'Bebas Neue', cursive`,
                color: 'white',
                fontSize: '1.1rem',
                letterSpacing: '2px',
                position: 'relative',
                transition: 'color 0.3s',
              }}
              className="nav-link"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-red)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#fff' }}
             >
               {link}
             </a>
          ))}
        </div>

        {/* Mobile menu toggle would go here */}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
