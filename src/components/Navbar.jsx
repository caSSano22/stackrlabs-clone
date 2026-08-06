import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-12 z-40 bg-[#051A21]/90 backdrop-blur-md border-b border-white/10 py-4 transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <svg viewBox="0 0 100 100" className="h-8 w-8 text-[#44EAE5]">
            <path d="M50 15 L80 32 L50 49 L20 32 Z" fill="#4BE9FF"/>
            <path d="M20 36 L50 53 L50 85 L20 68 Z" fill="#44EAE5"/>
            <path d="M50 53 L80 36 L80 68 L50 85 Z" fill="#32E6FF" opacity="0.85"/>
          </svg>
          <span className="font-mono text-2xl font-bold tracking-tight text-white group-hover:text-[#44EAE5] transition-colors">
            STACKR
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-10 font-sans text-sm font-medium text-[#CEDCE1]">
          <a
            href="https://stf.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#44EAE5] transition-colors"
          >
            STF
          </a>
          <a
            href="https://litepaper.stf.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#44EAE5] transition-colors"
          >
            Litepaper
          </a>
          <a
            href="https://mirror.xyz/stackrlabs.eth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#44EAE5] transition-colors"
          >
            Blog
          </a>
          <a
            href="https://discord.gg/PY4nhg7bcc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#44EAE5] transition-colors"
          >
            Community
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="lg:hidden text-white p-2"
        >
          {menuOpened ? <X className="h-6 w-6 text-[#44EAE5]" /> : <Menu className="h-6 w-6 text-white" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpened && (
        <div className="lg:hidden bg-[#051A21] border-b border-white/10 px-6 py-6 font-sans text-lg space-y-4">
          <a
            href="https://stf.xyz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpened(false)}
            className="block text-[#CEDCE1] hover:text-[#44EAE5]"
          >
            STF
          </a>
          <a
            href="https://litepaper.stf.xyz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpened(false)}
            className="block text-[#CEDCE1] hover:text-[#44EAE5]"
          >
            Litepaper
          </a>
          <a
            href="https://mirror.xyz/stackrlabs.eth"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpened(false)}
            className="block text-[#CEDCE1] hover:text-[#44EAE5]"
          >
            Blog
          </a>
          <a
            href="https://discord.gg/PY4nhg7bcc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpened(false)}
            className="block text-[#CEDCE1] hover:text-[#44EAE5]"
          >
            Community
          </a>
        </div>
      )}
    </header>
  );
}
