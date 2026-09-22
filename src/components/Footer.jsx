import React, { useState } from 'react';
import BrandLogo from './BrandLogo';
import { REFERENCES } from '../data/ewasteData';
import { ChevronDown, ChevronUp, BookOpen, ArrowUp, Globe, Heart } from 'lucide-react';

export default function Footer() {
  const [showReferences, setShowReferences] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#22201D] text-[#EAE7E2] pt-16 pb-12 border-t border-[#38332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Left Column: Brand & Initiative Note */}
          <div className="md:col-span-6 space-y-4">
            <BrandLogo showText={true} className="brightness-125" />
            
            <p className="text-sm text-stone-300 leading-relaxed max-w-md font-sans">
              "E-waste aotm" is an advocacy awareness campaign dedicated to transforming electronic waste disposal habits through public education and accessible collection infrastructure[cite: 1].
            </p>

            {/* PEEC Initiative Mandate Note */}
            <div className="inline-flex items-center gap-2 p-3 bg-[#38332E] border border-white/10 rounded-2xl text-xs text-stone-300">
              <Globe className="w-4 h-4 text-[#D4A373] shrink-0" />
              <span>
                <strong>PEEC Initiative</strong> — People and the Earth's Ecosystem[cite: 1]
              </span>
            </div>
          </div>

          {/* Right Column: Quick Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">
                Campaign Navigation
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-300">
                <li><a href="#home" className="hover:text-[#D4A373] transition-colors">Home & Metrics</a></li>
                <li><a href="#scope" className="hover:text-[#D4A373] transition-colors">Definition & Scope</a></li>
                <li><a href="#causes" className="hover:text-[#D4A373] transition-colors">Systemic Drivers</a></li>
                <li><a href="#impacts" className="hover:text-[#D4A373] transition-colors">Real-World Impacts</a></li>
                <li><a href="#action" className="hover:text-[#D4A373] transition-colors">Drop-Off Bin Locator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-4">
                WEEE Categories
              </h4>
              <ul className="space-y-2.5 text-sm font-medium text-stone-300">
                <li><a href="#scope" className="hover:text-[#D4A373] transition-colors">Category 6: Small IT & Telecom</a></li>
                <li><a href="#scope" className="hover:text-[#D4A373] transition-colors">Category 2: Small Appliances</a></li>
                <li><a href="#scope" className="hover:text-[#D4A373] transition-colors">Category 3: Screens & Displays</a></li>
                <li><a href="#scope" className="hover:text-[#D4A373] transition-colors">Category 1: Cooling Systems</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Expandable Citation / Reference Section */}
        <div className="py-8 border-b border-stone-800">
          <button
            onClick={() => setShowReferences(!showReferences)}
            className="w-full flex items-center justify-between p-4 bg-[#2A2723] hover:bg-[#332F2A] rounded-2xl border border-white/5 text-left transition-colors"
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#D4A373]" />
              <div>
                <div className="text-sm font-bold text-white">
                  Citations & Academic Resources[cite: 1]
                </div>
                <div className="text-xs text-stone-400">
                  {showReferences ? 'Hide' : 'Expand'} PEEC research studies, UN reports, and government DENR baseline data[cite: 1].
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[#38332E] text-stone-300">
              {showReferences ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </div>
          </button>

          {showReferences && (
            <div className="mt-4 p-6 bg-[#1A1816] rounded-2xl border border-white/5 space-y-4 animate-fadeIn">
              {REFERENCES.map((ref) => (
                <div key={ref.id} className="text-xs text-stone-300 border-b border-stone-800/80 pb-4 last:border-none last:pb-0">
                  <div className="font-bold text-[#D4A373] mb-1">
                    {ref.citation}
                  </div>
                  <div className="font-semibold text-white mb-1">
                    "{ref.title}"
                  </div>
                  <div className="text-stone-400 mb-1">
                    Authors: {ref.authors}
                  </div>
                  <div className="text-stone-400 italic">
                    {ref.details}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} PEEC Initiative — People and the Earth's Ecosystem[cite: 1].</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-[#38332E] hover:bg-[#47413B] text-white rounded-full transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
