import { Code2, Database, Braces, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: Globe },
    { name: "CSS", icon: Globe },
    { name: "JavaScript", icon: Braces },
    { name: "React", icon: Code2 },
    { name: "Tailwind", icon: Braces },
    { name: "C++", icon: Code2 },
    { name: "OOP", icon: Braces },
    { name: "SQL", icon: Database },
  ];

  // container variant for stagger
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  // each card variant
  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-900 text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
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
                className="bg-gray-800/50 p-6 rounded-2xl shadow-md hover:shadow-cyan-500/50 transition transform hover:-translate-y-1 hover:scale-105"
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
