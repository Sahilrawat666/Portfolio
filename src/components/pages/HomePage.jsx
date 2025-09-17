import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import Skills from "../Skills";
import Footer from "../Footer";
import Contact from "../Contact";
import ChatBox from "../Chatbox";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <ChatBox />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
