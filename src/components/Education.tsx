import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const education = [
  {
    institution: "University of the People USA",
    degree: "B.Sc in Computer Science",
    period: "2025 - Present",
    location: "USA (Online)",
    description: "Focusing on core computer science principles, software engineering, and modern computational theories."
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-accent-primary">06.</span> Education_History
        </h2>
        <div className="h-1 w-20 bg-accent-primary rounded" />
      </div>

      <div className="space-y-12">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-border-default group"
          >
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-border-default group-hover:bg-accent-primary transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  {edu.degree}
                </h3>
                <div className="text-accent-secondary font-mono text-sm">{edu.institution}</div>
              </div>
              <div className="flex flex-col md:items-end text-xs font-mono text-gray-500">
                <div className="flex items-center gap-1"><Calendar size={12} /> {edu.period}</div>
                <div className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
              {edu.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
