import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { InsightModal, InsightArticle } from './InsightModal';

interface InsightsProps {
  onSelectInsightForInquiry: (topic: string) => void;
}

export const Insights: React.FC<InsightsProps> = ({ onSelectInsightForInquiry }) => {
  const [selectedInsight, setSelectedInsight] = useState<InsightArticle | null>(null);

  const articles: InsightArticle[] = [
    {
      id: 'securing-enterprise-ai',
      category: 'AI Security & Tool Management',
      readTime: '5 min read',
      date: 'Current Advisory',
      title: 'Securing Internal AI Deployments: Access Controls and Data Safeguards',
      summary:
        'A practical overview of how organizations can establish boundaries around internal AI tools, manage sensitive data exposure, and configure proper access permissions.',
      keyTakeaways: [
        'Establish clear data classification guidelines for tools connected to language models.',
        'Enforce standard least-privilege principles on automated agent and API integrations.',
        'Maintain audit logs of external queries to prevent unintentional proprietary data leaks.',
      ],
      fullAnalysis: [
        'As businesses introduce automated assistants and language models into internal workflows, securing data flows becomes as important as securing traditional applications. The primary risks often stem from overly broad access permissions and unreviewed data integrations.',
        'Security teams should begin by inventorying which departments are adopting AI tools and identifying what data those systems can access. Applying simple, consistent boundary rules prevents sensitive corporate information from being passed to external services unnecessarily.',
        'By combining standard API access controls with routine permission reviews, IT teams can support business productivity while maintaining data governance.',
      ],
    },
    {
      id: 'post-quantum-readiness',
      category: 'Applied Cryptography',
      readTime: '6 min read',
      date: 'Technical Note',
      title: 'Preparing Enterprise Systems for Post-Quantum Encryption Standards',
      summary:
        'A sensible roadmap for IT leaders to evaluate their cryptographic inventory, plan hardware refresh cycles, and prepare for updated encryption standards.',
      keyTakeaways: [
        'Review current encryption protocols across external gateways, VPNs, and internal storage.',
        'Coordinate upcoming hardware and software refreshes with post-quantum support roadmaps.',
        'Focus initial evaluation on long-term data assets that require multi-year confidentiality.',
      ],
      fullAnalysis: [
        'With NIST and international standards bodies publishing finalized post-quantum cryptographic standards, enterprise security teams have a clear technical path forward. The focus for most organizations should be on planning rather than immediate replacement.',
        'A sensible first step is developing an accurate inventory of where public-key cryptography is used across network appliances, digital certificates, and secure transport layers.',
        'Working with hardware and software vendors to ensure upcoming refresh cycles support modern hybrid algorithms allows organizations to transition smoothly without operational friction.',
      ],
    },
    {
      id: 'cloud-identity-governance',
      category: 'Cloud Architecture & Access',
      readTime: '5 min read',
      date: 'Best Practices',
      title: 'Practical Multi-Cloud Identity Governance: Reducing Access Risks',
      summary:
        'How to maintain consistent access controls, retire stale credentials, and reduce configuration drift across distributed cloud accounts.',
      keyTakeaways: [
        'Centralize identity federation to avoid managing separate credentials across cloud providers.',
        'Regularly review service accounts and machine identities to remove unused permissions.',
        'Automate configuration drift checks to maintain standard security baselines.',
      ],
      fullAnalysis: [
        'Managing user access and service accounts across multiple cloud platforms is one of the most common operational challenges for IT departments. Inconsistent policies between providers often lead to orphaned credentials and excessive permissions.',
        'Implementing centralized role-based access controls and enforcing short-lived session tokens significantly reduces the attack surface without hindering development teams.',
        'Routine auditing of service accounts and automated checks against configuration baselines help teams maintain consistent security standards across all environments.',
      ],
    },
  ];

  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 overflow-hidden scroll-mt-16">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#7022FC]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
              <span>Security Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Practical Perspectives on Cybersecurity.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Articles and technical notes from our security team on managing risk, emerging threats, and sound defense practices.
            </p>
          </div>

          <div className="text-xs uppercase tracking-widest text-slate-400 font-mono hidden md:block">
            SECURITY PERSPECTIVES
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedInsight(art)}
              className="group cursor-pointer rounded-2xl p-7 bg-[#06060B] border border-white/10 hover:border-[#7022FC]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_15px_35px_rgba(112,34,252,0.15)]"
            >
              <div>
                {/* Clean unboxed metadata (anti-pill rule) */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-4">
                  <span className="text-[#FDBF32] font-semibold">{art.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight leading-snug mb-3 group-hover:text-white transition-colors">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal line-clamp-3">
                  {art.summary}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-[#FDBF32] transition-colors flex items-center gap-1.5 uppercase tracking-wider">
                  Read Briefing
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-xs font-mono text-slate-500">{art.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Insight Modal */}
      <InsightModal
        insight={selectedInsight}
        onClose={() => setSelectedInsight(null)}
        onConsult={(topic) => onSelectInsightForInquiry(`Inquiry regarding research brief: ${topic}`)}
      />
    </section>
  );
};
