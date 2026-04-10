import React from "react";
import { motion } from "framer-motion";
import FloatingAnimation from "./FloatingAnimation";

const About = () => {
  return (
    <section
      id="about-me"
      className="section"
      style={{ backgroundColor: "#100000", position: "relative" }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left Side: Text Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ position: "relative" }}
        >
          {/* Vertical "SPIDERMAN" Title like the design */}
          <div
            style={{
              position: "absolute",
              left: "-80px",
              top: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
              color: "rgba(210, 19, 18, 0.4)",
              fontSize: "3rem",
              lineHeight: "0.8",
              fontFamily: "Bebas Neue",
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            {["S", "P", "I", "D", "E", "R", "M", "A", "N"].map((char, i) => (
              <span key={i}>{char}</span>
            ))}
          </div>

          <h2
            style={{
              fontSize: "4rem",
              color: "white",
              marginBottom: "2rem",
              marginLeft: "2rem",
            }}
          >
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px var(--primary-red)",
              }}
            >
              ABOUT
            </span>{" "}
            ME
          </h2>

          <div
            style={{
              
              padding: "2rem",
              border: "1px solid rgba(210,19,18,0.3)",
              borderRadius: "10px",
              background:
                "linear-gradient(135deg, rgba(210,19,18,0.05), transparent)",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                lineHeight: "1.8",
              }}
            >
              Hi, I’m Lucas. I started my journey as a digital artist two years
              ago, full of passion but with very little experience. Those early
              days were tough long hours, countless mistakes, and moments of
              self-doubt. But I never gave up. Every sketch, every digital
              painting, taught me something new and brought me closer to my
              dream. I work hard every day to improve my skills and push the
              boundaries of my creativity. And I promise, this is just the
              beginning. In the future, I aim to create art that not only
              showcases my growth but also inspires others to pursue their own
              dreams. I’m committed to learning, experimenting, and becoming
              better with every step of this journey.{" "}
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--text-secondary)",
                lineHeight: "1.8",
              }}
            >
              My designs are inspired by storytelling, creativity, and
              imagination. I aim to turn ideas into engaging visuals that
              connect with people. Each project is created with care, detail,
              and passion for art.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "600px",
              background: "var(--primary-red)",
              borderRadius: "20px",
              boxShadow: "-20px 20px 0px rgba(11,0,0,0.5), inset 0 0 50px #000",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Animated pulsing glow */}
            <motion.div
              style={{
                position: "absolute",
                inset: "-20%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />

            {/* Web overlay */}
            <div
              style={{
                position: "absolute",
                inset: "-10%",
                backgroundImage: `url('/spider images/aea77b72759ba8fb2e8bdb15ae2fe7c43dd52ff6.jpg')`,
                opacity: 0.5,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "grayscale(100%) contrast(1.2)",
              }}
            />

            <FloatingAnimation duration={6} delay={0}>
              <img
                src="/spider images/4d9a696e035c97c55d85af1d1141960ba1a2e975.png"
                alt="Spider About"
                style={{
                  position: "relative",
                  zIndex: 1,
                  height: "110%",
                  objectFit: "contain",
                  filter: "drop-shadow(0px 0px 20px rgba(0,0,0,0.8))",
                  width: "100%",
                }}
              />
            </FloatingAnimation>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
