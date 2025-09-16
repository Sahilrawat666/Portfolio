import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 px-6 py-20 lg:py-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I'm{" "}
          <span className="text-emerald-600 font-semibold">Sahil Rawat</span>, a
          Full Stack Web Developer specializing in the MERN stack. I build
          responsive, user-friendly web applications, focusing on clean code and
          modern design. Experienced with HTML, CSS, JavaScript, Tailwind,
          React, Node.js, Git, and deployment tools.
        </motion.p>

        {/* Cards Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Education Card */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-600 pb-2">
              Education
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">BCA</h3>
                <p>Indira Gandhi National Open University — Ongoing</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Full Stack Web Development
                </h3>
                <p> 2025 | DICE Academy — Completed</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900"> Class 12th</h3>
                <p>2023 | UK Board, Uttarakhand</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900"> Class 10th</h3>
                <p>2021 | UK Board, Uttarakhand</p>
              </div>
            </div>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-emerald-600 pb-2">
              Experience
            </h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Web Development Projects
                </h3>
                <p className="mt-1">
                  Developed and deployed multiple web applications using the
                  MERN stack:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>
                    <span className="font-semibold">Bookstore App:</span> A
                    full-featured e-commerce platform built with MERN stack.
                    Users can register/login, browse books by category, add
                    favorites, and manage a personal wishlist. Integrated secure
                    authentication, dynamic book listings, and responsive UI for
                    mobile and desktop. Deployed on Vercel.
                    <a
                      href="https://Bookstore-sr.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 hover:underline ml-1"
                    >
                      Live Demo
                    </a>
                  </li>
                  <li>
                    <span className="font-semibold">Blog App:</span> Currently
                    developing a full-stack blogging platform using the MERN
                    stack. Users will be able to register/login, create, edit,
                    and delete posts, comment on articles, and enjoy a
                    responsive UI. Focused on clean code, authentication, and
                    modern web design.{" "}
                    <span className="text-gray-500 italic">(In progress)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Technical Skills
                </h3>
                <p className="mt-1">
                  HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, jQuery,
                  Media Queries, Responsive Web Design React.js, Node.js,
                  express.js, MongoDB, MERN Stack, Git/GitHub, Postman API,
                  Vercel, Netlify, Render.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
