import { motion } from "motion/react";
import { GitCommit, GitPullRequest, GitMerge, Activity } from "lucide-react";

export default function GitHubStats() {
  // Mock contribution data
  const weeks = Array.from({ length: 20 }, () => 
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );

  return (
    <section id="stats" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="p-8 md:p-12 bg-bg-card border border-border-default rounded-3xl overflow-hidden relative">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 blur-[100px] rounded-full" />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-white leading-tight">
              Open Source & <br />
              <span className="text-accent-primary">Contribution Activity</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              With over 1,300 projects delivered, my GitHub activity reflects a consistent 
              commitment to code quality and continuous learning. I actively contribute to 
              various open-source ecosystems.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Commits", val: "12k+", icon: <GitCommit size={14} /> },
                { label: "PRs", val: "450+", icon: <GitPullRequest size={14} /> },
                { label: "Merged", val: "98%", icon: <GitMerge size={14} /> },
                { label: "Uptime", val: "99.9%", icon: <Activity size={14} /> },
              ].map(stat => (
                <div key={stat.label} className="p-3 bg-bg-dark rounded-xl border border-border-default">
                  <div className="text-accent-secondary mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold text-white">{stat.val}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full overflow-x-auto">
            <div className="min-w-[400px] p-6 bg-bg-dark rounded-2xl border border-border-default">
              <div className="flex justify-between items-center mb-6">
                <div className="text-xs font-mono text-gray-400">Contribution_Graph_v4.0</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className={`w-2 h-2 rounded-sm bg-accent-primary/${i * 20}`} />
                  ))}
                </div>
              </div>
              
              <div className="flex gap-1.5">
                {weeks.map((week, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    {week.map((day, j) => (
                      <motion.div
                        key={j}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: (i * 7 + j) * 0.002 }}
                        className={`w-3 h-3 rounded-sm ${
                          day === 0 ? 'bg-white/5' : 
                          day === 1 ? 'bg-accent-primary/20' :
                          day === 2 ? 'bg-accent-primary/40' :
                          day === 3 ? 'bg-accent-primary/70' : 'bg-accent-primary'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between text-[10px] font-mono text-gray-600">
                <span>Less</span>
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
