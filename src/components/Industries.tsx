import React, { useState } from 'react';
import {
  Landmark,
  Radio,
  HeartPulse,
  Factory,
  ShoppingBag,
  Building,
  Laptop,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);

  const industries = [
    {
      id: 'banking-finance',
      title: 'Banking & Financial Services',
      icon: Landmark,
      threatFocus: 'Payment Processing Integrity, Access Management, Data Protection',
      compliance: 'PCI-DSS, GLBA, SOX',
      description:
        'Helping financial institutions safeguard customer data, maintain compliant transaction environments, and protect against unauthorized account access.',
    },
    {
      id: 'telecom',
      title: 'Telecommunications',
      icon: Radio,
      threatFocus: 'Network Infrastructure, Service Availability, Gateway Defense',
      compliance: 'Telecom Security Regulations, ISO 27001',
      description:
        'Protecting communication networks, service endpoints, and customer management systems against service interruption and data compromise.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      icon: HeartPulse,
      threatFocus: 'Medical Systems Security, Patient Data Privacy, Service Availability',
      compliance: 'HIPAA, HITECH Guidelines',
      description:
        'Supporting healthcare organizations in securing electronic health records, protecting connected equipment, and maintaining care continuity.',
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industrial',
      icon: Factory,
      threatFocus: 'Operational Systems (OT), Production Continuity, Supply Chain Controls',
      compliance: 'NIST CSF, IEC 62443 Standards',
      description:
        'Securing production systems, plant networks, and supplier integrations to maintain safe, dependable operations without unplanned downtime.',
    },
    {
      id: 'retail-ecommerce',
      title: 'Retail & E-commerce',
      icon: ShoppingBag,
      threatFocus: 'Payment Security, Customer Account Protection, Web Application Defense',
      compliance: 'PCI-DSS, Regional Privacy Laws',
      description:
        'Protecting online storefronts, customer account portals, and checkout integrations against fraud, scraping, and service disruptions.',
    },
    {
      id: 'government-public',
      title: 'Government & Public Sector',
      icon: Building,
      threatFocus: 'Public Service Systems, Identity Verification, Access Governance',
      compliance: 'NIST SP 800-53, Statutory Baselines',
      description:
        'Assisting public sector organizations with protecting administrative systems, citizen records, and critical public infrastructure.',
    },
    {
      id: 'technology-services',
      title: 'Technology & Professional Services',
      icon: Laptop,
      threatFocus: 'Software Delivery Pipelines, API Security, Client Data Safeguards',
      compliance: 'SOC 2, ISO 27001',
      description:
        'Helping technology providers and consulting firms safeguard client records, proprietary intellectual property, and cloud-hosted platforms.',
    },
  ];

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FDBF32]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
            <span>Sector Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industries We Support.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tailored cybersecurity and artificial intelligence frameworks architected for specific regulatory mandates, threat postures, and operational environments.
          </p>
        </div>

        {/* Professional Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isHovered = activeIndustry === idx;

            return (
              <div
                key={ind.id}
                onMouseEnter={() => setActiveIndustry(idx)}
                onMouseLeave={() => setActiveIndustry(null)}
                className={`relative rounded-2xl p-7 sm:p-8 bg-[#050509] border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered
                    ? 'border-[#7022FC]/60 shadow-[0_15px_35px_rgba(112,34,252,0.15)] bg-[#080711]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#010102] border border-white/10 flex items-center justify-center text-[#FDBF32] group-hover:text-white group-hover:bg-[#7022FC] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                      SECTOR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {ind.description}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#FDBF32] font-semibold block">
                      Target Threat Focus
                    </span>
                    <span className="text-slate-300 font-medium">{ind.threatFocus}</span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                      Compliance Baselines
                    </span>
                    <span className="text-slate-400 font-mono">{ind.compliance}</span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Complementary Sector Advisory Tile */}
          <div className="rounded-2xl p-7 sm:p-8 bg-gradient-to-br from-[#120B24] via-[#090714] to-[#010102] border border-[#7022FC]/50 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#7022FC]/20 border border-[#7022FC] flex items-center justify-center text-[#FDBF32] mb-5">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                Custom Sector Defense
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Operating in energy grids, aerospace, logistics, or defense contracting? Apeiron conducts bespoke threat modeling for bespoke enterprise environments.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FDBF32] hover:text-white transition-colors"
              >
                <span>Request Custom Threat Model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
