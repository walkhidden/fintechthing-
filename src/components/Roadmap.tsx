import React from 'react';
import { motion } from 'motion/react';
import { roadmapPhases, skillsMatrix } from '../data/roadmapData';

export default function Roadmap() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="roadmap" className="py-32 border-b border-[var(--border)] bg-[var(--bg-core)] relative overflow-hidden">
      <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[var(--cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-24"
        >
          <motion.div variants={itemAnim} className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)] flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-current"></span> Module 4.0
          </motion.div>
          <motion.h2 variants={itemAnim} className="title-text text-6xl md:text-[5rem] font-serif mb-8 max-w-[1000px] leading-[0.9]">
             Execution <span className="text-[var(--cyan)] italic">Engine</span>
          </motion.h2>
          <motion.p variants={itemAnim} className="text-[var(--text-muted)] text-xl mb-8 max-w-[700px] font-light leading-relaxed">
            A deterministic, phase-by-phase execution path transitioning from foundational syntax to apex capital allocation over a 10-year horizon.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-16 md:gap-24">
          {roadmapPhases.map((phase, pIdx) => (
            <motion.div 
              key={pIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative"
            >
              {/* Vertical connecting line for desktop roadmap effect */}
              {pIdx !== roadmapPhases.length - 1 && (
                <div className="absolute left-[24px] lg:left-[calc(300px+2rem)] top-20 bottom-[-4rem] lg:bottom-[-6rem] w-px bg-[var(--border)] opacity-50 z-0"></div>
              )}
              
              <div className="lg:w-[300px] shrink-0 font-serif relative z-10">
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 rounded-full border border-[var(--gold)] flex items-center justify-center font-mono text-[var(--gold)] text-sm bg-[var(--bg-core)] shadow-[0_0_20px_var(--bg-core)]">
                    0{pIdx + 1}
                  </div>
                  <h3 className="text-3xl text-[var(--text-main)] leading-tight">{phase.title}</h3>
                </div>
                <div className="pl-[72px]">
                  <p className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-widest mb-1">{phase.timeline}</p>
                  <p className="font-mono text-[11px] text-[var(--cyan)] uppercase tracking-[0.2em]">{phase.sub}</p>
                </div>
              </div>

              <div className="flex-1 space-y-8 lg:pl-12 pl-[72px] lg:border-l border-transparent lg:border-[var(--border)] lg:border-opacity-30 relative z-10">
                
                {/* Protocols */}
                <div className="space-y-6">
                  <h5 className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-[0.2em] mb-4 flex items-center gap-2">Core System Protocols</h5>
                  {phase.protocols.map((b: any, idx: number) => (
                    <div key={idx} className="glass p-6 md:p-8 rounded-3xl border border-[var(--border)] group hover:border-[var(--cyan)] transition-colors relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--cyan)] rounded-bl-full opacity-5 group-hover:opacity-20 transition-opacity"></div>
                      <h4 className="font-display text-[var(--text-main)] text-xl mb-3 relative z-10 flex items-start sm:items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--cyan)] inline-block mt-2 sm:mt-0 shrink-0"></span>
                        {b.t.includes(':') ? (
                          <span className="flex flex-col sm:flex-row sm:gap-2">
                            <span className="text-[var(--gold)]">{b.t.split(':')[0]}:</span>
                            <span>{b.t.split(':').slice(1).join(':')}</span>
                          </span>
                        ) : (
                          b.t
                        )}
                      </h4>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed font-light relative z-10 pl-4">{b.d}</p>
                    </div>
                  ))}
                </div>

                {/* Internships & Ventures Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="glass p-6 rounded-2xl border border-[var(--cyan)] border-opacity-30">
                    <h5 className="font-mono text-[10px] text-[var(--cyan)] uppercase tracking-[0.2em] mb-4">Target Internships</h5>
                    <ul className="space-y-3">
                      {phase.internships.map((internship: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)] font-light">
                          <span className="text-[var(--cyan)] mt-1 opacity-50">&gt;</span> 
                          <span>{internship}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass p-6 rounded-2xl border border-[var(--gold)] border-opacity-30">
                    <h5 className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-[0.2em] mb-4">Parallel Ventures</h5>
                    <ul className="space-y-3">
                      {phase.ventures.map((venture: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)] font-light">
                          <span className="text-[var(--gold)] mt-1 opacity-50">&gt;</span> 
                          <span>{venture}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Macro/Future */}
                <div className="glass p-6 rounded-2xl border border-[var(--border)] bg-gradient-to-r from-[rgba(14,211,207,0.05)] to-transparent relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-[var(--gold)] rounded-bl-full opacity-[0.03]"></div>
                  <h5 className="font-mono text-[10px] text-[var(--text-main)] uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-sm bg-[var(--cyan)] animate-pulse"></span> Future Architecture Matrix
                  </h5>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed italic">{phase.macro}</p>
                </div>

              </div>
            </motion.div>
          ))}
          
          {/* Dynamic Skills Grid under roadmap */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-10 rounded-[2rem] mt-12 w-full max-w-[1000px] mx-auto border border-[var(--gold)] border-opacity-30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--gold)] to-[transparent] opacity-5 pointer-events-none"></div>
            <h4 className="font-mono text-[var(--gold)] text-[10px] uppercase tracking-[0.2em] mb-10 block border-b border-[var(--border)] pb-4 relative z-10">Terminal Competencies required</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              {skillsMatrix.map((group, gIdx) => (
                <div key={gIdx}>
                  <h5 className="font-serif text-[var(--text-main)] text-xl mb-6">{group.g}</h5>
                  <ul className="space-y-5 font-mono text-xs text-[var(--text-muted)]">
                    {group.items.map((item, iIdx) => {
                      const [skill, score] = item.split(':');
                      const scoreNum = parseInt(score.trim().split('/')[0]) || 5;
                      const maxScore = 10;
                      const pct = Math.min(100, (scoreNum / maxScore) * 100);
                      return (
                        <li key={iIdx}>
                          <div className="flex justify-between mb-3 text-[11px] uppercase tracking-wider">
                            <span className="truncate">{skill.trim()}</span>
                            <span className="text-[var(--cyan)]">{score.trim()}</span>
                          </div>
                          <div className="h-1 bg-[var(--bg-core)] w-full rounded-full overflow-hidden border border-[var(--border)]">
                            <motion.div 
                              initial={{ width: 0 }} whileInView={{ width: `${pct}%` }} transition={{ duration: 1, delay: iIdx * 0.1 }}
                              className="h-full bg-[var(--cyan)] shadow-[0_0_10px_var(--cyan)] relative"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--gold)] opacity-50"></div>
                            </motion.div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
