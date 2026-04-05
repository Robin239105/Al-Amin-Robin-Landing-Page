import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Services from "./components/Services";
import GitHubStats from "./components/GitHubStats";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent-primary/30">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#58a6ff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Projects />
        <GitHubStats />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Custom Cursor / Accent Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-secondary/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
