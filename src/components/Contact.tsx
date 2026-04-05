import { motion } from "motion/react";
import { Mail, Github, Linkedin, MessageCircle, Terminal } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-mono mb-4">
            <Terminal size={12} />
            Available for new opportunities
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get In Touch</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>

        <div className="flex justify-center gap-8 pt-12 text-gray-500">
          <a href="https://github.com/Robin239105" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/al-amin-wordpress-website-developer/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
          <a href="https://wa.me/8801575096211" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><MessageCircle size={24} /></a>
          <a href="mailto:robin646087@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
        </div>
        
        <div className="pt-20 text-xs font-mono text-gray-600">
          <p>© 2026 Al Amin Robin. Built with React & Tailwind.</p>
          <p className="mt-2">Designed for the modern web.</p>
        </div>
      </motion.div>
    </section>
  );
}
