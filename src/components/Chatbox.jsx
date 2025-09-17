import React, { useState, useEffect } from "react";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

function ChatBox() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  const initialMessages = [
    <div className="bg-gray-100 p-3 rounded-lg" key="welcome">
      <p className="font-medium">Have Questions? Contact Me!</p>
    </div>,

    <div className="bg-gray-100 p-3 rounded-lg" key="email">
      <p className="mb-1">Get in Touch via Email.</p>
      <a
        href="mailto:sr4328914@gmail.com"
        className="text-emerald-600 underline flex items-center space-x-2"
      >
        <Mail size={16} />
        <span>sr4328914@gmail.com</span>
      </a>
    </div>,

    <div className="bg-gray-100 p-3 rounded-lg" key="whatsapp">
      <p className="mb-1">Drop Me a Message on WhatsApp.</p>
      <a
        href="https://wa.me/917819099116"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-emerald-600 underline"
      >
        <MessageCircle size={16} />
        <span>Chat Now</span>
      </a>
    </div>,

    <div className="bg-gray-100 p-3 rounded-lg" key="linkedin">
      <p className="mb-1">
        Have an idea or opportunity? Let's connect on LinkedIn and make it
        happen.
      </p>
      <a
        href="https://www.linkedin.com/in/sahil-rawat"
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 text-emerald-600 underline"
      >
        <Linkedin size={16} />
        <span>LinkedIn</span>
      </a>
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
