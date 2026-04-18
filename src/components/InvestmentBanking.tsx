import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ibFunctionsData, ibStructure, peCycle, valuationData } from '../data/ibData';

export default function InvestmentBanking() {
  const [activeFunc, setActiveFunc] = useState<keyof typeof ibFunctionsData>('ma');
  const [activeVal, setActiveVal] = useState<keyof typeof valuationData>('dcf');

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
    <section id="ib" className="py-32 border-b border-[var(--border)] relative bg-[var(--bg-core)]">
      {/* Background glow */}
      <div className="absolute top-[30%] -right-[10%] w-[60vw] h-[60vw] bg-[var(--gold)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mb-24"
        >
          <motion.div variants={itemAnim} className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)] flex items-center gap-4 mb-8">
            <span className="w-12 h-px bg-current"></span> Module 2.0
          </motion.div>
          <motion.h2 variants={itemAnim} className="title-text text-6xl md:text-[5rem] font-serif mb-8 max-w-[1000px] leading-[0.9]">
             Capital <span className="text-[var(--gold)] italic">Architecture</span>
          </motion.h2>
          <motion.p variants={itemAnim} className="text-[var(--text-muted)] text-xl mb-8 max-w-[700px] font-light leading-relaxed">
            Where FinTech builds the pipes, IB and PE flow the capital. It's about valuation, capital structures, and orchestrating massive liquidity events.
          </motion.p>
        </motion.div>

        {/* Division Structure */}
        <motion.h3 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-display text-[var(--gold)] text-3xl mb-12"
        >
          2.1 The Division Structure
        </motion.h3>
        
        <motion.div 
          variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {ibStructure.map((s, i) => (
            <motion.div variants={itemAnim} key={i} className="card c-gold flex flex-col h-full bg-[var(--bg-surface)] p-8 group">
              <h4 className="font-display text-2xl mb-4 text-[var(--text-main)] flex items-center gap-4">
                <span className="text-3xl text-[var(--gold)] opacity-70 group-hover:opacity-100 transition-opacity">{s.icon}</span> {s.title}
              </h4>
              <p className="text-sm text-[var(--text-muted)] mb-8 font-light leading-relaxed flex-grow">{s.body}</p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border)] border-dashed">
                {s.chips.map(chip => (
                  <span key={chip} className="font-mono text-[9px] px-3 py-1 bg-[var(--gold-dim)] text-[var(--gold)] tracking-widest uppercase rounded-full border border-[rgba(223,178,54,0.2)]">{chip}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Functions */}
        <motion.h3 
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
           className="font-serif text-4xl mb-12 flex items-center gap-4 text-[var(--text-main)]"
        >
          <span className="text-[var(--gold)] font-display text-2xl">2.2</span> Core Execution Functions
        </motion.h3>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex flex-col lg:flex-row glass border border-[var(--border)] rounded-[2rem] overflow-hidden mb-32 shadow-2xl"
        >
          <div className="lg:w-[320px] bg-[var(--bg-core)] flex flex-row lg:flex-col overflow-x-auto border-b lg:border-b-0 lg:border-r border-[var(--border)]">
            {(Object.keys(ibFunctionsData) as Array<keyof typeof ibFunctionsData>).map(key => (
              <button
                key={key} onClick={() => setActiveFunc(key)}
                className={`p-6 text-left font-display text-sm uppercase tracking-widest transition-all whitespace-nowrap bg-transparent border-none cursor-pointer outline-none ${
                  activeFunc === key 
                    ? 'bg-[var(--bg-elev)] text-[var(--gold)] lg:border-l-4 lg:border-b-0 border-b-4 border-[var(--gold)] shadow-sm' 
                    : 'text-[var(--text-muted)] hover:bg-[rgba(255,255,255,0.02)] hover:text-[var(--text-main)]'
                }`}
              >
                {ibFunctionsData[key].title}
              </button>
            ))}
          </div>
          <div className="p-8 lg:p-14 flex-1 min-h-[450px] bg-[rgba(0,0,0,0.2)]">
            <AnimatePresence mode="wait">
              <motion.div
                 key={activeFunc}
                 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}
              >
                <h4 className="font-serif text-4xl text-[var(--gold)] mb-2">{ibFunctionsData[activeFunc].title}</h4>
                <p className="font-mono text-xs text-[var(--cyan)] mb-8 uppercase tracking-[0.2em]">{ibFunctionsData[activeFunc].sub}</p>
                <div className="space-y-6 mb-10">
                  {ibFunctionsData[activeFunc].body.map((para, i) => (
                    <p key={i} className="text-[15px] text-[var(--text-muted)] font-light leading-relaxed">{para}</p>
                  ))}
                </div>
                {ibFunctionsData[activeFunc].example && (
                  <div className="p-6 bg-[var(--bg-core)] border border-[var(--gold-dim)] rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--gold)]"></div>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-3">{ibFunctionsData[activeFunc].example.label}</span>
                    <p className="text-sm text-[var(--text-main)] italic font-light">"{ibFunctionsData[activeFunc].example.text}"</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* PE Cycle */}
        <motion.h3 
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
           className="font-serif text-4xl mb-10 flex items-center gap-4 text-[var(--text-main)]"
        >
          <span className="text-[var(--gold)] font-display text-2xl">2.3</span> The Private Equity Engine
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[var(--text-muted)] text-lg mb-12 max-w-[800px] font-light leading-relaxed">
           PE firms raise massive pools of capital from LPs, use leverage to buy companies, aggressively restructure them for margins, and exit within 5 years targeting a 2.5x MOIC. It is the apex predator of the financial food chain.
        </motion.p>
        
        <motion.div 
           variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
        >
          {peCycle.map((s, i) => (
            <motion.div variants={itemAnim} key={i} className="glass p-8 rounded-3xl relative border-[var(--border)] hover:border-[var(--gold)] transition-colors group overflow-hidden">
              <span className="absolute -bottom-4 right-0 font-serif text-[120px] text-[var(--gold)] opacity-5 group-hover:opacity-10 transition-opacity leading-none select-none">{s.num}</span>
              <h4 className="font-display text-2xl text-[var(--cyan)] mb-4">{s.title}</h4>
              <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed relative z-10">{s.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Valuation Methods */}
        <motion.h3 
           initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
           className="font-serif text-4xl mb-12 flex items-center gap-4 text-[var(--text-main)]"
        >
          <span className="text-[var(--gold)] font-display text-2xl">2.4</span> Valuation Matrix Logic
        </motion.h3>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
           className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10"
        >
          <div className="flex flex-row lg:flex-col overflow-x-auto gap-3">
            {(Object.keys(valuationData) as Array<keyof typeof valuationData>).map(key => (
              <button
                key={key} onClick={() => setActiveVal(key)}
                className={`p-5 text-left font-display text-[11px] rounded-xl border uppercase tracking-[0.1em] transition-all whitespace-nowrap cursor-pointer outline-none ${
                  activeVal === key 
                    ? 'border-[var(--gold)] text-[var(--gold)] bg-[var(--gold-dim)] shadow-[0_0_20px_var(--gold-dim)]' 
                    : 'border-[var(--border)] bg-[var(--bg-surface)] text-[var(--text-muted)] hover:border-[var(--text-muted)]'
                }`}
              >
                {valuationData[key].title}
              </button>
            ))}
          </div>
          <div className="glass p-8 lg:p-12 rounded-[2rem]">
            <AnimatePresence mode="wait">
              <motion.div key={activeVal} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <h4 className="font-serif text-3xl text-[var(--gold)] mb-6">{valuationData[activeVal].title}</h4>
                <p className="text-[var(--text-muted)] text-sm mb-10 leading-relaxed font-light bg-[var(--bg-core)] p-6 rounded-2xl border border-[var(--border)] shadow-inner">{valuationData[activeVal].desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h5 className="font-mono text-[10px] text-[var(--cyan)] uppercase tracking-[0.2em] mb-4">Core Math / Formula</h5>
                    <pre className="bg-[#020408] p-5 rounded-2xl border border-[var(--border)] whitespace-pre-wrap overflow-x-auto shadow-inner">
                      <code className="text-[11px] text-[var(--text-main)] font-mono leading-relaxed">{valuationData[activeVal].formula}</code>
                    </pre>
                  </div>
                  <div className="p-6 bg-[var(--gold-dim)] rounded-2xl border border-[rgba(223,178,54,0.3)] backdrop-blur-sm">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-3">{valuationData[activeVal].exampleLabel}</span>
                    <p className="text-[13px] text-[var(--text-main)] leading-relaxed font-light">"{valuationData[activeVal].exampleText}"</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-[0.2em] mb-6">Execution Steps</h5>
                  <ol className="pl-5 space-y-4 text-sm text-[var(--text-muted)] marker:text-[var(--gold)] marker:font-bold font-light">
                    {valuationData[activeVal].steps.map((step, i) => (
                      <li key={i} className="pl-4 leading-relaxed">{step}</li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
