import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a]  to-[#334155] text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
        {/* Brand / Name */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white">Sahil Rawat</h3>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-emerald-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-emerald-400 transition">
            About
          </a>
          <a href="/projects" className="hover:text-emerald-400 transition">
            Projects
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/Sahilrawat666"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil-rawat25"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sr4328914@gmail.com"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-gray-700 w-full text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sahil Rawat. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
