import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Mail } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rameesarashid77@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden flex flex-col items-center">
      {/* 3D Glow Source */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-4"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight">
          Let's create something <br /> 
          <span className="text-[#da627d]">extraordinary.</span>
        </h2>
        
        <p className="text-zinc-400 mb-10 max-w-md mx-auto">
          Currently seeking new opportunities and creative collaborations. 
          Drop me a line or copy my email address.
        </p>

        <div className="flex flex-col items-center gap-4">
          {/* Main Action: Mailto Link */}
          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/50 transition-all cursor-pointer"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>

          {/* Secondary Action: Click to Copy */}
          <button 
            onClick={handleCopy}
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-mono mt-2"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="flex items-center gap-2 text-green-500"
                >
                  <Check size={14} />
                  <span>Email Copied!</span>
                </motion.div>
              ) : (
                <motion.div
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Copy size={14} className="group-hover:rotate-12 transition-transform" />
                  <span>{email}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.div> 

      <div className="mt-24 text-zinc-600 text-sm font-mono">
        © 2026 — Designed & Developed by Rameesa Rashid
      </div>
    </section>
  );
};

export default Contact;