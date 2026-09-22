import React, { useState } from 'react';
import { METRICS_DATA } from '../data/ewasteData';
import { 
  ArrowRight, 
  Play, 
  Smartphone, 
  AlertTriangle, 
  TrendingUp, 
  Globe, 
  Weight, 
  Sparkles,
  ShieldAlert,
  Info
} from 'lucide-react';

export default function Hero({ onOpenPledge }) {
  const [activeCategoryTab, setActiveCategoryTab] = useState('smartphones');

  const getMetricIcon = (iconName) => {
    switch (iconName) {
      case 'Weight': return <Weight className="w-6 h-6 text-[#9E7B66]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#9E7B66]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#9E7B66]" />;
      default: return <AlertTriangle className="w-6 h-6 text-[#9E7B66]" />;
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D4A373]/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-[#9E7B66]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Split Grid imitating the reference layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Hero Column: Headline & Subheadline */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2">
            
            <div>
              {/* Editorial Section Tag */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="text-[#9E7B66] font-medium text-base">/</span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#6B635B] bg-white/70 px-3 py-1 rounded-full border border-[#D8D3CA] shadow-2xs">
                  PEEC Initiative Advocacy Campaign
                </span>
                <span className="text-[#9E7B66] font-medium text-base">/</span>
              </div>

              {/* Main Headline - Reference Design Serif Style */}
              <h1 className="font-serif-heading text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#22201D] leading-[1.04] mb-8">
                THE INVISIBLE <br className="hidden sm:inline" />
                <span className="relative inline-block italic font-serif text-[#9E7B66] font-normal">
                  CRISIS
                </span> IN OUR POCKETS<span className="text-[#9E7B66] inline-block font-sans text-2xl align-top ml-1">®</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-[#524941] leading-relaxed max-w-xl font-sans mb-10">
                From outdated smartphones to discarded chargers, electronic waste is the fastest-growing waste stream worldwide—threatening our ecosystem and human health.
              </p>
            </div>

            {/* CTA Button Group matching reference */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenPledge}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#22201D] hover:bg-[#38332E] text-[#EAE7E2] rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
              >
                <span>Pledge to Recycle</span>
                <div className="w-7 h-7 rounded-full bg-[#38332E] group-hover:bg-[#9E7B66] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#EAE7E2]" />
                </div>
              </button>

              <a
                href="#scope"
                className="inline-flex items-center gap-2 px-6 py-4 bg-white/80 hover:bg-white text-[#22201D] rounded-full font-semibold text-base border border-[#D8D3CA] shadow-sm transition-all duration-300"
              >
                <span>Learn the Scope</span>
              </a>
            </div>

          </div>

          {/* Right Hero Column: Showcase Card imitating reference layout */}
          <div className="lg:col-span-6 relative">
            
            {/* White floating card container */}
            <div className="relative bg-[#FAF8F5] border border-[#D8D3CA] rounded-[2.25rem] p-6 sm:p-8 shadow-xl shadow-stone-900/5 transition-all">
              
              {/* Top Pill Category Selectors */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setActiveCategoryTab('smartphones')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategoryTab === 'smartphones'
                      ? 'bg-[#22201D] text-[#EAE7E2]'
                      : 'bg-white border border-[#D8D3CA] text-[#6B635B] hover:border-[#9E7B66]'
                  }`}
                >
                  Smartphones
                </button>
                <button
                  onClick={() => setActiveCategoryTab('cables')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategoryTab === 'cables'
                      ? 'bg-[#22201D] text-[#EAE7E2]'
                      : 'bg-white border border-[#D8D3CA] text-[#6B635B] hover:border-[#9E7B66]'
                  }`}
                >
                  Cables & Accessories
                </button>
                <button
                  onClick={() => setActiveCategoryTab('wastes')}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategoryTab === 'wastes'
                      ? 'bg-[#22201D] text-[#EAE7E2]'
                      : 'bg-white border border-[#D8D3CA] text-[#6B635B] hover:border-[#9E7B66]'
                  }`}
                >
                  WEEE Cat 6
                </button>
              </div>

              {/* Showcase Sub-header */}
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D] mb-2">
                Rapid Tech Turnover & Small Electronics
              </h3>
              <p className="text-sm text-[#6B635B] mb-6">
                Small IT equipment under 50cm accounts for millions of forgotten discarded devices sitting in drawers.
              </p>

              {/* Image Frame with Overlay Callout (Reference "Roomtour" style) */}
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Electronic waste circuit board microchips"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Widget (matching reference ROOMTOUR widget) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-stone-200/80 max-w-[200px]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#9E7B66] mb-1">
                    NATIONAL SPOTLIGHT
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#9E7B66]/15 flex items-center justify-center text-[#9E7B66]">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#22201D]">537M kg Annual</div>
                      <div className="text-[10px] text-[#6B635B]">E-waste in PH (2022)</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#22201D]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Smartphone className="w-5 h-5 text-[#D4A373]" />
                    <div>
                      <div className="text-xs font-bold">Category 6 WEEE Impact</div>
                      <div className="text-[11px] text-stone-300">Smartphones, chargers & telecom gear</div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#D4A373] text-[#22201D] font-extrabold px-2 py-0.5 rounded-full">
                    CRITICAL
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Banner: Key Metric Cards (User Data standard) matching bottom cards in reference */}
        <div className="pt-6 border-t border-[#D8D3CA]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D]">
                The Philippines E-Waste Baseline
              </h2>
              <p className="text-sm text-[#6B635B]">
                Key metrics based on PEEC Initiative research & national waste monitoring data[cite: 1].
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9E7B66] bg-[#9E7B66]/10 px-3.5 py-1.5 rounded-full border border-[#9E7B66]/20">
              <Info className="w-3.5 h-3.5" />
              PEEC Data 2022–2026[cite: 1]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {METRICS_DATA.map((metric, idx) => (
              <div 
                key={metric.id}
                className="group relative bg-[#FAF8F5] hover:bg-white border border-[#D8D3CA] hover:border-[#9E7B66]/50 p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#EAE7E2] rounded-2xl group-hover:bg-[#22201D] group-hover:text-white transition-colors duration-300">
                      {getMetricIcon(metric.icon)}
                    </div>
                    <span className="text-xs font-bold text-[#9E7B66] bg-[#9E7B66]/10 px-2.5 py-1 rounded-full border border-[#9E7B66]/20">
                      {metric.trend}
                    </span>
                  </div>

                  <div className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#22201D] tracking-tight mb-2 group-hover:text-[#9E7B66] transition-colors">
                    {metric.value}
                  </div>

                  <h3 className="font-sans text-base font-bold text-[#22201D] mb-2 leading-snug">
                    {metric.label}
                  </h3>
                </div>

                <p className="text-xs text-[#6B635B] leading-relaxed pt-4 border-t border-[#EAE7E2]">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
