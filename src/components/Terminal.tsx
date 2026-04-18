import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, BarChart2, DollarSign, Database, TrendingUp, ArrowRight } from 'lucide-react';

export default function Terminal() {
  const [ebitda, setEbitda] = useState(100);
  const [entryMult, setEntryMult] = useState(8);
  const [leverage, setLeverage] = useState(60);
  const [exitYear, setExitYear] = useState(5);
  const [exitMult, setExitMult] = useState(10);
  
  const entryEV = ebitda * entryMult;
  const debt = entryEV * (leverage / 100);
  const equityIn = entryEV - debt;

  const exitEbitda = ebitda * Math.pow(1.05, exitYear);
  const exitEV = exitEbitda * exitMult;
  const debtRemaining = Math.max(0, debt - (debt * 0.05 * exitYear));
  const equityOut = exitEV - debtRemaining;

  const moic = equityOut / equityIn;
  const irr = (Math.pow(moic, 1 / exitYear) - 1) * 100;

  return (
    <section id="terminal" className="py-32 bg-[var(--bg-core)] relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] bg-[var(--gold)] rounded-full mix-blend-screen filter blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--gold)] flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-current"></span> Value Engine <span className="w-12 h-px bg-current"></span>
          </div>
          <h2 className="title-text text-5xl md:text-7xl font-serif mb-8 leading-[0.9]">
            LBO <span className="text-[var(--gold)] italic">Terminal</span>
          </h2>
          <p className="text-[var(--text-muted)] text-xl font-light leading-relaxed max-w-[700px] mx-auto">
            Algorithmically calculate Leveraged Buyout return scenarios. Manipulate entry multiples, leverage tranches, and exit horizons in real-time.
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-[var(--border)] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative overflow-hidden">
          {/* Inputs */}
          <div className="relative z-10 flex flex-col gap-8">
            <h3 className="font-display text-[var(--cyan)] text-2xl flex items-center gap-3 border-b border-[var(--border)] border-opacity-30 pb-4">
              <Database size={24} /> Constants & Vectors
            </h3>

            <SliderInput label="LTM EBITDA ($M)" value={ebitda} setter={setEbitda} min={10} max={500} step={10} icon={<DollarSign size={14}/>} />
            <SliderInput label="Entry Multiple (x)" value={entryMult} setter={setEntryMult} min={4} max={20} step={0.5} icon={<Activity size={14}/>} />
            <SliderInput label="Leverage / Debt (%)" value={leverage} setter={setLeverage} min={0} max={90} step={5} icon={<BarChart2 size={14}/>} />
            <SliderInput label="Exit Horizon (Years)" value={exitYear} setter={setExitYear} min={1} max={10} step={1} icon={<TrendingUp size={14}/>} />
            <SliderInput label="Exit Multiple (x)" value={exitMult} setter={setExitMult} min={4} max={20} step={0.5} icon={<Activity size={14}/>} />
          </div>

          {/* Outputs */}
          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-[var(--gold)] text-2xl flex items-center gap-3 border-b border-[var(--border)] border-opacity-30 pb-4 mb-8">
                <Activity size={24} /> Execution Matrix
              </h3>

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
                <MetricBox label="Entry EV" value={`$${entryEV.toLocaleString()}`} />
                <MetricBox label="Debt Funded" value={`$${debt.toLocaleString()}`} isCyan />
                <MetricBox label="Equity Check" value={`$${equityIn.toLocaleString()}`} />
                <MetricBox label="Exit Equity" value={`$${Math.round(equityOut).toLocaleString()}`} isCyan />
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-[var(--gold)] border-opacity-50 relative overflow-hidden group hover:border-opacity-100 transition-colors">
              <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                <span className="font-mono text-[10px] tracking-[0.3em] mb-2 text-[var(--gold)]">TARGET</span>
              </div>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">Internal Rate of Return</p>
                  <div className="font-serif text-6xl text-[var(--text-main)] flex items-end gap-2">
                    {irr.toFixed(1)}<span className="text-3xl text-[var(--gold)]">%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-px bg-white/10 flex-1"></div>
                  <ArrowRight className="text-[var(--gold)] opacity-50" size={16} />
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-2">Multiple on Invested Capital</p>
                  <div className="font-display text-4xl text-[var(--cyan)]">
                    {moic.toFixed(2)}x
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderInput({ label, value, setter, min, max, step, icon }: any) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-end">
        <label className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] flex items-center gap-2">
          <span className="text-[var(--cyan)] opacity-70">{icon}</span> {label}
        </label>
        <span className="font-serif text-2xl text-[var(--text-main)]">{value}</span>
      </div>
      <input 
        type="range" 
        min={min} max={max} step={step} 
        value={value} 
        onChange={(e) => setter(parseFloat(e.target.value))}
        className="w-full h-[1px] bg-[var(--border)] appearance-none outline-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[var(--cyan)] [&::-webkit-slider-thumb]:rounded-full"
      />
    </div>
  );
}

function MetricBox({ label, value, isCyan = false }: { label: string, value: string, isCyan?: boolean }) {
  return (
    <div className="p-5 border-l border-[var(--border)] hover:border-[var(--text-main)] transition-colors">
      <p className="font-mono text-[9px] uppercase tracking-widest text-[var(--text-muted)] mb-3">{label}</p>
      <p className={`font-serif text-2xl ${isCyan ? 'text-[var(--cyan)]' : 'text-[var(--text-main)]'}`}>{value}</p>
    </div>
  );
}
