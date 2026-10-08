import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X, MessageCircle, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenSummary: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSummary, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#uh-about' },
    { label: 'Services', href: '#uh-services' },
    { label: 'Case Studies', href: '#uh-case-studies' },
    { label: 'The Custom Edit', href: '#uh-founder' },
    { label: 'Experience', href: '#uh-experience' },
    { label: 'Contact', href: '#uh-contact' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#d8e7f7] transition-all">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <a 
          href="#" 
          className="font-editorial text-2xl lg:text-3xl font-bold tracking-tight text-[#0b2d59] hover:text-[#1254a4] transition-colors"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Clean Text Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#526276]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#1254a4] transition-colors relative py-1 text-[13px] tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenSummary}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1254a4] bg-[#eaf4ff] hover:bg-[#d4eaff] rounded border border-[#d8e7f7] transition-all"
            title="View Executive Summary & CV"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Executive Bio</span>
          </button>
          
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1254a4] hover:bg-[#0b2d59] transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#0b2d59] hover:text-[#1254a4] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#d8e7f7] px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#0b2d59] hover:text-[#1254a4] py-1 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSummary();
                }}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#1254a4] bg-[#eaf4ff] rounded border border-[#d8e7f7]"
              >
                View Executive Bio
              </button>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1254a4] rounded"
              >
                WhatsApp 0305 6346858
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
