import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ThreatIntelligenceCenter } from './ThreatIntelligenceCenter';

interface HeroProps {
  onExploreSolutions: () => void;
  onTalkToExperts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreSolutions, onTalkToExperts }) => {
  return (
    <section
      id="home"
      className="relative pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24 flex flex-col bg-[#010102] overflow-hidden scroll-mt-20"
    >
      {/* Background Lighting & Technical Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Purple Ambient Lighting on the Left */}
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#7022FC]/16 rounded-full blur-[160px]" />

        {/* Orange Ambient Lighting on the Right */}
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#FDBF32]/10 rounded-full blur-[170px]" />

        {/* Subtle Technical Grid Lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />

        {/* Interconnected Fine Network Points */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15%" cy="30%" r="2" fill="#7022FC" />
          <circle cx="45%" cy="15%" r="1.5" fill="#FFFFFF" />
          <circle cx="85%" cy="25%" r="2" fill="#FDBF32" />
          <circle cx="75%" cy="65%" r="1.5" fill="#7022FC" />
          <circle cx="25%" cy="75%" r="2" fill="#FDBF32" />
          <line
            x1="15%"
            y1="30%"
            x2="45%"
            y2="15%"
            stroke="#7022FC"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />
          <line
            x1="45%"
            y1="15%"
            x2="85%"
            y2="25%"
            stroke="#FFFFFF"
            strokeWidth="0.5"
            strokeDasharray="3 3"
            opacity="0.3"
          />
          <line
            x1="85%"
            y1="25%"
            x2="75%"
            y2="65%"
            stroke="#FDBF32"
            strokeWidth="0.5"
            strokeDasharray="3 3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col gap-10 lg:gap-12">
        {/* 1. HERO DUAL-PANEL SHOWCASE: Portrait (54%) & Threat Intelligence Center (46%) side-by-side with matched top & bottom alignment */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-8 w-full">
          {/* LEFT COLUMN: Cyberpunk Portrait (~54% width) */}
          <div className="w-full lg:w-[54%] relative flex flex-col">
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[580px] xl:h-[620px] rounded-2xl overflow-hidden group border border-white/12 bg-[#05050A]/90 shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/assets/cyberpunk_security_portrait_1794396917126.jpg"
                className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.06]"
              >
                <source src="/assets/aistudio/gemini_generated_video_0108039c_1cd9ffb4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Seamless Edge Scrims blending smoothly into Space Black */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#010102] via-[#010102]/25 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#010102]/70 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#010102]/30 pointer-events-none" />

              {/* Dual Neon Illumination Highlights */}
              <div className="absolute top-0 left-0 w-36 h-full bg-[#7022FC]/15 blur-2xl pointer-events-none" />
              <div className="absolute top-0 right-0 w-36 h-full bg-[#FDBF32]/12 blur-2xl pointer-events-none" />

              {/* Subtle Status Overlay */}
              <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none select-none bg-[#010102]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7022FC] shadow-[0_0_8px_#7022FC]" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-300">
                  CYBERNETIC INTELLIGENCE // SEC-01
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Threat Intelligence Center (~46% width) */}
          <div className="w-full lg:w-[46%] relative flex flex-col">
            <div className="w-full h-[520px] sm:h-[560px] lg:h-[580px] xl:h-[620px]">
              <ThreatIntelligenceCenter />
            </div>
          </div>
        </div>

        {/* 2. BELOW THE HERO: Main Headline, Value Proposition, and Action Buttons */}
        <div className="max-w-4xl space-y-6 pt-2 z-10">
          {/* Official Tagline Kicker */}
          <div className="inline-flex items-center gap-3 text-xs tracking-[0.24em] uppercase font-bold">
            <span className="w-6 h-[1.5px] bg-gradient-to-r from-[#7022FC] to-[#FDBF32]" />
            <span className="text-white">
              SECURING THE <span className="text-[#7022FC]">DIGITAL FRONTIER</span>
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.06] text-balance">
            Security You Can Rely On.<br />
            <span className="bg-gradient-to-r from-[#7022FC] via-[#A855F7] to-[#FDBF32] bg-clip-text text-transparent">
              Confidence to Move Forward.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl text-balance">
            We help organizations protect their systems, manage security risks, and respond to threats
            through practical cybersecurity services and technology-driven solutions.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onExploreSolutions}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7022FC] to-[#8835FE] hover:from-[#7c30fe] hover:to-[#9f4efe] rounded-lg shadow-[0_0_25px_rgba(112,34,252,0.4)] hover:shadow-[0_0_35px_rgba(112,34,252,0.6)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7022FC]"
            >
              <span>Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#FDBF32]" />
            </button>

            <button
              onClick={onTalkToExperts}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-[#010102]/60 hover:bg-white/5 border border-white/15 hover:border-[#FDBF32]/60 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBF32]"
            >
              <span>Talk to Our Team</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FDBF32]" />
            </button>
          </div>
        </div>
      </div>

      {/* Dramatic Planetary Horizon & Horizontal Glow from Official Brand Artwork */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden h-24 sm:h-32 lg:h-40 flex items-end">
        <img
          src="/assets/apeiron-planetary-horizon.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top opacity-70 mix-blend-screen"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7022FC] to-[#FDBF32] to-transparent shadow-[0_0_35px_rgba(112,34,252,0.9)]" />
      </div>
    </section>
  );
};

