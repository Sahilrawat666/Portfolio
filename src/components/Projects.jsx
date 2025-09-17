import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Bookstore App",
      description:
        "A full-featured e-commerce platform built with MERN stack. Users can register/login, browse books by category, add favorites, and manage a personal wishlist. Integrated secure authentication, dynamic book listings, and responsive UI for mobile and desktop. Deployed on Vercel.",
      img: "/bookstore-i.png", // put your project image in public folder
      live: "https://bookstore-sr.vercel.app",
      github: "https://github.com/Sahilrawat666/bookstore.git",
      tags: ["React", "MongoDB", "Express", "Node.js"],
    },
    {
      title: "Blog Application",
      description:
        "A full-featured blog app with authentication, CRUD operations, and a clean UI.",
      img: "/blog-i.png",
      live: "https://blog-application-sr.vercel.app",
      github: "https://github.com/sahilrawat432/Blog-App",
      tags: ["React", "Express", "MongoDB", "JWT"],
      inProgress: true,
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with React, TailwindCSS, and Framer Motion animations. It showcases my projects, skills, and contact info in an interactive and visually appealing way.",
      img: "/portfolio-i.png",
      live: "https://sahil-sr.vercel.app",
      github: "https://github.com/Sahilrawat666/Portfolio.git",
      tags: ["React", "Tailwind", "Framer Motion"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-6 py-20 shadow-md  border-gray-200 "
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          My Projects
        </h2>
        <p className="mt-5 text-gray-600 text-center max-w-2xl mx-auto text-xl leading-relaxed">
          Some of the projects I&apos;ve built using modern technologies.
        </p>

        {/* Projects Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-400 cursor-pointer flex flex-col h-full"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-400"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-300">
                  {project.title}
                  {project.inProgress && (
                    <span className="text-gray-500 italic">(In progress)</span>
                  )}
                </h3>
                <p className="mt-2 text-sm text-gray-600 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-5 flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-gray-300 hover:border-emerald-600 hover:text-emerald-600 transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
