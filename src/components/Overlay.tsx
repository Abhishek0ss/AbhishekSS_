"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// Typewriter phrases
const phrases = [
  "AI / ML Engineer",
  "Machine Learning Engineer",
  "Building data-driven systems",
  "Computer Vision Enthusiast",
];

function TypewriterText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setText(
        deleting
          ? current.substring(0, text.length - 1)
          : current.substring(0, text.length + 1)
      );

      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % phrases.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <p className="mt-6 text-xl md:text-2xl text-zinc-300 font-light tracking-wide h-8">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}

export function Overlay({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  // Section 1: 0% to 25% (Frames 1-30)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.26, 1], [1, 1, 0, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], ["0px", "-40px"]);

  // Section 2: 30% to 55% (Frames 36-66)
  const opacity2 = useTransform(
    scrollYProgress,
    [0.26, 0.35, 0.50, 0.60, 1],
    [0, 1, 1, 0, 0]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0.26, 0.35, 0.50, 0.60],
    ["30px", "0px", "0px", "-30px"]
  );

  // Section 3: 60% to 85% (Frames 72-102)
  const opacity3 = useTransform(
    scrollYProgress,
    [0.60, 0.68, 0.82, 0.90, 1],
    [0, 1, 1, 0, 0]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0.60, 0.68, 0.82, 0.90],
    ["30px", "0px", "0px", "-30px"]
  );

  return (
    <div className="absolute inset-0 pointer-events-none z-[100]">
      <div className="relative w-full h-full">
        
        {/* Section 1 */}
        <motion.div
          style={{ 
            opacity: opacity1, 
            y: y1,
            pointerEvents: "none"
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">
            ABHISHEK S S
          </h1>
          <TypewriterText />
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ 
            opacity: opacity2, 
            y: y2,
            pointerEvents: "none"
          }}
          className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-24"
        >
          <div className="max-w-xl text-left">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl">
              I build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-none">
                data-driven solutions.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ 
            opacity: opacity3, 
            y: y3,
            pointerEvents: "none"
          }}
          className="absolute inset-0 flex flex-col items-end justify-center px-8 md:px-24"
        >
          <div className="max-w-xl text-right">
            <h2 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] drop-shadow-2xl">
              Bridging ML <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-rose-500 to-amber-500 drop-shadow-none">
                and analytics.
              </span>
            </h2>
          </div>
        </motion.div>

      </div>
    </div>
  );
}