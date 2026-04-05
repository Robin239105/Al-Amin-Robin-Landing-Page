import { motion } from "motion/react";
import { Quote, MessageSquareCode, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO @ FinLeap",
    content: "Robin is a rare talent. His ability to architect complex systems while maintaining clean, readable code is exceptional. He delivered our core engine ahead of schedule.",
    avatar: "SJ"
  },
  {
    name: "David Chen",
    role: "Founder @ SaaSify",
    content: "Working with Robin was a game-changer for our startup. He didn't just build what we asked; he provided strategic technical insights that saved us months of rework.",
    avatar: "DC"
  },
  {
    name: "Elena Rodriguez",
    role: "Product Manager @ GlobalTech",
    content: "The most reliable fullstack developer I've worked with. His 1300+ project claim is evident in his speed and problem-solving skills. Highly recommended!",
    avatar: "ER"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 max-w-7xl mx-auto bg-[#0d1117]/30">
      <div className="mb-16 text-center">
        <h2 className="text-2xl font-bold mb-2 inline-flex items-center gap-2">
          <span className="text-accent-primary">04.</span> Peer_Reviews
        </h2>
        <p className="text-gray-500 font-mono text-xs mt-2 uppercase tracking-widest">What clients and colleagues say</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-8 bg-bg-card border border-border-default rounded-2xl relative group hover:border-accent-secondary/30 transition-all"
          >
            <div className="absolute top-6 right-8 text-accent-primary/20 group-hover:text-accent-primary/40 transition-colors">
              <Quote size={40} />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary font-bold text-xs border border-accent-secondary/30">
                {t.avatar}
              </div>
              <div>
                <div className="text-white font-bold text-sm flex items-center gap-1">
                  {t.name}
                  <CheckCircle2 size={12} className="text-accent-primary" />
                </div>
                <div className="text-gray-500 text-[10px] font-mono">{t.role}</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm italic leading-relaxed relative z-10">
              "{t.content}"
            </p>

            <div className="mt-6 pt-6 border-t border-border-default flex items-center gap-2 text-[10px] font-mono text-gray-600">
              <MessageSquareCode size={12} />
              <span>Verified_Feedback</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
