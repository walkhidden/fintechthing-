import React from 'react';
import { motion } from 'motion/react';
import { fintechPillars, fintechLandscape, architectureConcepts } from '../data/fintechData';

export default function Fintech() {
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
    <section id="fintech" className="py-32 border-b border-[var(--border)] relative bg-[var(--bg-core)]">
      <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-[var(--cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-24"
        >
          <motion.div variants={itemAnim} className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--cyan)] flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-current"></span> Module 1.0
          </motion.div>
          <motion.h2 variants={itemAnim} className="title-text text-6xl md:text-[5rem] font-serif mb-8 max-w-[900px] leading-[0.9]">
            The <span className="text-[var(--cyan)] italic">FinTech</span> Ecosystem
          </motion.h2>
          <motion.p variants={itemAnim} className="text-[var(--text-muted)] text-xl mb-8 max-w-[700px] font-light leading-relaxed">
            Financial Technology is not just apps; it is the fundamental re-architecting of how value moves, stores, and compounds globally. It replaces legacy mainframe correspondent banking with real-time, API-driven microservices.
          </motion.p>
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-display text-[var(--cyan)] text-3xl mb-12"
        >
          1.1 The Six Pillars of FinTech
        </motion.h3>
        
        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {fintechPillars.map((p) => (
            <motion.div variants={itemAnim} key={p.id} className="card c-cyan flex flex-col h-full bg-[var(--bg-surface)] p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl bg-[var(--bg-elev)] w-14 h-14 flex items-center justify-center rounded-full border border-[var(--cyan-dim)]">{p.icon}</span>
                <h4 className="font-display text-2xl text-[var(--text-main)] leading-tight">{p.title}</h4>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--cyan)] mb-6 opacity-80">{p.sub}</p>
              <ul className="flex-grow space-y-2 mb-6">
                {p.pointers?.map((ptr: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-[var(--cyan)] shrink-0 mt-2 opacity-70"></span>
                    <span className="text-sm text-[var(--text-muted)] font-light leading-relaxed">{ptr}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6 border-t border-[var(--border)] border-dashed">
                <p className="text-[11px] text-[var(--text-muted)] italic mb-4">"{p.example}"</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-3 py-1 bg-[var(--cyan-dim)] text-[9px] uppercase tracking-widest font-mono rounded-full text-[var(--cyan)] border border-[rgba(14,211,207,0.2)]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
           className="font-serif text-4xl mb-12 flex items-center gap-4 text-[var(--text-main)]"
        >
          <span className="text-[var(--cyan)] font-display text-2xl">1.2</span> Architecture & Mechanics
        </motion.h3>
        
        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="space-y-6 mb-32"
        >
          {architectureConcepts.map((c, i) => (
            <motion.div variants={itemAnim} key={i} className="flex flex-col md:flex-row gap-6 glass p-6 md:p-8 rounded-3xl border border-[var(--border)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--cyan)] rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"></div>
              
              <div className="flex-1 relative z-10">
                <h4 className="font-display text-xl mb-5 text-[var(--cyan)]">{c.title}</h4>
                <ul className="space-y-3">
                  {c.pointers.map((ptr, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-[6px] w-[5px] h-[5px] rounded-full bg-[var(--gold)] shrink-0 shadow-[0_0_8px_var(--gold)]"></span>
                      <span className="text-sm text-[var(--text-muted)] font-light leading-relaxed">{ptr}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {c.code && (
                <div className="md:w-1/3 min-w-[280px] p-5 bg-[var(--bg-core)] rounded-xl border border-[var(--border)] overflow-x-auto shadow-inner self-start relative z-10">
                  <div className="text-[9px] uppercase tracking-widest text-[var(--text-muted)] mb-3 opacity-50 font-mono">Structural Logic</div>
                  <code className="font-mono text-xs text-[var(--cyan)] whitespace-pre block leading-relaxed">{c.code}</code>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
           className="font-serif text-4xl mb-12 flex items-center gap-4 text-[var(--text-main)]"
        >
          <span className="text-[var(--cyan)] font-display text-2xl">1.3</span> Market Landscape
        </motion.h3>
        
        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {fintechLandscape.map((item, idx) => (
             <motion.div variants={itemAnim} key={idx} className="flex p-6 border border-[var(--border)] bg-[var(--bg-elev)] rounded-2xl hover:border-[var(--cyan)] transition-colors group">
              <div className="text-4xl pr-6 border-r border-[var(--border)] flex items-center opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
              <div className="pl-6 flex flex-col justify-center">
                <h5 className="font-display text-xl text-[var(--text-main)] mb-3">{item.title}</h5>
                <ul className="space-y-1.5 mb-4">
                  {item.pointers?.map((ptr: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-[var(--gold)] shrink-0 mt-[6px] opacity-70"></span>
                      <span className="text-[11px] md:text-xs text-[var(--text-muted)] font-light leading-relaxed">{ptr}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.chips.map(chip => (
                    <span key={chip} className="font-mono text-[9px] px-3 py-1 bg-[var(--bg-surface)] text-[var(--text-main)] tracking-widest uppercase rounded-full border border-[var(--border)]">{chip}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
