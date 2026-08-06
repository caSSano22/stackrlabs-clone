import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function TopBanner() {
  return (
    <a
      href="https://docs.stf.xyz/build/zero-to-one/getting-started"
      target="_blank"
      rel="noreferrer"
      className="bg-[#4BE9FF] h-12 text-center p-3 flex items-center justify-center font-sans font-medium text-black cursor-pointer z-50 hover:bg-[#32E6FF] transition-colors"
    >
      <span className="text-sm font-semibold flex items-center gap-2">
        <span>Beta is now live 🔥 Start building!</span>
        <ExternalLink className="h-4 w-4" />
      </span>
    </a>
  );
}
