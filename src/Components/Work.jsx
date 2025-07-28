import React from 'react';
import { motion } from 'framer-motion';

const Work = ({ theme }) => {
  const projects = [
    {
      title: "UI/UX Design Project",
      description: "A modern Website UI design created in Figma.",
      figmaLink:
        "https://www.figma.com/proto/ASyqImgOwUxbzmErIn3XQX/Cloth-Shopping?page-id=0%3A1&team_id=1511594455523695529&node-id=1-2&starting-point-node-id=1%3A2&t=ZZiZ3IdFXPvM6Tu8-1",
      thumbnail: "public/Images/409shots_so copy.png",
    },
    {
      title: "Website Prototype",
      description: "Interactive website wireframe built using Figma.",
      figmaLink: "https://www.figma.com/file/your-figma-link",
      thumbnail: "public/Images/project1.png",
    },
  ];

  // Theme tokens
  const bgColor = theme === 'dark' ? 'bg-[#060026]' : 'bg-[#F8F9FA]';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-[#2D2D2D]';
  const cardBg = theme === 'dark' ? 'bg-[#060026] border-white/10' : 'bg-white border-gray-200';
  const btnBg = theme === 'dark' ? 'bg-[#651AAC] hover:bg-[#6C63FF]' : 'bg-[#6C63FF] hover:bg-[#574bff]';
  const gradFrom = theme === 'dark' ? 'from-[#651AAC]' : 'from-[#6C63FF]';
  const gradTo = theme === 'dark' ? 'to-[#FFD86D]' : 'to-[#FF6584]';

  return (
    <section
      id="Work"
      className={`min-h-screen ${bgColor} flex flex-col justify-center items-center px-4 sm:px-6 lg:px-12`}
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
        className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 ${headingColor}`}
      >
        My Work
      </motion.h2>

      {/* Cards container */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 max-w-5xl w-full"
        initial={{ opacity: 0, scale: 0.3, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 , ease: 'easeOut' }}
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            cardBg={cardBg}
            gradFrom={gradFrom}
            gradTo={gradTo}
            btnBg={btnBg}
            headingColor={headingColor}
          />
        ))}
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ project, cardBg, gradFrom, gradTo, btnBg, headingColor }) => (
  <div
    className={`group relative rounded-xl sm:rounded-2xl border overflow-hidden
      shadow-[0_3px_15px_-3px_rgba(0,0,0,0.4)]
      hover:shadow-[0_6px_25px_-2px_rgba(108,99,255,0.5)]
      transform transition-transform duration-300 hover:scale-105 ${cardBg} ${headingColor}`}
    style={{ width: "350px" }}
  >
    {/* Hover Glow */}
    <div
      className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition
      bg-gradient-to-br ${gradFrom} ${gradTo} blur-lg`}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col h-full">
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-44 sm:h-52 lg:h-60 object-cover"
        loading="lazy"
      />
      <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm sm:text-base mb-4 flex-1">{project.description}</p>
        <a
          href={project.figmaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block px-3 sm:px-4 py-2 rounded-md sm:rounded-lg text-white text-sm sm:text-base transition-colors ${btnBg}`}
        >
          View Figma
        </a>
      </div>
    </div>
  </div>
);

export default Work;
