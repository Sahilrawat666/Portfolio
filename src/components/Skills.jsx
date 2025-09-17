import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiJquery,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRender,
  SiVite,
  SiReactrouter,
  SiShadcnui,
} from "react-icons/si";

function Skills() {
  const categories = {
    Languages: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "Media Query", icon: <SiCss3 className="text-blue-500" /> },
    ],
    "Libraries & Frameworks": [
      { name: "React.js", icon: <SiReact className="text-sky-500" /> },
      {
        name: "React Router",
        icon: <SiReactrouter className="text-red-500" />,
      },
      { name: "Vite + React", icon: <SiVite className="text-purple-500" /> },
      { name: "ShadCN", icon: <SiShadcnui className="text-black" /> },
      // { name: "jQuery", icon: <SiJquery className="text-blue-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-400" />,
      },

      { name: "MERN Stack", icon: <SiReact className="text-sky-500" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    ],
    Database: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
    Tools: [
      { name: "Git", icon: <SiGit className="text-red-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
      { name: "Version Control", icon: <SiGit className="text-red-500" /> },
      { name: "Postman API", icon: <SiPostman className="text-orange-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Netlify", icon: <SiNetlify className="text-cyan-500" /> },
      { name: "Render", icon: <SiRender className="text-gray-700" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl w-full mx-auto md:text-4xl font-extrabold text-gray-800 text-center relative inline-block">
          My Skills
          {/* <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span> */}
        </h2>

        <p className="mt-5 text-gray-600 text-center max-w-2xl mx-auto text-xl leading-relaxed">
          These are the technologies and tools I work with to build modern web
          applications.
        </p>

        {/* Skills */}
        <div className="mt-16 space-y-14">
          {Object.entries(categories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8 text-center md:text-left">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="group flex flex-row items-center justify-between    items-center justify-center p-1 md:p-4 bg-white rounded-2xl shadow-md border border-gray-100 hover:border-black-300 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <div className="  text-2xl md:text-3xl  transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6">
                      {skill.icon}
                    </div>
                    <p className="  ml-3 text-sm md:text-lg font-medium text-gray-700 text-center group-hover:text-indigo-600 transition-colors duration-300">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
