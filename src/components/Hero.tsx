import { motion, useScroll, useTransform } from "motion/react";
import { Terminal as TerminalIcon, ChevronRight, Cpu, Globe, Zap, Code2, Activity, ShieldCheck, Database } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const FloatingIcon = ({ icon: Icon, delay, x, y }: { icon: any, delay: number, x: string, y: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.1, 0.3, 0.1], 
      scale: [1, 1.2, 1],
      rotate: [0, 10, -10, 0],
      x: [0, 15, -15, 0],
      y: [0, -15, 15, 0]
    }}
    transition={{ 
      duration: 6, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut"
    }}
    className="absolute text-accent-secondary/10 hidden lg:block"
    style={{ left: x, top: y }}
  >
    <Icon size={64} />
  </motion.div>
);

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[];:!@#$%^&*()";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(13, 17, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#2ea043";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 opacity-[0.08] pointer-events-none" />;
};

export default function Hero() {
  const [text, setText] = useState("");
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  const fullText = "sh ./launch_portfolio.sh --env=production --verbose";
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
        
        const logs = [
          "[SYSTEM] Initializing core modules...",
          "[AUTH] Verifying developer credentials: Al Amin Robin",
          "[DATABASE] Connecting to global_projects_db (1300+ entries)...",
          "[NETWORK] Latency optimized for Dhaka/BD node.",
          "[UI] Rendering high-fidelity fullstack interface...",
          "[SUCCESS] Environment stabilized. 6+ years of experience loaded."
        ];
        
        logs.forEach((log, index) => {
          setTimeout(() => {
            setBootLogs(prev => [...prev, log]);
            if (index === logs.length - 1) {
              setTimeout(() => setShowMainContent(true), 600);
            }
          }, (index + 1) * 300);
        });
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden bg-[#0d1117]">
      <MatrixRain />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-primary/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-secondary/5 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        
        <FloatingIcon icon={Code2} delay={0} x="10%" y="15%" />
        <FloatingIcon icon={Cpu} delay={1.5} x="85%" y="20%" />
        <FloatingIcon icon={Globe} delay={3} x="5%" y="75%" />
        <FloatingIcon icon={Zap} delay={4.5} x="90%" y="70%" />
        <FloatingIcon icon={Database} delay={2} x="45%" y="5%" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="w-full max-w-5xl z-10"
      >
        <div className="terminal-window border-accent-primary/20 shadow-[0_0_80px_-20px_rgba(46,160,67,0.15)]">
          <div className="terminal-header justify-between bg-[#161b22]/80 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="dot bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.5)]" />
              <div className="dot bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.5)]" />
              <div className="dot bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.5)]" />
            </div>
            <div className="hidden sm:flex items-center gap-4 text-[9px] font-mono text-gray-500 uppercase tracking-[0.3em]">
              <span className="flex items-center gap-1"><Activity size={10} className="text-accent-primary" /> CPU: 12%</span>
              <span className="flex items-center gap-1"><ShieldCheck size={10} className="text-accent-secondary" /> SECURE</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
              <TerminalIcon size={12} className="text-accent-primary" />
              robin@kernel:~/portfolio
            </div>
          </div>
          
          <div className="p-6 md:p-10 font-mono text-sm md:text-base min-h-[500px] bg-[#0d1117]/90 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-accent-primary font-bold">λ</span>
              <span className="text-white/90">{text}</span>
              {!isTypingComplete && <span className="w-2.5 h-6 bg-accent-primary animate-pulse shadow-[0_0_10px_#2ea043]" />}
            </div>

            {isTypingComplete && !showMainContent && (
              <div className="space-y-1.5 text-gray-500 text-[11px] md:text-xs">
                {bootLogs.map((log, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={log.includes('[SUCCESS]') ? 'text-accent-primary' : ''}
                  >
                    {log}
                  </motion.div>
                ))}
              </div>
            )}

            {showMainContent && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-px w-8 bg-accent-primary" />
                      <span className="text-accent-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                        Senior Fullstack Engineer
                      </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter">
                      Al Amin <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-primary bg-[length:200%_auto] animate-gradient-x">
                        Robin
                      </span>
                    </h1>
                  </motion.div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-sans"
                  >
                    Architecting high-performance digital ecosystems for <span className="text-white border-b border-accent-primary/30">6+ years</span>. 
                    Specialized in turning complex business logic into seamless, scalable user experiences.
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="relative group overflow-hidden p-5 bg-[#161b22]/50 border border-border-default rounded-xl hover:border-accent-primary/50 transition-all">
                    <div className="text-[9px] text-gray-500 mb-2 uppercase tracking-widest">PROJECTS_DEPLOYED</div>
                    <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                      1,300<span className="text-accent-primary text-xl">+</span>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                      <Code2 size={80} />
                    </div>
                  </div>
                  
                  <div className="relative group overflow-hidden p-5 bg-[#161b22]/50 border border-border-default rounded-xl hover:border-accent-secondary/50 transition-all">
                    <div className="text-[9px] text-gray-500 mb-2 uppercase tracking-widest">EXPERIENCE_LEVEL</div>
                    <div className="text-3xl font-bold text-white flex items-baseline gap-1">
                      06<span className="text-accent-secondary text-xl">+</span> <span className="text-xs text-gray-500 font-normal">Years</span>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                      <Zap size={80} />
                    </div>
                  </div>

                  <div className="relative group overflow-hidden p-5 bg-[#161b22]/50 border border-border-default rounded-xl hover:border-yellow-500/50 transition-all">
                    <div className="text-[9px] text-gray-500 mb-2 uppercase tracking-widest">TECH_STACK</div>
                    <div className="text-lg font-bold text-yellow-500">MERN / Next.js / Go</div>
                    <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                      <Cpu size={80} />
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap gap-5 pt-4"
                >
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="View my projects"
                    className="group relative bg-white text-black px-10 py-4 rounded-full font-bold text-sm overflow-hidden transition-all hover:scale-105 active:scale-95"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      VIEW_PROJECTS
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    aria-label="Get in touch with me"
                    className="px-10 py-4 border border-border-default text-white font-bold text-sm rounded-full hover:bg-white/5 hover:border-white/20 transition-all backdrop-blur-sm"
                  >
                    GET_IN_TOUCH
                  </button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 text-gray-500 font-mono text-[9px] uppercase tracking-[0.5em]"
      >
        <span>Initialize_Scroll</span>
        <div className="relative w-px h-20 bg-white/10 overflow-hidden">
          <motion.div 
            animate={{ y: [-80, 80] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent-primary to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
