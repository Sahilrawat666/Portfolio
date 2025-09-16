// src/components/Navbar.jsx
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full shadow-md bg-slate-100/90 backdrop-blur-md z-50 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 lg:py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="text-xl font-semibold text-slate-800 tracking-wide">
            Sahil
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-slate-700 font-medium">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.1, color: "#10B981" }} // Emerald hover color
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer transition-colors"
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden lg:text-2xl text-xl cursor-pointer text-slate-700"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-slate-50/95 backdrop-blur-md space-y-6 py-6 text-lg font-medium text-slate-700">
          {navLinks.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{ scale: 1.05, color: "#10B981" }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer transition-colors"
              onClick={toggleMenu}
            >
              <a href={link.href}>{link.name}</a>
            </motion.li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
