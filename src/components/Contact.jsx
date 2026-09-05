import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    value: "sr4328914@gmail.com",
    href: "mailto:sr4328914@gmail.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    value: "github.com/Sahilrawat666",
    href: "https://github.com/Sahilrawat666",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    value: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/sahil-rawat25",
    icon: FiLinkedin,
  },
];

function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-5 md:py-10 lg:py-15">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        {/* Section heading */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-[#ffffff]">05.</span>

          <h2 className="whitespace-nowrap text-xl font-bold tracking-tight text-[#ccd6f6]">
            Get In Touch
          </h2>

          <span className="h-px w-full max-w-xs bg-[#233554]" />
        </div>

        <p className="text-sm leading-7 text-[#8892b0] sm:text-base">
          I&apos;m currently open to new opportunities, collaborations, and
          interesting projects. Whether you have a question or just want to say
          hello, feel free to reach out.
        </p>

        {/* Contact links */}
        <div className="mt-10 space-y-4">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label === "Email" ? undefined : "_blank"}
                rel={contact.label === "Email" ? undefined : "noreferrer"}
                className="group flex items-center justify-between border-b border-[#233554] py-4 transition-colors duration-300 hover:border-[#ffffff]"
              >
                <div className="flex items-center gap-4">
                  <Icon size={18} className="text-[#ffffff]" />

                  <div>
                    <p className="font-mono text-xs text-[#ffffff]">
                      {contact.label}
                    </p>

                    <p className="mt-1 text-sm text-[#8892b0] transition-colors duration-300 group-hover:text-[#ccd6f6]">
                      {contact.value}
                    </p>
                  </div>
                </div>

                <FiArrowUpRight
                  size={17}
                  className="text-[#495670] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#ffffff]"
                />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
