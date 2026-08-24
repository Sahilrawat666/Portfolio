import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiFileText } from "react-icons/fi";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sahilrawat666",
    icon: <FiGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <FiLinkedin />,
  },
  {
    label: "Email",
    href: "sr4328914@example.com",
    icon: <FiMail />,
  },
];

function Sidebar() {
  return (
    <aside className="relative flex min-h-screen flex-col justify-between py-16 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[45%] lg:max-w-[720px] lg:px-12 xl:px-20">
      {/* Main Introduction */}
      <div>
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <h1 className="text-4xl font-bold tracking-tight text-[#ccd6f6] sm:text-5xl">
            Sahil Rawat
          </h1>
        </motion.a>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-3 text-lg font-medium text-[#ccd6f6] sm:text-xl"
        >
          Full-Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 max-w-md text-sm leading-relaxed text-[#8892b0] sm:text-base"
        >
          I build modern, responsive, and scalable web applications using the
          MERN and PERN stacks.
        </motion.p>

        {/* Navigation */}
        <nav className="mt-12 hidden lg:block">
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
        className="mt-12 flex items-center gap-6 lg:mt-0"
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
  );
}
export default Sidebar;
