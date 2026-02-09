import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SplashScreen = ({ finishLoading }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500); // Small delay before transition
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100vh" }} // Screen slides up like a curtain
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
    >
      {/* Decorative center element */}
      
      <div className="text-6xl font-bold font-mono tracking-tighter">
        {count}%
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-[2px] bg-white/10 mt-6 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[#da627d]"
          initial={{ x: "-100%" }}
          animate={{ x: `${count - 100}%` }}
        />
      </div>
    </motion.div>
  );
};

export default SplashScreen;