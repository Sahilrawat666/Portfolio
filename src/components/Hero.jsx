import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

function Hero() {
  return (
    <section id="hero" className="scroll-mt-20 py-5 md:py-10 lg:py-15">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-3 ml-1 font-mono text-lg text-[#ffffff]">
            Hi, my name is
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[#ccd6f6] sm:text-5xl md:text-6xl">
            Sahil Rawat.
          </h1>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-[#8892b0] sm:text-4xl md:text-5xl">
            I build things for the web.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-7 max-w-xl text-base leading-7 text-[#8892b0] sm:text-lg"
        >
          I&apos;m a full-stack developer focused on building reliable,
          responsive, and user-friendly web applications. I work primarily with
          the MERN and PERN stacks and enjoy turning ideas into production-ready
          experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 border rounded-4xl border-[#abb7b4] px-6 py-3 font-mono text-xs text-[#ffffff] transition-all duration-300 hover:bg-[#ffffff]/20"
          >
            VIEW PROJECTS
            <FiArrowDown
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-1"
            />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center border rounded-4xl border-[#233554] px-6 py-3 font-mono text-xs text-[#8892b0] transition-all duration-300 hover:bg-[#ffffff]/20 hover:text-[#ffffff]"
          >
            GET IN TOUCH
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 hidden items-center gap-3 font-mono text-[10px] tracking-[0.2em] text-[#495670] transition-colors hover:text-[#ffffff] lg:flex"
        >
          <span className="h-px w-10 bg-[#495670]" />
          SCROLL TO EXPLORE
        </motion.a>
      </div>
    </section>
  );
}
export default Hero;
