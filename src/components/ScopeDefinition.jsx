import React, { useState } from 'react';
import { WEEE_CATEGORIES } from '../data/ewasteData';
import { Plug, Zap, CheckCircle2, AlertCircle, ArrowUpRight, Cpu } from 'lucide-react';

export default function ScopeDefinition() {
  const [selectedCat, setSelectedCat] = useState(WEEE_CATEGORIES[0]);

  return (
    <section id="scope" className="py-20 bg-[#FAF8F5] border-y border-[#D8D3CA] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#9E7B66] font-medium text-base">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B635B] bg-[#EAE7E2] px-3 py-1 rounded-full border border-[#D8D3CA]">
              01 — Definition & Scope
            </span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#22201D] tracking-tight mb-6">
            What Qualifies as E-Waste?
          </h2>

          {/* Definition Callout Box */}
          <div className="p-6 sm:p-8 bg-[#22201D] text-[#EAE7E2] rounded-3xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Plug className="w-48 h-48 text-white" />
            </div>

            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-[#D4A373] text-[#22201D] rounded-2xl font-bold shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A373]">
                  Core Definition[cite: 1]
                </span>
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mt-1">
                  Any discarded device with a battery or plug
                </h3>
              </div>
            </div>

            <p className="text-stone-300 text-base leading-relaxed font-sans max-w-2xl">
              Electronic waste (e-waste), formally termed Waste Electrical and Electronic Equipment (WEEE), encompasses discarded smartphones, laptops, household appliances, power cords, and electronic accessories that have reached their end-of-life or software support window[cite: 1].
            </p>
          </div>
        </div>

        {/* WEEE Category Focus Grid */}
        <div className="mt-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="font-serif-heading text-3xl font-bold text-[#22201D]">
                WEEE Classification Focus
              </h3>
              <p className="text-sm text-[#6B635B]">
                Explore WEEE categories with special emphasis on Category 6 small telecommunications gear[cite: 1].
              </p>
            </div>

            {/* Category Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {WEEE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    selectedCat.id === cat.id
                      ? 'bg-[#22201D] text-[#EAE7E2] shadow-md'
                      : 'bg-white border border-[#D8D3CA] text-[#524941] hover:border-[#9E7B66]'
                  }`}
                >
                  {cat.id === 'cat6' && <span className="inline-block w-2 h-2 rounded-full bg-[#D4A373] mr-2" />}
                  {cat.name.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Category Detail Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-[#D8D3CA] rounded-3xl p-6 sm:p-8 shadow-lg">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {selectedCat.highlighted && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A373]/20 border border-[#D4A373]/40 rounded-full text-xs font-extrabold text-[#7A542A] uppercase tracking-wider mb-4">
                    <AlertCircle className="w-3.5 h-3.5" />
                    High Accumulation Priority Category[cite: 1]
                  </div>
                )}

                <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#22201D] mb-3">
                  {selectedCat.name}
                </h3>

                <p className="text-base text-[#524941] leading-relaxed mb-6 font-sans">
                  {selectedCat.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE7E2]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6B635B]">
                      Form Factor Size
                    </div>
                    <div className="text-xl font-bold text-[#22201D] mt-1">
                      {selectedCat.size}
                    </div>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE7E2]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6B635B]">
                      Accumulation Threat
                    </div>
                    <div className="text-xl font-bold text-[#9E7B66] mt-1">
                      {selectedCat.impactScore}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#6B635B] mb-3">
                    Common Household Devices in this Category:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCat.examples.map((item, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EAE7E2] rounded-xl text-xs font-semibold text-[#22201D] border border-[#D8D3CA]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9E7B66]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {selectedCat.id === 'cat6' && (
                <div className="p-4 bg-[#9E7B66]/10 border border-[#9E7B66]/30 rounded-2xl text-xs text-[#524941]">
                  <strong className="text-[#22201D]">Why Category 6 matters:</strong> Small IT & telecommunications items (under 50cm) like chargers and smartphones represent the fastest compounding e-waste due to short 12-24 month upgrade cycles[cite: 1].
                </div>
              )}
            </div>

            {/* Right Image Display */}
            <div className="lg:col-span-5 relative min-h-[280px] rounded-2xl overflow-hidden shadow-md">
              <img 
                src={selectedCat.image} 
                alt={selectedCat.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22201D]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D4A373]">
                    Visual Inspection
                  </div>
                  <div className="text-lg font-bold">
                    {selectedCat.name}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
