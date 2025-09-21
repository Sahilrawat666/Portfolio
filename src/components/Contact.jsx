import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-gray-50 px-6 py-24 lg:py-24">
      <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h2>

        {/* Email Info */}
        <motion.div
          className="flex items-center gap-4 text-gray-700 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <FaEnvelope className="text-emerald-600 text-2xl" />
          <span>sr4328914@gmail.com</span>
        </motion.div>

        {/* Send Message Button */}
        <motion.a
          href="mailto:sr4328914@gmail.com"
          className="mt-6 bg-gradient-to-r from-[#0f172a] to-[#334155] text-white font-semibold rounded-lg px-5 py-3  transition-all duration-00 hover:from-[#1e2333] hover:to-[#475569]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.a>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6">
          <motion.a
            href="https://www.linkedin.com/in/sahil-rawat25?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 text-3xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/Sahilrawat666"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 text-3xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
