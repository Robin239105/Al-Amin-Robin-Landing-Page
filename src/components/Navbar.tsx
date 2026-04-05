import { motion, useScroll, useSpring } from "motion/react";
import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const navLinks = [
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-border-default">
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-primary origin-left"
        style={{ scaleX }}
      />
      
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono font-bold text-white group cursor-pointer">
          <div className="w-8 h-8 bg-accent-primary rounded flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Terminal size={18} />
          </div>
          <span className="hidden sm:inline">robin.bro</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-mono text-gray-400 hover:text-accent-primary transition-colors flex items-center gap-1"
            >
              <span className="text-accent-primary text-[10px]">0{i + 1}.</span>
              {link.name}
            </motion.a>
          ))}
          <a 
            href="https://www.alaminrobin.com/portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-1.5 border border-accent-primary text-accent-primary text-xs font-mono rounded hover:bg-accent-primary/10 transition-colors inline-block"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-400"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-bg-card border-b border-border-default"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-mono text-gray-400 hover:text-accent-primary flex items-center gap-2"
              >
                <span className="text-accent-primary">0{i + 1}.</span>
                {link.name}
              </a>
            ))}
            <a 
              href="https://www.alaminrobin.com/portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 w-full text-center px-4 py-2 border border-accent-primary text-accent-primary text-sm font-mono rounded hover:bg-accent-primary/10 transition-colors"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
