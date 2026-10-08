import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { CheckCircle2, Clock, Users, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const leadershipSkills = [
    "Leadership",
    "Team Management",
    "Team Leading",
    "Customer Management",
    "Communication",
    "Delegation",
    "Problem Solving",
    "Time Management",
    "Decision Making",
    "Coordination"
  ];

  return (
    <section id="uh-experience" className="py-20 lg:py-28 bg-[#f5f9ff] border-b border-[#d8e7f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1254a4] mb-3">
            Professional Experience
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0b2d59] font-semibold mb-4 leading-tight">
            Management and leadership
          </h2>
          <p className="text-[#526276] text-base leading-relaxed">
            Alongside digital marketing, I have six years of management experience at Happy Home School and Bano Qabil IT Institute.
          </p>
        </div>

        {/* 2 Management Cards with distinctive navy border highlight as in original design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border-l-[6px] border-l-[#1254a4] border-y border-r border-[#d8e7f7] shadow-[0_14px_35px_rgba(18,84,164,0.08)] p-8 sm:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#1254a4]">
                    {exp.period}
                  </span>
                  <span className="text-xs text-slate-400">Institutional Role</span>
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl text-[#0b2d59] font-semibold mb-3">
                  {exp.institution}
                </h3>

                <p className="text-sm font-medium text-[#1254a4] mb-3">
                  {exp.role}
                </p>

                <p className="text-sm text-[#526276] leading-relaxed mb-6">
                  {exp.summary}
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#0b2d59] block">
                    Core Responsibilities:
                  </span>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#526276]">
                      <CheckCircle2 className="w-4 h-4 text-[#1254a4] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#d8e7f7] flex flex-wrap gap-2 text-xs text-[#0b2d59] font-medium">
                {exp.skillsGained.map((skill, sIdx) => (
                  <span key={sIdx} className="bg-[#eaf4ff] text-[#1254a4] px-2.5 py-1 border border-[#d8e7f7]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Competencies Grid (Clean unboxed presentation) */}
        <div className="bg-white border border-[#d8e7f7] p-8 max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-wider font-bold text-[#1254a4] mb-4">
            Demonstrated Management Attributes
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {leadershipSkills.map((skill) => (
              <span
                key={skill}
                className="bg-[#f5f9ff] text-[#0b2d59] border border-[#d8e7f7] px-4 py-2 text-xs font-semibold hover:border-[#1254a4] hover:text-[#1254a4] transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>

          <p className="mt-6 text-xs text-[#526276] max-w-xl mx-auto">
            These leadership competencies ensure client accounts receive prompt updates, structured deliverables, proactive communication, and disciplined schedule management.
          </p>
        </div>

      </div>
    </section>
  );
};
