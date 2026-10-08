import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, MessageCircle, Check, ArrowRight, RefreshCw } from 'lucide-react';

export const InteractivePlanner: React.FC = () => {
  const [industry, setIndustry] = useState<string>('E-Commerce & Retail');
  const [goal, setGoal] = useState<string>('Lead Generation & Inquiries');
  const [frequency, setFrequency] = useState<string>('4-5 Posts / Week + Reels');
  const [selectedChannels, setSelectedChannels] = useState<string[]>(['Instagram', 'WhatsApp Business']);

  const industries = [
    'E-Commerce & Retail',
    'Health & Women Wellness',
    'Education & Institutes',
    'Creative & Wedding Services',
    'Local Small Business'
  ];

  const goals = [
    'Lead Generation & Inquiries',
    'Brand Visibility & Reach',
    'Community Engagement & Trust',
    'Paid Meta Ads Scalability'
  ];

  const frequencies = [
    '3 Posts / Week (Foundational)',
    '4-5 Posts / Week + Reels (Accelerated)',
    'Daily Omnichannel Strategy (Intensive)'
  ];

  const channelsList = ['Instagram', 'Facebook', 'TikTok', 'WhatsApp Business', 'SEO Blog'];

  const toggleChannel = (ch: string) => {
    if (selectedChannels.includes(ch)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter(c => c !== ch));
      }
    } else {
      setSelectedChannels([...selectedChannels, ch]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `Hi Umm E Habiba, I used your Performance Marketing Planner on your portfolio!
Here are my project details:
• Business Type: ${industry}
• Primary Goal: ${goal}
• Posting Rhythm: ${frequency}
• Target Channels: ${selectedChannels.join(', ')}

I would love to get a tailored performance marketing proposal from you. Let's discuss!`;
    return encodeURIComponent(text);
  };

  return (
    <section id="uh-planner" className="py-20 lg:py-24 bg-white border-b border-[#d8e7f7]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="max-w-[700px] mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#1254a4] mb-3">
            Interactive Tool
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#0b2d59] font-semibold mb-4 leading-tight">
            Performance Marketing & Scope Planner
          </h2>
          <p className="text-[#526276] text-base leading-relaxed">
            Select your brand focus to see recommended growth pillars and generate an instant consultation outline.
          </p>
        </div>

        <div className="bg-[#f5f9ff] border border-[#d8e7f7] shadow-[0_14px_35px_rgba(18,84,164,0.08)] p-6 sm:p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Step Configuration */}
            <div className="space-y-6">
              {/* 1. Industry */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#0b2d59] mb-2">
                  1. Your Industry / Business Type
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full bg-white border border-[#d8e7f7] text-[#0b2d59] text-sm p-3 focus:outline-none focus:border-[#1254a4]"
                >
                  {industries.map(ind => (
                    <option key={ind} value={ind}>{ind}</option>
                  ))}
                </select>
              </div>

              {/* 2. Primary Objective */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#0b2d59] mb-2">
                  2. Primary Growth Objective
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {goals.map(g => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGoal(g)}
                      className={`text-left text-xs sm:text-sm p-2.5 border transition-all ${
                        goal === g
                          ? 'bg-[#1254a4] text-white border-[#1254a4] font-semibold'
                          : 'bg-white text-[#526276] border-[#d8e7f7] hover:border-[#1254a4]'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Channels */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#0b2d59] mb-2">
                  3. Priority Marketing Channels
                </label>
                <div className="flex flex-wrap gap-2">
                  {channelsList.map(ch => {
                    const isSelected = selectedChannels.includes(ch);
                    return (
                      <button
                        key={ch}
                        type="button"
                        onClick={() => toggleChannel(ch)}
                        className={`text-xs px-3 py-1.5 border transition-all ${
                          isSelected
                            ? 'bg-[#0b2d59] text-white border-[#0b2d59] font-medium'
                            : 'bg-white text-[#526276] border-[#d8e7f7] hover:border-slate-400'
                        }`}
                      >
                        {isSelected && '✓ '}
                        {ch}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Posting Rhythm */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[#0b2d59] mb-2">
                  4. Desired Cadence
                </label>
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value)}
                  className="w-full bg-white border border-[#d8e7f7] text-[#0b2d59] text-sm p-3 focus:outline-none focus:border-[#1254a4]"
                >
                  {frequencies.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Strategic Summary Box */}
            <div className="bg-white border border-[#d8e7f7] p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1254a4] mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Tailored Marketing Blueprint</span>
              </div>

              <h3 className="font-editorial text-2xl text-[#0b2d59] font-semibold mb-3">
                Strategic Scope for {industry.split('&')[0]}
              </h3>

              <p className="text-xs text-[#526276] leading-relaxed mb-4">
                Based on your target of <strong className="text-[#0b2d59]">{goal}</strong>, here is how Umm E Habiba will structure your campaign:
              </p>

              <div className="space-y-3 mb-6 text-xs text-[#526276] border-y border-[#d8e7f7] py-4">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1254a4] shrink-0 mt-0.5" />
                  <span><strong>Content Engine:</strong> High-impact Canva carousels, problem-solving reels scripts, and engagement hooks.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1254a4] shrink-0 mt-0.5" />
                  <span><strong>Channel Alignment:</strong> Coordinated storytelling across {selectedChannels.join(', ')}.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1254a4] shrink-0 mt-0.5" />
                  <span><strong>Execution Cadence:</strong> {frequency.split('(')[0]} with monthly review reports.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#1254a4] shrink-0 mt-0.5" />
                  <span><strong>Management Guarantee:</strong> 6 years of administrative leadership ensuring strict deadlines and clear communication.</span>
                </div>
              </div>

              {/* Action Button */}
              <a
                href={`${PERSONAL_INFO.whatsappUrl}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1254a4] hover:bg-[#0b2d59] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss This Plan on WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-slate-400 mt-2">
                Sends pre-filled WhatsApp outline directly to 0305 6346858
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
