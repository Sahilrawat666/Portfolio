import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiVite,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiAxios,
  SiVercel,
  SiNetlify,
  SiRender,
  // SiVisualstudiocode,
  SiPostman,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "JavaScript (ES6+)", icon: SiJavascript },
      { name: "SQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js (Vite)", icon: SiReact },
      { name: "React Hooks", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "React Router DOM", icon: SiReactrouter },
      { name: "Context API", icon: SiReact },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: SiExpress },
      { name: "MVC Architecture", icon: SiExpress },
      { name: "JWT Authentication", icon: SiNodedotjs },
      { name: "Middleware", icon: SiExpress },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Mongoose", icon: SiMongoose },
      { name: "pg", icon: SiPostgresql },
      { name: "Neon", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Axios", icon: SiAxios },
      // { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Render", icon: SiRender },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-5 md:py-10 lg:py-15">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section heading */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-mono text-sm text-[#64ffda]">03.</span>

          <h2 className="whitespace-nowrap text-xl font-bold tracking-tight text-[#ccd6f6]">
            Skills
          </h2>

          <span className="h-px w-full max-w-xs bg-[#233554]" />
        </div>

        {/* Intro */}
        <p className="mb-10 max-w-xl text-sm leading-7 text-[#8892b0] sm:text-base">
          Technologies and tools I use to design, develop, test, and deploy
          full-stack web applications.
        </p>

        {/* Skill groups */}
        <div className="space-y-9">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: groupIndex * 0.05,
                duration: 0.4,
              }}
              className="grid gap-4 sm:grid-cols-[125px_1fr]"
            >
              {/* Category */}
              <h3 className="pt-1 font-mono text-xs uppercase tracking-wider text-[#64ffda]">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-x-5 gap-y-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group flex items-center gap-2 text-sm text-[#8892b0] transition-colors duration-300 hover:text-[#ccd6f6]"
                    >
                      <Icon
                        size={17}
                        className="text-[#495670] transition-colors duration-300 group-hover:text-[#64ffda]"
                      />

                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
