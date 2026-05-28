import { motion } from "framer-motion";

import {
  FaGithub,
} from "react-icons/fa";

import {
  FiExternalLink,
} from "react-icons/fi";

export default function ProjectCard({
  title,
  description,
  tech = [],
  live,
  code,
  category,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-cyan-400/30 transition duration-300 hover:-translate-y-2"
    >
      {/* Top Gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

      <div className="p-8">
        
        {/* Category */}
        <span className="inline-block px-4 py-1 rounded-full text-xs font-medium tracking-wide bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 mb-5">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-5 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-7">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-400/30 transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          
          {/* Live Demo */}
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-400 transition duration-300"
          >
            <FiExternalLink size={18} />
            Live Demo
          </a>

          {/* GitHub */}
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition duration-300"
          >
            <FaGithub size={18} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}