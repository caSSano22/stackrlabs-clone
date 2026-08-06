import React from 'react';
import { Gamepad2, Share2, Cpu, ShieldCheck } from 'lucide-react';

const USE_CASES = [
  {
    icon: Gamepad2,
    title: 'Autonomous Worlds & Games',
    desc: 'Run real-time game state logic off-chain with deterministic proof verification on Ethereum.',
  },
  {
    icon: Share2,
    title: 'Decentralized Social Networks',
    desc: 'Decentralize feed indexing & account state machines while keeping high throughput.',
  },
  {
    icon: Cpu,
    title: 'Custom Execution Engines',
    desc: 'Write custom state machine rules in Node.js or Python without EVM gas limits.',
  },
  {
    icon: ShieldCheck,
    title: 'ZK & Privacy Modules',
    desc: 'Plug in zero-knowledge proof verifiers to create private state transitions for Web3 apps.',
  },
];

export default function UseCasesSection({ onStartBuilding }) {
  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#6193A4] font-semibold block mb-2 font-mono">
            Possibilities
          </span>
          <h2 className="font-sans text-4xl sm:text-6xl font-medium text-white tracking-tight">
            What can you build with Stackr?
          </h2>
        </div>
        <button
          onClick={onStartBuilding}
          className="button-primary font-sans"
        >
          Start Building Now
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {USE_CASES.map((uc, idx) => {
          const IconComp = uc.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 space-y-4 hover:border-[#44EAE5] transition-all"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#44EAE5]/10 text-[#44EAE5]">
                <IconComp className="h-6 w-6" />
              </div>
              <h3 className="font-sans text-2xl font-medium text-white">{uc.title}</h3>
              <p className="font-sans text-base text-[#CEDCE1] leading-relaxed">{uc.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
