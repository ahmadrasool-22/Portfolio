import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8" id="contact">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side - CTA */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-white">Let’s Connect 👋</h3>
          <p className="text-sm">I’m open to new opportunities & collaborations.</p>
        </div>

        {/* Right side - Links */}
        <div className="flex space-x-6">
          {/* Email */}
          <a href="mailto:ahmadrasool979@gmail.com" className="hover:text-white transition">
                      <Mail size={22} />
                          </a>


          {/* GitHub */}
          <a href="https://github.com/ahmadrasool-22" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Github size={22} />
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/ahmad-rasool-862377380?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <Linkedin size={22} />
          </a>

          {/* TikTok (Custom SVG) */}
          <a href="https://www.tiktok.com/@ahmad109825?_t=ZS-8z8wpLKlRyu&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6">
              <path d="M448,209.9a210.1,210.1,0,0,1-122.8-39.4V346.5a165.5,165.5,0,1,1-147-164.1v84.6A82,82,0,1,0,271.3,346V0h54.2a153.6,153.6,0,0,0,43.1,107.6A155,155,0,0,0,448,157.1Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom - small text */}
      <div className="mt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}
