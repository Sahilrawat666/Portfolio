import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    title: "Zenova",
    description:
      "A full-stack fashion e-commerce application with product browsing, authentication, shopping functionality, and a PostgreSQL-powered backend.",
    image: "/Zenova.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Neon",
      "JWT",
    ],
    github: "https://github.com/Sahilrawat666",
    live: "https://zenova-sr.vercel.app",
  },
  {
    title: "Bookstore",
    description:
      "A full-stack bookstore application featuring authentication, product browsing, search, favourites, cart functionality, and protected routes.",
    image: "/bookstore-i.png",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    github: "https://github.com/Sahilrawat666",
    live: "#",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack task management application designed to manage tasks efficiently with authentication, protected routes, and RESTful APIs.",
    image: "/taskmanager-i.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Sahilrawat666",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-5 md:py-10 lg:py-15">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section heading */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-[#ffffff]">04.</span>

          <h2 className="whitespace-nowrap text-xl font-bold tracking-tight text-[#ccd6f6]">
            Projects
          </h2>

          <span className="h-px w-full max-w-xs bg-[#233554]" />
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                delay: index * 0.05,
                duration: 0.5,
              }}
              className="group grid gap-6 md:grid-cols-[180px_1fr]"
            >
              {/* Project image */}
              <a
                href={project.live !== "#" ? project.live : project.github}
                target="_blank"
                rel="noreferrer"
                className="relative block h-28 overflow-hidden border border-[#233554] bg-[#112240] md:h-32"
              >
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover opacity-70 grayscale transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-[#0a192f]/20 transition-colors duration-500 group-hover:bg-transparent" />
              </a>

              {/* Project information */}
              <div>
                <div className="flex items-start justify-between gap-4">
                  <a
                    href={project.live !== "#" ? project.live : project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="group/title inline-flex items-center gap-2"
                  >
                    <h3 className="text-lg font-semibold text-[#ccd6f6] transition-colors duration-300 group-hover/title:text-[#ffffff]">
                      {project.title}
                    </h3>

                    <FiArrowUpRight
                      size={16}
                      className="text-[#ffffff] transition-transform duration-300 group-hover/title:-translate-y-1 group-hover/title:translate-x-1"
                    />
                  </a>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-[#8892b0] transition-colors hover:text-[#ffffff]"
                    >
                      <FiGithub size={18} />
                    </a>

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} live website`}
                        className="text-[#8892b0] transition-colors hover:text-[#ffffff]"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#8892b0]">
                  {project.description}
                </p>

                {/* Technologies */}
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="font-mono text-xs text-[#ffffff]"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* More projects */}
        <motion.a
          href="https://github.com/Sahilrawat666?tab=repositories"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="group mt-16 inline-flex items-center gap-2 font-mono text-xs text-[#ffffff]"
        >
          VIEW MORE PROJECTS
          <FiArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Projects;
