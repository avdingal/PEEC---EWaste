import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenPledge }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Scope', href: '#scope' },
    { name: 'Causes', href: '#causes' },
    { name: 'Impacts', href: '#impacts' },
    { name: 'Action', href: '#action' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${
        scrolled 
          ? 'bg-[#EAE7E2]/90 backdrop-blur-md shadow-sm border-b border-[#D8D3CA]/60 py-3' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#home" className="flex items-center">
          <BrandLogo />
        </a>

        {/* Desktop Nav Links - Centered Pill matching visual layout of design reference */}
        <nav className="hidden md:flex items-center space-x-1 bg-white/70 backdrop-blur-md border border-[#D8D3CA] px-4 py-1.5 rounded-full shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-[#22201D] hover:text-[#9E7B66] rounded-full transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Secondary Controls */}
        <div className="hidden md:flex items-center space-x-3">
          <span className="text-xs font-semibold tracking-wider text-[#6B635B] uppercase hidden xl:inline-block">
            ENG
          </span>
          <div className="h-4 w-[1px] bg-[#C4BEB4] hidden xl:block" />
          <button
            onClick={onOpenPledge}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-[#EAE7E2] bg-[#22201D] hover:bg-[#38332E] rounded-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4A373] group-hover:rotate-12 transition-transform duration-300" />
              Pledge to Recycle
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#38332E] to-[#9E7B66] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenPledge}
            className="px-3.5 py-1.5 text-xs font-semibold text-[#EAE7E2] bg-[#22201D] rounded-full"
          >
            Pledge
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#22201D] hover:bg-white/50 rounded-xl transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#D8D3CA] px-4 pt-3 pb-6 space-y-3 mt-2 animate-fadeIn shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2 text-base font-semibold text-[#22201D] hover:bg-[#EAE7E2] rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-[#EAE7E2]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPledge();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#EAE7E2] bg-[#22201D] rounded-xl shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#D4A373]" />
              Pledge to Recycle
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
