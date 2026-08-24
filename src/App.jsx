import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="home" className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <Sidebar />

        <main className="lg:ml-[45%] lg:w-[55%]">
          <Hero />

          <About />

          <Skills />

          <Projects />

          <Contact />

          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
