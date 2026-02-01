import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false); // Close menu on scroll
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Projects", href: "#projects" }, 
    { name: "About", href: "#about" },      
    { name: "Contact", href: "#contact" }, 
  ];

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6"
    >
      <div className="flex items-center justify-between w-full max-w-xl px-6 py-3 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-xl shadow-2xl relative">
        <span className="text-white font-bold md:hidden">RR</span> {/* Initials for mobile */}
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-1.5 bg-white text-black text-[9px] font-bold rounded-full hover:bg-zinc-200 transition-colors">
            Let's Talk
          </button>
          
          {/* Mobile Toggle Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute top-16 left-0 right-0 bg-zinc-900 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 text-center md:hidden shadow-2xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-zinc-400 text-lg font-medium hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;