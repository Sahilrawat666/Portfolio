import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer className="border-t border-[#233554] py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <a
          href="https://github.com/Sahilrawat666"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Sahil Rawat on GitHub"
          className="text-[#8892b0] transition-colors duration-300 hover:text-[#ffffff]"
        >
          <FiGithub size={18} />
        </a>

        <p className="font-mono text-sm leading-5 text-[#8892b0]">
          Designed &amp; built by{" "}
          <span className="text-[#ccd6f6]">Sahil Rawat</span>
        </p>

        <p className="font-mono text-xs text-[#495670]">
          Built with React · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}

export default Footer;
