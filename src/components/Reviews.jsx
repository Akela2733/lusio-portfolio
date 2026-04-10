import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingAnimation from './FloatingAnimation';

const reviews = [
  { name: 'gerkotto2', text: "My friend had a thumbnail remade for him by CreativeInk and he LOVED IT.", role: "Art Director" },
  { name: 'trevor_davis', text: "I had a great experience working with this freelancer. From the start, they showed a strong deep understanding of the concept I had in mind and were able to take my rough ideas and turn them into something polished and eye-catching. Their creativity really stood out. They didn’t just follow instructions — they enhanced the idea and added their own touch in a way that made the final result even better than I expected.", role: "Game Dev" },
  { name: 'casualbrock', text: "This guy was awesome, I’ve gone to him twice and he’s done amazing every single time!", role: "Author" },
  { name: 'pointyeel', text: "Lucas is an amazing artist highly talented and extremely gifted. He brought my vision to life perfectly.", role: "Producer" }
];

const Reviews = () => {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  // Auto slide (pause on hover)
  React.useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section id="reviews" className="section" style={{ backgroundColor: '#0b0000', position: 'relative', overflow: 'hidden' }}>
      <div className="container">

        {/* Title (UNCHANGED) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '4rem', color: 'transparent', WebkitTextStroke: '1px white' }}>
            CLIENT'S <span style={{ color: 'white', WebkitTextStroke: '0' }}>REVIEWS</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          {/* Spider (UNCHANGED) */}
          <FloatingAnimation duration={5} delay={0}>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: 'spring' }}
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '-50px',
                width: '200px',
                height: '300px',
                zIndex: 10,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <div style={{ width: '2px', height: '100px', background: 'rgba(255,255,255,0.2)', position: 'absolute', top: '-100px' }} />
              <img
                src="/spider images/0417efc1dd855a5fd61e887b75b916d2a09ebd4c.png"
                alt="Hanging Spiderman"
                style={{
                  width: '250px',
                  objectFit: 'contain',
                  marginTop: '100px',
                  filter: 'drop-shadow(0px 10px 20px rgba(0,0,0,0.8))'
                }}
              />
            </motion.div>
          </FloatingAnimation>

          {/* Slider */}
          <div
            style={{ width: '100%', maxWidth: '750px', marginTop: '140px' }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                style={{
                  backdropFilter: 'blur(20px)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 0, 0, 0.2)',
                  borderRadius: '25px',
                  padding: '2.5rem',
                  boxShadow: '0 20px 60px rgba(255,0,0,0.15)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Gradient glow */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(circle at top left, rgba(255,0,0,0.15), transparent)',
                  zIndex: 0
                }} />

                {/* Quote icon */}
                <div style={{
                  fontSize: '4rem',
                  color: 'rgba(255,0,0,0.2)',
                  position: 'absolute',
                  top: '10px',
                  right: '20px'
                }}>
                  ❝
                </div>

                {/* Text */}
                <p style={{
                  color: '#ddd',
                  fontSize: '1rem',
                  lineHeight: '1.7',
                  marginBottom: '1.5rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {reviews[current].text}
                </p>

                {/* User */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', zIndex: 1, position: 'relative' }}>
                  <div style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, red, #ff4d4d)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {reviews[current].name[0].toUpperCase()}
                  </div>

                  <div>
                    <p style={{ margin: 0, color: 'white', fontWeight: 'bold' }}>
                      {reviews[current].name}
                    </p>
                    <p style={{ margin: 0, color: '#ff4d4d', fontSize: '0.85rem' }}>
                      {reviews[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1.5rem' }}>
              {reviews.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  style={{
                    width: current === index ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '10px',
                    background: current === index ? 'red' : '#555',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '1.5rem'
            }}>
              <button onClick={() => setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))} style={btnStyle}>
                ←
              </button>
              <button onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)} style={btnStyle}>
                →
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const btnStyle = {
  background: 'transparent',
  border: '1px solid red',
  color: 'white',
  padding: '0.5rem 1.2rem',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: '0.3s'
};

export default Reviews;