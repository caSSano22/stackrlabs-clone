import React, { useState } from 'react';
import { X, Copy, Check, Terminal, BookOpen, ExternalLink } from 'lucide-react';

export default function StartBuildingModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('npx @stackr-labs/cli init');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="w-full max-w-lg rounded-3xl border border-[#44EAE5]/40 bg-[#051A21] p-8 shadow-2xl space-y-6 relative text-left font-sans my-8 animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-2 text-neutral-400 hover:bg-white/10 hover:text-white transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-white/10 pb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#44EAE5]/30 bg-[#44EAE5]/10 px-3 py-1 text-xs font-mono font-semibold text-[#44EAE5]">
            <Terminal className="h-3.5 w-3.5" />
            <span>Developer Quickstart</span>
          </div>
          <h2 className="text-3xl font-medium text-white tracking-tight">
            Start Building with Stackr
          </h2>
          <p className="text-sm text-[#CEDCE1]">
            Initialize a micro-rollup in seconds using the official Stackr CLI.
          </p>
        </div>

        {/* Terminal Code Snippet */}
        <div className="space-y-3">
          <label className="block text-xs font-mono text-[#6193A4]">Run command in terminal:</label>
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-4 font-mono text-sm text-[#44EAE5]">
            <code>npx @stackr-labs/cli init</code>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="pt-2 flex flex-col gap-3 font-sans text-sm">
          <a
            href="https://docs.stf.xyz/build/zero-to-one/getting-started"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 hover:border-[#44EAE5] transition-all text-white"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-[#44EAE5]" />
              <div className="text-left">
                <div className="font-semibold">Zero to One Guide</div>
                <div className="text-xs text-[#CEDCE1]">Step-by-step tutorial for building your first micro-rollup</div>
              </div>
            </div>
            <ExternalLink className="h-4 w-4 text-[#6193A4]" />
          </a>
        </div>
      </div>
    </div>
  );
}
