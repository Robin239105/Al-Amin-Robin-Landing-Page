import { motion } from "motion/react";
import { Code2, Server, Database, Layout, Smartphone, Globe } from "lucide-react";

const skills = [
  { name: "Frontend", icon: <Layout size={20} />, tech: ["React", "Next.js", "Tailwind", "TypeScript"] },
  { name: "Backend", icon: <Server size={20} />, tech: ["Node.js", "Express", "Python", "Go"] },
  { name: "Database", icon: <Database size={20} />, tech: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { name: "Mobile", icon: <Smartphone size={20} />, tech: ["React Native", "Expo"] },
  { name: "DevOps", icon: <Globe size={20} />, tech: ["Docker", "AWS", "CI/CD", "Nginx"] },
  { name: "Core", icon: <Code2 size={20} />, tech: ["Data Structures", "Algorithms", "System Design"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-accent-primary">01.</span> Tech Stack
        </h2>
        <div className="h-1 w-20 bg-accent-primary rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-bg-card border border-border-default rounded-lg hover:border-accent-secondary/50 transition-colors group"
          >
            <div className="flex items-center gap-3 mb-4 text-accent-secondary group-hover:text-white transition-colors">
              {skill.icon}
              <h3 className="text-lg font-mono font-bold">{skill.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.tech.map((t) => (
                <span 
                  key={t}
                  className="px-3 py-1 bg-bg-dark border border-border-default rounded text-xs font-mono text-gray-400 hover:text-accent-primary hover:border-accent-primary transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
