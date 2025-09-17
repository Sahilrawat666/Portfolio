import React, { useState, useEffect, useRef } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // Auto-open on landing
  const messagesEndRef = useRef(null);

  const initialMessages = [
    { text: "Hello! 👋", sender: "bot" },
    { text: "Have questions? Contact me!", sender: "bot" },
    {
      text: (
        <span>
          📧 Email:{" "}
          <a
            href="mailto:sr4328914@gmail.com"
            className="text-emerald-600 underline"
          >
            sr4328914@gmail.com
          </a>
        </span>
      ),
      sender: "bot",
    },
    {
      text: (
        <span>
          💬 WhatsApp:{" "}
          <a
            href="https://wa.me/917819099116"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 underline"
          >
            Chat on WhatsApp
          </a>
        </span>
      ),
      sender: "bot",
    },
    {
      text: (
        <span>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/sahil-rawat"
            target="_blank"
            rel="noreferrer"
            className="text-emerald-600 underline"
          >
            sahil-rawat
          </a>
        </span>
      ),
      sender: "bot",
    },
  ];

  // Scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setMessages([]); // Clear previous messages
      let i = 0;

      const interval = setInterval(() => {
        if (i >= initialMessages.length) {
          clearInterval(interval);
          return;
        }
        setMessages((prev) => [...prev, initialMessages[i]]);
        i++;
      }, 700); // 0.7s delay

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-end z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
          {/* Header with profile photo */}
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

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 h-60">
            {messages.map((msg, index) =>
              msg ? (
                <div
                  key={index}
                  className={`flex items-start p-2 rounded-lg max-w-xs ${
                    msg.sender === "bot"
                      ? "bg-gray-100 self-start"
                      : "bg-emerald-100 self-end"
                  }`}
                >
                  {/* Profile photo for bot messages */}
                  {msg.sender === "bot" && (
                    <img
                      src="/sahil-1.jpeg"
                      alt="Sahil"
                      className="w-6 h-6 rounded-full object-cover mr-2"
                    />
                  )}
                  <div>{msg.text}</div>
                </div>
              ) : null
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      ) : (
        // Collapsed state with profile photo and "Get in touch"
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
