import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { indiaContextFirms, indiaContextTrends, futureTrends2035 } from '../data/indiaData';

export default function FutureIndia() {
  const [activeTab, setActiveTab] = useState('india');

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
    <section id="future-india" className="py-32 border-b border-[var(--border)] relative bg-[var(--bg-core)] overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-[40%] right-[10%] w-[60vw] h-[60vw] bg-[var(--cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>
       <div className="absolute bottom-[10%] left-[10%] w-[50vw] h-[50vw] bg-[var(--gold)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>


      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center max-w-[900px] mx-auto mb-20"
        >
          <motion.div variants={itemAnim} className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--cyan)] flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-px bg-current"></span> Module 3.0 <span className="w-8 h-px bg-current"></span>
          </motion.div>
          <motion.h2 variants={itemAnim} className="title-text text-5xl md:text-7xl font-serif mb-8 leading-[0.9]">
            India Context & <span className="text-[var(--gold)] italic">2035 Horizons</span>
          </motion.h2>
          <motion.p variants={itemAnim} className="text-[var(--text-muted)] text-xl font-light leading-relaxed max-w-[700px] mx-auto">
            The distinct dynamics shaping the fastest-growing major economy and the tectonic shifts expected by 2035.
          </motion.p>
        </motion.div>

        <div className="flex justify-center mb-16">
          <div className="glass p-2 rounded-full inline-flex border border-[var(--border)]">
            <button
              onClick={() => setActiveTab('india')}
              className={`px-8 py-3 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest cursor-pointer transition-all outline-none ${
                activeTab === 'india' ? 'bg-[var(--cyan)] text-black shadow-[0_0_15px_var(--cyan-dim)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] bg-transparent border-none'
              }`}
            >
              The India Context
            </button>
            <button
              onClick={() => setActiveTab('2035')}
              className={`px-8 py-3 rounded-full font-mono text-[11px] font-bold uppercase tracking-widest cursor-pointer transition-all outline-none ${
                activeTab === '2035' ? 'bg-[var(--gold)] text-black shadow-[0_0_15px_var(--gold-dim)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)] bg-transparent border-none'
              }`}
            >
              Future 2035
            </button>
          </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'india' && (
              <motion.div 
               key="india"
               initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                    <h3 className="font-display text-3xl text-[var(--cyan)] mb-8 flex items-center gap-4"><span className="w-8 h-px bg-[var(--cyan)]"></span> Structural Tailwinds</h3>
                    <div className="space-y-6">
                      {indiaContextTrends.map((trend, i) => (
                        <div key={i} className="flex items-start gap-6 glass p-6 rounded-2xl hover:border-[var(--cyan)] transition-colors group">
                          <span className="text-[var(--cyan)] font-serif text-3xl mt-1 opacity-50 group-hover:opacity-100 transition-opacity">{`0${i+1}`}</span>
                          <p className="text-[15px] text-[var(--text-main)] leading-relaxed font-light">{trend}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-[var(--text-main)] mb-8 flex items-center gap-4"><span className="w-8 h-px bg-[var(--border)]"></span> Ecosystem Anchors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {indiaContextFirms.map((firm, i) => (
                        <div key={i} className="p-6 glass border-[var(--border)] rounded-2xl hover:border-[var(--cyan)] transition-colors relative overflow-hidden group">
                           <div className="absolute top-0 right-0 w-16 h-16 bg-[var(--cyan)] rounded-bl-full opacity-0 group-hover:opacity-10 transition-opacity"></div>
                          <h4 className="font-display text-xl text-[var(--cyan)] mb-3 relative z-10">{firm.name}</h4>
                          <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed relative z-10">{firm.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === '2035' && (
              <motion.div 
                key="2035"
                initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {futureTrends2035.map((trend, i) => (
                     <div key={i} className="p-10 glass border border-[var(--gold)] border-opacity-30 rounded-3xl hover:border-opacity-100 transition-all hover:-translate-y-2 group relative overflow-hidden shadow-lg">
                       <span className="absolute -right-4 -bottom-6 font-serif text-[150px] text-[var(--gold)] opacity-5 group-hover:opacity-10 transition-opacity select-none leading-none">{i+1}</span>
                       <h4 className="font-serif text-3xl text-[var(--gold)] mb-6 relative z-10">{trend.title}</h4>
                       <p className="text-[15px] text-[var(--text-main)] leading-relaxed font-light relative z-10">{trend.body}</p>
                     </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
