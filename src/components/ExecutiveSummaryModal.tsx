import React from 'react';
import { PERSONAL_INFO, SERVICES, EXPERIENCES } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, ExternalLink } from 'lucide-react';

interface ExecutiveSummaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExecutiveSummaryModal: React.FC<ExecutiveSummaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b2d59]/70 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-3xl w-full p-8 sm:p-12 border border-[#d8e7f7] shadow-2xl relative max-h-[92vh] overflow-y-auto print:max-h-none print:shadow-none print:border-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#d8e7f7] print:hidden">
          <span className="text-xs uppercase font-bold tracking-widest text-[#1254a4]">
            Executive Profile & Portfolio Summary
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0b2d59] bg-[#eaf4ff] hover:bg-[#d4eaff] border border-[#d8e7f7] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-[#0b2d59] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Executive Resume Sheet */}
        <div className="space-y-6 text-[#526276]">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pb-6 border-b border-[#d8e7f7]">
            <div>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#0b2d59] font-bold">
                {PERSONAL_INFO.name}
              </h2>
              <p className="text-sm font-semibold text-[#1254a4] uppercase tracking-wider mt-1">
                {PERSONAL_INFO.role} · {PERSONAL_INFO.subRole}
              </p>
            </div>
            <div className="text-xs space-y-1 sm:text-right">
              <div>Phone: <strong className="text-[#0b2d59]">{PERSONAL_INFO.phone}</strong></div>
              <div>Email: <strong className="text-[#0b2d59]">{PERSONAL_INFO.email}</strong></div>
              <div>Portfolio: <strong className="text-[#0b2d59]">ummehabiba.marketing</strong></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#0b2d59] mb-2">
              Professional Profile
            </h3>
            <p className="text-sm leading-relaxed text-[#526276]">
              {PERSONAL_INFO.extendedBio}
            </p>
          </div>

          {/* Core Competencies */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#0b2d59] mb-2">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2 bg-[#f5f9ff] border border-[#d8e7f7]">Performance Marketing</div>
              <div className="p-2 bg-[#f5f9ff] border border-[#d8e7f7]">Paid Meta Ads & Scaling</div>
              <div className="p-2 bg-[#f5f9ff] border border-[#d8e7f7]">Conversion Copy & Funnels</div>
              <div className="p-2 bg-[#f5f9ff] border border-[#d8e7f7]">Social Media Strategy</div>
              <div className="p-2 bg-[#f5f9ff] border border-[#d8e7f7]">Canva Visual Creatives</div>
              <div className="p-2 bg-[#f5f9ff] border border-[#d8e7f7]">Inbound Lead Generation</div>
            </div>
          </div>

          {/* Management Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#0b2d59] mb-3">
              Management & Leadership Background (6+ Years)
            </h3>
            <div className="space-y-4 text-xs">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="border-l-2 border-[#1254a4] pl-4">
                  <div className="flex justify-between items-baseline mb-1">
                    <strong className="text-sm font-semibold text-[#0b2d59]">{exp.institution}</strong>
                    <span className="text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-[#1254a4] font-medium mb-1.5">{exp.role}</div>
                  <p className="text-[#526276] mb-2">{exp.summary}</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    {exp.responsibilities.slice(0, 3).map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Entrepreneurial Venture */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#0b2d59] mb-2">
              Venture & Brand Ownership
            </h3>
            <div className="p-4 bg-[#f5f9ff] border border-[#d8e7f7] text-xs">
              <strong className="text-sm font-semibold text-[#0b2d59] block mb-1">
                The Custom Edit (Founder & Creative Director)
              </strong>
              <p className="text-[#526276] leading-relaxed">
                Founded and directed an artisan luxury wedding keepsake label specializing in Nikkah booklets, bridal veils, frames, and custom accessories. Responsible for creative direction, product photography, Instagram/TikTok marketing, and personalized customer care.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
