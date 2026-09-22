import React from 'react';
import { ROOT_CAUSES } from '../data/ewasteData';
import { Clock, Wrench, Smartphone, Trash2, ArrowUpRight, GraduationCap } from 'lucide-react';

export default function RootCauses() {
  const getCauseIcon = (iconName) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-6 h-6 text-[#9E7B66]" />;
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#9E7B66]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#9E7B66]" />;
      case 'Trash2': return <Trash2 className="w-6 h-6 text-[#9E7B66]" />;
      default: return <Clock className="w-6 h-6 text-[#9E7B66]" />;
    }
  };

  return (
    <section id="causes" className="py-20 md:py-28 bg-[#EAE7E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#9E7B66] font-medium text-base">/</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6B635B] bg-white/80 px-3 py-1 rounded-full border border-[#D8D3CA]">
                02 — Systemic Drivers
              </span>
            </div>

            <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#22201D] tracking-tight">
              Root Causes Behind the Surging Volume
            </h2>
          </div>

          <p className="text-base text-[#524941] max-w-md font-sans leading-relaxed">
            Examining why functional or near-functional electronics end up in trash heaps faster than ever[cite: 1].
          </p>
        </div>

        {/* 4 Card Grid matching reference layout cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ROOT_CAUSES.map((cause, index) => (
            <div
              key={cause.id}
              className="group relative bg-[#FAF8F5] hover:bg-white border border-[#D8D3CA] hover:border-[#9E7B66] p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAE7E2] group-hover:bg-[#22201D] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    {getCauseIcon(cause.icon)}
                  </div>

                  <div className="text-right">
                    <div className="font-serif-heading text-2xl font-bold text-[#22201D]">
                      {cause.stat}
                    </div>
                    <div className="text-[11px] font-semibold text-[#6B635B] uppercase tracking-wider">
                      {cause.statLabel}
                    </div>
                  </div>
                </div>

                {/* Card Title & Content */}
                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D] mb-4 group-hover:text-[#9E7B66] transition-colors">
                  {cause.title}
                </h3>

                <p className="text-base text-[#524941] leading-relaxed font-sans mb-6">
                  {cause.description}
                </p>
              </div>

              {/* Card Footer Tag */}
              <div className="pt-4 border-t border-[#EAE7E2] flex items-center justify-between text-xs font-semibold text-[#6B635B]">
                <span>Driver 0{index + 1}</span>
                <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[#9E7B66]">
                  Read Impact <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout: Student Impact Spotlight */}
        <div className="bg-[#22201D] text-[#EAE7E2] p-8 sm:p-10 rounded-[2.25rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4A373]/20 border border-[#D4A373]/40 rounded-full text-xs font-bold text-[#D4A373] uppercase tracking-wider mb-4">
              <GraduationCap className="w-4 h-4" />
              Demographic Vulnerability Spotlight[cite: 1]
            </div>

            <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white mb-3">
              Students & Youth Bear the Financial & Technological Strain
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Rapid OS update drop-offs and mandatory digital coursework mean students are forced into frequent hardware upgrades. Old phones become unviable for modern apps, turning into e-waste despite physical hardware integrity[cite: 1].
            </p>
          </div>

          <div className="shrink-0 bg-[#38332E] border border-white/10 p-6 rounded-2xl text-center min-w-[200px]">
            <div className="font-serif-heading text-4xl font-bold text-[#D4A373] mb-1">
              18–24
            </div>
            <div className="text-xs font-medium text-stone-300">
              Age bracket with fastest device replacement rate[cite: 1]
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
