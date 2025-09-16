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
} from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
    { name: "React.js", icon: <SiReact className="text-sky-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Git", icon: <SiGit className="text-red-500" /> },
    { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
    { name: "Media Query", icon: <SiCss3 className="text-blue-500" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-600" /> },
    {
      name: "Responsive Web Design",
      icon: <SiBootstrap className="text-purple-500" />,
    },
    { name: "MERN Stack", icon: <SiReact className="text-sky-500" /> },
    { name: "Version Control", icon: <SiGit className="text-red-500" /> },
    { name: "Postman API", icon: <SiPostman className="text-orange-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-black" /> },
    { name: "Netlify", icon: <SiNetlify className="text-cyan-500" /> },
    { name: "Render", icon: <SiRender className="text-gray-700" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-gray-50 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          My Skills
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          These are the technologies and tools I work with to build modern web
          applications.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 cursor-pointer"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="mt-2 text-sm text-gray-700 text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
