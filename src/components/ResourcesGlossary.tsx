import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { resourcesData } from '../data/indiaData';
import { allGlossary } from '../data/glossaryData';

export default function ResourcesGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredGlossary = allGlossary.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="resources" className="py-32 bg-[var(--bg-core)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[20%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--cyan)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Resources Section */}
        <div className="mb-32">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={container} className="mb-16">
            <motion.div variants={itemAnim} className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--cyan)] flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-current"></span> Execution Arsenal
            </motion.div>
            <motion.h2 variants={itemAnim} className="title-text text-5xl md:text-6xl font-serif mb-6 leading-tight">
              Free Resources & <span className="text-[var(--cyan)] italic">Credentials</span>
            </motion.h2>
            <motion.p variants={itemAnim} className="text-[var(--text-muted)] text-xl font-light leading-relaxed max-w-[600px]">
              The tools, reading materials, and certifications required to execute the roadmap.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <ResourceCategory title="Learn & Templates" items={resourcesData.learn} />
            <ResourceCategory title="News & Reading" items={resourcesData.news} />
            <ResourceCategory title="Excel & Modelling" items={resourcesData.excel} />
            <ResourceCategory title="Certifications" items={resourcesData.certs} />
            <ResourceCategory title="Essential Books" items={resourcesData.books} />
            <ResourceCategory title="YouTube / Video" items={resourcesData.youtube} />
          </motion.div>
        </div>

        {/* Glossary Section */}
        <div className="border-t border-[var(--border)] pt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-current"></span> Lexicon
              </div>
              <h2 className="title-text text-5xl md:text-6xl font-serif mb-4 leading-tight">The Ultimate <span className="text-[var(--gold)] italic">Glossary</span></h2>
              <p className="text-[var(--text-muted)] text-lg mt-4 max-w-[600px] font-light leading-relaxed">The definitive combined dictionary of FinTech, Investment Banking, and Private Equity terminology.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="relative w-full md:w-[350px]"
            >
              <input 
                type="text" 
                placeholder="Search terms..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full glass bg-[rgba(255,255,255,0.02)] border border-[var(--border)] rounded-full px-8 py-4 text-sm text-[var(--text-main)] focus:border-[var(--gold)] outline-none transition-all placeholder:text-opacity-30 focus:bg-[rgba(255,255,255,0.05)] shadow-inner"
              />
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--gold)] text-[10px] uppercase tracking-widest font-mono opacity-80">{filteredGlossary.length} found</span>
            </motion.div>
          </div>

          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
            <AnimatePresence>
              {filteredGlossary.map((item, i) => (
                <motion.div 
                  key={item.term} 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="mb-6 break-inside-avoid glass p-6 rounded-3xl border border-[var(--border)] hover:border-[var(--gold)] transition-colors group"
                >
                  <h4 className="font-display text-[var(--cyan)] text-lg mb-3 tracking-wide">{item.term}</h4>
                  <p className="text-[13px] text-[var(--text-muted)] leading-relaxed font-light">{item.def}</p>
                </motion.div>
              ))}
            </AnimatePresence>
            {filteredGlossary.length === 0 && (
              <div className="text-center italic text-[var(--text-muted)] text-sm col-span-full py-12">No terms found matching "{searchTerm}"</div>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function ResourceCategory({ title, items }: { title: string, items: any[] }) {
  const itemAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };
  
  return (
    <motion.div variants={itemAnim} className="glass p-8 rounded-3xl border border-[var(--border)] relative overflow-hidden group hover:border-[var(--cyan)] transition-colors">
      <div className="absolute top-0 right-0 w-20 h-20 bg-[var(--cyan)] rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"></div>
      <h3 className="font-display text-[var(--gold)] text-xl mb-6 flex items-center gap-4 relative z-10"><span className="w-4 h-px bg-[var(--gold)]"></span>{title}</h3>
      <ul className="space-y-6 list-none relative z-10">
        {items.map((item, idx) => (
          <li key={idx} className="group/item">
            <div className="text-[15px] text-[var(--text-main)] font-medium mb-2 flex items-center gap-2 group-hover/item:text-[var(--cyan)] transition-colors">
              {item.name}
              <svg className="w-3 h-3 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all text-[var(--cyan)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="text-[13px] text-[var(--text-muted)] leading-relaxed font-light">{item.desc}</div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
