import React from "react";
import { motion } from "framer-motion";
// import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-100 "
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-22 lg:mt-0">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm uppercase tracking-wide text-gray-500">
            Hello, I&apos;m
          </p>
          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            Sahil <span className="text-emerald-600">Rawat</span>
          </h1>
          <p className="mt-3 text-lg text-gray-700">Full Stack Developer</p>

          <p className="mt-5 text-base text-gray-600 max-w-xl leading-relaxed">
            I am a passionate Full Stack Web Developer specializing in the
            <span className="font-semibold"> MERN stack</span>. I build
            responsive, high-performance web applications with a focus on clean
            code, modern design, and intuitive user experiences. I enjoy
            creating scalable projects, solving complex problems, and
            continuously learning the latest web technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="px-5 py-2.5 rounded-xl border border-emerald-600 text-emerald-600 font-medium bg-white shadow hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#2dd4bf]  to-[#1f2937] text-white font-medium shadow hover:opacity-90 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </a>
            <a
              href="/Resume-Sahil-Rawat.pdf"
              download
              target="_blank"
              className="px-5 py-2.5 rounded-xl border text-gray-700 bg-white shadow hover:bg-gray-200 hover:-translate-y-1 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Info */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-12 text-sm text-gray-600">
            <div>
              <div className="text-xs text-gray-500">Location</div>
              <div>Munirka, New Delhi</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Email</div>
              <div className="break-all">sr4328914@gmail.com</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Phone</div>
              <div>+91 7819099116</div>
            </div>
          </div>
        </motion.div>

        {/* Right - Profile Card */}
        <div
          className="flex justify-center md:justify-end "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full max-w-sm rounded-2xl shadow-xl bg-white p-8 transform hover:-translate-y-2 transition-transform duration-500">
            <img
              src="/sahil-1.jpeg"
              alt="Sahil"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-emerald-100 shadow 
              
             transform transition-transform duration-500 hover:scale-110 "
            />
            <h3 className="mt-4 text-center text-lg font-semibold text-gray-800">
              Sahil Rawat
            </h3>
            <p className="text-center text-sm text-gray-500">
              BCA Student • Full Stack Developer
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-700">
              <div>
                <strong>Education:</strong> BCA — Indira Gandhi National Open
                University
              </div>
              <div>
                <strong>Certification:</strong> Full Stack Web Development —
                DICE Academy
              </div>
            </div>

            {/* Project Links */}
            <div className="mt-5 flex justify-center gap-6">
              <a
                href="https://Bookstore-sr.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-600 hover:underline transition-all duration-300"
              >
                Bookstore
              </a>
              <a
                href="https://blog-application-sr.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-emerald-600 hover:underline transition-all duration-300"
              >
                Blog App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
