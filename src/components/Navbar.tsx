import React, { useState, useEffect } from 'react';
import { ApeironLogo } from './ApeironLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard corporate navigation: Home | About | Solutions | AI & Innovation | Insights | Contact
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'AI & Innovation', href: '#ai-innovation' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href === '#home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLetsTalk = () => {
    setMobileMenuOpen(false);
    if (onOpenContact) {
      onOpenContact();
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 border-b backdrop-blur-xl ${
        isScrolled
          ? 'bg-[#05050A]/95 border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.9)] py-3 sm:py-3.5'
          : 'bg-[#05050A]/90 border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 lg:gap-10">
          {/* Official Apeiron Logo: Unified premium corporate brand mark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7022FC] rounded-lg shrink-0 group cursor-pointer"
            aria-label="Apeiron Frontier Security - Return to Top of Home"
          >
            <div className="block sm:hidden">
              <ApeironLogo size="sm" variant="horizontal" showDivider={true} />
            </div>
            <div className="hidden sm:block">
              <ApeironLogo size="lg" variant="horizontal" showDivider={true} />
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 lg:gap-9 xl:gap-10 text-xs tracking-[0.18em] uppercase font-semibold text-slate-300"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative py-1.5 whitespace-nowrap transition-colors duration-200 hover:text-white group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7022FC] to-[#FDBF32] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action CTA: Let's Talk button with balanced height & alignment */}
          <div className="flex items-center gap-3.5 shrink-0">
            <button
              onClick={handleLetsTalk}
              className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 rounded-xl group overflow-hidden border border-[#7022FC]/60 hover:border-[#FDBF32]/80 bg-[#7022FC]/25 hover:bg-[#7022FC]/40 shadow-[0_0_20px_rgba(112,34,252,0.3)] hover:shadow-[0_0_25px_rgba(253,191,50,0.4)] cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7022FC] via-[#8B3EFE] to-[#FDBF32] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FDBF32] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7022FC] rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-2 border-t border-white/10 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-xs font-semibold tracking-wider uppercase text-slate-300 hover:text-white py-2 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#FDBF32]">→</span>
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={handleLetsTalk}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7022FC] to-[#FDBF32] rounded-xl shadow-lg cursor-pointer"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
