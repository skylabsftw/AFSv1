import React, { useState } from 'react';
import { Activity, ShieldCheck, Cpu, Terminal, Radio } from 'lucide-react';

export const ApeironFloatingTerminal: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number>(0);

  const telemetryFeed = [
    {
      title: 'Threat Intelligence',
      status: 'ACTIVE FEED',
      metric: 'Threat Feed Ingest',
      subtext: 'Continuous monitoring of external threat indicators and domain risks',
      icon: Cpu,
      color: '#7022FC',
    },
    {
      title: 'Vulnerability Assessment',
      status: 'SCHEDULED AUDIT',
      metric: 'Endpoint Hygiene',
      subtext: 'Regular vulnerability reviews and configuration compliance checks',
      icon: ShieldCheck,
      color: '#FDBF32',
    },
    {
      title: 'Security Analytics',
      status: 'OPERATIONAL',
      metric: 'Event Analytics',
      subtext: 'Log parsing, correlation rules, and anomaly detection',
      icon: Activity,
      color: '#9C52FD',
    },
    {
      title: 'Security Monitoring',
      status: 'CONTINUOUS',
      metric: 'System Visibility',
      subtext: 'Ongoing oversight across endpoints, cloud services, and network perimeter',
      icon: Radio,
      color: '#FDBF32',
    },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-2xl border border-white/10 bg-[#05050A]/85 backdrop-blur-2xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden text-slate-200 group">
      {/* Ambient Inner Lighting */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#7022FC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FDBF32]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="h-3.5 w-[1px] bg-white/10" />
          <div className="flex items-center gap-2 font-mono">
            <img src="/assets/apeiron-emblem-3d.png" alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
            <span className="text-white font-bold tracking-wider uppercase text-[11px]">
              APEIRON INTELLIGENCE
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
          <Terminal className="w-3 h-3 text-[#FDBF32]" />
          <span>SIM//NODE 01</span>
        </div>
      </div>

      {/* Illustrative Telemetry Grid */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {telemetryFeed.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeMetric === idx;

          return (
            <button
              key={item.title}
              onClick={() => setActiveMetric(idx)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                isActive
                  ? 'bg-white/[0.05] border-[#7022FC]/80 shadow-[0_0_15px_rgba(112,34,252,0.2)]'
                  : 'bg-black/40 border-white/5 hover:border-white/15'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className="w-4 h-4" style={{ color: item.color }} />
                <span className="text-[9px] font-mono tracking-wider font-semibold uppercase" style={{ color: item.color }}>
                  {item.status}
                </span>
              </div>
              <div className="text-xs font-bold text-white font-mono tracking-tight truncate">
                {item.metric}
              </div>
              <div className="text-[10px] text-slate-400 truncate mt-0.5">
                {item.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Stream Detail Banner */}
      <div className="p-3 rounded-xl bg-black/60 border border-white/5 mb-3">
        <div className="flex items-center justify-between text-[10px] font-mono mb-1 text-slate-400">
          <span className="uppercase tracking-widest text-[#FDBF32]">
            {telemetryFeed[activeMetric].title}
          </span>
          <span>HEURISTIC ACTIVE</span>
        </div>
        <p className="text-xs text-slate-300 font-mono leading-relaxed">
          {telemetryFeed[activeMetric].subtext}
        </p>
      </div>

      {/* Subtle Vector Frequency Graph (SVG) */}
      <div className="h-10 w-full overflow-hidden relative opacity-70">
        <svg viewBox="0 0 300 40" className="w-full h-full">
          <defs>
            <linearGradient id="termGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7022FC" />
              <stop offset="50%" stopColor="#9C52FD" />
              <stop offset="100%" stopColor="#FDBF32" />
            </linearGradient>
          </defs>
          <path
            d="M 0,20 Q 30,5 60,25 T 120,15 T 180,30 T 240,10 T 300,20"
            fill="none"
            stroke="url(#termGrad)"
            strokeWidth="1.5"
          />
          <circle cx="180" cy="30" r="3" fill="#FDBF32" />
          <circle cx="60" cy="25" r="2.5" fill="#7022FC" />
        </svg>
      </div>

      {/* Mandatory Illustrative Disclaimer */}
      <div className="mt-2 pt-2.5 border-t border-white/10 text-[9px] text-slate-400 leading-tight font-mono text-center">
        * Illustrative interface elements for architectural demonstration — not actual operational security data.
      </div>
    </div>
  );
};
