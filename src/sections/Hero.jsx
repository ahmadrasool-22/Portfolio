import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center bg-gray-900 relative"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-gray-900/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m <span className="text-cyan-400">Ahmad</span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Enthusiast",
              2000,
              "Learning Mern Stack",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-purple-400"
          />
        </motion.h1>

        <p className="text-gray-400 mb-8 text-lg">
          I create modern web apps frontend with React and tailwind.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition shadow-md"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
