import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Check } from "lucide-react";

const userInfo = {
  name: "Rameesa Rashid", 
  email: "your.email@example.com",
  github: "https://github.com/RameesaRashid",
  githubUser: "RameesaRashid",
  linkedin: "https://linkedin.com/in/your-profile",
  linkedinUser: "Connect on LinkedIn",
};

const SocialLink = ({ href, icon: Icon, label, isCopy = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleAction = (e) => {
    if (isCopy) {
      e.preventDefault();
      navigator.clipboard.writeText(userInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -45, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute z-50 px-3 py-1 bg-white text-black text-xs font-bold rounded-md whitespace-nowrap"
          >
            {copied ? "Copied!" : label}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={isCopy ? "#" : href}
        onClick={handleAction}
        target={isCopy ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -3 }}
        className="text-zinc-400 hover:text-white transition-colors p-2 cursor-pointer"
      >
        {copied ? <Check size={24} className="text-green-500" /> : React.createElement(Icon, { size: 24 })}
      </motion.a>
    </div>
  );
};

const Hero = () => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { middleX, middleY, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (buttonRef.current.getBoundingClientRect().left + width / 2);
    const y = clientY - (buttonRef.current.getBoundingClientRect().top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 }); // 0.3 is the pull strength
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-black text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#da627d] font-mono mb-4 tracking-widest uppercase text-sm">
        Available for work
      </motion.p>
      
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-2">
          I'm <span className="text-[#da627d]">{userInfo.name}</span>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-500 italic tracking-tighter mb-8">
          Building Digital Masterpieces.
        </h2>
      </motion.div>

      <div className="flex gap-4 mb-10">
        <SocialLink href={userInfo.github} icon={Github} label={userInfo.githubUser} />
        <SocialLink href={userInfo.linkedin} icon={Linkedin} label={userInfo.linkedinUser} />
        <SocialLink icon={Mail} label="Copy Email" isCopy={true} />
      </div>

      <motion.button 
        ref={buttonRef}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="px-8 py-3 bg-white text-black font-bold rounded-full shadow-lg"
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
      >
        View My Work
      </motion.button>
    </section>
  );
};

export default Hero;