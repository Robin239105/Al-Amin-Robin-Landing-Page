import { motion } from "motion/react";
import { Github, ExternalLink, FolderCode, Star, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Medicare WebApp",
    description: "A comprehensive healthcare management platform designed for patient and appointment tracking.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Robin239105/medicare-webapp",
    link: "https://github.com/Robin239105/medicare-webapp",
    stats: { stars: 12, branch: "main" }
  },
  {
    title: "Cleaning Plus",
    description: "Service booking platform for cleaning businesses with real-time scheduling and management.",
    tech: ["Next.js", "Tailwind CSS", "Firebase"],
    github: "https://github.com/Robin239105/Cleaning-Plus",
    link: "https://github.com/Robin239105/Cleaning-Plus",
    stats: { stars: 8, branch: "master" }
  },
  {
    title: "Roam With Rove",
    description: "Travel planning and exploration application for modern travelers and adventurers.",
    tech: ["React Native", "Firebase", "Google Maps API"],
    github: "https://github.com/Robin239105/Roam-With-Rove",
    link: "https://github.com/Robin239105/Roam-With-Rove",
    stats: { stars: 15, branch: "main" }
  },
  {
    title: "Trinity & Marcus",
    description: "Premium web solution for business branding and professional service presentation.",
    tech: ["React", "Motion", "Tailwind"],
    github: "https://github.com/Robin239105/Trinity-and-Marcus",
    link: "https://github.com/Robin239105/Trinity-and-Marcus",
    stats: { stars: 5, branch: "main" }
  },
  {
    title: "Dinapoli Pizzaria",
    description: "Interactive restaurant website with menu management and online ordering system.",
    tech: ["JavaScript", "HTML5", "CSS3", "PHP"],
    github: "https://github.com/Robin239105/Dinapoli-Pizzaria-Website",
    link: "https://github.com/Robin239105/Dinapoli-Pizzaria-Website",
    stats: { stars: 7, branch: "main" }
  },
  {
    title: "BDJobs Scraping",
    description: "Automated job data extraction tool for the BDJobs platform using Python.",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    github: "https://github.com/Robin239105/bdjobs-scraping",
    link: "https://github.com/Robin239105/bdjobs-scraping",
    stats: { stars: 22, branch: "main" }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto bg-[#0d1117]/50">
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-accent-primary">02.</span> Featured Projects
        </h2>
        <div className="h-1 w-20 bg-accent-primary rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-bg-card border border-border-default rounded-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-4 border-b border-border-default bg-[#21262d] flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <FolderCode size={18} />
                <span className="text-xs font-mono">{project.title.toLowerCase().replace(/\s+/g, '-')}.ts</span>
              </div>
              <div className="flex gap-3 text-gray-400">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Visit ${project.title} live site`}
                  className="hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex-grow">
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-mono text-accent-secondary uppercase tracking-wider">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-bg-dark border-t border-border-default flex items-center gap-6 text-[10px] font-mono text-gray-500">
              <div className="flex items-center gap-1">
                <Star size={12} className="text-yellow-500" />
                {project.stats.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitBranch size={12} />
                {project.stats.branch}
              </div>
              <div className="ml-auto flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-accent-secondary" />
                TypeScript
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
