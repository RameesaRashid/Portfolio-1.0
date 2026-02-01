import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden flex flex-col items-center">
      {/* 3D Glow Source */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
          Let's create something <br /> <span className="text-[#da627d]">extraordinary.</span>
        </h2>
        
        <p className="text-zinc-400 mb-10 max-w-md mx-auto">
          Currently seeking new opportunities and creative collaborations.
        </p>

        <motion.a
          href="mailto:rameesarashid77@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 p-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-white/50 transition-all"
        >
          Get In Touch
        </motion.a>
      </motion.div>

      <div className="mt-24 text-zinc-600 text-sm font-mono">
        © 2026 — Designed & Developed by Rameesa Rashid
      </div>
    </section>
  );
};

export default Contact;