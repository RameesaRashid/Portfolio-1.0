import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import About from "./components/About";
import CustomCursor from "./components/CustomCursor";
import SkillsMarquee from "./components/SkillsMarquee";
import Contact from "./components/Contact";
import SplashScreen from "./components/SplashScreen"; // Import Splash
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen w-full bg-black selection:bg-[#da627d] selection:text-white cursor-none">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <SplashScreen key="loader" finishLoading={() => setIsLoading(false)} />
        ) : (
          <>
          <ScrollProgress />
            <CustomCursor /> 
            <Navbar />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Hero />
              <div id="projects">
                <BentoGrid />
              </div>
              <SkillsMarquee />
              <div id="about">
                <About />
              </div>
              <Contact />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;