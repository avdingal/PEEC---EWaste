import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, ShieldCheck, Download, Share2, Recycle } from 'lucide-react';

export default function PledgeModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [itemType, setItemType] = useState('Smartphones & Cables');
  const [itemCount, setItemCount] = useState('3-5 items');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [pledgeId, setPledgeId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    const randomId = 'PEEC-' + Math.floor(100000 + Math.random() * 900000);
    setPledgeId(randomId);
    setIsSubmitted(true);

    // Fire Confetti Celebration
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4A373', '#9E7B66', '#22201D', '#FAF8F5']
      });
    } catch (err) {
      console.log('Confetti triggered', err);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF8F5] border border-[#D8D3CA] w-full max-w-lg rounded-[2.25rem] p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#6B635B] hover:text-[#22201D] hover:bg-[#EAE7E2] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-[#9E7B66]/15 rounded-xl text-[#9E7B66]">
                <Recycle className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B66]">
                PEEC Eco-Pledge Campaign
              </span>
            </div>

            <h3 className="font-serif-heading text-3xl font-bold text-[#22201D] mb-2">
              Pledge to Recycle Your E-Waste
            </h3>

            <p className="text-sm text-[#524941] mb-6 font-sans">
              Join thousands of advocates taking responsibility for unused smartphones, cables, and electronics sitting in drawers.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#22201D] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maria Santos"
                  className="w-full px-4 py-3 bg-white border border-[#D8D3CA] rounded-xl text-sm font-medium text-[#22201D] focus:border-[#9E7B66] focus:ring-2 focus:ring-[#9E7B66]/20 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#22201D] uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. maria@example.com"
                  className="w-full px-4 py-3 bg-white border border-[#D8D3CA] rounded-xl text-sm font-medium text-[#22201D] focus:border-[#9E7B66] focus:ring-2 focus:ring-[#9E7B66]/20 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#22201D] uppercase tracking-wider mb-1.5">
                    Primary E-Waste Item
                  </label>
                  <select
                    value={itemType}
                    onChange={(e) => setItemType(e.target.value)}
                    className="w-full px-3 py-3 bg-white border border-[#D8D3CA] rounded-xl text-xs font-semibold text-[#22201D] outline-none"
                  >
                    <option value="Smartphones & Cables">Smartphones & Cables</option>
                    <option value="Laptops & Chargers">Laptops & Chargers</option>
                    <option value="Earbuds & Power Banks">Earbuds & Power Banks</option>
                    <option value="Small Appliances">Small Household Devices</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#22201D] uppercase tracking-wider mb-1.5">
                    Target Volume
                  </label>
                  <select
                    value={itemCount}
                    onChange={(e) => setItemCount(e.target.value)}
                    className="w-full px-3 py-3 bg-white border border-[#D8D3CA] rounded-xl text-xs font-semibold text-[#22201D] outline-none"
                  >
                    <option value="1-2 items">1 - 2 items</option>
                    <option value="3-5 items">3 - 5 items</option>
                    <option value="6-10 items">6 - 10 items</option>
                    <option value="10+ items">10+ items</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-[#EAE7E2]/60 rounded-xl text-xs text-[#6B635B] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9E7B66] shrink-0" />
                <span>Your pledge supports PEEC's e-waste monitoring baseline in the Philippines[cite: 1].</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#22201D] text-[#EAE7E2] hover:bg-[#38332E] font-semibold rounded-xl text-sm shadow-lg flex items-center justify-center gap-2 transition-all mt-4"
              >
                <Sparkles className="w-4 h-4 text-[#D4A373]" />
                Confirm & Sign Digital Pledge
              </button>
            </form>
          </div>
        ) : (
          /* Certificate Result */
          <div className="text-center py-2 animate-fadeIn">
            <div className="w-14 h-14 bg-[#9E7B66]/20 text-[#9E7B66] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#9E7B66]">
              Pledge Successfully Registered!
            </span>

            <h3 className="font-serif-heading text-3xl font-bold text-[#22201D] mt-1 mb-2">
              Thank You, {name}!
            </h3>

            <p className="text-xs text-[#6B635B] mb-6">
              You are officially recorded as an E-Waste Champion with PEEC Initiative.
            </p>

            {/* Digital Certificate Card */}
            <div className="bg-[#22201D] text-[#EAE7E2] p-6 rounded-2xl text-left mb-6 border border-[#D4A373]/30 shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A373]">
                  PEEC ADVOCACY CERTIFICATE
                </span>
                <span className="text-xs font-mono font-bold text-stone-400">{pledgeId}</span>
              </div>

              <div className="font-serif-heading text-xl font-bold text-white mb-1">
                {name}
              </div>
              <div className="text-xs text-stone-300 mb-3">
                Committed to drop off <strong>{itemCount}</strong> of <strong>{itemType}</strong> at a certified e-waste bin.
              </div>

              <div className="text-[10px] text-stone-400 pt-2 border-t border-white/10 flex justify-between">
                <span>Date: {new Date().toLocaleDateString()}</span>
                <span>PEEC Initiative PH</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3 bg-[#EAE7E2] hover:bg-[#D8D3CA] text-[#22201D] font-semibold text-xs rounded-xl transition-colors"
              >
                Make Another Pledge
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-[#22201D] text-white hover:bg-[#38332E] font-semibold text-xs rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
