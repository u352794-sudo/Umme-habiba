import React, { useState } from 'react';
import { CASE_STUDIES, PERSONAL_INFO } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { Sparkles, Check, ArrowRight, MessageCircle, Quote } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  const [activeStudyId, setActiveStudyId] = useState<string>(CASE_STUDIES[0].id);

  const activeStudy = CASE_STUDIES.find(c => c.id === activeStudyId) || CASE_STUDIES[0];

  const handleConsultStudy = (study: CaseStudy) => {
    const text = encodeURIComponent(`Hi Umm E Habiba, I reviewed your "${study.title}" case study and would love to discuss a similar strategy for my brand.`);
    window.open(`${PERSONAL_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="uh-case-studies" className="py-20 lg:py-28 bg-[#f5f9ff] border-b border-[#d8e7f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1254a4] mb-3">
            Featured Projects
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0b2d59] font-semibold mb-4 leading-tight">
            Portfolio and case studies
          </h2>
          <p className="text-[#526276] text-base leading-relaxed">
            A closer look at my strategic role, campaign execution, and creative marketing deliverables.
          </p>
        </div>

        {/* Study Switcher Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white border border-[#d8e7f7] shadow-sm max-w-full overflow-x-auto">
            {CASE_STUDIES.map((study) => (
              <button
                key={study.id}
                onClick={() => setActiveStudyId(study.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeStudyId === study.id
                    ? 'bg-[#1254a4] text-white shadow-sm'
                    : 'text-[#526276] hover:text-[#0b2d59]'
                }`}
              >
                {study.title.split('—')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Card (Adheres to user's architecture, elevated) */}
        <div className="bg-white border border-[#d8e7f7] shadow-[0_14px_35px_rgba(18,84,164,0.10)] overflow-hidden max-w-[1050px] mx-auto">
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#1254a4] to-[#3a7ec9] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#c5dfff] font-bold mb-2">
                {activeStudy.industry} · {activeStudy.duration}
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white font-semibold mb-2">
                {activeStudy.title}
              </h3>
              <p className="text-[#e8f4ff] text-sm sm:text-base max-w-2xl">
                {activeStudy.subtitle}
              </p>
            </div>

            <button
              onClick={() => handleConsultStudy(activeStudy)}
              className="self-start md:self-auto shrink-0 inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0b2d59] bg-white hover:bg-[#eaf4ff] transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#1254a4]" />
              <span>Inquire Strategy</span>
            </button>
          </div>

          {/* Visual Showcase Banner */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden bg-slate-100 border-b border-[#d8e7f7]">
            <img
              src={activeStudy.image}
              alt={activeStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 sm:p-8">
              <div className="text-white max-w-2xl">
                <span className="text-xs font-bold tracking-widest uppercase text-[#99c9ff] block mb-1">
                  Creative Direction & Presentation
                </span>
                <p className="text-sm sm:text-base text-slate-100 font-light">
                  {activeStudy.overview}
                </p>
              </div>
            </div>
          </div>

          {/* 4-Item Grid (Project focus, My role, Strategy, Creative work) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 sm:p-10 bg-white">
            
            <div className="bg-[#f5f9ff] p-6 border border-[#d8e7f7]">
              <h4 className="font-editorial text-2xl text-[#1254a4] font-semibold mb-3">
                Project Focus
              </h4>
              <p className="text-[#526276] text-sm leading-relaxed">
                {activeStudy.overview}
              </p>
            </div>

            <div className="bg-[#f5f9ff] p-6 border border-[#d8e7f7]">
              <h4 className="font-editorial text-2xl text-[#1254a4] font-semibold mb-3">
                My Role
              </h4>
              <p className="text-[#526276] text-sm leading-relaxed">
                {activeStudy.challenge}
              </p>
            </div>

            <div className="bg-[#f5f9ff] p-6 border border-[#d8e7f7]">
              <h4 className="font-editorial text-2xl text-[#1254a4] font-semibold mb-3">
                Strategy
              </h4>
              <ul className="text-[#526276] text-xs space-y-2 leading-relaxed">
                {activeStudy.strategy.slice(0, 3).map((strat, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-[#1254a4] font-bold">·</span>
                    <span>{strat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#f5f9ff] p-6 border border-[#d8e7f7]">
              <h4 className="font-editorial text-2xl text-[#1254a4] font-semibold mb-3">
                Impact & Metric
              </h4>
              <div className="space-y-3">
                {activeStudy.results.map((res, i) => (
                  <div key={i} className="flex items-baseline justify-between border-b border-[#d8e7f7]/60 pb-1.5">
                    <span className="text-xs text-[#526276]">{res.label}</span>
                    <strong className="font-editorial text-lg text-[#0b2d59] tabular-nums font-semibold">
                      {res.value}
                    </strong>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Quote & Deliverables footer */}
          {activeStudy.quote && (
            <div className="px-8 sm:px-10 pb-6 text-sm text-[#526276] italic border-t border-[#d8e7f7]/60 pt-6 bg-slate-50/50 flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#1254a4] shrink-0 mt-0.5" />
              <div>
                <p>"{activeStudy.quote}"</p>
              </div>
            </div>
          )}

          {/* Tools & Skills Used */}
          <div className="border-t border-[#d8e7f7] bg-white px-8 sm:px-10 py-5 text-sm text-[#526276] flex flex-wrap items-center justify-between gap-4">
            <div>
              <strong className="text-[#1254a4] font-bold mr-2">Skills & Tools Used:</strong>
              <span className="text-[#0b2d59]">
                {activeStudy.toolsUsed.join(' · ')}
              </span>
            </div>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#1254a4] hover:underline"
            >
              <span>Discuss Campaign Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
