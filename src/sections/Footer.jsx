import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12" id="contact">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        
        {/* Left: Form */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let’s Connect 👋</h3>
          <p className="text-gray-400 mb-6">I’m open to new opportunities & collaborations.</p>
          
          <form
            action="https://formspree.io/f/xwpnkonw"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-gray-800/70 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-cyan-500/20 text-cyan-400 border border-cyan-400 rounded-lg px-6 py-2 hover:bg-cyan-500 hover:text-white transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right: Social Links */}
        <motion.div
          className="flex flex-col items-center md:items-end gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white">Find me on</h3>
          <div className="flex space-x-4 mt-2">
            <a href="mailto:ahmadrasool979@gmail.com" className="hover:text-white transition">
              <Mail size={22} />
            </a>
            <a href="https://github.com/ahmadrasool-22" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/ahmad-rasool-862377380" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={22} />
            </a>
            <a href="https://www.tiktok.com/@ahmad109825" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
                <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.4V346.5a165.5,165.5,0,1,1-147-164.1v84.6A82,82,0,1,0,271.3,346V0h54.2a153.6,153.6,0,0,0,43.1,107.6A155,155,0,0,0,448,157.1Z"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Ahmad. All rights reserved.
      </div>
    </footer>
  );
}
