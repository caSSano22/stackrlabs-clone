import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ARTICLES = [
  {
    date: 'May 27, 2024',
    title: 'Micro-Rollups for Keystores',
    link: 'https://mirror.xyz/stackrlabs.eth/4kLzcBdvWnvECxOnaGQ8prAqUZEzj4BoDoXqSSXiV6w',
    tag: 'Keystores',
  },
  {
    date: 'Feb 14, 2024',
    title: 'Off-Chain Attestations for Micro-Rollups',
    link: 'https://mirror.xyz/stackrlabs.eth/0okwPJQRfu-GxDafoV6UGYxaO9dJwCARu3WM16jdeCs',
    tag: 'Attestations',
  },
  {
    date: 'Nov 20, 2023',
    title: 'Introducing Stackr Labs',
    link: 'https://mirror.xyz/stackrlabs.eth',
    tag: 'Announcement',
  },
];

export default function ResearchSection() {
  return (
    <section className="relative py-28 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/10">
      <div className="mb-16">
        <h2 className="font-sans text-5xl sm:text-7xl font-medium text-white tracking-tight">
          Research
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTICLES.map((art, idx) => (
          <a
            key={idx}
            href={art.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#44EAE5] hover:bg-white/10 transition-all shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#6193A4]">
                <span>{art.date}</span>
                <span className="rounded-full bg-[#44EAE5]/10 px-2.5 py-0.5 text-[#44EAE5]">
                  {art.tag}
                </span>
              </div>
              <h3 className="font-sans text-2xl font-medium text-white group-hover:text-[#44EAE5] transition-colors leading-snug">
                {art.title}
              </h3>
            </div>

            <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white group-hover:text-[#44EAE5] transition-colors">
              <span>Read Article</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
