import {
  Mail,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-[#111827] overflow-hidden pt-24 pb-10 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <p className="text-cyan-400 uppercase tracking-[5px] text-sm font-medium mb-4">
              Contact
            </p>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
              Let’s Build
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}Something Great
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
              I’m always open to discussing new projects, collaboration
              opportunities, freelance work, or full stack development ideas.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              
              {/* Email */}
              <a
                href="mailto:ahmadrasool979@gmail.com"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition duration-300"
              >
                <Mail size={22} />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/ahmadrasool-22"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition duration-300"
              >
                <Github size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahmad-rasool-862377380"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition duration-300"
              >
                <Linkedin size={22} />
              </a>

            
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              Send a Message
            </h3>

            <form
              action="https://formspree.io/f/xwpnkonw"
              method="POST"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-cyan-500 text-white py-4 rounded-2xl font-medium hover:bg-cyan-400 transition duration-300"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Ahmad. All rights reserved.
          </p>

          <p className="text-gray-600 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}