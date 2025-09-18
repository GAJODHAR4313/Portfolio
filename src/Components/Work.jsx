import React from 'react';
import { motion } from 'framer-motion';

const Work = ({ theme }) => {
  const projects = [
    {
      title: "UI/UX Design Project",
      description: "A modern Website UI design created in Figma.",
      figmaLink:
        "https://www.figma.com/proto/ASyqImgOwUxbzmErIn3XQX/Cloth-Shopping?page-id=0%3A1&team_id=1511594455523695529&node-id=1-2&starting-point-node-id=1%3A2&t=ZZiZ3IdFXPvM6Tu8-1",
      thumbnail: "/Images/ui ux.png",
    },
    {
      title: "Avengers Shooting Game",
      description: "Interactive Game built in React.",
      figmaLink: "https://yashr01.vercel.app/",
      thumbnail: "public/Images/avengers-doomsday-final-battle-art-by-v0-r3lv01t90gue1.jpeg copy.webp",
    },
  ];

  const bgColor = theme === 'dark' ? 'bg-[#000000]' : 'bg-[#E8DDC9]';
  const headingColor = 'text-sky-500';
  const textColor = theme === 'dark' ? 'text-[#EDEDED]' : 'text-[#1C1C1C]';

  return (
    <section
      id="Work"
      className={`min-h-screen ${bgColor} ${textColor} flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12 py-12`}
    >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.7, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-sky drop-shadow-lg"
      >
        My Work
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.5, y: 80 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            headingColor={headingColor}
            textColor={textColor}
            theme={theme}
          />
        ))}
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, headingColor, textColor, theme }) => (
  <div
    className={`group relative rounded-xl border overflow-hidden
      ${theme === 'dark' ? 'bg-black/40' : 'bg-white/40'} 
      border-red-500/60 backdrop-blur-md 
      shadow-[0_3px_15px_-3px_rgba(0,0,0,0.4)]
      hover:shadow-[0_8px_30px_rgba(255,0,0,0.6)]
      transition-all duration-700 ease-in-out hover:scale-105 ${textColor}`}
    style={{ width: "350px" }}
  >
    {/* Image */}
    <div className="relative w-full h-44 sm:h-52 lg:h-60 overflow-hidden">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 group-hover:brightness-110 transition-all duration-700"
        loading="lazy"
      />
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col flex-1 justify-between min-h-[220px]">
      <div>
        <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${headingColor}`}>
          {project.title}
        </h3>
        <p className="text-sm sm:text-base opacity-90">
          {project.description}
        </p>
      </div>

      {/* Button - Black with Blue Border → Hover Red Border */}
      <a
        href={project.figmaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full text-center px-5 py-2.5 rounded-md font-semibold
          bg-black text-white border-2 border-blue-500
          hover:border-red-500
          transition-all duration-500 ease-in-out"
      >
        Tap Here For Experience
      </a>
    </div>
  </div>
);




export default Work;
