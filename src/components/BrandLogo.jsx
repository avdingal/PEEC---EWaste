import React from 'react';

export default function BrandLogo({ className = "h-8", showText = true }) {
  return (
    <div className={`inline-flex items-center gap-3 group cursor-pointer select-none ${className}`}>
      {/* Circuit + Recycling Motif Custom SVG */}
      <div className="relative flex items-center justify-center p-2 rounded-2xl bg-[#22201D] text-[#EAE7E2] shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
        <svg 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
        >
          {/* Circuit background grid lines */}
          <path d="M12 20H20V28" stroke="#524941" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M52 44H44V36" stroke="#524941" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
          
          {/* Recycling Loop Arrow 1 - Top Left to Top Right */}
          <path 
            d="M20 26L32 14L44 26" 
            stroke="#D4A373" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Circuit trace line connecting arrow 1 */}
          <path d="M32 14V8" stroke="#D4A373" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="32" cy="7" r="2" fill="#D4A373" />

          {/* Recycling Loop Arrow 2 - Right to Bottom */}
          <path 
            d="M48 28L54 44L38 48" 
            stroke="#EAE7E2" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Circuit trace branch */}
          <path d="M54 44L60 48" stroke="#EAE7E2" strokeWidth="2" strokeLinecap="round" />
          <circle cx="60" cy="48" r="1.8" fill="#EAE7E2" />

          {/* Recycling Loop Arrow 3 - Bottom Left to Top Left */}
          <path 
            d="M26 48L10 44L16 28" 
            stroke="#9E7B66" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Circuit trace branch */}
          <path d="M10 44L4 48" stroke="#9E7B66" strokeWidth="2" strokeLinecap="round" />
          <circle cx="4" cy="48" r="1.8" fill="#9E7B66" />

          {/* Center Microchip Core */}
          <rect x="26" y="26" width="12" height="12" rx="3" fill="#D4A373" />
          <circle cx="32" cy="32" r="3" fill="#22201D" />
          
          {/* Pin connections */}
          <line x1="32" y1="23" x2="32" y2="26" stroke="#D4A373" strokeWidth="2" />
          <line x1="32" y1="38" x2="32" y2="41" stroke="#D4A373" strokeWidth="2" />
          <line x1="23" y1="32" x2="26" y2="32" stroke="#D4A373" strokeWidth="2" />
          <line x1="38" y1="32" x2="41" y2="32" stroke="#D4A373" strokeWidth="2" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-1.5 leading-none">
            <span className="font-serif-heading text-2xl font-bold tracking-tight text-[#22201D]">
              E-waste
            </span>
            <span className="font-sans-body text-xs font-extrabold uppercase tracking-widest text-[#9E7B66] bg-[#9E7B66]/10 px-2 py-0.5 rounded-full border border-[#9E7B66]/20">
              aotm
            </span>
          </div>
          <span className="text-[10px] font-medium tracking-wider text-[#6B635B] uppercase">
            PEEC Advocacy Campaign
          </span>
        </div>
      )}
    </div>
  );
}
