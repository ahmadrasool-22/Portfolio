import { motion } from "framer-motion";
import ProjectCard from "../components/Card";

export default function Projects() {
  const projects = [
    {
      title: "Trendora — Full Stack Ecommerce Platform",

      description:
        "A complete MERN stack ecommerce application featuring secure JWT authentication, admin dashboard, product & order management, Cloudinary image uploads, live search, protected routes, responsive UI, and real-world ecommerce workflow with separate admin and user experiences.",

      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "REST API",
      ],

      live: "https://trendora-ecommerce-kappa.vercel.app/",

      code: "https://github.com/ahmadrasool-22/trendora-ecommerce.git",

      category: "Full Stack MERN App",
    },

    {
      title: "SmartCampus — University Management System",

      description:
        "A complete academic management portal built with PHP & MySQL featuring role-based authentication, attendance tracking, marks management, subject management, material uploads, notices, and dynamic roll number slip generation with separate Admin, Teacher, and Student dashboards.",

      tech: [
        "PHP",
        "MySQL",
        "Bootstrap 5",
        "JavaScript",
        "Authentication",
        "PDF Generation",
      ],

      live:
        "https://smart-campus.infinityfree.me/student-portal/admin/dashboard.php",

      code: "https://github.com/ahmadrasool-22/Smartcampus.git",

      category: "Full Stack Web System",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-[#0f172a] overflow-hidden"
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
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Some Of My
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Best Projects
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            A collection of production-style full stack applications focused on
            modern UI/UX, scalable backend systems, authentication, deployment,
            and real-world functionality.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}