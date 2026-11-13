import React from 'react';
import { ADVOCACY_TA_DATA } from '../data/ewasteData';
import { 
  Compass, 
  MousePointerClick, 
  Lightbulb, 
  Wrench, 
  Camera, 
  Sparkles, 
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export default function AdvocacySection({ onOpenPledge }) {
  return (
    <section id="advocacy" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#D8D3CA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#9E7B66] font-medium text-base">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B635B] bg-[#EAE7E2] px-3 py-1 rounded-full border border-[#D8D3CA]">
              05 — Advocacy & Field Notes
            </span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            Why This Website Exists & Small Steps in Action
          </h2>

          <p className="text-base sm:text-lg text-[#524941] font-sans leading-relaxed">
            Our reflections, system-level recommendations, and real-world steps we are taking as students to keep electronics out of landfills.
          </p>
        </div>

        {/* PART 1: Why This Exists & How It Engages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left: Why This Website Exists */}
          <div className="lg:col-span-7 bg-white border border-[#D8D3CA] rounded-[2rem] p-8 sm:p-10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#EAE7E2] rounded-2xl text-[#9E7B66]">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D]">
                Why This Website Exists
              </h3>
            </div>

            <div className="space-y-6">
              {ADVOCACY_TA_DATA.whyThisExists.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#9E7B66]">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#524941] leading-relaxed font-sans">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: How Does Our Website Engage With People */}
          <div className="lg:col-span-5 bg-[#22201D] text-[#EAE7E2] rounded-[2rem] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#38332E] rounded-2xl text-[#D4A373]">
                  <MousePointerClick className="w-6 h-6" />
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-white">
                  How Our Website Engages People
                </h3>
              </div>

              <div className="space-y-5">
                {ADVOCACY_TA_DATA.howWeEngage.map((item, idx) => (
                  <div key={idx} className="p-4 bg-[#2A2723] rounded-2xl border border-white/5">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: Personal Conclusions */}
        <div className="bg-[#EAE7E2] border border-[#D8D3CA] rounded-[2.5rem] p-8 sm:p-10 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-white rounded-2xl text-[#9E7B66] border border-[#D8D3CA]">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B66]">
                KEY SYNTHESIS
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D]">
                Personal Conclusions
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ADVOCACY_TA_DATA.personalConclusions.map((item, idx) => (
              <div key={idx} className="bg-[#FAF8F5] border border-[#D8D3CA] p-6 rounded-2xl shadow-2xs">
                <div className="flex items-start gap-3">
                  <span className="font-serif-heading text-xl font-bold text-[#9E7B66]">
                    0{idx + 1}.
                  </span>
                  <p className="text-sm text-[#524941] leading-relaxed">
                    <strong className="text-[#22201D]">{item.lead}</strong> {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: Recommendations (System Improvements, Suggestions & Campus Proposals) */}
        <div className="bg-white border border-[#D8D3CA] rounded-[2.5rem] p-8 sm:p-10 mb-20 shadow-sm">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#EAE7E2] rounded-2xl text-[#9E7B66]">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B66]">
                MOVING FORWARD
              </span>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D]">
                Recommendations & Campus Proposals
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Cols: What to improve on current solutions */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#6B635B] mb-2">
                What to Improve on Current Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ADVOCACY_TA_DATA.recommendations.improvements.map((imp, idx) => (
                  <div key={idx} className="p-5 bg-[#FAF8F5] border border-[#D8D3CA] rounded-2xl">
                    <div className="text-sm font-bold text-[#22201D] mb-1.5">
                      {imp.category}
                    </div>
                    <p className="text-xs text-[#524941] leading-relaxed">
                      {imp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Cols: Suggestions & New Campus Solutions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-[#FAF8F5] border border-[#D8D3CA] rounded-2xl">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#9E7B66] mb-3">
                  Practical Suggestions
                </h4>
                <ul className="space-y-2.5">
                  {ADVOCACY_TA_DATA.recommendations.suggestions.map((sug, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#524941]">
                      <CheckCircle2 className="w-4 h-4 text-[#9E7B66] shrink-0 mt-0.5" />
                      <span>{sug}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-[#22201D] text-white rounded-2xl">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#D4A373] mb-3">
                  New Solutions & Campus Initiatives
                </h4>
                <ul className="space-y-2.5">
                  {ADVOCACY_TA_DATA.recommendations.newSolutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                      <ArrowUpRight className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* PART 4: Small Steps That We Can Do / Currently Doing (Photo Documentation) */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#22201D] rounded-2xl text-[#D4A373]">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B66]">
                STUDENT FIELD LOG
              </span>
              <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#22201D]">
                Small Steps We Are Currently Doing
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ADVOCACY_TA_DATA.smallSteps.map((step) => (
              <div 
                key={step.id} 
                className="bg-white border border-[#D8D3CA] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                {/* Image Container (Handles 1 or 2 photos cleanly) */}
                <div className={`grid ${step.images.length > 1 ? 'grid-cols-2 gap-1 bg-[#22201D]' : 'grid-cols-1'} h-64 overflow-hidden border-b border-[#D8D3CA]`}>
                  {step.images.map((imgSrc, i) => (
                    <img
                      key={i}
                      src={imgSrc}
                      alt={`${step.title} ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  ))}
                </div>

                {/* Story Body */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#9E7B66] bg-[#FAF8F5] border border-[#D8D3CA] px-3 py-1 rounded-full mb-3">
                      {step.badge}
                    </span>
                    <h4 className="font-serif-heading text-xl font-bold text-[#22201D] mb-3">
                      {step.title}
                    </h4>
                    <p className="text-sm text-[#524941] leading-relaxed font-sans">
                      {step.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 5: Outro & Pledge Call-to-Action Banner */}
        <div className="bg-[#22201D] text-[#EAE7E2] rounded-[2.5rem] p-8 sm:p-12 shadow-2xl border border-[#38332E] text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#38332E] text-[#D4A373] text-xs font-extrabold rounded-full mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            TAKE THE NEXT STEP
          </div>

          <blockquote className="font-serif-heading text-2xl sm:text-3xl font-bold text-white leading-snug mb-4">
            “{ADVOCACY_TA_DATA.outro.quote}”
          </blockquote>

          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto mb-8">
            {ADVOCACY_TA_DATA.outro.caption}
          </p>

          <button
            onClick={onOpenPledge}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#D4A373] hover:bg-[#c59362] text-[#22201D] rounded-full font-extrabold text-sm shadow-lg transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Pledge to Recycle</span>
          </button>
        </div>

      </div>
    </section>
  );
}