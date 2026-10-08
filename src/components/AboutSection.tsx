import React from 'react';
import { PERSONAL_INFO, IMAGES } from '../data/portfolioData';
import { Target, Layers, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="uh-about" className="py-20 lg:py-28 bg-white border-b border-[#d8e7f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Signature Accent Box */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative bg-[#1254a4] text-white p-8 sm:p-10 shadow-[0_14px_35px_rgba(18,84,164,0.15)] overflow-hidden">
              {/* Inner Decorative Border from original CSS */}
              <div 
                aria-hidden="true" 
                className="absolute inset-3 sm:inset-4 border border-white/30 pointer-events-none" 
              />
              
              <div className="relative z-10 text-center py-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#c5dfff] block mb-3">
                  Philosophy
                </span>
                
                <h3 className="font-editorial text-3xl sm:text-4xl text-white font-semibold leading-snug mb-4">
                  Creative mind.<br />
                  <span className="italic font-normal">Strategic approach.</span>
                </h3>
                
                <p className="text-[#dceeff] text-sm leading-relaxed max-w-xs mx-auto">
                  Digital marketing, content and management with purpose.
                </p>
              </div>
            </div>

            {/* Supporting Workspace Snapshot */}
            <div className="relative overflow-hidden border border-[#d8e7f7] shadow-sm bg-slate-50">
              <img
                src={IMAGES.workspace}
                alt="Digital marketing strategy and workspace"
                referrerPolicy="no-referrer"
                className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2d59]/70 via-transparent to-transparent flex items-end p-4">
                <p className="text-white text-xs font-medium">
                  Strategy, Analytics & Content Direction Workspace
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1254a4] mb-3">
              About Me
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0b2d59] font-semibold leading-[1.15] mb-6 text-balance">
              Creativity backed by strategy.
            </h2>

            <div className="space-y-4 text-[#526276] text-base leading-[1.8] mb-8">
              <p>
                Hi, I am Umm E Habiba, a passionate Performance Marketer dedicated to helping businesses grow and scale their online presence. I specialize in <strong className="text-[#0b2d59] font-semibold">Performance Marketing, Paid Meta Ads, SEO, and High-Converting Content</strong>.
              </p>
              <p>
                I create high-performing content, develop revenue-focused marketing strategies, and help brands acquire the right customers through digital platforms. I focus on combining creativity with smart performance marketing strategies to increase brand awareness, engagement, and measurable business growth.
              </p>
              <p>
                I am constantly testing new ad algorithms and data trends to deliver creative, professional, and result-focused ROI for my clients.
              </p>
            </div>

            {/* Three Foundation Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#d8e7f7]">
              <div className="p-4 bg-[#f5f9ff] border border-[#d8e7f7]">
                <Target className="w-5 h-5 text-[#1254a4] mb-2" />
                <h4 className="font-semibold text-[#0b2d59] text-sm mb-1">Audience First</h4>
                <p className="text-xs text-[#526276] leading-relaxed">
                  Tailored messaging that addresses customer needs and builds real trust.
                </p>
              </div>

              <div className="p-4 bg-[#f5f9ff] border border-[#d8e7f7]">
                <Layers className="w-5 h-5 text-[#1254a4] mb-2" />
                <h4 className="font-semibold text-[#0b2d59] text-sm mb-1">6-Year Leadership</h4>
                <p className="text-xs text-[#526276] leading-relaxed">
                  Strong operational rigor, seamless communication, and disciplined deadlines.
                </p>
              </div>

              <div className="p-4 bg-[#f5f9ff] border border-[#d8e7f7]">
                <Sparkles className="w-5 h-5 text-[#1254a4] mb-2" />
                <h4 className="font-semibold text-[#0b2d59] text-sm mb-1">Aesthetic Polish</h4>
                <p className="text-xs text-[#526276] leading-relaxed">
                  Canva mastery creating visually cohesive carousels and brand assets.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
