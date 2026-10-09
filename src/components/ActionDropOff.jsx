import React, { useState } from 'react';
import { ACTION_STEPS, DROP_OFF_LOCATIONS } from '../data/ewasteData';
import { 
  Search, 
  MapPin, 
  Wrench, 
  HeartHandshake, 
  Clock, 
  Phone, 
  Building2, 
  CheckCircle, 
  ExternalLink, 
  Sparkles,
  Copy,
  Check
} from 'lucide-react';

export default function ActionDropOff({ onOpenPledge }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState(DROP_OFF_LOCATIONS[0]);
  const [copiedId, setCopiedId] = useState(null);

  const getActionIcon = (iconName) => {
    switch (iconName) {
      case 'Wrench': return <Wrench className="w-6 h-6 text-[#9E7B66]" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-[#9E7B66]" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-[#9E7B66]" />;
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

        {/* 3 Action Tips Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {ACTION_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#FAF8F5] border border-[#D8D3CA] p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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

                <h3 className="font-serif-heading text-2xl font-bold text-[#22201D] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[#524941] leading-relaxed font-sans mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE7E2] flex items-center justify-between text-xs font-bold text-[#9E7B66]">
                <span>{step.actionText}</span>
                <div className="w-2 h-2 rounded-full bg-[#9E7B66]" />
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
    </section>
  );
}
