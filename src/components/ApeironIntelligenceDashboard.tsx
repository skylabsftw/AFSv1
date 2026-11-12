import React, { useState } from 'react';
import {
  Brain,
  Activity,
  AlertTriangle,
  Radio,
  FileText,
  Play,
  RotateCw,
  CheckCircle2,
  Info,
} from 'lucide-react';

export const ApeironIntelligenceDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'threat-intel' | 'analytics' | 'vulnerability' | 'monitoring' | 'reporting'
  >('threat-intel');
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleRunScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 1200);
  };

  return (
    <div className="relative w-full rounded-2xl border border-white/15 bg-[#030307]/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden text-slate-200">
      {/* Ambient Inner Corner Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#7022FC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-[#FDBF32]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-white/10 gap-3">
        <div className="flex items-center gap-3">
          {/* Terminal Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          </div>
          <span className="h-4 w-[1px] bg-white/10" />
          <div className="flex items-center gap-2">
            <img src="/apeiron-emblem.svg" alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
            <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
              APEIRON INTELLIGENCE
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#7022FC]/20 text-[#FDBF32] border border-[#7022FC]/40 font-semibold">
              v4.2 SIM
            </span>
          </div>
        </div>

        {/* Action: Simulate Heuristic Scan */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunScan}
            disabled={isScanning}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono font-semibold uppercase tracking-wider text-white bg-[#7022FC]/30 hover:bg-[#7022FC]/50 border border-[#7022FC]/60 transition-all disabled:opacity-50"
          >
            {isScanning ? (
              <>
                <RotateCw className="w-3 h-3 animate-spin text-[#FDBF32]" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-[#FDBF32]" />
                <span>Run Heuristic Audit</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex overflow-x-auto gap-2 pb-2 mb-4 border-b border-white/5 no-scrollbar text-xs">
        <button
          onClick={() => setActiveTab('threat-intel')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
            activeTab === 'threat-intel'
              ? 'bg-[#7022FC]/25 text-white border border-[#7022FC]/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Brain className="w-3.5 h-3.5 text-[#FDBF32]" />
          <span>AI Threat Intel</span>
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
            activeTab === 'analytics'
              ? 'bg-[#7022FC]/25 text-white border border-[#7022FC]/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Activity className="w-3.5 h-3.5 text-[#7022FC]" />
          <span>Security Analytics</span>
        </button>
        <button
          onClick={() => setActiveTab('vulnerability')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
            activeTab === 'vulnerability'
              ? 'bg-[#7022FC]/25 text-white border border-[#7022FC]/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <AlertTriangle className="w-3.5 h-3.5 text-[#FDBF32]" />
          <span>Vulnerability Detection</span>
        </button>
        <button
          onClick={() => setActiveTab('monitoring')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
            activeTab === 'monitoring'
              ? 'bg-[#7022FC]/25 text-white border border-[#7022FC]/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Radio className="w-3.5 h-3.5 text-[#7022FC]" />
          <span>Security Monitoring</span>
        </button>
        <button
          onClick={() => setActiveTab('reporting')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors font-medium ${
            activeTab === 'reporting'
              ? 'bg-[#7022FC]/25 text-white border border-[#7022FC]/50'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <FileText className="w-3.5 h-3.5 text-[#FDBF32]" />
          <span>Automated Reporting</span>
        </button>
      </div>

      {/* Tab Panels */}
      <div className="space-y-4 min-h-[260px]">
        {/* 1. AI Threat Intelligence */}
        {activeTab === 'threat-intel' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            {/* Top Telemetry Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  Anomaly Confidence
                </span>
                <span className="text-sm font-bold text-white font-mono">99.4%</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  Active Attack Paths
                </span>
                <span className="text-sm font-bold text-[#FDBF32] font-mono">0 Vector Active</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  Adversary TTPs
                </span>
                <span className="text-sm font-bold text-white font-mono">48 MITRE Mapped</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  Containment Auto
                </span>
                <span className="text-sm font-bold text-[#7022FC] font-mono">Enforced</span>
              </div>
            </div>

            {/* Neural Anomaly Vector Chart (SVG) */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/10">
              <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                <span className="text-slate-400">NEURAL THREAT CORRELATION MESH</span>
                <span className="text-[#FDBF32]">SUB-MILLISECOND SAMPLING</span>
              </div>
              <svg viewBox="0 0 400 90" className="w-full h-20 overflow-visible">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#7022FC" stopOpacity="0.8" />
                    <stop offset="60%" stopColor="#9C52FD" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#FDBF32" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7022FC" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#7022FC" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid guidelines */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.05)" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255,255,255,0.05)" />
                {/* Area Fill */}
                <path
                  d="M0,70 Q50,60 100,65 T200,30 T300,45 T400,20 L400,90 L0,90 Z"
                  fill="url(#areaGrad)"
                />
                {/* Wave Curve */}
                <path
                  d="M0,70 Q50,60 100,65 T200,30 T300,45 T400,20"
                  fill="none"
                  stroke="url(#chartGrad)"
                  strokeWidth="2.5"
                />
                {/* Target Intercept Marker */}
                <circle cx="200" cy="30" r="4" fill="#FFFFFF" stroke="#7022FC" strokeWidth="2" />
                <circle cx="400" cy="20" r="4" fill="#FDBF32" />
              </svg>
            </div>

            {/* Simulated Live Classification Log */}
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="p-2 rounded bg-black/60 border border-white/5 flex items-center justify-between text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7022FC]" />
                  <span>SYN-Flood Invariant Correlated</span>
                </div>
                <span className="text-[#FDBF32]">AUTO-MITIGATED (0.04ms)</span>
              </div>
              <div className="p-2 rounded bg-black/60 border border-white/5 flex items-center justify-between text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FDBF32]" />
                  <span>Agent Prompt Injection Envelope Inspected</span>
                </div>
                <span className="text-white">PAYLOAD NEUTRALIZED</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. Security Analytics */}
        {activeTab === 'analytics' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400">
                  Telemetry Ingest Rate
                </span>
                <div className="text-base font-bold text-white font-mono mt-0.5">
                  1.42M events/sec
                </div>
                <span className="text-[10px] text-[#FDBF32]">+18% high-entropy parsing</span>
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400">
                  Mean Time to Detect (MTTD)
                </span>
                <div className="text-base font-bold text-white font-mono mt-0.5">
                  &lt; 3.2 seconds
                </div>
                <span className="text-[10px] text-[#7022FC]">Continuous behavioral baseline</span>
              </div>
              <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] uppercase font-mono text-slate-400">
                  Cluster Health Index
                </span>
                <div className="text-base font-bold text-[#FDBF32] font-mono mt-0.5">
                  100% Deterministic
                </div>
                <span className="text-[10px] text-slate-400">Multi-cloud cluster integrity</span>
              </div>
            </div>

            {/* Traffic Distribution Bars */}
            <div className="p-3.5 rounded-lg bg-black/40 border border-white/10 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-300">Edge Gateway Ingress</span>
                <span className="text-[#FDBF32]">42.8 GB/s</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7022FC] to-[#FDBF32] w-[78%]" />
              </div>

              <div className="flex justify-between text-xs font-mono pt-1">
                <span className="text-slate-300">Cryptographic Mutual TLS Enclaves</span>
                <span className="text-white">100% Attested</span>
              </div>
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7022FC] via-[#9C52FD] to-white w-[100%]" />
              </div>
            </div>
          </div>
        )}

        {/* 3. Vulnerability Detection */}
        {activeTab === 'vulnerability' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-lg bg-black/50 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-white">Continuous Attack Surface Engine</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Evaluating 1,840 cloud endpoints, API gateways, and microservices
                </div>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#7022FC]/20 text-[#FDBF32] text-xs font-mono border border-[#7022FC]/40 font-bold">
                ZERO CRITICAL OPEN
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200">Post-Quantum Algorithm Coverage</span>
                  <p className="text-[10px] text-slate-400">ML-KEM / ML-DSA cryptographic transition audit</p>
                </div>
                <span className="text-xs font-mono text-[#FDBF32]">94% MIGRATED</span>
              </div>

              <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-slate-200">Identity Drift & Key Hygiene</span>
                  <p className="text-[10px] text-slate-400">Ephemeral SPIFFE workload attestations enforced</p>
                </div>
                <span className="text-xs font-mono text-[#7022FC]">ENFORCED</span>
              </div>
            </div>
          </div>
        )}

        {/* 4. Security Monitoring */}
        {activeTab === 'monitoring' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  Global SOC Correlation
                </span>
                <div className="text-sm font-bold text-white mt-1">24/7 Follow-the-Sun</div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Active tier-3 analyst oversight across distributed timezones.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-black/50 border border-white/10">
                <span className="text-[10px] font-mono uppercase text-slate-400">
                  Workload Isolation
                </span>
                <div className="text-sm font-bold text-[#FDBF32] mt-1">Microsegmentation Active</div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Lateral movement vectors cryptographically constrained.
                </p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-black/40 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-300">SIMULATED ACTIVE PROBES: 4,892 NODES</span>
              <span className="text-[#FDBF32] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FDBF32]" />
                ALL SURFACES VERIFIED
              </span>
            </div>
          </div>
        )}

        {/* 5. Automated Security Reporting */}
        {activeTab === 'reporting' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-3.5 rounded-lg bg-black/50 border border-white/10">
              <div className="text-xs font-bold text-white mb-1">
                Executive & Regulatory Synthesis Engine
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Autonomous generation of Board-ready cybersecurity risk summaries, compliance attestation reports, and remediation audit trails.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">ISO 27001 / SOC 2 Type II</span>
                <span className="font-mono text-[#FDBF32] text-[11px]">AUDIT-READY</span>
              </div>
              <div className="p-2.5 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">NIS2 / FedRAMP Standards</span>
                <span className="font-mono text-[#7022FC] text-[11px]">COMPLIANT</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Simulated Scan Notification Banner */}
      {scanComplete && (
        <div className="mt-3 p-2.5 rounded-lg bg-[#7022FC]/20 border border-[#7022FC]/50 text-xs text-white flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#FDBF32]" />
            <span>Simulated Heuristic Scan: Enterprise Perimeter Integrity Verified.</span>
          </div>
          <button
            onClick={() => setScanComplete(false)}
            className="text-[10px] text-slate-400 hover:text-white uppercase font-mono"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Disclaimer (Mandatory) */}
      <div className="mt-4 pt-3 border-t border-white/10 flex items-start gap-2 text-[10px] text-slate-400 leading-relaxed">
        <Info className="w-3.5 h-3.5 text-[#FDBF32] shrink-0 mt-0.5" />
        <span>
          Illustrative interface elements for architectural demonstration — not actual operational security data.
        </span>
      </div>
    </div>
  );
};
