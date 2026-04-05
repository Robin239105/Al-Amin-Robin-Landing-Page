import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Property Finance Choices - UK",
    role: "Head of Technology",
    period: "2023 - Present",
    location: "United Kingdom",
    description: "Designed and developed a responsive, user-focused website aligned with the company's brand and business goals. Handling front-end development, content structuring, and SEO optimization. Serving as the company's website developer and security specialist.",
    tech: ["Web Development", "SEO", "Security", "Performance"]
  },
  {
    company: "Netbiz Enterprises",
    role: "Server Engineer & Web Developer",
    period: "2023 - Present",
    location: "Australia",
    description: "Providing website development and server services along with e-commerce products. Focused on server engineering and high-performance web development.",
    tech: ["Server Engineering", "E-commerce", "Web Dev"]
  },
  {
    company: "Idressu & Venusia Clinic",
    role: "Fullstack Developer",
    period: "2020 - 2024",
    location: "Australia",
    description: "Developed Idressu (dress selling) and Venusia (skin clinic) websites. Implemented WooCommerce functionality and integrated appointment booking systems.",
    tech: ["WooCommerce", "WordPress", "Booking Systems"]
  },
  {
    company: "The Capsule Shop",
    role: "Fullstack Developer",
    period: "2021 - 2022",
    location: "USA",
    description: "Built a multi-site e-commerce platform similar to Amazon. Implemented multisite functionality and optimized for international markets.",
    tech: ["Multisite", "E-commerce", "Scalability"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-accent-primary">03.</span> Career_Timeline
        </h2>
        <div className="h-1 w-20 bg-accent-primary rounded" />
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 border-l border-border-default group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-border-default group-hover:bg-accent-primary transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  {exp.role}
                </h3>
                <div className="text-accent-secondary font-mono text-sm">{exp.company}</div>
              </div>
              <div className="flex flex-col md:items-end text-xs font-mono text-gray-500">
                <div className="flex items-center gap-1"><Calendar size={12} /> {exp.period}</div>
                <div className="flex items-center gap-1"><MapPin size={12} /> {exp.location}</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-3xl">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map(t => (
                <span key={t} className="px-2 py-0.5 bg-bg-card border border-border-default rounded text-[10px] font-mono text-gray-500">
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
