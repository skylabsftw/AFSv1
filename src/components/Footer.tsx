import React from 'react';
import { ApeironLogo } from './ApeironLogo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'AI & Innovation', href: '#ai-innovation' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const solutionsLinks = [
    { name: '01. Managed Cybersecurity', href: '#solutions' },
    { name: '02. Security Operations Center (SOC)', href: '#solutions' },
    { name: '03. Threat Intelligence & Digital Protection', href: '#solutions' },
    { name: '04. Offensive Security & Assurance', href: '#solutions' },
    { name: '05. Artificial Intelligence & Intelligent Automation', href: '#solutions' },
    { name: '06. Cloud & Infrastructure Security', href: '#solutions' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="relative bg-[#010102] border-t border-white/10 pt-20 pb-12 overflow-hidden text-slate-400">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7022FC]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className="inline-block"
              aria-label="Apeiron Frontier Security - Home"
            >
              <ApeironLogo size="lg" />
            </a>

            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-white">
              SECURING THE <span className="text-[#7022FC]">DIGITAL FRONTIER</span>
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Apeiron Frontier Security provides cybersecurity services that help organizations protect their systems, manage risks, and maintain operational resilience.
            </p>

            {/* LinkedIn & Professional Channels */}
            <div className="pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors p-2.5 rounded-lg border border-white/10 hover:border-[#7022FC] bg-[#07070C]"
              >
                {/* LinkedIn Minimal SVG */}
                <svg className="w-4 h-4 fill-current text-[#FDBF32]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>Apeiron Frontier Security on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="hover:text-white transition-colors duration-200 block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Our Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              {solutionsLinks.map((sol) => (
                <li key={sol.name}>
                  <a
                    href={sol.href}
                    onClick={(e) => handleScrollTo(e, sol.href)}
                    className="hover:text-[#FDBF32] transition-colors duration-200 block py-0.5 line-clamp-1"
                  >
                    {sol.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div>
                <span className="block text-slate-500 font-mono text-[10px] uppercase">
                  Global Inquiries
                </span>
                <span className="text-slate-300 font-mono">
                  inquiries@apeironsecurity.example
                </span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono text-[10px] uppercase">
                  Advisory Headquarters
                </span>
                <span className="text-slate-300">
                  Global Enterprise Operations
                </span>
              </div>
              <div>
                <span className="block text-slate-500 font-mono text-[10px] uppercase">
                  Confidentiality
                </span>
                <span className="text-slate-300">
                  Encrypted Advisory Protocol
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Apeiron Frontier Security. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Privacy Policy</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-400">Terms of Governance</span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-400">Responsible Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
