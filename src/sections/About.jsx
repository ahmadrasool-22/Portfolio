import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function About({
  heading = "About Me",
  paragraph = "Hi, I'm Ahmad — a frontend developer who loves building modern, responsive web apps. I focus on React, Tailwind CSS, and clean UI/UX. I enjoy transforming ideas into polished, production-ready interfaces.",
  typingSpeed = 10,
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [displayed, setDisplayed] = useState("");

  // Intersection observer
  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isVisible) return;
    if (displayed.length >= paragraph.length) return;

    let cancelled = false;
    const id = setInterval(() => {
      if (cancelled) return;
      setDisplayed((prev) => {
        if (prev.length >= paragraph.length) {
          clearInterval(id);
          return prev;
        }
        return paragraph.slice(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [isVisible, displayed.length, paragraph, typingSpeed]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-gray-900 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-6"
        >
          {heading}
        </motion.h2>

        {/* Paragraph with typing effect */}
        <p
          className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto whitespace-pre-wrap"
          aria-live="polite"
        >
          {displayed}
          {isVisible && displayed.length < paragraph.length ? (
            <span className="inline-block w-[8px] h-[18px] align-middle ml-1 animate-pulse text-cyan-400">
              |
            </span>
          ) : null}
        </p>
      </div>
    </section>
  );
}
