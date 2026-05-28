import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "text-green-500",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-300",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "text-green-400",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-blue-400",
    },
    {
      name: "PHP",
      icon: FaPhp,
      color: "text-indigo-400",
    },
    {
      name: "JWT Auth",
      icon: SiJsonwebtokens,
      color: "text-pink-400",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      color: "text-white",
    },
    {
      name: "Postman",
      icon: SiPostman,
      color: "text-orange-400",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "text-white",
    },
    {
      name: "Render",
      icon: SiRender,
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-[#111827] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-medium mb-4">
            Skills
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Technologies &
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Tools
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            A growing stack of modern technologies and tools I use to build
            responsive frontend interfaces, scalable backend systems, and
            full-stack web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 flex flex-col items-center justify-center hover:border-cyan-400/30 hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <Icon
                  className={`text-5xl mb-5 ${skill.color} group-hover:scale-110 transition duration-300`}
                />

                {/* Skill Name */}
                <h3 className="text-white font-medium text-center">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}