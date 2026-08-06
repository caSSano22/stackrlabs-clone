import React from 'react';

export default function HeroSection({ onStartBuilding }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end pt-36 pb-20 px-6 sm:px-12 overflow-hidden">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-radial from-[#44EAE5]/20 to-transparent blur-3xl"></div>
        <svg className="w-full h-full stroke-white/5 stroke-[1]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-8">
        {/* Headline */}
        <h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[1.05] max-w-4xl">
          Micro-rollups to scale web3 applications
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-[#CEDCE1] max-w-xl font-sans font-medium leading-relaxed">
          Build app-specific rollups on Ethereum in web2 programming languages
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4 font-sans">
          <button
            onClick={onStartBuilding}
            className="button-primary"
          >
            Start Building
          </button>
          <a
            href="https://docs.stf.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            Read the docs
          </a>
        </div>
      </div>
    </section>
  );
}
