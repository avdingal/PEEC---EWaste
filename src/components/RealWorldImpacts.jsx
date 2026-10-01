import React, { useState } from 'react';
import { IMPACTS } from '../data/ewasteData';
import { Flame, ShieldAlert, Heart, Coins, Check, ArrowRight, Skull } from 'lucide-react';

export default function RealWorldImpacts() {
  const [activeTab, setActiveTab] = useState(IMPACTS[0]);

  const getImpactIcon = (id) => {
    switch (id) {
      case 'ecosystem': return <ShieldAlert className="w-5 h-5 text-[#9E7B66]" />;
      case 'fire': return <Flame className="w-5 h-5 text-[#9E7B66]" />;
      case 'health': return <Heart className="w-5 h-5 text-[#9E7B66]" />;
      case 'resource': return <Coins className="w-5 h-5 text-[#9E7B66]" />;
      default: return <ShieldAlert className="w-5 h-5 text-[#9E7B66]" />;
    }
  };

  return (
    <section id="impacts" className="py-20 bg-[#FAF8F5] border-t border-[#D8D3CA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#9E7B66] font-medium text-base">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B635B] bg-[#EAE7E2] px-3 py-1 rounded-full border border-[#D8D3CA]">
              03 — Consequences
            </span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            Real-World Impacts of Improper Disposal
          </h2>

          <p className="text-base text-[#524941] font-sans leading-relaxed">
            When electronics end up in open dumpsites or informal burning pits, toxic contaminants damage fragile ecosystems, trigger chemical fires, and compromise public health.
          </p>
        </div>

        {/* Tab Switcher Navigation */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[#EAE7E2]">
          {IMPACTS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab.id === item.id
                  ? 'bg-[#22201D] text-[#EAE7E2] shadow-md scale-102'
                  : 'bg-white border border-[#D8D3CA] text-[#524941] hover:border-[#9E7B66]'
              }`}
            >
              {getImpactIcon(item.id)}
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Impact Detail Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-[#D8D3CA] rounded-[2.25rem] p-6 sm:p-10 shadow-xl">
          
          {/* Left Content Side */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#9E7B66] mb-2">
                {activeTab.subtitle}
              </div>

              <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#22201D] mb-4">
                {activeTab.title}
              </h3>

              <p className="text-base sm:text-lg text-[#524941] leading-relaxed mb-6 font-sans">
                {activeTab.description}
              </p>

              {/* Key Impact Points */}
              <div className="space-y-3 mb-8">
                {activeTab.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#9E7B66]/20 text-[#9E7B66] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-[#22201D] leading-snug">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Toxic / Key Elements Badge list */}
            <div className="p-4 bg-[#FAF8F5] rounded-2xl border border-[#EAE7E2]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6B635B] mb-3">
                <Skull className="w-4 h-4 text-[#9E7B66]" />
                Associated Toxic Contaminants & Minerals:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeTab.toxins.map((toxin, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white border border-[#D8D3CA] rounded-full text-xs font-bold text-[#22201D]"
                  >
                    {toxin}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Feature Side */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-lg group">
            <img 
              src={activeTab.image} 
              alt={activeTab.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#22201D]/90 via-[#22201D]/20 to-transparent flex flex-col justify-end p-6 text-white">
              <div className="text-xs font-bold uppercase tracking-widest text-[#D4A373] mb-1">
                PEEC Impact Field Evidence
              </div>
              <div className="font-serif-heading text-2xl font-bold">
                {activeTab.title}
              </div>
              <div className="text-xs text-stone-300 mt-1">
                Requires systemic intervention and structured drop-off infrastructure.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
