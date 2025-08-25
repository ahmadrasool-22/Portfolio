// Reusable project card (no image, modern dark style)
export default function ProjectCard({ title, description, tech = [], live, code }) {
  return (
    <div className="group rounded-2xl bg-gray-800/50 border border-gray-700/60 p-6 transition 
                    hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]">
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
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl text-cyan-300 border border-cyan-500/50 
                     hover:bg-cyan-500 hover:text-white transition"
        >
          Live Demo
        </a>
        <a
          href={code}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-xl text-purple-300 border border-purple-500/50 
                     hover:bg-purple-500 hover:text-white transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
