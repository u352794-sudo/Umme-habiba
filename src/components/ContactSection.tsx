import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MessageCircle, Mail, Send, Check, Copy, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    service: prefilledService || 'Social Media Marketing',
    businessName: '',
    message: ''
  });

  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Umm E Habiba,
Name: ${formData.name || 'Potential Client'}
Contact: ${formData.emailOrPhone || 'N/A'}
Business: ${formData.businessName || 'N/A'}
Service Interested: ${formData.service}
Message: ${formData.message || 'I would like to discuss working together.'}`;

    window.open(`${PERSONAL_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSendEmail = () => {
    const subject = encodeURIComponent(`Marketing Inquiry: ${formData.service} - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(`Hi Umm E Habiba,

Name: ${formData.name}
Business / Brand: ${formData.businessName}
Contact Phone/Email: ${formData.emailOrPhone}
Service: ${formData.service}

Message:
${formData.message}`);

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const contactChannels = [
    {
      title: "WhatsApp",
      value: PERSONAL_INFO.phone,
      href: PERSONAL_INFO.whatsappUrl,
      isExternal: true
    },
    {
      title: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      isExternal: false
    },
    {
      title: "Facebook",
      value: "Umme Habiba Marketing",
      href: PERSONAL_INFO.facebookUrl,
      isExternal: true
    },
    {
      title: "Instagram",
      value: "@ummehabiba.marketing",
      href: PERSONAL_INFO.instagramMarketingUrl,
      isExternal: true
    },
    {
      title: "The Custom Edit",
      value: "@thecustom_edit",
      href: PERSONAL_INFO.instagramCustomEditUrl,
      isExternal: true
    },
    {
      title: "TikTok",
      value: "@thecustomedit2",
      href: PERSONAL_INFO.tiktokUrl,
      isExternal: true
    },
    {
      title: "YouTube",
      value: "The Custom Edit",
      href: PERSONAL_INFO.youtubeUrl,
      isExternal: true
    }
  ];

  return (
    <section id="uh-contact" className="py-20 lg:py-28 bg-[#0b2d59] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Outreach & Verified Socials */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#a9d2ff] mb-3">
              Contact Me
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white font-semibold leading-[1.15] mb-6 text-balance">
              Let’s grow your brand together.
            </h2>

            <p className="text-[#c5dfff] text-base leading-[1.8] mb-8">
              If you are looking for a performance marketer, paid ads specialist, or creative conversion strategist, I would love to hear about your project.
            </p>

            {/* Direct Channel Tiles */}
            <div className="space-y-2.5">
              {contactChannels.map((chan) => (
                <div
                  key={chan.title}
                  className="flex items-center justify-between p-3.5 bg-white/10 hover:bg-[#1254a4] transition-colors border border-white/10"
                >
                  <a
                    href={chan.href}
                    target={chan.isExternal ? "_blank" : undefined}
                    rel={chan.isExternal ? "noopener noreferrer" : undefined}
                    className="flex-1 flex items-center gap-3 text-sm text-white"
                  >
                    <strong className="text-[#a9d2ff] font-semibold min-w-[110px] text-xs uppercase tracking-wider">
                      {chan.title}
                    </strong>
                    <span className="truncate">{chan.value}</span>
                  </a>

                  <button
                    onClick={() => copyText(chan.value, chan.title)}
                    className="p-1.5 text-white/60 hover:text-white transition-colors"
                    title={`Copy ${chan.title}`}
                    aria-label={`Copy ${chan.title}`}
                  >
                    {copiedItem === chan.title ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Direct Interactive Inquiry Box */}
          <div className="lg:col-span-7 bg-white text-[#0b2d59] p-8 sm:p-10 border border-[#d8e7f7] shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-[#1254a4] block">
                  Quick Inquiry
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#0b2d59]">
                  Send a Direct Message
                </h3>
              </div>
              <MessageCircle className="w-6 h-6 text-[#1254a4]" />
            </div>

            <form onSubmit={handleSendWhatsApp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#526276] mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Khan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#f8fbfe] border border-[#d8e7f7] p-3 text-sm text-[#0b2d59] focus:outline-none focus:border-[#1254a4]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#526276] mb-1.5">
                    Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    className="w-full bg-[#f8fbfe] border border-[#d8e7f7] p-3 text-sm text-[#0b2d59] focus:outline-none focus:border-[#1254a4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase font-bold text-[#526276] mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#f8fbfe] border border-[#d8e7f7] p-3 text-sm text-[#0b2d59] focus:outline-none focus:border-[#1254a4]"
                  >
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="SEO Optimization">SEO Optimization</option>
                    <option value="Meta Ads Strategy">Meta Ads Strategy</option>
                    <option value="Canva Visual Design">Canva Visual Design</option>
                    <option value="Lead Generation">Lead Generation</option>
                    <option value="The Custom Edit Collaboration">The Custom Edit Inquiry</option>
                    <option value="Full Digital Marketing Management">Full Marketing Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-[#526276] mb-1.5">
                    Business / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Wellness Co."
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#f8fbfe] border border-[#d8e7f7] p-3 text-sm text-[#0b2d59] focus:outline-none focus:border-[#1254a4]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-[#526276] mb-1.5">
                  Project Details / Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your goals, current challenges, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#f8fbfe] border border-[#d8e7f7] p-3 text-sm text-[#0b2d59] focus:outline-none focus:border-[#1254a4]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1254a4] hover:bg-[#0b2d59] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp (Instant)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-bold uppercase tracking-wider text-[#1254a4] bg-[#eaf4ff] hover:bg-[#d4eaff] border border-[#d8e7f7] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-[#526276] text-center pt-2">
                Direct phone: <strong className="text-[#0b2d59]">+92 305 6346858</strong> · Email: <strong className="text-[#0b2d59]">ummehabiba222.pk@gmail.com</strong>
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
