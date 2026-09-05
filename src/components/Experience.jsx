import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const experiences = [
  {
    id: "personal",
    company: "Personal Projects",
    role: "Full-Stack Developer",
    period: "2024 — Present",
    website: "#projects",
    points: [
      "Built full-stack web applications using React, Node.js, Express.js, MongoDB, and PostgreSQL.",
      "Implemented authentication, REST APIs, database integration, protected routes, and responsive user interfaces.",
      "Worked with both MERN and PERN architectures to strengthen full-stack development and database skills.",
      "Deployed applications using platforms such as Vercel and Render and managed projects with Git and GitHub.",
    ],
  },
  {
    id: "dice",
    company: "DICE Academy",
    role: "Full-Stack Development Trainee",
    period: "Sep 2023 — Jan 2025",
    website: "#",
    points: [
      "Completed a one-year Full-Stack Web Development program focused on modern frontend and backend technologies.",
      "Developed practical projects using React, Node.js, Express.js, MongoDB, and REST APIs.",
      "Worked with Git, GitHub, Postman, authentication, and deployment workflows.",
      "Strengthened problem-solving skills through hands-on development and project-based learning.",
    ],
  },
];

function Experience() {
  const [activeExperience, setActiveExperience] = useState(experiences[0]);

  return (
    <section id="experience" className="scroll-mt-20 py-5 md:py-10 lg:py-15">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section heading */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-[#64ffda]">02.</span>

          <h2 className="whitespace-nowrap text-xl font-bold tracking-tight text-[#ccd6f6]">
            Experience
          </h2>

          <span className="h-px w-full max-w-xs bg-[#233554]" />
        </div>

        {/* Experience layout */}
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Tabs */}
          <div className="flex w-full overflow-x-auto border-b border-[#233554] md:block md:w-44 md:flex-shrink-0 md:overflow-visible md:border-b-0 md:border-l md:border-[#233554]">
            {" "}
            {experiences.map((experience) => {
              const isActive = activeExperience.id === experience.id;

              return (
                <button
                  key={experience.id}
                  type="button"
                  onClick={() => setActiveExperience(experience)}
                  className={`relative min-w-max px-5 py-3 text-left font-mono text-xs transition-all duration-300 md:w-full md:border-l-2 md:px-5 ${
                    isActive
                      ? "border-[#64ffda] bg-[#112240] text-[#64ffda]"
                      : "border-transparent text-[#8892b0] hover:bg-[#112240]/50 hover:text-[#64ffda]"
                  }`}
                >
                  {experience.company}
                </button>
              );
            })}
          </div>

          {/* Experience content */}
          <motion.div
            key={activeExperience.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="flex-1"
          >
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-medium text-[#ccd6f6]">
                {activeExperience.role}
              </h3>

              <span className="text-[#64ffda]">@</span>

              <a
                href={activeExperience.website}
                className="group inline-flex items-center gap-1 text-lg font-medium text-[#64ffda] transition-colors hover:text-[#ccd6f6]"
              >
                {activeExperience.company}

                {activeExperience.website !== "#" && (
                  <FiArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </a>
            </div>

            <p className="mb-6 font-mono text-xs text-[#8892b0]">
              {activeExperience.period}
            </p>

            <ul className="space-y-4">
              {activeExperience.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-6 text-sm leading-7 text-[#8892b0] sm:text-base"
                >
                  <span className="absolute left-0 top-3 text-[#64ffda]">
                    ▹
                  </span>

                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
