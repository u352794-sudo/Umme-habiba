import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061d3b] text-[#c5dfff] border-t border-[#0b2d59] py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-xs">
          <div>
            <span className="font-editorial text-xl font-bold text-white block mb-1">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[#a9d2ff]">
              Performance Marketer · Founder of The Custom Edit
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[#c5dfff]">
            <a href="#uh-about" className="hover:text-white transition-colors">About</a>
            <a href="#uh-services" className="hover:text-white transition-colors">Services</a>
            <a href="#uh-case-studies" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#uh-founder" className="hover:text-white transition-colors">The Custom Edit</a>
            <a href="#uh-experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#uh-contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-[#1254a4] text-white transition-colors text-xs"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 text-center text-xs text-[#8ab9ec]">
          © {new Date().getFullYear()} Umm E Habiba | Performance Marketer | Founder of The Custom Edit
        </div>

      </div>
    </footer>
  );
};
