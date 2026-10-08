import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  return (
    <section className="py-20 lg:py-24 bg-[#f5f9ff] border-b border-[#d8e7f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1254a4] mb-3">
            My Expertise
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0b2d59] font-semibold mb-4 leading-tight">
            Skills I bring to every project
          </h2>
          <p className="text-[#526276] text-base leading-relaxed">
            I combine performance marketing expertise, creative content skills and leadership experience to deliver organized and high-converting results.
          </p>
        </div>

        {/* Interactive Filter / Tab Buttons (Functional Controls Allowed) */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-white border border-[#d8e7f7] shadow-sm">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCategoryIndex === idx
                    ? 'bg-[#1254a4] text-white shadow-sm'
                    : 'text-[#526276] hover:text-[#0b2d59] hover:bg-slate-50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Unboxed Skill Showcase adhering to Zero-Pill Discipline */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-[#d8e7f7] p-4 text-center hover:border-[#1254a4] hover:shadow-[0_8px_20px_rgba(18,84,164,0.08)] transition-all"
            >
              <span className="block text-[#0b2d59] font-semibold text-sm mb-1">
                {skill.name}
              </span>
              <div className="flex items-center justify-center gap-1.5 text-xs text-[#1254a4] font-medium">
                <span>{skill.level}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet metadata footer */}
        <div className="mt-12 text-center text-xs text-[#526276] flex items-center justify-center gap-2 flex-wrap">
          <span>Continuous Learning</span>
          <span aria-hidden="true">·</span>
          <span>Meta Certified Practices</span>
          <span aria-hidden="true">·</span>
          <span>ROI-Driven Content Frameworks</span>
          <span aria-hidden="true">·</span>
          <span>Structured Delivery</span>
        </div>

      </div>
    </section>
  );
};
