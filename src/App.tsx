import React, { useState, useEffect } from 'react';
import { Moon, Sun, Hexagon, Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import Fintech from './components/Fintech';
import InvestmentBanking from './components/InvestmentBanking';
import FutureIndia from './components/FutureIndia';
import Roadmap from './components/Roadmap';
import Terminal from './components/Terminal';
import ResourcesGlossary from './components/ResourcesGlossary';

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--cyan)] to-[var(--gold)] origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}

function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { name: 'Architecture', href: '#fintech', id: 'fintech' },
    { name: 'Capital', href: '#ib', id: 'ib' },
    { name: 'Horizons', href: '#future-india', id: 'future-india' },
    { name: 'Roadmap', href: '#roadmap', id: 'roadmap' },
    { name: 'Terminal', href: '#terminal', id: 'terminal' },
    { name: 'Arsenal', href: '#resources', id: 'resources' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Rec 2: Positional Awareness Tracking via IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ProgressBar />
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-6 ${scrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'}`}>
        <div className={`max-w-[1400px] mx-auto flex justify-between items-center transition-all duration-500 rounded-full ${scrolled || isMobileOpen ? 'glass px-4 md:px-8 py-2 md:py-3 outline outline-1 outline-white/5 shadow-2xl backdrop-blur-xl' : ''}`}>
          
          <div className="font-serif text-[var(--gold)] text-xl md:text-2xl font-bold flex items-center gap-2 md:gap-3 tracking-wide group cursor-pointer shrink-0 z-50" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'}); setIsMobileOpen(false);}}>
            <Hexagon className="text-[var(--cyan)] transition-transform group-hover:rotate-90 duration-500 hidden sm:block" size={24} strokeWidth={1.5} />
            <Hexagon className="text-[var(--cyan)] transition-transform group-hover:rotate-90 duration-500 sm:hidden" size={20} strokeWidth={1.5} />
            <span className="italic relative">
              Nexus
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--gold)] group-hover:w-full transition-all duration-300"></span>
            </span>
          </div>

          <div className="hidden lg:flex flex-1 mx-4 md:mx-8">
            <ul className="flex flex-row items-center gap-2 list-none m-0 p-0 w-max mx-auto relative">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={idx} className="relative z-10" onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
                    <a href={item.href} className={`block px-5 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${hoveredIdx === idx ? 'text-[var(--bg-core)]' : (isActive ? 'text-[var(--cyan)]' : 'text-[var(--text-muted)]')}`}>
                      {item.name}
                    </a>
                    {(hoveredIdx === idx) && (
                       <motion.div 
                         layoutId="nav-pill" 
                         className="absolute inset-0 bg-gradient-to-r from-[var(--cyan)] to-[var(--gold)] rounded-full -z-10 shadow-[0_0_8px_rgba(14,211,207,0.1)] hidden md:block"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
                       />
                    )}
                    {isActive && hoveredIdx !== idx && (
                       <motion.div 
                         layoutId="nav-active"
                         className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[var(--cyan)] rounded-full"
                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
                       />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-3 shrink-0 z-50">
            <button onClick={toggleTheme} className="text-[var(--text-main)] hover:text-[var(--gold)] transition-all bg-[var(--bg-elev)] border border-[var(--border)] cursor-pointer p-2 md:p-2.5 rounded-full hover:border-[var(--gold)] shadow-sm hover:shadow-[0_0_15px_var(--gold-dim)]">
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="lg:hidden text-[var(--text-main)] hover:text-[var(--gold)] transition-all bg-[var(--bg-elev)] border border-[var(--border)] cursor-pointer p-2 md:p-2.5 rounded-full hover:border-[var(--gold)] shadow-sm hover:shadow-[0_0_15px_var(--gold-dim)] flex items-center justify-center">
              {isMobileOpen ? <X size={14} /> : <Menu size={14} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-2 glass p-6 rounded-3xl border border-[var(--border)] shadow-2xl lg:hidden flex flex-col gap-4 z-40 bg-[var(--bg-surface)] backdrop-blur-2xl"
            >
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <a 
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`font-mono text-xs uppercase tracking-widest border-b border-[var(--border)] pb-4 last:border-0 transition-colors flex items-center justify-between ${isActive ? 'text-[var(--cyan)]' : 'text-[var(--text-main)] hover:text-[var(--cyan)]'}`}
                  >
                    {item.name}
                    <span className="opacity-30 text-[8px]">&gt;</span>
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 px-6 border-b border-[var(--border)]">
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
      
      {/* Abstract blur elements */}
      <div className="absolute top-1/4 -left-[10%] w-[40vw] h-[40vw] bg-[var(--cyan)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-1/4 -right-[10%] w-[50vw] h-[50vw] bg-[var(--gold)] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 w-full max-w-[1300px] flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-[var(--gold)] flex items-center gap-4 mb-8">
            <span className="w-8 md:w-12 h-px bg-[var(--gold)] shadow-[0_0_10px_var(--gold)]"></span> 
            <span>FinTech Atlas & Playbook</span>
            <span className="w-8 md:w-12 h-px bg-[var(--gold)] shadow-[0_0_10px_var(--gold)]"></span>
          </div>
          
          <h1 className="title-text font-serif mb-8 text-[var(--text-main)] w-full">
            Where <span className="font-display text-[var(--cyan)] italic">Code</span> <br className="hidden md:block" />
            Meets <span className="text-[var(--gold)]">Capital.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--text-muted)] mb-12 max-w-[700px] leading-relaxed font-light">
            Modern financial systems explained through technology, architecture, and real-world tools. Break into high-level global finance.
          </p>
          
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
            <a href="#terminal" className="btn btn-cyan flex items-center gap-2 md:gap-3">
              <Hexagon size={16} /> Access Terminal
            </a>
            <a href="#ib" className="btn btn-out">View Theory</a>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#050505] py-24 px-6 relative overflow-hidden border-t border-[var(--border)]">
      <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 relative z-10">
        <div>
          <div className="font-serif text-[var(--gold)] text-4xl mb-4 italic flex items-center gap-3">
             <Hexagon className="text-[var(--cyan)]" size={32} />
             <span>The <span className="text-[var(--cyan)] not-italic">Nexus.</span></span>
          </div>
          <p className="font-mono text-[var(--text-muted)] text-[11px] uppercase tracking-[0.2em]">Architected for structured financial logic & execution.</p>
        </div>
        
        <div className="flex flex-wrap gap-8">
          <a href="#fintech" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors">Architecture</a>
          <a href="#ib" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Capital</a>
          <a href="#terminal" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--cyan)] transition-colors">Terminal</a>
          <a href="#roadmap" className="text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors">Roadmap</a>
        </div>
      </div>
      
      <div className="max-w-[1300px] mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)] opacity-50">
          © 2026 Structural Finance Ecosystem.
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--text-muted)] opacity-50">
          All algorithmic instances are illustrative.
        </div>
      </div>
      
      {/* Background massive text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[15vw] text-white opacity-[0.02] pointer-events-none whitespace-nowrap mix-blend-overlay">
        NEXUS APEX
      </div>
    </footer>
  );
}

function JourneyNode({ phase, title, children }: { phase: string, title: string, children: React.ReactNode }) {
  return (
    <div className="relative border-t md:border-t-0 border-[var(--border)] border-opacity-30 pt-8 sm:pt-0">
      <div className="absolute top-16 md:top-32 -left-[40px] md:-left-[120px] w-full flex items-start z-20 pointer-events-none hidden sm:flex h-full">
        <div className="sticky top-[150px] flex items-center">
          <div className="w-[13px] h-[13px] rounded-full bg-[var(--bg-core)] border-2 border-[var(--cyan)] shadow-[0_0_8px_var(--cyan)] absolute left-[14px] md:left-[54px] z-30"></div>
          <div className="hidden md:flex flex-col absolute left-[80px]">
            <span className="font-mono text-[10px] text-[var(--gold)] uppercase tracking-widest font-bold">Phase {phase}</span>
            <span className="font-serif text-[var(--cyan)] text-sm tracking-wide opacity-80">{title}</span>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  useEffect(() => { document.documentElement.setAttribute('data-theme', theme); }, [theme]);
  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <div className="min-h-screen bg-[var(--bg-core)] text-[var(--text-main)] transition-colors duration-300 selection:bg-[var(--cyan)] selection:text-black">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative">
        <Hero />
        
        <div className="max-w-[1500px] mx-auto relative">
          {/* Vertical Timeline Spine */}
          <div className="absolute left-[20px] md:left-[60px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--cyan)] via-[var(--gold)] to-[transparent] opacity-30 hidden sm:block"></div>

          <div className="sm:pl-[60px] md:pl-[120px]">
            <JourneyNode phase="01" title="Architecture">
              <Fintech />
            </JourneyNode>
            
            <JourneyNode phase="02" title="Capital Structuring">
              <InvestmentBanking />
            </JourneyNode>
            
            <JourneyNode phase="03" title="New Horizons">
              <FutureIndia />
            </JourneyNode>
            
            <JourneyNode phase="04" title="Strategic Roadmap">
              <Roadmap />
            </JourneyNode>
            
            <JourneyNode phase="05" title="Execution Terminal">
              <Terminal />
            </JourneyNode>
            
            <JourneyNode phase="06" title="Arsenal & Glossary">
              <ResourcesGlossary />
            </JourneyNode>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
