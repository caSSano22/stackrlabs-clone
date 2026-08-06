import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#CEDCE1] text-[#051A21] py-20 px-6 sm:px-12 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#051A21]/15 pb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 100 100" className="h-9 w-9 text-[#051A21]">
                <path d="M50 15 L80 32 L50 49 L20 32 Z" fill="#051A21"/>
                <path d="M20 36 L50 53 L50 85 L20 68 Z" fill="#051A21" opacity="0.8"/>
                <path d="M50 53 L80 36 L80 68 L50 85 Z" fill="#051A21" opacity="0.6"/>
              </svg>
              <span className="font-mono text-2xl font-bold tracking-tight text-[#051A21]">
                STACKR
              </span>
            </div>
            <p className="max-w-sm text-sm text-[#051A21]/80 leading-relaxed font-medium">
              Micro-rollups to scale web3 applications. Build app-specific rollups on Ethereum in web2 programming languages.
            </p>
          </div>

          {/* Protocol & Docs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#051A21]">Ecosystem</h4>
            <div className="flex flex-col gap-2 text-sm text-[#051A21]/80 font-medium">
              <a href="https://stf.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">STF Framework</a>
              <a href="https://litepaper.stf.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Litepaper</a>
              <a href="https://docs.stf.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Documentation</a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#051A21]">Community</h4>
            <div className="flex flex-col gap-2 text-sm text-[#051A21]/80 font-medium">
              <a
                href="https://x.com/stackrlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-black transition-colors"
              >
                <span>Twitter / X (@stackrlabs)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://discord.gg/PY4nhg7bcc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-black transition-colors"
              >
                <span>Discord Server</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://github.com/stackrlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-black transition-colors"
              >
                <span>GitHub (stackrlabs)</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-[#051A21]/70">
          <p>&copy; 2026 Stackr Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://mirror.xyz/stackrlabs.eth" target="_blank" rel="noopener noreferrer" className="hover:text-black">Mirror Blog</a>
            <a href="https://docs.stf.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
