import React from 'react';
import { PERSONAL_INFO, IMAGES } from '../data/portfolioData';
import { ExternalLink, Sparkles, Instagram, Video, Youtube } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section id="uh-founder" className="py-20 lg:py-28 bg-[#faf7f2] border-b border-[#e6dcce]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Luxury Beige Founder Plaque & Showcase Image */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Custom Edit Insignia Block (Warm Luxury Beige & Champagne Gold) */}
            <div className="bg-[#ebdcc8] text-[#2d241c] p-8 sm:p-10 text-center shadow-[0_14px_35px_rgba(140,115,85,0.12)] border border-[#d6c2a8] relative overflow-hidden">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#7d664c] block">
                FOUNDER & CREATIVE DIRECTOR
              </span>

              <div className="my-5 py-4 border-y border-[#c7b093]/70">
                <strong className="block font-editorial text-3xl sm:text-4xl font-semibold tracking-wide text-[#2b221a] uppercase">
                  THE CUSTOM<br />EDIT
                </strong>
              </div>

              <span className="text-xs tracking-[0.2em] uppercase text-[#614e3b] font-medium block">
                Digital · Creative · Personal
              </span>
            </div>

            {/* Generated Artisan Wedding Keepsake Photo */}
            <div className="relative overflow-hidden border border-[#dfd2be] shadow-sm bg-white group">
              <img
                src={IMAGES.customEdit}
                alt="Handcrafted Nikkah booklets, veils, and custom wedding accessories by The Custom Edit"
                referrerPolicy="no-referrer"
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c2217]/85 via-transparent to-transparent flex items-end p-4">
                <p className="text-[#faf6f0] text-xs font-light tracking-wide">
                  Handcrafted Nikkah Booklets, Bridal Veils & Bespoke Keepsakes
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative & Links */}
          <div className="lg:col-span-7">
            
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#916f43] mb-3">
              My Creative Venture
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#2b221a] font-semibold leading-[1.15] mb-6 text-balance">
              Founder of The Custom Edit
            </h2>

            <div className="space-y-4 text-[#5e5143] text-base leading-[1.8] mb-8">
              <p>
                I am also the founder of <strong className="text-[#2b221a] font-semibold">The Custom Edit</strong>, a creative bespoke brand focused on Nikkah booklets, Nikkah veils, Nikkah frames, and fine wedding accessories.
              </p>
              <p>
                Through The Custom Edit, I combine creative direction, luxury product presentation, social media marketing, branding, and direct customer management to build a thoughtful, high-retention digital brand from the ground up.
              </p>
              <p>
                Running my own consumer brand provides me with practical, first-hand insight into customer acquisition costs, organic short-form video algorithms, and customer service excellence that directly benefits every performance marketing campaign I lead.
              </p>
            </div>

            {/* Key brand pillars in beige theme */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-xs text-[#3b3024] font-medium">
              <div className="p-3 bg-[#f5ede0] border border-[#e2d4be] text-center">
                <span>Nikkah Booklets</span>
              </div>
              <div className="p-3 bg-[#f5ede0] border border-[#e2d4be] text-center">
                <span>Bridal Veils</span>
              </div>
              <div className="p-3 bg-[#f5ede0] border border-[#e2d4be] text-center">
                <span>Bespoke Frames</span>
              </div>
              <div className="p-3 bg-[#f5ede0] border border-[#e2d4be] text-center">
                <span>Wedding Accessories</span>
              </div>
            </div>

            {/* Action buttons styled with beige/gold harmony */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.instagramCustomEditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#3a3024] hover:bg-[#241e17] transition-all shadow-sm"
              >
                <Instagram className="w-4 h-4" />
                <span>Visit The Custom Edit (@thecustom_edit)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={PERSONAL_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#3d3125] bg-[#ebdcc8] hover:bg-[#dfcdb5] border border-[#d6c2a8] transition-all"
              >
                <Video className="w-4 h-4" />
                <span>TikTok @thecustomedit2</span>
              </a>

              <a
                href={PERSONAL_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#544637] hover:text-[#241e17] bg-white hover:bg-slate-50 border border-[#dfd2be] transition-all"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>YouTube</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

