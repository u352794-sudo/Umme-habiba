/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudySection } from './components/CaseStudySection';
import { FounderSection } from './components/FounderSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InteractivePlanner } from './components/InteractivePlanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExecutiveSummaryModal } from './components/ExecutiveSummaryModal';

export default function App() {
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('Social Media Marketing');

  const handleOpenContact = () => {
    const el = document.getElementById('uh-contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPlanner = () => {
    const el = document.getElementById('uh-planner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  return (
    <div className="min-h-screen bg-white text-[#526276] font-body selection:bg-[#1254a4] selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar
        onOpenSummary={() => setIsSummaryModalOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content */}
      <main id="main-content">
        {/* Split Hero with Editorial Card */}
        <Hero onOpenConsultModal={handleOpenPlanner} />

        {/* 4-Item Tabular Stats Band */}
        <StatsBar />

        {/* About Section */}
        <AboutSection />

        {/* Skills Section (Zero-Pill Discipline with Interactive Switcher) */}
        <SkillsSection />

        {/* 6 Core Services with Deliverables & Inquiry Handlers */}
        <ServicesSection onSelectServiceForInquiry={handleSelectServiceForInquiry} />

        {/* Featured Case Studies (OvaNorm & The Custom Edit) */}
        <CaseStudySection />

        {/* The Custom Edit Founder Spotlight */}
        <FounderSection />

        {/* Professional Experience (6+ Years Management at Happy Home School & Bano Qabil) */}
        <ExperienceSection />

        {/* Interactive Marketing Scope & Strategy Planner */}
        <InteractivePlanner />

        {/* Full Contact Section with Direct Links & WhatsApp/Email Composer */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* Official Clean Footer */}
      <Footer />

      {/* Printable Executive Bio & Summary Modal */}
      <ExecutiveSummaryModal
        isOpen={isSummaryModalOpen}
        onClose={() => setIsSummaryModalOpen(false)}
      />
    </div>
  );
}
