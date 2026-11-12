import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Shield, Mail, Clock } from 'lucide-react';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState(initialSubject);
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!email.trim()) {
      newErrors.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!company.trim()) newErrors.company = 'Company name is required.';
    if (!subject.trim()) newErrors.subject = 'Subject is required.';
    if (!message.trim()) newErrors.message = 'Please include a message or inquiry details.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate frontend validation & transmission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setCompany('');
    setSubject('');
    setMessage('');
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#010102] border-t border-white/5 overflow-hidden scroll-mt-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[#7022FC]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FDBF32]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Official Brand Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[520px] h-[520px] opacity-[0.04] pointer-events-none select-none">
        <img
          src="/assets/apeiron-lineart.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Information & Enterprise Trust Signals (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBF32] mb-3">
                <span>Contact Our Team</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Let's Talk About Your Security Requirements.
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Whether you are reviewing your existing security measures, looking for managed cybersecurity services, or planning a new security initiative, our team is ready to discuss how we can help.
              </p>
            </div>

            {/* Enterprise Engagement Details */}
            <div className="space-y-6 pt-4 border-t border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#08080E] border border-white/10 flex items-center justify-center shrink-0 text-[#FDBF32]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Enterprise Inquiries
                  </h3>
                  <p className="text-sm font-mono text-white mt-0.5">
                    inquiries@apeironsecurity.example
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct channel for security architecture and RFP submissions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#08080E] border border-white/10 flex items-center justify-center shrink-0 text-[#7022FC]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Confidential & PGP Encrypted
                  </h3>
                  <p className="text-sm font-mono text-white mt-0.5">
                    PGP Key Fingerprint Available Upon Request
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Strict non-disclosure agreements executed prior to vulnerability briefings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#08080E] border border-white/10 flex items-center justify-center shrink-0 text-[#9C52FD]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Advisory Response Window
                  </h3>
                  <p className="text-sm font-mono text-white mt-0.5">
                    Within 4 Business Hours
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Rapid triage by dedicated security architects across global time zones.
                  </p>
                </div>
              </div>
            </div>

            {/* Note on Backend Integration (as required by prompt) */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
                <AlertCircle className="w-3.5 h-3.5 text-[#FDBF32]" />
                <span>Integration Notice</span>
              </div>
              <p>
                Initial frontend release. Submissions are validated client-side; backend integration endpoint is required before submissions can be received in production.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#06060C] p-8 sm:p-10 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#7022FC]/20 border border-[#7022FC] flex items-center justify-center text-[#FDBF32]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Inquiry Validated & Registered
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{fullName}</span>. Your inquiry regarding <span className="text-white font-semibold">{subject}</span> has been captured and validated successfully.
                  </p>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-400 max-w-md">
                    Note: Backend integration is required before real outbound dispatch occurs in production.
                  </div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 rounded-lg transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Enterprise Inquiry Form
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Complete all fields below to request an architecture briefing or security consultation.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Full Name <span className="text-[#FDBF32]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Elena Rostova"
                        className={`w-full px-4 py-3 rounded-lg bg-[#010102] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-[#7022FC]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Business Email <span className="text-[#FDBF32]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@enterprise.com"
                        className={`w-full px-4 py-3 rounded-lg bg-[#010102] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-[#7022FC]'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Company <span className="text-[#FDBF32]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Apex Global Bank"
                        className={`w-full px-4 py-3 rounded-lg bg-[#010102] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.company
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-[#7022FC]'
                        }`}
                      />
                      {errors.company && (
                        <p className="text-xs text-red-400 mt-1">{errors.company}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Subject <span className="text-[#FDBF32]">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="e.g. Managed Cybersecurity Architecture"
                        className={`w-full px-4 py-3 rounded-lg bg-[#010102] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors ${
                          errors.subject
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-[#7022FC]'
                        }`}
                      />
                      {errors.subject && (
                        <p className="text-xs text-red-400 mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Message <span className="text-[#FDBF32]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your security objectives, architecture environment, or AI defense requirements..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#010102] border text-sm text-white placeholder-slate-600 focus:outline-none transition-colors resize-y ${
                        errors.message
                          ? 'border-red-500 focus:border-red-500'
                            : 'border-white/15 focus:border-[#7022FC]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#7022FC] via-[#8E3FFE] to-[#FDBF32] hover:brightness-110 rounded-lg shadow-[0_0_25px_rgba(112,34,252,0.35)] transition-all duration-200 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <span>Get in Touch</span>
                          <Send className="w-4 h-4 text-white" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
