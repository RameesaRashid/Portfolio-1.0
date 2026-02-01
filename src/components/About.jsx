import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  const skills = ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind", "Git", "Postman", "Framer Motion"];

  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. Main Bio Card (Takes up 2 columns) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-10 bg-zinc-900/40 rounded-[2.5rem] border border-white/10 backdrop-blur-md flex flex-col justify-center"
        >
          <span className="text-[#da627d] font-mono tracking-widest uppercase text-xs mb-4">
            Introduction
          </span>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Architecting <span className="text-zinc-500 italic">Digital Experiences.</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg">
            I am a <span className="text-white font-medium">Creative Developer</span> at the intersection of logic and art. 
            I don’t just build websites; I architect digital experiences that respond to the human touch. 
            By blending rigorous technical architecture with a deep obsession for 
            <span className="text-[#da627d]"> aesthetic motion</span>, I create web applications that don't just work, they breathe.
          </p>
        </motion.div>

        {/* 2. Tech Stack Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 bg-zinc-900/40 rounded-[2.5rem] border border-white/10 backdrop-blur-md flex flex-col"
        >
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#da627d] rounded-full animate-pulse" />
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span 
                key={skill} 
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
          
          <div className="mt-auto pt-8">
            <p className="text-zinc-500 text-xs italic">
              Always learning, always evolving.
            </p>
          </div>
        </motion.div>

        {/* 3. Small Info Card (Bonus) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 bg-blue-300/10 rounded-[2.5rem] border border-pink-500/20 flex items-center justify-between"
        >
          <div>
            <p className="text-[#da627d] text-sm font-mono">Current Location</p>
            <p className="text-white font-bold">Remote / Global</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 p-8 bg-zinc-900/40 rounded-[2.5rem] border border-white/10 flex items-center gap-6"
        >
           <p className="text-zinc-400 text-sm uppercase tracking-[0.2em]">
             Focusing on <span className="text-white font-bold mx-2">Scalable MERN Apps</span> & <span className="text-white font-bold ml-2">Interaction Design</span>
           </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;