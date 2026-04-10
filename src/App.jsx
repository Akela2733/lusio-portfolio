import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import ParallaxSticker from './components/ParallaxSticker';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  return (
    <div className="app-container">
      <ParallaxBackground src="/spider images/background.jpeg" speed={0.5} />
      <ParallaxSticker speed={0.25} size={350} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Reviews />
        <Contact />
      </main>
      <footer style={{
        background: 'var(--bg-color)',
        padding: '2rem 0',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        color: 'var(--text-secondary)'
      }}>
        <p>&copy; {new Date().getFullYear()} SPIDER PORTFOLIO. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;
