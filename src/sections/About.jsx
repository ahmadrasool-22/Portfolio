import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Database,
  Rocket,
} from "lucide-react";

export default function About() {
  

  return (
    <section
      id="about"
      className="relative bg-[#111827] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-medium mb-4">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Passionate About Building
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Modern Web Experiences
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I’m Ahmad, a Full Stack Developer focused on building modern,
            scalable, and user-friendly web applications. I enjoy transforming
            ideas into real-world products with clean frontend design and
            efficient backend systems.
          </p>
        </motion.div>

       

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {[
            { number: "10+", label: "Projects Built" },
            { number: "MERN", label: "Stack Focused" },
            { number: "Full", label: "Responsive Design" },
            { number: "100%", label: "Learning Mindset" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl py-8 text-center backdrop-blur-md"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                {item.number}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}