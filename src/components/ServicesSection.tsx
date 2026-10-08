import React, { useState } from 'react';
import { SERVICES, PERSONAL_INFO } from '../data/portfolioData';
import { ServiceItem } from '../types';
import { Check, ArrowRight, X, MessageCircle, Mail } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleInquireViaWhatsApp = (service: ServiceItem) => {
    const text = encodeURIComponent(`Hi Umm E Habiba, I would like to inquire about your "${service.title}" service for my business.`);
    window.open(`${PERSONAL_INFO.whatsappUrl}?text=${text}`, '_blank');
  };

  return (
    <section id="uh-services" className="py-20 lg:py-28 bg-white border-b border-[#d8e7f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Heading */}
        <div className="max-w-[700px] mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1254a4] mb-3">
            What I Do
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0b2d59] font-semibold mb-4 leading-tight">
            Performance marketing services
          </h2>
          <p className="text-[#526276] text-base leading-relaxed">
            Helping brands build visibility, acquire qualified buyers and scale through performance-driven marketing.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer bg-white border border-[#d8e7f7] p-8 transition-all duration-300 hover:shadow-[0_14px_35px_rgba(18,84,164,0.10)] hover:-translate-y-1.5 hover:border-[#1254a4] flex flex-col justify-between"
            >
              <div>
                <span className="block font-editorial text-3xl sm:text-4xl text-[#1254a4] font-semibold mb-4 tabular-nums group-hover:translate-x-1 transition-transform">
                  {service.number}
                </span>

                <h3 className="font-editorial text-2xl text-[#0b2d59] font-semibold mb-3 group-hover:text-[#1254a4] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[#526276] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="pt-4 border-t border-[#d8e7f7]/60 flex items-center justify-between text-xs font-semibold text-[#1254a4]">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Service Detail & Deliverables Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b2d59]/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white max-w-xl w-full p-8 sm:p-10 border border-[#d8e7f7] shadow-2xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-1.5 text-slate-400 hover:text-[#0b2d59] transition-colors"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="font-editorial text-3xl text-[#1254a4] font-semibold tabular-nums">
                {selectedService.number}
              </span>
              <span className="text-xs uppercase tracking-widest font-bold text-[#526276]">
                Service Breakdown
              </span>
            </div>

            <h3 className="font-editorial text-3xl text-[#0b2d59] font-semibold mb-3">
              {selectedService.title}
            </h3>

            <p className="text-[#526276] text-sm leading-relaxed mb-6">
              {selectedService.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#0b2d59] mb-3">
                Key Deliverables
              </h4>
              <ul className="space-y-2 text-sm text-[#526276]">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#1254a4] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-[#f5f9ff] border border-[#d8e7f7] mb-6 text-xs text-[#526276]">
              <strong className="text-[#0b2d59] block mb-1">Ideal For:</strong>
              <span>{selectedService.idealFor}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-slate-500">
              <span className="font-semibold text-[#0b2d59]">Tools & Platforms:</span>
              {selectedService.tools.map((tool, idx) => (
                <React.Fragment key={tool}>
                  <span>{tool}</span>
                  {idx < selectedService.tools.length - 1 && <span aria-hidden="true">·</span>}
                </React.Fragment>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleInquireViaWhatsApp(selectedService)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1254a4] hover:bg-[#0b2d59] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss on WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  onSelectServiceForInquiry(selectedService.title);
                  setSelectedService(null);
                  const el = document.getElementById('uh-contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#1254a4] bg-white border border-[#1254a4] hover:bg-[#eaf4ff] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Inquiry Form</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
