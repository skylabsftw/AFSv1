import React, { useState } from 'react';
import {
  ShieldAlert,
  Server,
  Radar,
  Crosshair,
  Bot,
  CloudCheck,
  ArrowRight,
} from 'lucide-react';
import { SolutionModal, SolutionItem } from './SolutionModal';

interface SolutionsProps {
  onSelectSolutionForInquiry: (solutionName: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onSelectSolutionForInquiry }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  const solutionsList: SolutionItem[] = [
    {
      id: 'managed-cybersecurity',
      number: '01',
      title: 'Managed Cybersecurity',
      shortDesc:
        'Ongoing security monitoring, managed defensive services, endpoint protection, and security operations support.',
      iconName: 'ShieldAlert',
      enterpriseValue:
        'Reliable day-to-day security management that helps reduce operational overhead while maintaining consistent system oversight.',
      capabilities: [
        'Endpoint Detection and Management',
        'Vulnerability Hygiene and Patch Oversight',
        'Routine Security Operations Support',
        'Access and Identity Policy Enforcement',
      ],
      technicalHighlights: [
        'Centralized log and event visibility across workstations and servers.',
        'Standardized defensive configurations aligned with industry baselines.',
        'Documented procedures for timely threat containment.',
      ],
    },
    {
      id: 'soc',
      number: '02',
      title: 'Security Operations Center (SOC)',
      shortDesc:
        'Continuous security monitoring, alert analysis, threat detection, and coordinated incident response.',
      iconName: 'Server',
      enterpriseValue:
        'Dedicated monitoring and structured alert triage to help identify and contain potential security issues before they escalate.',
      capabilities: [
        'Continuous Security Event Monitoring',
        'Systematic Alert Triage and Investigation',
        'Incident Response and Remediation Support',
        'Regular Operational Summary Reports',
      ],
      technicalHighlights: [
        'Centralized telemetry ingestion across key network nodes and cloud services.',
        'Documented escalation paths to ensure the right personnel are engaged promptly.',
        'Clear incident documentation to support post-incident reviews.',
      ],
    },
    {
      id: 'threat-intelligence',
      number: '03',
      title: 'Threat Intelligence & Digital Protection',
      shortDesc:
        'External threat monitoring, brand protection, and actionable intelligence on emerging security risks.',
      iconName: 'Radar',
      enterpriseValue:
        'Visibility into relevant external threats, helping security teams anticipate risks and protect corporate assets.',
      capabilities: [
        'External Threat and Exposure Monitoring',
        'Domain and Brand Impersonation Tracking',
        'Compromised Credential Detection',
        'Actionable Threat Summaries for Internal Teams',
      ],
      technicalHighlights: [
        'Curated threat data feeds relevant to your organization and industry.',
        'Continuous tracking of public repositories and external forums for exposure.',
        'Practical guidance on prioritizing defensive adjustments.',
      ],
    },
    {
      id: 'offensive-security',
      number: '04',
      title: 'Offensive Security & Assurance',
      shortDesc:
        'Practical penetration testing, vulnerability assessments, and technical security reviews.',
      iconName: 'Crosshair',
      enterpriseValue:
        'Methodical technical testing that uncovers weaknesses in systems and applications, supported by clear remediation guidance.',
      capabilities: [
        'Network and Infrastructure Penetration Testing',
        'Web Application and API Security Assessments',
        'Configuration and Architecture Reviews',
        'Remediation Retesting and Verification',
      ],
      technicalHighlights: [
        'Testing performed against established industry methodologies (OWASP, NIST).',
        'Clear, prioritized findings with realistic remediation advice.',
        'Detailed executive summary and technical documentation for IT teams.',
      ],
    },
    {
      id: 'ai-automation',
      number: '05',
      title: 'Artificial Intelligence & Intelligent Automation',
      shortDesc:
        'Applied automation and analytical tools to streamline security workflows and improve threat detection.',
      iconName: 'Bot',
      enterpriseValue:
        'Practical automation designed to reduce manual workload, accelerate alert review, and improve operational efficiency.',
      capabilities: [
        'Automated Alert Triage and Noise Reduction',
        'Intelligent Log Parsing and Anomaly Highlighting',
        'Workflow Automation for Repetitive IT Security Tasks',
        'Secure Deployment Guidance for Internal AI Tools',
      ],
      technicalHighlights: [
        'Automation rules designed to save analyst time without introducing false negatives.',
        'Safe configuration guardrails for enterprise data handling.',
        'Integration with existing ticketing and communication systems.',
      ],
    },
    {
      id: 'cloud-infrastructure',
      number: '06',
      title: 'Cloud & Infrastructure Security',
      shortDesc:
        'Cloud security reviews, identity and access management, and infrastructure hardening.',
      iconName: 'CloudCheck',
      enterpriseValue:
        'Properly configured cloud and network environments built on sound access controls and standard security baselines.',
      capabilities: [
        'Cloud Configuration and Posture Reviews',
        'Identity and Access Management (IAM) Auditing',
        'Network Segmentation and Boundary Controls',
        'Container and Host Hardening Guidelines',
      ],
      technicalHighlights: [
        'Assessment of configuration against cloud security benchmarks.',
        'Review of permissions to enforce least-privilege principles.',
        'Practical recommendations to reduce unnecessary external exposure.',
      ],
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#7022FC]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#9C52FD]" />;
      case 'Radar':
        return <Radar className="w-6 h-6 text-[#FDBF32]" />;
      case 'Crosshair':
        return <Crosshair className="w-6 h-6 text-[#7022FC]" />;
      case 'Bot':
        return <Bot className="w-6 h-6 text-[#FDBF32]" />;
      case 'CloudCheck':
        return <CloudCheck className="w-6 h-6 text-[#9C52FD]" />;
      default:
        return <ShieldAlert className="w-6 h-6 text-[#7022FC]" />;
    }
  };

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 scroll-mt-16">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#7022FC]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Cybersecurity Solutions.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Comprehensive security services designed to help organizations monitor their environments, address vulnerabilities, and maintain strong operational continuity.
            </p>
          </div>
        </div>

        {/* 6 Elegant Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {solutionsList.map((sol) => (
            <div
              key={sol.id}
              className="relative rounded-2xl p-7 sm:p-8 bg-[#06060B] border border-white/10 hover:border-[#7022FC]/60 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_15px_40px_rgba(112,34,252,0.18)]"
            >
              {/* Subtle Card Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#7022FC]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Header: Icon */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#010102] border border-white/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:border-[#7022FC]/50">
                    {getIcon(sol.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
                  {sol.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {sol.shortDesc}
                </p>
              </div>

              {/* Card Footer: Learn More */}
              <div className="pt-6 border-t border-white/10">
                <button
                  onClick={() => setSelectedSolution(sol)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-slate-200 group-hover:text-[#FDBF32] transition-colors focus:outline-none focus-visible:underline"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Solution Detail Modal */}
      <SolutionModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onInquire={(title) => {
          onSelectSolutionForInquiry(title);
        }}
      />
    </section>
  );
};
