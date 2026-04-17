import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Bookstore App",
      description:
        "A MERN-based e-commerce bookstore built using MongoDB, Express.js, React, and Node.js, with real-world purchase flow implementation. Developed features like JWT-based user authentication, cart handling, and a persistent favorites system with backend storage. Implemented a “Buy Now” checkout flow separate from cart orders, along with order placement and order history tracking using REST APIs. Utilized React hooks and Context API for state management, Axios for API integration, Tailwind CSS for responsive UI, and Framer Motion for smooth animations and enhanced user experience. Deployed on Vercel.",
      img: "/bookstore-i.png",
      live: "https://bookstore-sr.vercel.app",
      github: "https://github.com/Sahilrawat666/bookstore.git",
      tags: [
        "Html5",
        "Css3",
        "Jawascript",
        "React.js",
        "Framer motion",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind",
      ],
    },
    {
      title: "Task Manager App",
      description:
        "Built a task management application with authentication and dynamic task tracking features. Implements full CRUD operations, allowing users to create, read, update, and delete tasks efficiently. Users can update task status (e.g., To Do, In Progress, Completed) and manage their workflow through an intuitive interface. Developed using MongoDB, Express, React, and Node.js with Tailwind CSS for styling.",
      img: "/taskmanager-i.png",
      live: "https://taskmanager-sr.vercel.app", // Live demo link
      github: "https://github.com/Sahilrawat666/task_manager_app", // GitHub repo
      tags: [
        "Html5",
        "Css3",
        "Jawascript",
        "React.js",
        "Tailwind",
        "Vite",
        "Node.js",
        "MongoDB",
        "Express.js",
      ],
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
