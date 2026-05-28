import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Database,
  LayoutDashboard,
  ShoppingCart,
  Globe,
  Wrench,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <MonitorSmartphone size={30} />,
      title: "Frontend Development",
      description:
        "Modern and responsive frontend interfaces built with React, Tailwind CSS, and clean UI/UX principles.",
    },
    {
      icon: <Database size={30} />,
      title: "Backend Development",
      description:
        "Scalable backend systems, REST APIs, authentication, and database integration using Node.js and Express.",
    },
    {
      icon: <LayoutDashboard size={30} />,
      title: "Admin Dashboards",
      description:
        "Professional admin panels with analytics, CRUD operations, authentication, and management systems.",
    },
    {
      icon: <ShoppingCart size={30} />,
      title: "Ecommerce Websites",
      description:
        "Full-featured ecommerce solutions with product management, carts, authentication, and payments.",
    },
    {
      icon: <Globe size={30} />,
      title: "Full Stack Web Apps",
      description:
        "Complete MERN stack applications with responsive frontend and powerful backend functionality.",
    },
    {
      icon: <Wrench size={30} />,
      title: "Website Maintenance",
      description:
        "Bug fixing, performance optimization, UI improvements, deployment support, and ongoing updates.",
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-[#0f172a] py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full"></div>

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
            Services
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Services I
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Offer
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
            I create modern, scalable, and user-focused web applications with
            clean frontend interfaces and reliable backend systems.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/30 hover:-translate-y-2 transition duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 to-blue-500/5"></div>

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl font-semibold text-white mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}