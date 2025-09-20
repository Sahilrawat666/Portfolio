import React, { useState, useEffect } from "react";
import { Mail, MessageCircle, Linkedin } from "lucide-react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaPhone } from "react-icons/fa"; // ✅ brand icons

function ChatBox() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  const initialMessages = [
    <div className="flex items-start space-x-3" key="welcome">
      <img
        src="/sahil-1.jpeg"
        alt="Sahil"
        className="w-8 h-8  rounded-full object-cover border"
      />
      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
        <p className="font-medium">Have Questions? Contact Me!</p>
      </div>
    </div>,

    <div className="flex items-start space-x-3" key="email">
      <img
        src="/sahil-1.jpeg"
        alt="Sahil"
        className="w-8 h-8 mt-2  rounded-full object-cover border"
      />
      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
        <p className="mb-1">Get in Touch via Email.</p>
        <a
          href="mailto:sr4328914@gmail.com"
          className="flex items-center space-x-2  font-medium"
        >
          <FaEnvelope className=" text-lg" />
          <span className="text-blue-800">sr4328914@gmail.com</span>
        </a>
      </div>
    </div>,

    <div className="flex items-start space-x-3" key="whatsapp">
      <img
        src="/sahil-1.jpeg"
        alt="Sahil"
        className="w-8 h-8 mt-2 rounded-full object-cover border"
      />
      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
        <p className="mb-1">Drop Me a Message on WhatsApp.</p>
        <a
          href="https://wa.me/917819099116"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2  font-medium"
        >
          <FaWhatsapp className="text-green-600 text-lg" />
          <span>Chat Now</span>
        </a>
      </div>
    </div>,

    <div className="flex items-start space-x-3" key="linkedin">
      <img
        src="/sahil-1.jpeg"
        alt="Sahil"
        className="w-8 h-8 mt-2 mt-2   rounded-full object-cover border"
      />
      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
        <p className="mb-1">
          Have an idea or opportunity? Let's connect on LinkedIn and make it
          happen.
        </p>
        <a
          href="https://www.linkedin.com/in/sahil-rawat"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2  font-medium"
        >
          <FaLinkedin className="text-blue-600 text-lg" />
          <span className="text-blue-800">LinkedIn</span>
        </a>
      </div>
    </div>,
    <div className="flex items-start space-x-3" key="whatsapp">
      <img
        src="/sahil-1.jpeg"
        alt="Sahil"
        className="w-8 h-8 mt-2 rounded-full object-cover border"
      />
      <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
        <p className="mb-1">Get in touch by phone.</p>
        <a
          href="https://wa.me/917819099116"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2  font-medium"
        >
          <FaPhone className="text-black-600 text-lg" />
          <span className="text-blue-800">+91-7819099116</span>
        </a>
      </div>
    </div>,
  ];

  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      let i = 0;
      const interval = setInterval(() => {
        if (i >= initialMessages.length) {
          clearInterval(interval);
          return;
        }
        setMessages((prev) => [...prev, initialMessages[i]]);
        i++;
      }, 700); // show every 0.7s
      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-600 text-white px-4 py-2 font-semibold flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img
                src="/sahil-1.jpeg"
                alt="Sahil"
                className="w-8 h-8 rounded-full object-cover border-2 border-white"
              />
              <span>Sahil Rawat</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-2 font-bold text-xl hover:text-gray-200 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages appear one by one */}
          <div className="p-4 space-y-4 text-sm"> {messages}</div>
        </div>
      ) : (
        // Collapsed state
        <div
          onClick={() => setIsOpen(true)}
          className="flex items-center cursor-pointer space-x-2 bg-white rounded-full shadow-lg p-2 hover:shadow-xl transition-shadow"
        >
          <img
            src="/sahil-1.jpeg"
            alt="Sahil"
            className="w-10 h-10 rounded-full object-cover border-2 border-emerald-500"
          />
          <span className="text-gray-700 font-medium">Get in touch</span>
        </div>
      )}
    </div>
  );
}

export default ChatBox;
