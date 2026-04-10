import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    title: "Cartoon Thumbnails",
    images: [
      "/spider images/sample images/cartoon thumbnail1.jpeg",
      "/spider images/sample images/cartoon thumbnail2.jpeg",
      "/spider images/sample images/cartoon thumbnail3.jpeg",
      "/spider images/sample images/cartoon thumbnail4.jpeg",
      "/spider images/sample images/cartoon thumbnail5.jpeg",
      "/spider images/sample images/02-1.png",
      "/spider images/sample images/done-2.png",
      "/spider images/sample images/done.png",
      "/spider images/sample images/done-3.png",
      "/spider images/sample images/done.png1-3.png",
    ],
  },
  {
    title: "Cartoon Anime Mix",
    images: [
      "/spider images/sample images/anime mix cartoon1.jpeg",
      "/spider images/sample images/anime mix cartoon2.jpeg",
      "/spider images/sample images/anime mix cartoon3.jpeg",
      "/spider images/sample images/anime mix cartoon4.jpeg",
      "/spider images/sample images/anime mix cartoon5.jpeg",
    ],
  },
  {
    title: "Minecraft Art",
    images: [
      "/spider images/sample images/minecraft1.jpeg",
      "/spider images/sample images/minecraft2.jpeg",
      "/spider images/sample images/done.png1-4.png",
    ],
  },
];

export default function Projects() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [artIndex, setArtIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const category = categories[categoryIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setArtIndex((prev) => {
        const next = prev + 1;
        if (next >= category.images.length) {
          setCategoryIndex((c) => (c + 1) % categories.length);
          return 0;
        }
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [categoryIndex]);

  return (
    <section
      id="projects"
      style={{
        background: "url('/spider images/background 2.jpeg') center/cover",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* TOP ROW */}
        <div
          style={{
            overflow: "hidden",
            marginBottom: "30px",
            height: isMobile ? "140px" : "220px",
          }}
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: "15px" }}
          >
            {Array(2)
              .fill(categories[0].images)
              .flat()
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  style={{
                    width: isMobile ? "120px" : "200px",
                    height: isMobile ? "120px" : "200px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </motion.div>
        </div>

        {/* TITLE */}
        <h2
          style={{
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            color: "white",
            marginBottom: isMobile ? "40px" : "90px",
            letterSpacing: "4px",
            WebkitTextStroke: "1px rgba(255,0,0,0.7)",
          }}
        >
          PROJECT COLLECTION
        </h2>

        {/* CARD AREA */}
        <div
          style={{
            width: "100%",
            maxWidth: "700px",
            margin: "auto",
            padding: isMobile ? "0 1rem" : "0",
          }}
        >
          {/* CATEGORY TITLE */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={category.title}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "#ff2a2a",
                marginBottom: "20px",
                fontSize: "clamp(1.2rem, 4vw, 2rem)",
              }}
            >
              {category.title}
            </motion.h3>
          </AnimatePresence>

          {/* CARD */}
          <div
            style={{
              position: "relative",
              height: isMobile ? "260px" : "560px",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={category.images[artIndex]}
                initial={{ y: -100, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  position: "absolute",
                  width: "100%",
                  aspectRatio: "16/9",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={category.images[artIndex]}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div
          style={{
            overflow: "hidden",
            marginTop: "30px",
            height: isMobile ? "140px" : "220px",
          }}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ display: "flex", gap: "15px" }}
          >
            {Array(2)
              .fill(categories[1].images)
              .flat()
              .map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  style={{
                    width: isMobile ? "120px" : "200px",
                    height: isMobile ? "120px" : "200px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
