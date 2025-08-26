import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ title, description, tech = [], live, code }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group rounded-2xl bg-gray-800/50 border border-gray-700/60 p-6 
                 transition hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(56,189,248,0.2)]
                 cursor-pointer"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300/90 text-sm mb-5 leading-relaxed">{description}</p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full border border-gray-600/70 
                       text-gray-200 bg-gray-900/40 group-hover:border-cyan-400/50"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-cyan-300 
                       border border-cyan-500/50 hover:bg-cyan-500 hover:text-white transition"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        {code && (
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-purple-300 
                       border border-purple-500/50 hover:bg-purple-500 hover:text-white transition"
          >
            <FaGithub /> GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
