import React, { useState } from 'react';
import { Target, Brain, Building2, Zap, Check, ArrowRight } from 'lucide-react';

interface WhyApeironProps {
  onTalkToExperts: () => void;
}

export const WhyApeiron: React.FC<WhyApeironProps> = ({ onTalkToExperts }) => {
  const [activeTab, setActiveTab] = useState(0);

  const differentiators = [
    {
      id: 'practical-approach',
      title: 'Practical Approach',
      tagline: 'Security solutions aligned with actual business requirements.',
      icon: Target,
      accentColor: '#7022FC',
      description:
        'We design cybersecurity controls that fit into how your organization actually works. Rather than applying rigid checklists, we evaluate your systems, team resources, and risk priorities to implement measures that provide meaningful protection without disrupting productivity.',
      features: [
        'Security controls tailored to existing infrastructure and workflows',
        'Prioritized recommendations based on real business impact',
        'Cost-effective implementation focused on high-risk areas',
      ],
      metricsLabel: 'Operational Fit',
      metricsDesc: 'Security measures integrated with daily business workflows',
    },
    {
      id: 'technical-expertise',
      title: 'Technical Expertise',
      tagline: 'A focus on sound security practices and effective implementation.',
      icon: Brain,
      accentColor: '#9C52FD',
      description:
        'Our team brings extensive technical experience across defensive operations, cloud infrastructure, and offensive testing. We stay focused on foundational security hygiene, proper system configuration, and thorough execution.',
      features: [
        'Hands-on expertise across cloud, hybrid, and on-premises environments',
        'Disciplined adherence to established industry security standards',
        'Experienced practitioners managing monitoring, testing, and triage',
      ],
      metricsLabel: 'Technical Rigor',
      metricsDesc: 'Systematic testing, verified configurations, and validated defenses',
    },
    {
      id: 'business-continuity',
      title: 'Business Continuity',
      tagline: 'Helping organizations reduce exposure and maintain operations.',
      icon: Building2,
      accentColor: '#FDBF32',
      description:
        'A security incident should not bring operations to a halt. We help organizations design resilient architectures, secure critical data assets, and prepare practical response procedures so business services continue smoothly.',
      features: [
        'Clear incident response procedures with defined escalation paths',
        'Proactive monitoring to detect and isolate issues early',
        'Backup and recovery readiness reviews to minimize potential downtime',
      ],
      metricsLabel: 'Resilience Assurance',
      metricsDesc: 'Procedures engineered to sustain operations during disruptions',
    },
    {
      id: 'continuous-improvement',
      title: 'Continuous Improvement',
      tagline: 'Adapting security measures as business needs and threats change.',
      icon: Zap,
      accentColor: '#7022FC',
      description:
        'Security is not a one-time project. As your organization adds new services, adopts new technologies, or faces evolving threats, we work alongside you to review performance, update controls, and strengthen your security posture over time.',
      features: [
        'Regular vulnerability assessments and environment reviews',
        'Post-incident reviews to identify opportunities for improvement',
        'Periodic roadmap updates aligned with company growth and regulatory changes',
      ],
      metricsLabel: 'Long-Term Partnership',
      metricsDesc: 'Ongoing advisory and posture reviews as your organization evolves',
    },
  ];

  return (
    <section id="ai-innovation" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 overflow-hidden scroll-mt-16">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#7022FC]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
            <span>Why Apeiron</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
            A Security Partner That Understands Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Organizations need cybersecurity support that is reliable, realistic, and responsive. We work with clients as a collaborative partner focused on protecting operations and supporting business goals.
          </p>
        </div>

        {/* 4 Differentiators Navigation Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={diff.id}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#0E0B19] border-[#7022FC] shadow-[0_0_25px_rgba(112,34,252,0.25)]'
                    : 'bg-[#050509] border-white/10 hover:border-white/20 hover:bg-[#07070F]'
                }`}
              >
                {isActive && (
                  <span className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7022FC] to-[#FDBF32] rounded-t-xl" />
                )}
                <div className="flex items-center mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                      isActive
                        ? 'border-[#7022FC] bg-[#7022FC]/20 text-[#FDBF32]'
                        : 'border-white/10 bg-white/5 text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {diff.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                    {diff.tagline}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Showcase Panel for Active Differentiator */}
        <div className="rounded-2xl border border-white/15 bg-[#06060C] p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle Corner Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20"
            style={{ backgroundColor: differentiators[activeTab].accentColor }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-[#FDBF32] font-semibold">
                  Core Principle
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {differentiators[activeTab].title}: {differentiators[activeTab].tagline}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {differentiators[activeTab].description}
              </p>

              {/* Bulleted Capabilities */}
              <div className="space-y-3 pt-2">
                {differentiators[activeTab].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#7022FC]/20 border border-[#7022FC]/50 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#FDBF32]" />
                    </div>
                    <span className="text-sm text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onTalkToExperts}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7022FC] to-[#8F3EFE] hover:brightness-110 px-5 py-3 rounded-lg shadow-md transition-all duration-200"
                >
                  <span>Discuss Your Security Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FDBF32]" />
                </button>
              </div>
            </div>

            {/* Right Abstract Geometric Diagram (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center p-6 bg-[#020204] rounded-xl border border-white/10">
              <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center">
                {/* Mathematical Geometric Rings & SVG Blueprint */}
                <svg
                  viewBox="0 0 200 200"
                  className="w-full h-full text-slate-700"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Concentric Rings */}
                  <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-slate-800" />
                  <circle cx="100" cy="100" r="60" stroke="#7022FC" strokeWidth="1.5" className="opacity-50" />
                  <circle cx="100" cy="100" r="35" stroke="#FDBF32" strokeWidth="1" strokeDasharray="2 3" className="opacity-70" />

                  {/* Dynamic Radial Ray Coordinates */}
                  <line x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
                  <line x1="15" y1="100" x2="185" y2="100" stroke="currentColor" strokeWidth="1" className="text-slate-800" />
                  <line x1="40" y1="40" x2="160" y2="160" stroke="#7022FC" strokeWidth="1" className="opacity-30" />
                  <line x1="160" y1="40" x2="40" y2="160" stroke="#FDBF32" strokeWidth="1" className="opacity-30" />

                  {/* Satellite Perimeter Nodes */}
                  <circle cx="100" cy="40" r="4" fill="#7022FC" />
                  <circle cx="160" cy="100" r="4" fill="#FDBF32" />
                  <circle cx="100" cy="160" r="4" fill="#7022FC" />
                  <circle cx="40" cy="100" r="4" fill="#FDBF32" />

                  {/* Core Autonomous Hub */}
                  <polygon
                    points="100,75 125,115 75,115"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    fill="#7022FC"
                    fillOpacity="0.25"
                  />
                  <circle cx="100" cy="100" r="5" fill="#FFFFFF" />
                </svg>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-2 -left-2 sm:-left-4 bg-[#0A0814]/95 backdrop-blur-md border border-[#7022FC]/50 rounded-lg p-3 text-left shadow-xl max-w-[210px]">
                  <div className="text-[10px] uppercase tracking-wider text-[#FDBF32] font-semibold">
                    {differentiators[activeTab].metricsLabel}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {differentiators[activeTab].metricsDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
