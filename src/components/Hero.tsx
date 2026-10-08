import React, { useState } from 'react';
import { PERSONAL_INFO, IMAGES } from '../data/portfolioData';
import { Check, Copy, ArrowRight, MessageCircle, Sparkles, Send } from 'lucide-react';

interface HeroProps {
  onOpenConsultModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultModal }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f6fbff] via-[#eaf4ff] to-[#f0f7ff] py-16 lg:py-24 border-b border-[#d8e7f7]">
      {/* Subtle organic ambient accent */}
      <div 
        aria-hidden="true" 
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1254a4]/10 blur-3xl pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#67a9e8]/15 blur-3xl pointer-events-none"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Intent */}
          <div className="lg:col-span-7">
            {/* Clean Unboxed Eyebrow */}
            <div className="flex items-center gap-2 mb-4 text-[#1254a4] font-bold text-xs uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-[#1254a4] animate-pulse"></span>
              <span>Performance Marketer</span>
              <span aria-hidden="true" className="text-slate-400">·</span>
              <span className="text-[#526276] font-medium lowercase">Paid Ads, Funnels & Growth</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] text-[#0b2d59] font-semibold mb-6 tracking-tight text-balance">
              Helping brands grow with{' '}
              <span className="text-[#1254a4] italic font-normal">smart performance marketing.</span>
            </h1>

            <p className="text-[#526276] text-base sm:text-lg leading-[1.8] max-w-2xl mb-8">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#uh-case-studies"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1254a4] hover:bg-[#0b2d59] border border-[#1254a4] hover:border-[#0b2d59] transition-all shadow-sm hover:-translate-y-0.5"
              >
                <span>View my work</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#uh-contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#1254a4] bg-white hover:bg-[#eaf4ff] border border-[#d8e7f7] hover:border-[#1254a4] transition-all hover:-translate-y-0.5"
              >
                <span>Contact me</span>
              </a>

              <button
                onClick={onOpenConsultModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0b2d59] bg-[#eaf4ff] hover:bg-[#d4eaff] border border-[#bcdcff] transition-all"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#1254a4]" />
                <span>Plan Project</span>
              </button>
            </div>

            {/* Direct Quick-Contact Chips (Functional Copy) */}
            <div className="pt-6 border-t border-[#d8e7f7]/80 flex flex-wrap items-center gap-6 text-xs text-[#526276]">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0b2d59]">WhatsApp:</span>
                <a 
                  href={PERSONAL_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#1254a4] hover:underline"
                >
                  {PERSONAL_INFO.phone}
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-1 text-slate-400 hover:text-[#1254a4] transition-colors"
                  title="Copy Phone Number"
                  aria-label="Copy Phone Number"
                >
                  {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-[#0b2d59]">Email:</span>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`} 
                  className="hover:text-[#1254a4] hover:underline"
                >
                  {PERSONAL_INFO.email}
                </a>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-1 text-slate-400 hover:text-[#1254a4] transition-colors"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Editorial Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] bg-white border border-[#d8e7f7] shadow-[0_14px_35px_rgba(18,84,164,0.12)] p-7 text-center transition-transform hover:rotate-0 rotate-1 duration-300">
              
              {/* Profile Image Frame with Monogram Fallback */}
              <div className="relative w-36 h-36 mx-auto mb-5 rounded-full overflow-hidden border-4 border-[#eaf4ff] shadow-md bg-slate-100 flex items-center justify-center">
                <img
                  src={IMAGES.portrait}
                  alt="Umm E Habiba — Performance Marketer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to stylized monogram if image ever fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-editorial text-4xl text-[#0b2d59] font-medium select-none">
                  UEH
                </span>
              </div>

              <h2 className="font-editorial text-2xl lg:text-3xl text-[#0b2d59] font-semibold mb-1">
                {PERSONAL_INFO.name}
              </h2>

              <p className="text-xs uppercase tracking-wider text-[#1254a4] font-bold mb-1">
                {PERSONAL_INFO.role}
              </p>
              
              <p className="text-xs text-[#526276] mb-5">
                {PERSONAL_INFO.subRole}
              </p>

              <div className="h-px w-16 bg-[#d8e7f7] mx-auto mb-5" />

              {/* Social platform brand icons */}
              <div className="flex items-center justify-center gap-2.5 mb-6">
                {/* TikTok Icon */}
                <a
                  href={PERSONAL_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0f4f9] text-[#0b2d59] hover:bg-black hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-110"
                  title="TikTok: @thecustomedit2"
                  aria-label="TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.891 2.887 2.896 2.896 0 0 1-2.891-2.887 2.896 2.896 0 0 1 2.891-2.887c.277 0 .542.04.793.111V9.395a6.34 6.34 0 0 0-.793-.05A6.338 6.338 0 0 0 3 15.684 6.338 6.338 0 0 0 9.336 22a6.338 6.338 0 0 0 6.336-6.316V9.011c1.238.878 2.748 1.401 4.384 1.439V7.009c-.161-.005-.316-.023-.467-.058v-.265z"/>
                  </svg>
                </a>

                {/* Instagram Icon */}
                <a
                  href={PERSONAL_INFO.instagramCustomEditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0f4f9] text-[#0b2d59] hover:bg-[#e1306c] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-110"
                  title="Instagram: @thecustom_edit"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* Facebook Icon */}
                <a
                  href={PERSONAL_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0f4f9] text-[#0b2d59] hover:bg-[#1877f2] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-110"
                  title="Facebook: Umme Habiba Marketing"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* YouTube Icon */}
                <a
                  href={PERSONAL_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0f4f9] text-[#0b2d59] hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-110"
                  title="YouTube: The Custom Edit"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp Icon */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#f0f4f9] text-[#0b2d59] hover:bg-[#25d366] hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-110"
                  title="WhatsApp: 0305 6346858"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 0C5.396 0 0 5.398 0 12.035c0 2.119.554 4.188 1.606 6.009L0 24l6.147-1.611a11.97 11.97 0 0 0 5.884 1.52h.005c6.632 0 12.029-5.397 12.029-12.034 0-3.218-1.252-6.242-3.528-8.519A11.968 11.968 0 0 0 12.031 0zm0 22.015h-.005a9.98 9.98 0 0 1-5.086-1.39l-.365-.217-3.774.99.1.008.988-3.676-.237-.378a9.96 9.96 0 0 1-1.528-5.317c0-5.518 4.49-10.01 10.01-10.01 2.673 0 5.185 1.042 7.074 2.933a9.946 9.946 0 0 1 2.933 7.073c0 5.519-4.49 10.014-10.005 10.014zm5.485-7.487c-.301-.15-1.78-.879-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.179-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.497-.895-.799-1.5-1.786-1.675-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.101-.2.05-.376-.025-.527-.075-.15-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.909 1.228 3.11c.15.2 2.122 3.241 5.141 4.545.718.311 1.279.497 1.716.636.721.23 1.377.197 1.896.12.577-.086 1.78-.727 2.031-1.43.251-.702.251-1.304.175-1.43-.075-.125-.276-.2-.577-.351z"/>
                  </svg>
                </a>
              </div>

              {/* Direct action button */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#0b2d59] hover:bg-[#1254a4] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
