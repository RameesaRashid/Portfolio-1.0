import { motion } from "framer-motion";

const About = () => {
  const skills = ["React", "JavaScript", "Node.js", "Tailwind", "Framer Motion", "Git"];

  return (
    <section className="py-20 px-10 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Bio Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 p-8 bg-zinc-900/50 rounded-3xl border border-white/10 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#da627d]">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I am a creative developer focused on building interactive experiences. 
            I blend technical logic with aesthetic design to create web applications 
            that don't just work—they feel alive.
          </p>
        </motion.div>

        {/* Skills Card */}
        <div className="p-8 bg-zinc-900/50 rounded-3xl border border-white/10 backdrop-blur-md">
          <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;