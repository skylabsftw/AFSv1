import React from 'react';
import { Eye, Sparkles, Activity } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Risk-Focused Defense',
      summary: 'Protecting what matters most to your organization.',
      detail:
        'We evaluate vulnerabilities in the context of business impact, prioritizing defensive measures where they mitigate actual operational risk.',
      icon: Eye,
      accentColor: '#7022FC',
    },
    {
      title: 'Practical Innovation',
      summary: 'Applying technology where it delivers real results.',
      detail:
        'We integrate automation and machine learning to reduce manual overhead, speed up response times, and improve overall detection accuracy.',
      icon: Sparkles,
      accentColor: '#9C52FD',
    },
    {
      title: 'Operational Continuity',
      summary: 'Keeping your business running securely.',
      detail:
        'Our services are designed to protect critical systems and maintain daily business operations without adding unnecessary complexity.',
      icon: Activity,
      accentColor: '#FDBF32',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7022FC]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#FDBF32]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
            <span>About Apeiron</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Cybersecurity Built Around Your Business.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            <p>
              Apeiron Frontier Security provides cybersecurity services that help organizations protect their infrastructure, safeguard critical information, and manage evolving security risks.
            </p>
            <p className="text-slate-400">
              We work with businesses to understand their security requirements and deliver solutions suited to their operations, resources, and long-term objectives.
            </p>
          </div>
        </div>

        {/* Visual & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Abstract Resilience Architecture Graphic (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#07070B] overflow-hidden group">
            <div className="relative h-72 lg:h-full min-h-[320px] w-full overflow-hidden">
              <img
                src="/src/assets/images/about_abstract_geometry_1794363333024.jpg"
                alt="Apeiron Digital Resilience Architectural Lattice"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010102] via-[#010102]/30 to-transparent" />
            </div>

            <div className="p-6 relative z-10 bg-[#010102]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-[#FDBF32] font-semibold mb-1">
                  Foundational Architecture
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Interconnected cryptographic defense meshes paired with intelligent autonomous surveillance.
                </p>
              </div>
              <img
                src="/assets/apeiron-emblem-3d.png"
                alt="Apeiron Official Emblem"
                className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_0_15px_rgba(112,34,252,0.45)]"
              />
            </div>
          </div>

          {/* Right Column: Three Principles Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={principle.title}
                  className="relative p-7 sm:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 hover:border-[#7022FC]/50 group"
                >
                  <div className="flex items-start gap-5">
                    {/* Minimalist Icon Badge */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-[#010102] transition-colors duration-300 group-hover:border-[#7022FC]"
                      style={{
                        boxShadow: `0 0 20px ${principle.accentColor}25`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" style={{ color: principle.accentColor }} />
                    </div>

                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {principle.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-slate-200">
                        {principle.summary}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                        {principle.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
