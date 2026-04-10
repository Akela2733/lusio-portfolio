import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Instagram, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#240404",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ width: "100%", maxWidth: "1200px" }}>
        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          GET IN TOUCH
        </h1>

        <p
          style={{
            fontSize: "clamp(0.9rem, 3vw, 1.2rem)",
            color: "white",
            textAlign: "center",
            marginBottom: "2rem",
            maxWidth: "700px",
            marginInline: "auto",
            lineHeight: "1.6",
          }}
        >
          Have a project in mind? Let’s collaborate and create something amazing
          together. Feel free to reach out via the form below or connect with me
          on social media.
        </p>

        {/* Container */}
        <div
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            height: isMobile ? "auto" : "550px",
          }}
        >
          {/* LEFT SIDE */}
          <motion.div
            animate={!isMobile ? { x: isHovered ? "100%" : "0%" } : { x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              flex: 1,
              minWidth: isMobile ? "100%" : "50%",
              background: "white",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              padding: isMobile ? "2rem 1rem" : "2rem",
              textAlign: "center",
              zIndex: 2,
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                marginBottom: "1rem",
                color: "black",
              }}
            >
              LET'S <span style={{ color: "#ff1a1a" }}>TALK</span>
            </h2>

            <div
              style={{
                fontSize: isMobile ? "1.3rem" : "2.5rem",
                lineHeight: "1.2",
                fontWeight: "bold",
              }}
            >
              <div style={{ color: "#ff1a1a", opacity: 0.4 }}>
                LET'S WORK TOGETHER
              </div>
              <div style={{ color: "#ff1a1a", opacity: 0.6 }}>
                LET'S WORK TOGETHER
              </div>
              <div style={{ color: "#ff1a1a" }}>LET'S WORK TOGETHER</div>
            </div>

            {/* Icons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
                marginTop: "2rem",
              }}
            >
              {/* Gmail */}
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=darklusio06@gmail.com&su=Project%20Inquiry&body=Hi%2C%20I%20want%20to%20work%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={iconStyle}
              >
                <Mail size={20} color="black" />
              </motion.a>

              {/* WhatsApp (Phone replaced) */}
              <motion.a
                href="https://wa.me/94703756783?text=Hi%20I%20want%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={iconStyle}
              >
                <Phone size={20} color="black" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/lusio___55?igsh=MXI4cml1ZjVubmtqeQ=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={iconStyle}
              >
                <Instagram size={20} color="black" />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/janith-erandaka-488674386?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={iconStyle}
              >
                <Linkedin size={20} color="black" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            animate={!isMobile ? { x: isHovered ? "-100%" : "0%" } : { x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              flex: 1,
              minWidth: isMobile ? "100%" : "50%",
              backgroundImage: `url('/spider images/spider poster.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              padding: isMobile ? "2rem 1rem" : "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <form
              action="https://formspree.io/f/mnqkzjzo"
              method="POST"
              style={{
                width: "100%",
                maxWidth: "400px",
                background: "rgba(0,0,0,0.85)",
                padding: isMobile ? "1.5rem" : "2rem",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                style={inputStyle}
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                style={inputStyle}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
                style={inputStyle}
              />

              <button
                type="submit"
                style={{
                  padding: "0.9rem",
                  borderRadius: "8px",
                  background: "linear-gradient(90deg, #ff4d4d, #ff1a1a)",
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* Styles */
const inputStyle = {
  padding: "0.8rem",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.5)",
  background: "rgba(255,255,255,0.1)",
  color: "white",
  fontSize: "0.9rem",
};

const iconStyle = {
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  background: "#f5f5f5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default Contact;
