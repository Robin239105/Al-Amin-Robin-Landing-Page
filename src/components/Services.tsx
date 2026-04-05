import { motion } from "motion/react";
import { Terminal, Cpu, Cloud, Shield, Zap, Search } from "lucide-react";

const services = [
  {
    title: "Fullstack Web Apps",
    desc: "End-to-end development from database schema design to pixel-perfect frontend implementation.",
    icon: <Terminal className="text-accent-primary" />,
    features: ["React/Next.js", "Node/Express", "Auth Systems"]
  },
  {
    title: "Cloud Architecture",
    desc: "Designing scalable, resilient cloud infrastructures that can handle millions of requests.",
    icon: <Cloud className="text-accent-secondary" />,
    features: ["AWS/GCP", "Docker/K8s", "Serverless"]
  },
  {
    title: "API Design & Dev",
    desc: "Building high-performance RESTful and GraphQL APIs with strict security and documentation.",
    icon: <Cpu className="text-yellow-500" />,
    features: ["Microservices", "gRPC", "API Gateway"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span className="text-accent-primary">05.</span> Core_Services
        </h2>
        <div className="h-1 w-20 bg-accent-primary rounded" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-10 bg-bg-card border border-border-default rounded-3xl group hover:bg-white/[0.02] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-bg-dark border border-border-default flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {s.icon}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              {s.desc}
            </p>

            <ul className="space-y-3">
              {s.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <div className="w-1 h-1 rounded-full bg-accent-primary" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
