import React, { useState, useEffect } from 'react';
import { ACTION_STEPS, DROP_OFF_LOCATIONS } from '../data/ewasteData';
import { 
  Search, 
  MapPin, 
  Wrench, 
  ShieldCheck,
  Repeat,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock, 
  Phone, 
  Building2, 
  CheckCircle, 
  ExternalLink, 
  Sparkles,
  Copy,
  Check,
  X
} from 'lucide-react';

export default function ActionDropOff({ onOpenPledge }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState(DROP_OFF_LOCATIONS[0]);
  const [copiedId, setCopiedId] = useState(null);
  const [activeModalSolution, setActiveModalSolution] = useState(null);

  // ESC key and body scroll lock for solution evaluation modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveModalSolution(null);
      }
    };

    if (activeModalSolution) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModalSolution]);

  const getActionIcon = (iconName) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#9E7B66]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#9E7B66]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#9E7B66]" />;
      case 'Repeat': return <Repeat className="w-6 h-6 text-[#9E7B66]" />;
      default: return <MapPin className="w-6 h-6 text-[#9E7B66]" />;
    }
  };

  const filteredLocations = DROP_OFF_LOCATIONS.filter((loc) => {
    const matchesSearch = 
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = selectedRegion === 'All' || loc.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  const handleCopyAddress = (loc) => {
    navigator.clipboard.writeText(`${loc.name} - ${loc.address}`);
    setCopiedId(loc.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="action" className="py-20 md:py-28 bg-[#EAE7E2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-[#9E7B66] font-medium text-base">/</span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#6B635B] bg-white/80 px-3 py-1 rounded-full border border-[#D8D3CA]">
              04 — Take Action
            </span>
          </div>

          <h2 className="font-serif-heading text-4xl sm:text-5xl font-bold text-[#22201D] tracking-tight mb-4">
            Practical Solutions & E-Waste Locator
          </h2>

          <p className="text-base sm:text-lg text-[#524941] font-sans leading-relaxed">
            Every household can reduce e-waste through three simple habits: extending hardware lifespans, donating functional gear, and using certified collection bins.
          </p>
        </div>

        {/* 4 Action Tips Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {ACTION_STEPS.map((step) => (
            <div
              key={step.number}
              onClick={() => setActiveModalSolution(step)}
              className="bg-[#FAF8F5] border border-[#D8D3CA] p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-[#9E7B66] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="font-serif-heading text-4xl font-bold text-[#9E7B66]/60 group-hover:text-[#9E7B66] transition-colors">
                    {step.number}
                  </div>
                  <div className="p-3 bg-[#EAE7E2] rounded-2xl group-hover:bg-[#22201D] group-hover:text-white transition-colors">
                    {getActionIcon(step.icon)}
                  </div>
                </div>

                <h3 className="font-serif-heading text-2xl font-bold text-[#22201D] mb-3 group-hover:text-[#9E7B66] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-[#524941] leading-relaxed font-sans mb-6">
                  {step.shortDescription || step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE7E2] flex items-center justify-between text-xs font-bold text-[#9E7B66] group-hover:text-[#22201D] transition-colors">
                <span>{step.actionText || 'Evaluate Solution →'}</span>
                <div className="w-2 h-2 rounded-full bg-[#9E7B66] group-hover:bg-[#22201D] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Interactive E-Waste Bin Locator Tool */}
        <div className="bg-[#FAF8F5] border border-[#D8D3CA] rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#22201D] text-[#D4A373] text-xs font-extrabold rounded-full mb-2">
                <MapPin className="w-3.5 h-3.5" />
                INTERACTIVE TOOL
              </div>
              <h3 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#22201D]">
                Locate an E-Waste Drop-off Bin
              </h3>
              <p className="text-sm text-[#6B635B] mt-1">
                Find nearby certified recycling hubs across Metro Manila, Visayas, and Mindanao.
              </p>
            </div>

            <button
              onClick={onOpenPledge}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#22201D] text-[#EAE7E2] hover:bg-[#38332E] rounded-full font-semibold text-sm shadow-md transition-all shrink-0"
            >
              <Sparkles className="w-4 h-4 text-[#D4A373]" />
              Pledge Your E-Waste
            </button>
          </div>

          {/* Search Bar & Region Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-8">
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-[#9E7B66] absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search city, mall, or landmark (e.g. Megamall, BGC, Cebu, Makati)..."
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#D8D3CA] focus:border-[#9E7B66] focus:ring-2 focus:ring-[#9E7B66]/20 rounded-2xl text-sm font-medium text-[#22201D] shadow-2xs outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B635B] hover:text-[#22201D]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Region Filter Dropdown / Pill */}
            <div className="md:col-span-4 flex items-center gap-2">
              <span className="text-xs font-bold text-[#6B635B] shrink-0">Region:</span>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full py-3.5 px-4 bg-white border border-[#D8D3CA] rounded-2xl text-sm font-semibold text-[#22201D] outline-none cursor-pointer focus:border-[#9E7B66]"
              >
                <option value="All">All Philippines Hubs</option>
                <option value="NCR">NCR / Metro Manila</option>
                <option value="Luzon">Luzon</option>
                <option value="Visayas">Visayas</option>
                <option value="Mindanao">Mindanao</option>
              </select>
            </div>
          </div>

          {/* Locator Results Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Interactive List */}
            <div className="lg:col-span-6 space-y-3 max-h-[460px] overflow-y-auto pr-2">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => setSelectedLocation(loc)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      selectedLocation.id === loc.id
                        ? 'bg-[#22201D] text-white border-[#22201D] shadow-lg scale-[1.01]'
                        : 'bg-white text-[#22201D] border-[#D8D3CA] hover:border-[#9E7B66] hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="font-serif-heading text-lg font-bold leading-tight">
                        {loc.name}
                      </h4>
                      <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shrink-0 ${
                        selectedLocation.id === loc.id
                          ? 'bg-[#D4A373] text-[#22201D]'
                          : 'bg-[#9E7B66]/15 text-[#9E7B66]'
                      }`}>
                        {loc.type}
                      </span>
                    </div>

                    <p className={`text-xs mb-3 flex items-center gap-1.5 ${
                      selectedLocation.id === loc.id ? 'text-stone-300' : 'text-[#6B635B]'
                    }`}>
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {loc.address}
                    </p>

                    <div className="flex items-center justify-between text-[11px] pt-3 border-t border-current/10">
                      <span className="font-medium">{loc.city}</span>
                      <span className="font-semibold text-[#D4A373]">{loc.distance}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center bg-white rounded-2xl border border-[#D8D3CA]">
                  <p className="text-sm font-semibold text-[#6B635B]">No drop-off bins found for "{searchTerm}".</p>
                  <button
                    onClick={() => { setSearchTerm(''); setSelectedRegion('All'); }}
                    className="mt-3 text-xs font-bold text-[#9E7B66] hover:underline"
                  >
                    Reset filters to view all hubs
                  </button>
                </div>
              )}
            </div>

            {/* Right: Selected Location Detail Card */}
            {selectedLocation && (
              <div className="lg:col-span-6 bg-white border border-[#D8D3CA] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#9E7B66]">
                      SELECTED HUB DETAILS
                    </span>
                    <span className="text-xs font-semibold bg-[#EAE7E2] px-3 py-1 rounded-full text-[#22201D]">
                      {selectedLocation.region}
                    </span>
                  </div>

                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#22201D] mb-3">
                    {selectedLocation.name}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-sm text-[#524941]">
                      <MapPin className="w-4 h-4 text-[#9E7B66] shrink-0 mt-1" />
                      <span><strong>Address:</strong> {selectedLocation.address}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#524941]">
                      <Clock className="w-4 h-4 text-[#9E7B66] shrink-0" />
                      <span><strong>Hours:</strong> {selectedLocation.hours}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#524941]">
                      <Building2 className="w-4 h-4 text-[#9E7B66] shrink-0" />
                      <span><strong>Operator:</strong> {selectedLocation.operator}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-[#524941]">
                      <Phone className="w-4 h-4 text-[#9E7B66] shrink-0" />
                      <span><strong>Contact:</strong> {selectedLocation.contact}</span>
                    </div>
                  </div>

                  {/* Accepted Devices List */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#6B635B] mb-2.5">
                      Accepted E-Waste Categories:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedLocation.acceptedItems.map((item, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] border border-[#D8D3CA] rounded-xl text-xs font-semibold text-[#22201D]"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#9E7B66]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#EAE7E2] flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleCopyAddress(selectedLocation)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#22201D] text-white hover:bg-[#38332E] rounded-xl font-semibold text-xs transition-colors shadow-sm"
                  >
                    {copiedId === selectedLocation.id ? (
                      <>
                        <Check className="w-4 h-4 text-[#D4A373]" />
                        Copied Address!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#D4A373]" />
                        Copy Hub Address
                      </>
                    )}
                  </button>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation.name + ' ' + selectedLocation.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#EAE7E2] hover:bg-[#D8D3CA] text-[#22201D] rounded-xl font-semibold text-xs transition-colors border border-[#D8D3CA]"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#9E7B66]" />
                  </a>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Solution Evaluation Modal Dialog */}
      {activeModalSolution && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalSolution(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="solution-modal-title"
        >
          <div 
            className="bg-[#1F1D1A] border border-[#D4A373]/30 text-[#EAE7E2] w-full max-w-3xl rounded-[2.25rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#38332E]">
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-[#2A2723] border border-[#D4A373]/30 rounded-2xl text-[#D4A373] shrink-0">
                  {getActionIcon(activeModalSolution.icon)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#D4A373] uppercase bg-[#D4A373]/10 px-2.5 py-0.5 rounded-full border border-[#D4A373]/20">
                      Solution {activeModalSolution.number}
                    </span>
                    <span className="text-xs text-[#9E7B66] font-semibold">
                      Milestone 2 Evaluation
                    </span>
                  </div>
                  <h3 id="solution-modal-title" className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
                    {activeModalSolution.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveModalSolution(null)}
                className="p-2.5 text-stone-400 hover:text-white hover:bg-[#38332E] rounded-full transition-colors shrink-0 cursor-pointer"
                aria-label="Close modal dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content Sections */}
            <div className="overflow-y-auto pr-2 space-y-6 pt-6 font-sans flex-grow">
              
              {/* Short Summary Banner */}
              <div className="p-4 bg-[#2A2723] rounded-2xl border border-white/5 text-sm text-[#D8D3CA] leading-relaxed">
                {activeModalSolution.shortDescription || activeModalSolution.description}
              </div>

              {/* 1. Current Status */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-2">
                  <FileText className="w-4 h-4 text-[#D4A373]" />
                  <span>Current Status in the Philippines</span>
                </div>
                <p className="text-sm text-[#D8D3CA] leading-relaxed pl-6 border-l-2 border-[#D4A373]/40">
                  {activeModalSolution.currentStatus}
                </p>
              </div>

              {/* 2. Procedure / Implementation */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4A373]" />
                  <span>Procedure & Implementation Steps</span>
                </div>
                <div className="text-sm text-[#D8D3CA] leading-relaxed pl-6 border-l-2 border-[#D4A373]/40 space-y-2 whitespace-pre-line">
                  {activeModalSolution.procedure}
                </div>
              </div>

              {/* 3. Effect & Results */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-2">
                  <Sparkles className="w-4 h-4 text-[#D4A373]" />
                  <span>Observed Outcomes & Metrics</span>
                </div>
                <p className="text-sm text-[#D8D3CA] leading-relaxed pl-6 border-l-2 border-[#D4A373]/40">
                  {activeModalSolution.effect}
                </p>
              </div>

              {/* 4. Assessment & Feasibility */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A373] mb-3">
                  <ShieldCheck className="w-4 h-4 text-[#D4A373]" />
                  <span>Part 2: Sustainability, Feasibility & Limitations</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pl-6 border-l-2 border-[#D4A373]/40">
                  <div className="p-4 bg-[#2A2723] rounded-2xl border border-white/5">
                    <div className="text-xs font-bold text-[#D4A373] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Sustainability
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {activeModalSolution.assessment?.sustainability || activeModalSolution.assessment}
                    </p>
                  </div>

                  <div className="p-4 bg-[#2A2723] rounded-2xl border border-white/5">
                    <div className="text-xs font-bold text-[#D4A373] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#D4A373] shrink-0" />
                      Feasibility
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {activeModalSolution.assessment?.feasibility}
                    </p>
                  </div>

                  <div className="p-4 bg-[#2A2723] rounded-2xl border border-white/5">
                    <div className="text-xs font-bold text-[#D4A373] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      Limitations
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      {activeModalSolution.assessment?.limitations}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5. References */}
              <div className="pt-2 border-t border-[#38332E]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E7B66] mb-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#9E7B66]" />
                  <span>References & In-Text Citations</span>
                </div>
                <p className="text-xs text-stone-400 italic">
                  {activeModalSolution.sources}
                </p>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-5 border-t border-[#38332E] mt-4 flex items-center justify-between">
              <span className="text-xs text-stone-400">
                MO-ENV076 Week 7 & 8 Worksheet
              </span>
              <button
                onClick={() => setActiveModalSolution(null)}
                className="px-5 py-2.5 bg-[#D4A373] hover:bg-[#c29363] text-[#1F1D1A] font-bold text-xs rounded-xl transition-colors shadow-md cursor-pointer"
              >
                Close Evaluation
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
