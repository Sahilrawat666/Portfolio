import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiFileText,
  FiMenu,
  FiX,
} from "react-icons/fi";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sahilrawat666",
    icon: <FiGithub />,
  },
  {
    label: "LinkedIn",
    href: "YOUR_LINKEDIN_URL",
    icon: <FiLinkedin />,
  },
  {
    label: "Email",
    href: "mailto:YOUR_EMAIL",
    icon: <FiMail />,
  },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-[#233554]/60 bg-[#0a192f]/90 px-6 py-5 backdrop-blur-md lg:hidden">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-sm font-semibold tracking-wide text-[#64ffda]"
        >
          SR
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          className="relative z-[60] text-[#64ffda] transition-colors hover:text-[#ccd6f6]"
        >
          {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0a192f]/80 backdrop-blur-sm lg:hidden"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) => event.stopPropagation()}
              className="ml-auto flex h-full w-[82%] max-w-sm flex-col justify-center bg-[#112240] px-8 shadow-2xl"
            >
              <ul className="space-y-7">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.3,
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center gap-4 font-mono text-sm text-[#ccd6f6]"
                    >
                      <span className="h-px w-6 bg-[#495670] transition-all duration-300 group-hover:w-10 group-hover:bg-[#64ffda]" />

                      <span className="transition-colors duration-300 group-hover:text-[#64ffda]">
                        {item.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="/Sahil_Rawat_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-10 inline-flex w-fit items-center gap-2 border border-[#64ffda] px-5 py-3 font-mono text-xs text-[#64ffda] transition-colors hover:bg-[#64ffda]/10"
              >
                <FiFileText size={14} />
                VIEW RESUME
              </motion.a>

              <div className="mt-12 flex items-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === "Email" ? undefined : "_blank"}
                    rel={social.label === "Email" ? undefined : "noreferrer"}
                    aria-label={social.label}
                    className="text-lg text-[#8892b0] transition-all duration-300 hover:-translate-y-1 hover:text-[#64ffda]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="relative hidden min-h-screen flex-col justify-between py-16 lg:fixed lg:left-0 lg:top-0 lg:flex lg:h-screen lg:w-[45%] lg:max-w-[720px] lg:px-12 xl:px-20">
        <div>
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <h1 className="text-4xl font-bold tracking-tight text-[#ccd6f6] xl:text-5xl">
              Sahil Rawat
            </h1>
          </motion.a>

          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-3 text-lg font-medium text-[#ccd6f6]"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-md text-sm leading-relaxed text-[#8892b0]"
          >
            I build modern, responsive, and scalable web applications using the
            MERN and PERN stacks.
          </motion.p>

          {/* Desktop Navigation */}
          <nav className="mt-12">
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex w-fit items-center gap-4"
                  >
                    <span className="h-px w-8 bg-[#495670] transition-all duration-300 group-hover:w-16 group-hover:bg-[#64ffda]" />

                    <span className="font-mono text-xs tracking-widest text-[#8892b0] transition-colors duration-300 group-hover:text-[#64ffda]">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume */}
          <motion.a
            href="/Sahil_Rawat_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 inline-flex items-center gap-2 border-b border-[#64ffda] pb-1 font-mono text-xs text-[#64ffda] transition-all duration-300 hover:border-[#ccd6f6] hover:text-[#ccd6f6]"
          >
            <FiFileText size={14} />
            VIEW RESUME
          </motion.a>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center gap-6"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label === "Email" ? undefined : "_blank"}
              rel={social.label === "Email" ? undefined : "noreferrer"}
              aria-label={social.label}
              className="text-xl text-[#8892b0] transition-all duration-300 hover:-translate-y-1 hover:text-[#64ffda]"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </aside>
    </>
  );
}

export default Sidebar;
