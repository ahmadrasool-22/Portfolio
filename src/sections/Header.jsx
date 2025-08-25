import { useState } from "react";
import { Menu, X } from "lucide-react"; // modern icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["Home", "Projects", "Skills", "Contact"];

  return (
    <header className="fixed w-full z-50 bg-gray-900/40 backdrop-blur-md border-b border-gray-800/50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">Portfolio</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="group-hover:text-cyan-400 transition duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-300 font-medium">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition duration-300"
                  onClick={() => setIsOpen(false)} // close menu after click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
