import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight } from "lucide-react";
import profileImg from "../assets/ahmad.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0f172a] relative overflow-hidden flex items-center"
    >
      {/* Background Blurs */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-500/10 blur-3xl rounded-full"></div>

      {/* Container */}
      <div className="container mx-auto px-6 lg:px-16 py-20 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-8 items-center">
          
          {/* ================= IMAGE SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Cyan Glow */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-cyan-500/20 blur-3xl rounded-3xl"></div>

              {/* Blue Glow */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-500/10 blur-3xl rounded-3xl"></div>

              {/* Outer Gradient Border */}
              <div className="p-[1.5px] rounded-3xl bg-gradient-to-br from-cyan-400/40 to-blue-500/20">
                
                {/* Image Card */}
                <div className="relative w-[280px] sm:w-[250px] lg:w-[300px] h-[360px] sm:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden bg-[#111827]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
                  
                  <img
                    src={profileImg}
                    alt="Ahmad"
                    className="w-full h-full object-cover scale-105 object-top"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/30 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= TEXT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Small Intro */}
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-medium mb-5">
              Full Stack Developer
            </p>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-[78px] font-extrabold text-white leading-[1.05] mb-6">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent whitespace-nowrap">
                Ahmad
              </span>
            </h1>

            {/* Animated Roles */}
            <div className="text-2xl sm:text-3xl font-semibold h-[50px] mb-6">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "PHP Developer",
                  2000,
                  "Backend Developer",
                  2000,
                  "Building Modern Web Apps",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-300"
              />
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              I build modern full-stack web applications with responsive
              interfaces, scalable backend systems, and clean user experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              
              {/* Projects Button */}
              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3 rounded-xl bg-cyan-500 text-white font-medium hover:bg-cyan-400 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/20"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              {/* Download CV */}
              <a
                href="/CV.pdf"
                download
                className="flex items-center gap-2 px-7 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 transition duration-300 backdrop-blur-md"
              >
                Download CV
                <Download size={18} />
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}