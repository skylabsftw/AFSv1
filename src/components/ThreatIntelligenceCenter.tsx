import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  Globe,
  Bug,
  Eye,
  BarChart3,
  AlertTriangle,
  Search,
  RefreshCw,
  Bell,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Activity,
  Terminal,
  X,
  ExternalLink,
  ShieldCheck,
  Radio,
} from 'lucide-react';

type ModuleType =
  | 'threat-intel'
  | 'attack-surface'
  | 'vulnerabilities'
  | 'brand-protection'
  | 'analytics'
  | 'incidents';

type SeverityFilter = 'ALL' | 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';

interface NotificationItem {
  id: string;
  title: string;
  time: string;
  unread: boolean;
  severity: 'critical' | 'high' | 'info';
}

export const ThreatIntelligenceCenter: React.FC = () => {
  const [activeModule, setActiveModule] = useState<ModuleType>('threat-intel');
  const [searchQuery, setSearchQuery] = useState('');
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>('ti-1');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: 'n-1',
      title: 'High-risk CVE-2026-1940 published affecting Ingress Gateways',
      time: '2m ago',
      unread: true,
      severity: 'critical',
    },
    {
      id: 'n-2',
      title: 'Typosquatted domain detected: apeir0n-security.com',
      time: '14m ago',
      unread: true,
      severity: 'high',
    },
    {
      id: 'n-3',
      title: 'Automated containment applied on 185.220.101.45',
      time: '38m ago',
      unread: false,
      severity: 'info',
    },
  ]);

  // Handle Refresh simulation
  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated('Updated just now');
    }, 600);
  };

  const handleClearNotifications = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const unreadCount = notifications.filter((n) => n.unread).length;

  // Module 1 Data: Threat Intelligence
  const threatFeeds = useMemo(
    () => [
      {
        id: 'ti-1',
        name: 'APT-29 "Midnight Blizzard" Signature',
        type: 'C2 Infrastructure',
        indicator: '185.220.101.45:443',
        category: 'Nation-State',
        severity: 'CRITICAL',
        confidence: '98%',
        mitre: 'T1071.001 Web Protocols',
        details:
          'Observed initiating TLS handshakes with anomalous ALPN extensions matching known state-sponsored reconnaissance beacons.',
        action: 'Ingress blocked on border firewalls; 24 IP variations synchronized to threat hunting queries.',
      },
      {
        id: 'ti-2',
        name: 'BlackBasta Ransomware Payload Variant',
        type: 'SHA256 File Hash',
        indicator: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        category: 'Ransomware',
        severity: 'CRITICAL',
        confidence: '96%',
        mitre: 'T1486 Data Encrypted for Impact',
        details:
          'Polymorphic binary with encrypted payload staging via double-extension document attachments.',
        action: 'EDR heuristic rule #884 applied; automated quarantining across all domain endpoints.',
      },
      {
        id: 'ti-3',
        name: 'Zero-Day Gateway Exploit Wave',
        type: 'Exploit Attempt Pattern',
        indicator: 'POST /api/v1/auth/exchange HTTP/1.1 (Buffer Overflow)',
        category: 'Vulnerability Exploit',
        severity: 'HIGH',
        confidence: '92%',
        mitre: 'T1190 Exploit Public-Facing Application',
        details:
          'Distributed scanning originating from multiple ASNs targeting vulnerable enterprise ingress routers.',
        action: 'WAF signature deployed; virtual patch active pending vendor firmware rollout.',
      },
      {
        id: 'ti-4',
        name: 'Cloud Token Harvest Infrastructure',
        type: 'Suspicious Subnet',
        indicator: '194.26.29.0/24 (Autonomous System 44925)',
        category: 'Credential Access',
        severity: 'HIGH',
        confidence: '89%',
        mitre: 'T1528 Steal Application Access Token',
        details:
          'Reverse proxy server proxying corporate SSO login screens to intercept MFA sessions in real time.',
        action: 'Conditional Access policy updated; session token revocation triggered for flagged IPs.',
      },
      {
        id: 'ti-5',
        name: 'Mass Distributed Port Scanning Wave',
        type: 'Reconnaissance Cluster',
        indicator: '142.250.80.0/20 range probe',
        category: 'Reconnaissance',
        severity: 'MEDIUM',
        confidence: '84%',
        mitre: 'T1046 Network Service Discovery',
        details:
          'Automated asynchronous SYN probes against external ports 443, 8443, 9092, and 6443.',
        action: 'Rate-limiting applied; automated telemetry logs sent to SIEM correlation engine.',
      },
    ],
    []
  );

  // Module 2 Data: Attack Surface Management
  const attackSurface = useMemo(
    () => [
      {
        id: 'asm-1',
        asset: 'api.corp.internal-dev.example',
        ip: '52.14.88.210',
        exposedPorts: '8443, 9092 (Kafka)',
        riskLevel: 'CRITICAL',
        discovery: 'Exposed Staging Environment',
        tlsStatus: 'TLS 1.3 Valid',
        remediation: 'Restrict port 9092 to VPN subnet; remove public DNS CNAME record.',
      },
      {
        id: 'asm-2',
        asset: 'vpn-gateway-emea.example',
        ip: '198.51.100.14',
        exposedPorts: '443, 1194 (UDP)',
        riskLevel: 'HIGH',
        discovery: 'Outdated Cipher Suites',
        tlsStatus: 'CBC Ciphers Detected',
        remediation: 'Disable 3DES and CBC mode ciphers; enforce TLS 1.3 exclusively.',
      },
      {
        id: 'asm-3',
        asset: 'staging-auth.cloud.example',
        ip: '35.240.112.5',
        exposedPorts: '443',
        riskLevel: 'HIGH',
        discovery: 'Public Debug Endpoint Active',
        tlsStatus: 'TLS 1.2 / 1.3',
        remediation: 'Deactivate /metrics and /debug endpoints in production ingress configuration.',
      },
      {
        id: 'asm-4',
        asset: 'mail-mx2.backup.example',
        ip: '203.0.113.88',
        exposedPorts: '25, 587',
        riskLevel: 'MEDIUM',
        discovery: 'DMARC Quarantine Only',
        tlsStatus: 'STARTTLS Active',
        remediation: 'Upgrade DMARC policy from p=quarantine to p=reject.',
      },
      {
        id: 'asm-5',
        asset: 'static-cdn.global.example',
        ip: '104.18.22.45',
        exposedPorts: '80, 443',
        riskLevel: 'LOW',
        discovery: 'Nominal CDN Edge',
        tlsStatus: 'HSTS Enforced (max-age=31536000)',
        remediation: 'No action required; security posture optimal.',
      },
    ],
    []
  );

  // Module 3 Data: Vulnerability Management
  const vulnerabilities = useMemo(
    () => [
      {
        id: 'vm-1',
        cve: 'CVE-2026-1940',
        title: 'Ingress Controller Remote Code Execution',
        severity: 'CRITICAL',
        cvss: '9.8',
        status: 'PATCH AVAILABLE',
        affected: 'Edge Proxy Gateway v3.1.2',
        fix: 'Upgrade to v3.1.4 or apply hotfix patch ingress-cf-2026.bin immediately.',
      },
      {
        id: 'vm-2',
        cve: 'CVE-2025-4819',
        title: 'TLS Session Ticket Memory Leak',
        severity: 'HIGH',
        cvss: '8.4',
        status: 'WORKAROUND APPLIED',
        affected: 'Cryptographic Acceleration Service',
        fix: 'Disable TLS session resumption tickets until maintenance window patch deployment.',
      },
      {
        id: 'vm-3',
        cve: 'CVE-2025-3211',
        title: 'Linux Kernel eBPF Privilege Escalation',
        severity: 'HIGH',
        cvss: '7.8',
        status: 'REMEDIATION IN PROGRESS',
        affected: 'Host OS Nodes (Cluster Alpha)',
        fix: 'Restricted unprivileged bpf access: sysctl -w kernel.unprivileged_bpf_disabled=1.',
      },
      {
        id: 'vm-4',
        cve: 'CVE-2025-2104',
        title: 'OpenSSL ASN.1 Parsing Denial of Service',
        severity: 'MEDIUM',
        cvss: '5.3',
        status: 'SCHEDULED SPRINT',
        affected: 'Legacy Utility Daemon',
        fix: 'Upgrade libssl3 packages during next scheduled rolling cluster restart.',
      },
      {
        id: 'vm-5',
        cve: 'CVE-2025-1090',
        title: 'HTTP/2 Rapid Reset Flow-Control Anomaly',
        severity: 'LOW',
        cvss: '3.9',
        status: 'RESOLVED',
        affected: 'Global Reverse Proxy',
        fix: 'Stream concurrency limits enforced at 100 concurrent streams per TCP connection.',
      },
    ],
    []
  );

  // Module 4 Data: Brand Protection
  const brandProtection = useMemo(
    () => [
      {
        id: 'bp-1',
        domain: 'apeir0n-frontier-sec.com',
        type: 'Typosquatting & Impersonation',
        severity: 'CRITICAL',
        status: 'TAKEDOWN DISPATCHED',
        registrar: 'Offshore Registrar LLC',
        detected: '2 hours ago',
        evidence: 'Cloned corporate stylesheet and simulated login portal targeting employees.',
        action: 'Registrar abuse notification sent; domain blacklisted in DNS security resolver.',
      },
      {
        id: 'bp-2',
        domain: 'apeironsecurity-login.net',
        type: 'Credential Phishing Lure',
        severity: 'HIGH',
        status: 'MX BLOCKED',
        registrar: 'FastHost Domains Inc.',
        detected: '5 hours ago',
        evidence: 'Active MX records with outbound spear-phishing templates impersonating HR payroll.',
        action: 'DMARC strict reject confirmed; threat telemetry shared with threat exchange.',
      },
      {
        id: 'bp-3',
        domain: 'apeiron-careers-portal.org',
        type: 'Executive Impersonation',
        severity: 'HIGH',
        status: 'INVESTIGATION',
        registrar: 'CloudNames International',
        detected: '1 day ago',
        evidence: 'Fake executive LinkedIn profiles redirecting job applicants to fraudulent form.',
        action: 'Cease & Desist issued; abuse complaint filed with social platform security team.',
      },
      {
        id: 'bp-4',
        domain: 'apeiron-security-token.io',
        type: 'Cryptocurrency Scam Hijack',
        severity: 'MEDIUM',
        status: 'MONITORING',
        registrar: 'Global Web Registry',
        detected: '2 days ago',
        evidence: 'Landing page misusing Apeiron logo to promote unauthorized token crowdsale.',
        action: 'Brand protection legal counsel alerted; trademark claim submitted.',
      },
    ],
    []
  );

  // Module 6 Data: Incident Management
  const incidents = useMemo(
    () => [
      {
        id: 'INC-2026-084',
        title: 'Credential Stuffing Spike on Customer Authentication Portal',
        priority: 'P1 CRITICAL',
        severity: 'CRITICAL',
        assignedTo: 'Tier-3 Cyber Defense SOC',
        stage: 'CONTAINMENT (STAGE 3/4)',
        elapsed: '18 minutes',
        affectedUsers: '48 accounts flagged',
        summary:
          'Distributed botnet rotating across 1,200 residential proxy IPs attempting credential verification against customer API.',
        resolutionSteps: [
          'Automated CAPTCHA challenge triggered at ingress',
          'IP rate-limiting threshold lowered to 5 req/min',
          'Compromised credential hash cross-reference executed',
          'Password reset notifications dispatched for 48 accounts',
        ],
      },
      {
        id: 'INC-2026-081',
        title: 'Anomalous Cloud Service Principal Token Generation',
        priority: 'P1 CRITICAL',
        severity: 'CRITICAL',
        assignedTo: 'Cloud Incident Commander',
        stage: 'ERADICATION (STAGE 3/4)',
        elapsed: '45 minutes',
        affectedUsers: '1 Service Account',
        summary:
          'Elevated permissions granted to automated deployment service principal outside standard CI/CD maintenance window.',
        resolutionSteps: [
          'Session credentials immediately invalidated in IAM',
          'Full audit log dump pulled for cloud control plane',
          'Automated snapshot created for forensic memory analysis',
        ],
      },
      {
        id: 'INC-2026-079',
        title: 'Kerberoasting Ticket Request Cluster Detected',
        priority: 'P2 HIGH',
        severity: 'HIGH',
        assignedTo: 'Identity Defense Team',
        stage: 'RESOLVED',
        elapsed: '2 hours 10 mins',
        affectedUsers: 'Domain Controller Security Log',
        summary:
          'Spike in RC4 encryption requests for Service Principal Names (SPN) on legacy service accounts.',
        resolutionSteps: [
          'Identified source workstation and isolated from network',
          'Enforced AES-256 Kerberos encryption globally',
          'Rotated all service account passwords (30+ characters)',
        ],
      },
      {
        id: 'INC-2026-075',
        title: 'Phishing Macro Execution Prevented by Endpoint Protection',
        priority: 'P3 MEDIUM',
        severity: 'MEDIUM',
        assignedTo: 'Endpoint Assurance',
        stage: 'CLOSED',
        elapsed: '6 hours ago',
        affectedUsers: 'Finance Workstation #14',
        summary:
          'Weaponized PDF attachment opened from external spoofed invoice; EDR prevented child process spawning.',
        resolutionSteps: [
          'Process tree terminated and sandbox telemetry extracted',
          'Sender domain blocked across corporate email gateway',
        ],
      },
    ],
    []
  );

  // Filter helper
  const filterBySeverity = (itemSeverity: string) => {
    if (severityFilter === 'ALL') return true;
    return itemSeverity.toUpperCase() === severityFilter;
  };

  const getSeverityBadge = (sev: string) => {
    switch (sev.toUpperCase()) {
      case 'CRITICAL':
        return 'bg-red-950/70 border-red-500/50 text-red-300';
      case 'HIGH':
        return 'bg-[#FDBF32]/15 border-[#FDBF32]/60 text-[#FDBF32]';
      case 'MEDIUM':
        return 'bg-[#7022FC]/20 border-[#7022FC]/60 text-purple-200';
      default:
        return 'bg-slate-800/80 border-slate-600 text-slate-300';
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col rounded-2xl border border-white/12 bg-[#05050A]/92 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden text-slate-200 group">
      {/* Background ambient lighting inside dashboard */}
      <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#7022FC]/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#FDBF32]/10 rounded-full blur-3xl pointer-events-none" />

      {/* DASHBOARD TOP HEADER */}
      <div className="shrink-0 px-4 sm:px-5 py-3 border-b border-white/10 bg-[#07070F]/80 flex items-center justify-between gap-3">
        {/* Left: Apeiron Emblem & Brand Title */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src="/assets/apeiron-emblem-3d.png"
            alt=""
            aria-hidden="true"
            className="w-5 h-5 object-contain shrink-0 filter drop-shadow-[0_0_8px_rgba(112,34,252,0.6)]"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5 font-bold tracking-wider uppercase text-white font-sans text-xs">
              <span className="truncate">APEIRON INTELLIGENCE</span>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                // v4.6
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-widest uppercase text-[#A8A8B5] truncate">
              THREAT INTELLIGENCE CENTER
            </span>
          </div>
        </div>

        {/* Right: system pulse, notification & refresh */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* System status indicator */}
          <div className="hidden md:flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/90 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#10B981]" />
            <span>OPERATIONAL</span>
          </div>

          {/* Notification Icon with Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-1.5 rounded-lg border border-white/10 hover:border-white/25 bg-black/40 text-slate-300 hover:text-white transition-colors relative"
              aria-label="View security notifications"
            >
              <Bell className="w-3.5 h-3.5 text-slate-300" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#7022FC] text-[9px] font-mono font-bold text-white flex items-center justify-center border border-[#05050A]">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Notification Dropdown Panel */}
            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-[#080812]/98 border border-white/15 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] backdrop-blur-2xl p-3 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
                  <span className="font-bold text-white uppercase tracking-wider">
                    Simulated Alerts ({notifications.length})
                  </span>
                  <button
                    onClick={handleClearNotifications}
                    className="text-[10px] text-[#FDBF32] hover:underline"
                  >
                    Mark as read
                  </button>
                </div>
                <div className="py-2 space-y-2 max-h-56 overflow-y-auto text-[11px] font-sans">
                  {notifications.map((n) => (
                    <div
                      key={n.id}
                      className={`p-2 rounded-lg border transition-colors ${
                        n.unread
                          ? 'bg-[#7022FC]/15 border-[#7022FC]/40 text-white'
                          : 'bg-black/30 border-white/5 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[9px] font-mono mb-1">
                        <span
                          className={
                            n.severity === 'critical'
                              ? 'text-red-400 font-bold'
                              : n.severity === 'high'
                              ? 'text-[#FDBF32] font-bold'
                              : 'text-purple-300'
                          }
                        >
                          {n.severity.toUpperCase()}
                        </span>
                        <span className="text-slate-500">{n.time}</span>
                      </div>
                      <p className="line-clamp-2 leading-relaxed">{n.title}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-white/10 text-center">
                  <span className="text-[9px] font-mono text-slate-400">
                    * Simulated real-time alerting queue
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Refresh Action Button */}
          <button
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="p-1.5 rounded-lg border border-white/10 hover:border-white/25 bg-black/40 text-slate-300 hover:text-white transition-colors"
            title="Refresh telemetry stream"
            aria-label="Refresh simulated activity"
          >
            <RefreshCw
              className={`w-3.5 h-3.5 text-[#FDBF32] ${isRefreshing ? 'animate-spin' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* DASHBOARD MODULE TABS */}
      <div className="shrink-0 px-3 sm:px-4 pt-2.5 pb-2 border-b border-white/10 bg-[#06060D]/80 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10">
        <nav
          className="flex items-center gap-2 min-w-max text-xs"
          aria-label="Dashboard Modules"
        >
          <button
            onClick={() => {
              setActiveModule('threat-intel');
              setExpandedId('ti-1');
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeModule === 'threat-intel'
                ? 'bg-[#7022FC]/30 border-[#7022FC] text-white ring-1 ring-[#7022FC]/60 shadow-[0_0_18px_rgba(112,34,252,0.35)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#7022FC]" />
            <span>Threat Intel</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-[#FDBF32] font-mono font-bold">
              5
            </span>
          </button>

          <button
            onClick={() => {
              setActiveModule('attack-surface');
              setExpandedId('asm-1');
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeModule === 'attack-surface'
                ? 'bg-[#7022FC]/30 border-[#7022FC] text-white ring-1 ring-[#7022FC]/60 shadow-[0_0_18px_rgba(112,34,252,0.35)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Globe className="w-3.5 h-3.5 text-[#FDBF32]" />
            <span>Attack Surface</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-slate-300 font-mono font-bold">
              5
            </span>
          </button>

          <button
            onClick={() => {
              setActiveModule('vulnerabilities');
              setExpandedId('vm-1');
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeModule === 'vulnerabilities'
                ? 'bg-[#7022FC]/30 border-[#7022FC] text-white ring-1 ring-[#7022FC]/60 shadow-[0_0_18px_rgba(112,34,252,0.35)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Bug className="w-3.5 h-3.5 text-purple-300" />
            <span>Vulnerabilities</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-slate-300 font-mono font-bold">
              5
            </span>
          </button>

          <button
            onClick={() => {
              setActiveModule('brand-protection');
              setExpandedId('bp-1');
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeModule === 'brand-protection'
                ? 'bg-[#7022FC]/30 border-[#7022FC] text-white ring-1 ring-[#7022FC]/60 shadow-[0_0_18px_rgba(112,34,252,0.35)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <Eye className="w-3.5 h-3.5 text-[#FDBF32]" />
            <span>Brand Protection</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-slate-300 font-mono font-bold">
              4
            </span>
          </button>

          <button
            onClick={() => {
              setActiveModule('analytics');
              setExpandedId(null);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeModule === 'analytics'
                ? 'bg-[#7022FC]/30 border-[#7022FC] text-white ring-1 ring-[#7022FC]/60 shadow-[0_0_18px_rgba(112,34,252,0.35)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5 text-purple-300" />
            <span>Security Analytics</span>
          </button>

          <button
            onClick={() => {
              setActiveModule('incidents');
              setExpandedId('INC-2026-084');
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs font-semibold ${
              activeModule === 'incidents'
                ? 'bg-[#7022FC]/30 border-[#7022FC] text-white ring-1 ring-[#7022FC]/60 shadow-[0_0_18px_rgba(112,34,252,0.35)]'
                : 'bg-black/40 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
            <span>Incidents</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-950/80 text-red-300 font-mono font-bold">
              4
            </span>
          </button>
        </nav>
      </div>

      {/* FILTER & SEARCH SUB-BAR */}
      <div className="shrink-0 px-3 sm:px-4 py-2.5 border-b border-white/10 bg-black/40 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Search Input */}
        <div className="relative flex-1 min-w-[140px] max-w-xs">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Filter ${activeModule.replace('-', ' ')}...`}
            className="w-full bg-[#030307] border border-white/15 focus:border-[#7022FC] rounded-lg pl-8 pr-2.5 py-1.5 text-[11px] text-white placeholder-slate-500 font-mono focus:outline-none focus:ring-1 focus:ring-[#7022FC] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>

        {/* Severity Filter Pills */}
        <div className="flex items-center gap-1.5 text-[10px] font-mono">
          <span className="text-slate-400 hidden sm:inline mr-0.5 font-semibold">Severity:</span>
          {(['ALL', 'CRITICAL', 'HIGH', 'MEDIUM'] as SeverityFilter[]).map((sev) => (
            <button
              key={sev}
              onClick={() => setSeverityFilter(sev)}
              className={`px-2.5 py-1 rounded-md border text-[10px] font-semibold transition-all ${
                severityFilter === sev
                  ? 'bg-white/20 border-white/50 text-white font-bold shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                  : 'bg-black/50 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
              }`}
            >
              {sev}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN MODULE CONTENT VIEWPORT (Scrollable) */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-2.5 text-xs font-sans">
        {/* MODULE 1: THREAT INTELLIGENCE */}
        {activeModule === 'threat-intel' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
              <span>LIVE INGEST FEED // MITRE ATT&CK ALIGNED</span>
              <span className="text-[#FDBF32]">{lastUpdated}</span>
            </div>

            {threatFeeds
              .filter(
                (item) =>
                  filterBySeverity(item.severity) &&
                  (searchQuery === '' ||
                    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.indicator.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.category.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#080814] border-[#7022FC]/60 shadow-[0_0_20px_rgba(112,34,252,0.15)]'
                        : 'bg-black/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="w-full text-left p-2.5 sm:p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase border ${getSeverityBadge(
                              item.severity
                            )}`}
                          >
                            {item.severity}
                          </span>
                          <span className="text-[10px] font-mono text-[#FDBF32]">{item.type}</span>
                          <span className="text-[10px] font-mono text-slate-500">
                            Confidence: {item.confidence}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white truncate">{item.name}</h4>
                        <div className="text-[11px] font-mono text-purple-300 truncate">
                          IOC: {item.indicator}
                        </div>
                      </div>
                      <div className="shrink-0 pt-1 text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#FDBF32]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {/* Expanded Technical Details */}
                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 bg-[#04040A]/90 text-[11px] font-sans">
                        <div className="p-2 rounded bg-black/60 border border-white/5 font-mono text-[10px] text-slate-300">
                          <div className="text-[#FDBF32] font-bold mb-0.5">
                            MITRE ATT&CK: {item.mitre}
                          </div>
                          <p className="text-slate-300 leading-relaxed font-sans text-xs">
                            {item.details}
                          </p>
                        </div>
                        <div className="flex items-start gap-1.5 text-[10px] text-emerald-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                          <span>Remediation Applied: {item.action}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}

        {/* MODULE 2: ATTACK SURFACE MANAGEMENT */}
        {activeModule === 'attack-surface' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
              <span>DISCOVERED PERIMETER ASSETS</span>
              <span className="text-purple-300">Continuous Ingress Probing</span>
            </div>

            {attackSurface
              .filter(
                (item) =>
                  filterBySeverity(item.riskLevel) &&
                  (searchQuery === '' ||
                    item.asset.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.ip.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#080814] border-[#FDBF32]/50 shadow-[0_0_20px_rgba(253,191,50,0.12)]'
                        : 'bg-black/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="w-full text-left p-2.5 sm:p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase border ${getSeverityBadge(
                              item.riskLevel
                            )}`}
                          >
                            {item.riskLevel}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">{item.ip}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white font-mono truncate">
                          {item.asset}
                        </h4>
                        <div className="text-[10px] font-mono text-purple-300">
                          Ports Exposed: {item.exposedPorts}
                        </div>
                      </div>
                      <div className="shrink-0 pt-1 text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#FDBF32]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 bg-[#04040A]/90 text-[11px]">
                        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                          <div className="p-2 rounded bg-black/60 border border-white/5">
                            <span className="text-slate-500 block">Finding Type:</span>
                            <span className="text-white font-semibold">{item.discovery}</span>
                          </div>
                          <div className="p-2 rounded bg-black/60 border border-white/5">
                            <span className="text-slate-500 block">TLS Profile:</span>
                            <span className="text-[#FDBF32] font-semibold">{item.tlsStatus}</span>
                          </div>
                        </div>
                        <div className="p-2 rounded bg-[#7022FC]/10 border border-[#7022FC]/30 text-[10px] font-mono text-slate-200">
                          <span className="text-[#FDBF32] font-bold block mb-0.5">
                            Hardening Recommendation:
                          </span>
                          {item.remediation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}

        {/* MODULE 3: VULNERABILITY MANAGEMENT */}
        {activeModule === 'vulnerabilities' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
              <span>CVE INVENTORY & REMEDIATION PIPELINE</span>
              <span className="text-emerald-400">CVSS v3.1 Ranked</span>
            </div>

            {vulnerabilities
              .filter(
                (item) =>
                  filterBySeverity(item.severity) &&
                  (searchQuery === '' ||
                    item.cve.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#080814] border-[#7022FC]/60 shadow-[0_0_20px_rgba(112,34,252,0.15)]'
                        : 'bg-black/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="w-full text-left p-2.5 sm:p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase border ${getSeverityBadge(
                              item.severity
                            )}`}
                          >
                            {item.severity} // CVSS {item.cvss}
                          </span>
                          <span className="text-[10px] font-mono text-[#FDBF32]">{item.cve}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                        <div className="text-[10px] font-mono text-slate-400 truncate">
                          Scope: {item.affected}
                        </div>
                      </div>
                      <div className="shrink-0 pt-1 text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#FDBF32]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 bg-[#04040A]/90 text-[11px]">
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-slate-400">Remediation Status:</span>
                          <span className="text-emerald-400 font-bold">{item.status}</span>
                        </div>
                        <div className="p-2 rounded bg-black/60 border border-white/5 text-[10px] font-mono text-slate-200">
                          <span className="text-[#FDBF32] font-bold block mb-0.5">
                            Mitigation Guide:
                          </span>
                          {item.fix}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}

        {/* MODULE 4: BRAND PROTECTION */}
        {activeModule === 'brand-protection' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
              <span>SUSPICIOUS DOMAINS & IMPERSONATION TRACKER</span>
              <span className="text-[#FDBF32]">Automated WHOIS Prober</span>
            </div>

            {brandProtection
              .filter(
                (item) =>
                  filterBySeverity(item.severity) &&
                  (searchQuery === '' ||
                    item.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.type.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#080814] border-[#FDBF32]/50 shadow-[0_0_20px_rgba(253,191,50,0.12)]'
                        : 'bg-black/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="w-full text-left p-2.5 sm:p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase border ${getSeverityBadge(
                              item.severity
                            )}`}
                          >
                            {item.severity}
                          </span>
                          <span className="text-[10px] font-mono text-purple-300">{item.type}</span>
                        </div>
                        <h4 className="text-xs font-bold text-red-300 font-mono truncate">
                          {item.domain}
                        </h4>
                        <div className="text-[10px] font-mono text-slate-400 truncate">
                          Status: {item.status} · {item.detected}
                        </div>
                      </div>
                      <div className="shrink-0 pt-1 text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#FDBF32]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 bg-[#04040A]/90 text-[11px]">
                        <div className="p-2 rounded bg-black/60 border border-white/5 text-[10px] font-mono">
                          <div className="text-slate-400 mb-0.5">Evidence Telemetry:</div>
                          <p className="text-white font-sans text-xs">{item.evidence}</p>
                        </div>
                        <div className="p-2 rounded bg-red-950/30 border border-red-500/30 text-[10px] font-mono text-slate-200">
                          <span className="text-[#FDBF32] font-bold block mb-0.5">
                            Countermeasure Dispatch:
                          </span>
                          {item.action}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}

        {/* MODULE 5: SECURITY ANALYTICS */}
        {activeModule === 'analytics' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
              <span>TELEMETRY METRICS // 24-HOUR ROLLING STREAM</span>
              <span className="text-purple-300">184.2M Inspected Events</span>
            </div>

            {/* Metric KPI cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[9px] font-mono text-slate-400 block uppercase">
                  Events Analyzed
                </span>
                <span className="text-sm font-bold font-mono text-white tabular-nums">184.2M</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">+4.2%</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[9px] font-mono text-slate-400 block uppercase">
                  MTTD (Detect)
                </span>
                <span className="text-sm font-bold font-mono text-[#FDBF32] tabular-nums">
                  4.2 min
                </span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">-38s avg</span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/50 border border-white/5">
                <span className="text-[9px] font-mono text-slate-400 block uppercase">
                  Auto-Contained
                </span>
                <span className="text-sm font-bold font-mono text-purple-300 tabular-nums">
                  96.4%
                </span>
                <span className="text-[9px] font-mono text-slate-400 block mt-0.5">Zero lag</span>
              </div>
            </div>

            {/* Interactive SVG 24h Trend Chart */}
            <div className="p-3 rounded-xl bg-black/60 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-white font-semibold uppercase">
                  Threat Activity Distribution (24h)
                </span>
                <span className="text-[#FDBF32]">Peak: 14:00 UTC</span>
              </div>

              <div className="h-28 w-full relative">
                <svg viewBox="0 0 400 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="analyticsArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7022FC" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#7022FC" stopOpacity="0.0" />
                    </linearGradient>
                    <linearGradient id="analyticsLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#7022FC" />
                      <stop offset="50%" stopColor="#A855F7" />
                      <stop offset="100%" stopColor="#FDBF32" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Grid lines */}
                  <line
                    x1="0"
                    y1="25"
                    x2="400"
                    y2="25"
                    stroke="#ffffff"
                    strokeOpacity="0.05"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="0"
                    y1="50"
                    x2="400"
                    y2="50"
                    stroke="#ffffff"
                    strokeOpacity="0.05"
                    strokeDasharray="2 2"
                  />
                  <line
                    x1="0"
                    y1="75"
                    x2="400"
                    y2="75"
                    stroke="#ffffff"
                    strokeOpacity="0.05"
                    strokeDasharray="2 2"
                  />

                  {/* Area fill */}
                  <path
                    d="M 0,80 Q 50,45 100,60 T 200,30 T 300,55 T 400,20 L 400,100 L 0,100 Z"
                    fill="url(#analyticsArea)"
                  />

                  {/* Main line */}
                  <path
                    d="M 0,80 Q 50,45 100,60 T 200,30 T 300,55 T 400,20"
                    fill="none"
                    stroke="url(#analyticsLine)"
                    strokeWidth="2.5"
                  />

                  {/* High point dots */}
                  <circle cx="200" cy="30" r="3.5" fill="#FDBF32" />
                  <circle cx="400" cy="20" r="3" fill="#7022FC" />
                  <circle cx="100" cy="60" r="2.5" fill="#A855F7" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 pt-1 border-t border-white/5">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>NOW</span>
              </div>
            </div>

            {/* Threat category breakdown bar */}
            <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1.5 text-[10px] font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span>Threat Classification Mix</span>
                <span className="text-purple-300">Simulated Telemetry</span>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden flex">
                <div style={{ width: '42%' }} className="bg-[#7022FC]" title="Botnets 42%" />
                <div style={{ width: '28%' }} className="bg-[#FDBF32]" title="Advanced Threats 28%" />
                <div
                  style={{ width: '20%' }}
                  className="bg-purple-400"
                  title="Credential Stuffing 20%"
                />
                <div style={{ width: '10%' }} className="bg-red-400" title="Policy Violations 10%" />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-1 text-[9px] text-slate-400">
                <span>■ Botnets (42%)</span>
                <span>■ Advanced (28%)</span>
                <span>■ Credential (20%)</span>
                <span>■ Policy (10%)</span>
              </div>
            </div>
          </div>
        )}

        {/* MODULE 6: INCIDENT MANAGEMENT */}
        {activeModule === 'incidents' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-1">
              <span>ACTIVE INCIDENT QUEUE // ESCALATION PIPELINE</span>
              <span className="text-red-400">P1 SLA: &lt; 15m</span>
            </div>

            {incidents
              .filter(
                (item) =>
                  filterBySeverity(item.severity) &&
                  (searchQuery === '' ||
                    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.id.toLowerCase().includes(searchQuery.toLowerCase()))
              )
              .map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isExpanded
                        ? 'bg-[#080814] border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.12)]'
                        : 'bg-black/50 border-white/5 hover:border-white/15'
                    }`}
                  >
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : item.id)}
                      className="w-full text-left p-2.5 sm:p-3 flex items-start justify-between gap-3"
                    >
                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.2 rounded text-[9px] font-mono font-bold uppercase border ${getSeverityBadge(
                              item.severity
                            )}`}
                          >
                            {item.priority}
                          </span>
                          <span className="text-[10px] font-mono text-[#FDBF32]">{item.id}</span>
                          <span className="text-[10px] font-mono text-slate-400">{item.elapsed}</span>
                        </div>
                        <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                        <div className="text-[10px] font-mono text-purple-300 truncate">
                          Assigned: {item.assignedTo} · {item.stage}
                        </div>
                      </div>
                      <div className="shrink-0 pt-1 text-slate-400">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#FDBF32]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-3 pb-3 pt-1 border-t border-white/5 space-y-2 bg-[#04040A]/90 text-[11px]">
                        <p className="text-slate-300 font-sans text-xs leading-relaxed">
                          {item.summary}
                        </p>
                        <div className="p-2 rounded bg-black/60 border border-white/5 space-y-1 font-mono text-[10px]">
                          <span className="text-[#FDBF32] font-bold block mb-0.5">
                            Active Containment Workflow:
                          </span>
                          {item.resolutionSteps.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#7022FC]" />
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        )}
      </div>

      {/* DASHBOARD DISCLAIMER FOOTER */}
      <div className="shrink-0 px-3 py-2 border-t border-white/10 bg-[#06060C]/90 text-[9px] font-mono text-slate-400 flex items-center justify-between gap-2">
        <span className="truncate">
          * Synthetic telemetry for enterprise architectural evaluation.
        </span>
      </div>
    </div>
  );
};
