import React, { useState } from 'react';
import { Search, Shield, Eye, LifeBuoy, TrendingUp, Check } from 'lucide-react';

export const Approach: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const stages = [
    {
      id: 'assess',
      number: '01',
      title: 'ASSESS',
      summary: 'Review existing systems, identify security gaps, and understand organizational priorities.',
      icon: Search,
      accent: '#7022FC',
      keyActions: [
        'Review network configurations, endpoints, and access permissions',
        'Identify unpatched software and potential security vulnerabilities',
        'Document current controls against relevant industry standards',
      ],
      outcome: 'A clear overview of current security strengths and areas for improvement',
    },
    {
      id: 'plan',
      number: '02',
      title: 'PLAN',
      summary: 'Develop a realistic security roadmap aligned with budget and operational requirements.',
      icon: Shield,
      accent: '#893DFE',
      keyActions: [
        'Prioritize remediation tasks based on potential operational impact',
        'Define timelines, technical requirements, and required resources',
        'Establish clear incident response procedures and communication roles',
      ],
      outcome: 'A practical action plan tailored to your team and business priorities',
    },
    {
      id: 'implement',
      number: '03',
      title: 'IMPLEMENT',
      summary: 'Deploy the necessary controls, tools, and processes cleanly and effectively.',
      icon: Eye,
      accent: '#A558FD',
      keyActions: [
        'Configure protective controls and endpoint security tools',
        'Implement multi-factor authentication and role-based access rules',
        'Provide straightforward security guidance to relevant internal staff',
      ],
      outcome: 'Properly configured security measures protecting day-to-day operations',
    },
    {
      id: 'monitor',
      number: '04',
      title: 'MONITOR',
      summary: 'Provide ongoing visibility and detection to identify issues before they cause disruption.',
      icon: LifeBuoy,
      accent: '#FDBF32',
      keyActions: [
        'Continuous event monitoring across key systems and network gateways',
        'Timely alert review and triage to separate false alarms from real threats',
        'Rapid escalation and coordinated assistance when an issue is detected',
      ],
      outcome: 'Dependable oversight and timely support when security questions arise',
    },
    {
      id: 'improve',
      number: '05',
      title: 'IMPROVE',
      summary: 'Regularly review performance and adapt security measures as operations grow.',
      icon: TrendingUp,
      accent: '#7022FC',
      keyActions: [
        'Conduct periodic vulnerability reviews and configuration checks',
        'Review security performance against business milestones and new tools',
        'Update defensive controls as team size, services, or regulations change',
      ],
      outcome: 'A reliable security posture that keeps pace with your business',
    },
  ];

  return (
    <section id="approach" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#7022FC]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            A Clear Approach to Better Security.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A structured, step-by-step process designed to help organizations build sound defenses, maintain visibility, and improve security over time.
          </p>
        </div>

        {/* 5-Stage Horizontal Process Stepper */}
        <div className="relative mb-12 hidden lg:block">
          {/* Connecting Track */}
          <div className="absolute top-8 left-8 right-8 h-[2px] bg-white/10 -z-0">
            <div
              className="h-full bg-gradient-to-r from-[#7022FC] via-[#A558FD] to-[#FDBF32] transition-all duration-500"
              style={{ width: `${(selectedStage / (stages.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = selectedStage === idx;
              const isPast = selectedStage >= idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none"
                >
                  {/* Step Node */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#7022FC] border-[#FDBF32] shadow-[0_0_25px_rgba(112,34,252,0.8)] scale-110 text-white'
                        : isPast
                        ? 'bg-[#150F26] border-[#7022FC]/60 text-[#FDBF32]'
                        : 'bg-[#08080E] border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <div className="mt-4">
                    <h3 className={`text-sm font-extrabold tracking-wider transition-colors ${
                      isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {stage.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Stage Selectors */}
        <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 mb-8 no-scrollbar">
          {stages.map((stage, idx) => {
            const isSelected = selectedStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(idx)}
                className={`shrink-0 px-4 py-2.5 rounded-lg border text-xs font-bold uppercase tracking-wider transition-all ${
                  isSelected
                    ? 'bg-[#7022FC] text-white border-[#FDBF32]'
                    : 'bg-[#08080E] text-slate-300 border-white/10'
                }`}
              >
                {stage.number} — {stage.title}
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Card */}
        <div className="rounded-2xl border border-white/15 bg-[#06060C] p-8 sm:p-10 relative overflow-hidden transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#FDBF32] px-2.5 py-1 rounded bg-[#7022FC]/20 border border-[#7022FC]/40">
                  STAGE {stages[selectedStage].number}
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {stages[selectedStage].title}
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 font-medium">
                {stages[selectedStage].summary}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Operational Execution
                </h4>
                <div className="space-y-2.5">
                  {stages[selectedStage].keyActions.map((action, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-[#7022FC]/30 border border-[#7022FC] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#FDBF32]" />
                      </div>
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 p-6 rounded-xl bg-gradient-to-br from-[#0B0916] to-[#040408] border border-white/10 flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FDBF32] font-semibold">
                  Stage Milestone Deliverable
                </span>
                <p className="text-sm font-semibold text-white mt-2 leading-relaxed">
                  {stages[selectedStage].outcome}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Security Lifecycle</span>
                <span className="font-mono text-white">Stage {selectedStage + 1} of 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
