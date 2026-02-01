import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Innovation", "Design", "Code", "Interaction", "2026"];

const SplashScreen = ({ finishLoading }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // If we reached the last word, wait a bit longer then exit
    if (index === words.length - 1) {
      const exitTimer = setTimeout(finishLoading, 1000); 
      return () => clearTimeout(exitTimer);
    }

    // Increase this number (e.g., 1000ms = 1 second) to let the word "breathe"
    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, 1000); 

    return () => clearTimeout(timer);
  }, [index, finishLoading]);

  return (
    <motion.div
      exit={{ 
        y: "-100%",
        transition: { duration: 1, ease: [0.7, 0, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
    >
      <div className="relative overflow-hidden h-[150px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            // Slide up from bottom
            initial={{ y: "100%", opacity: 0 }}
            // Settle in center
            animate={{ y: 0, opacity: 1 }}
            // Slide up and out
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              duration: 0.5 
            }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default SplashScreen;