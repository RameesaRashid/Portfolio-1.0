import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const ProjectCard = ({ project, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
    relative group overflow-hidden rounded-3xl
    border border-white/10 bg-zinc-900
    flex flex-col justify-end p-8
    transition-all duration-500
    h-[420px] md:h-[480px] lg:h-[520px]
  "
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={project.image}
          alt={project.title}
          className="
            w-full h-full object-cover opacity-40
            group-hover:opacity-60 group-hover:scale-110
            transition-all duration-700 ease-out
          "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            600px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(255,255,255,0.1),
            transparent 40%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {project.title}
        </h3>

        <div className="overflow-hidden">
          <p
            className="
            text-gray-300 mt-2 text-sm
            translate-y-full opacity-0
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500
          "
          >
            {project.description}
          </p>
        </div>

        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block mt-4 text-xs font-bold uppercase tracking-widest
              text-[#da627d] opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            "
          >
            Visit Live Project ↗
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  return (
    <div className="bg-black min-h-screen py-20 px-4 md:px-10">
      <div className="grid grid-cols-1 gap-8 max-w-[1700px] mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
