import React from 'react';
import { Layers, Code2, Network } from 'lucide-react';

const FEATURES = [
  {
    icon: Layers,
    title: 'Break up the rollup monolith',
    desc: 'Analogous to the "micro-services" architecture of web2, micro-rollups can be pieced together like legos to serve a bigger purpose (e.g. accounting module, NFT module, identity module).',
  },
  {
    icon: Code2,
    title: 'Use languages you already love',
    desc: 'Stackr unlocks more flexible rollups. Implement deterministic state machines for logic in any programming language like Python or JavaScript.',
  },
  {
    icon: Network,
    title: 'Build sufficiently decentralized apps',
    desc: 'Instead of putting the entire application on-chain, many developers are opting to decentralize just the bits that matter most (e.g. Farcaster).',
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
        {FEATURES.map((feat, idx) => {
          const IconComp = feat.icon;
          return (
            <div key={idx} className="flex flex-col text-center items-center space-y-6 max-w-md mx-auto">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-[#44EAE5]/10 border border-[#44EAE5]/30 text-[#44EAE5] shadow-lg shadow-[#44EAE5]/5">
                <IconComp className="h-10 w-10" />
              </div>
              <h2 className="font-sans text-3xl font-medium text-white tracking-tight leading-tight">
                {feat.title}
              </h2>
              <p className="font-sans text-base text-[#CEDCE1] leading-relaxed">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
