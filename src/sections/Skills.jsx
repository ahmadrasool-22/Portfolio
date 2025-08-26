import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiCplusplus, SiMysql } from "react-icons/si";
import { GiAbstract001 } from "react-icons/gi"; // placeholder for OOP

export default function Skills() {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
    { name: "OOP", icon: GiAbstract001, color: "text-purple-400" },
    { name: "SQL", icon: SiMysql, color: "text-indigo-400" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={card}
                className="bg-gray-800/70 p-6 rounded-2xl shadow-md 
                hover:shadow-cyan-500/50 hover:bg-gray-800 
                transition transform hover:-translate-y-2 hover:scale-105"
              >
                <Icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
