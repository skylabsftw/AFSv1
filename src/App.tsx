/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Solutions } from './components/Solutions';
import { WhyApeiron } from './components/WhyApeiron';
import { Insights } from './components/Insights';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [contactSubject, setContactSubject] = useState<string>('');

  // 1. Restore Homepage to scroll position 0 on initial load and prevent unwanted browser restorations
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Always start at the top on initial load
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Clean up any stray hash on initial root view
    if (window.location.hash && (window.location.hash === '#home' || window.location.hash === '#')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  const scrollToSection = (id: string) => {
    if (id === '#home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreSolutions = () => {
    scrollToSection('#solutions');
  };

  const handleTalkToExperts = () => {
    setContactSubject('General Enterprise Security Advisory');
    scrollToSection('#contact');
  };

  const handleSelectSolutionForInquiry = (solutionName: string) => {
    setContactSubject(`Inquiry: ${solutionName}`);
    scrollToSection('#contact');
  };

  const handleSelectInsightForInquiry = (topic: string) => {
    setContactSubject(topic);
    scrollToSection('#contact');
  };

  return (
    <div className="min-h-screen bg-[#010102] text-slate-100 flex flex-col font-sans selection:bg-[#7022FC]/50 selection:text-white">
      {/* 1. Navigation Header (Sticky at top 0, non-overlapping) */}
      <Navbar onOpenContact={handleTalkToExperts} />

      {/* Main Corporate Content following exact requested order */}
      <main className="flex-1">
        {/* 2, 3, 4: Main hero section with cyberpunk video, Threat Intelligence dashboard, headline and introduction */}
        <Hero
          onExploreSolutions={handleExploreSolutions}
          onTalkToExperts={handleTalkToExperts}
        />

        {/* 5. About section */}
        <About />

        {/* 6. Solutions */}
        <Solutions onSelectSolutionForInquiry={handleSelectSolutionForInquiry} />

        {/* 7. AI & Innovation */}
        <WhyApeiron onTalkToExperts={handleTalkToExperts} />

        {/* 8. Insights */}
        <Insights onSelectInsightForInquiry={handleSelectInsightForInquiry} />

        {/* 9. Contact section */}
        <Contact initialSubject={contactSubject} />
      </main>

      {/* 10. Corporate Footer */}
      <Footer />
    </div>
  );
}
