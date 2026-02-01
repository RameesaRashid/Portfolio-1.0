import { motion } from "framer-motion";

const skills = ["React", "JavaScript","TypeScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Vite", "Git", "UI/UX"];

const SkillsMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden bg-black py-10 border-y border-white/5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex whitespace-nowrap"
      >
        {/* We duplicate the list to create a seamless loop */}
        {[...skills, ...skills].map((skill, index) => (
          <span key={index} className="mx-8 text-4xl md:text-6xl font-bold text-zinc-800 uppercase tracking-tighter hover:text-white transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillsMarquee;