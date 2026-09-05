import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-5 md:py-10 lg:py-15">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section heading */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-[#64ffda]">01.</span>

          <h2 className="whitespace-nowrap text-xl font-bold tracking-tight text-[#ccd6f6]">
            About Me
          </h2>

          <span className="h-px w-full max-w-xs bg-[#233554]" />
        </div>

        {/* Content */}
        <div className="space-y-5 text-sm leading-7 text-[#8892b0] sm:text-base">
          <p>
            I&apos;m a final-year BCA graduate and full-stack developer
            passionate about building modern web applications that are
            functional, responsive, and easy to use.
          </p>

          <p>
            My primary focus is the{" "}
            <span className="text-[#ccd6f6]">MERN stack</span> — MongoDB,
            Express.js, React, and Node.js. I&apos;ve also been working with
            PostgreSQL and the{" "}
            <span className="text-[#ccd6f6]">PERN stack</span> to strengthen my
            understanding of relational databases and scalable backend
            architecture.
          </p>

          <p>
            I enjoy working across the full development process, from designing
            responsive interfaces and building REST APIs to implementing
            authentication, database integration, and deploying applications.
          </p>

          <p>
            One of my current projects is{" "}
            <a
              href="https://zenova-sr.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 text-[#64ffda] transition-colors hover:text-[#ccd6f6]"
            >
              Zenova
              <FiExternalLink
                size={13}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            , a full-stack fashion e-commerce application built with React,
            Node.js, Express.js, and PostgreSQL.
          </p>

          <p>
            Outside of coding, I&apos;m continuously learning new technologies
            and improving my approach to writing clean, maintainable, and
            production-ready code.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
