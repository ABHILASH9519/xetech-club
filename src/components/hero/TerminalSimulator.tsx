import React, { useState, useEffect } from 'react';
import { Terminal, RotateCw, ShieldCheck, Cpu, Cloud, Sparkles } from 'lucide-react';

interface LogLine {
  text: string;
  type: 'info' | 'success' | 'warn' | 'cmd';
}

const TABS = [
  { id: 'devops', label: 'DevOps Pipeline', icon: Terminal },
  { id: 'ai', label: 'Agentic AI Swarm', icon: Sparkles },
  { id: 'cloud', label: 'Multi-Cloud Mesh', icon: Cloud },
];

const LOG_SETS: Record<string, LogLine[]> = {
  devops: [
    { text: '$ git push origin main && xetech ci-cd trigger', type: 'cmd' },
    { text: '✓ [GitHub Actions] Lint and unit test matrix passed (42 tests)', type: 'success' },
    { text: '⚡ [Docker] Multi-stage build complete: image tag sha-98f2b1a', type: 'info' },
    { text: '🔒 [Trivy] Vulnerability scan: 0 critical, 0 high vulnerabilities', type: 'success' },
    { text: '☸ [Kubernetes] Rolling deployment initiated on cluster-prod-01', type: 'info' },
    { text: '✓ [K8s] 48/48 pods healthy in namespace production-apps', type: 'success' },
    { text: '✓ [ArgoCD] GitOps state synchronized. Zero downtime achieved.', type: 'success' },
  ],
  ai: [
    { text: '$ xetech-agent --task "diagnose cluster latency spike"', type: 'cmd' },
    { text: '🤖 [Planner Agent] Decomposed problem into 3 diagnostic sub-tasks', type: 'info' },
    { text: '🔍 [Telemetry Agent] Querying Prometheus vector engine for p99 spikes', type: 'info' },
    { text: '⚡ [Diagnosis] Correlated spike to redis-cache cache eviction loop', type: 'warn' },
    { text: '🛠 [Remediation Agent] Generating Helm values patch: memory +512Mi', type: 'info' },
    { text: '✓ [Pull Request #84] Self-healing fix opened and verified in sandbox', type: 'success' },
    { text: '✓ [Agent Swarm] Task completed with 99.4% confidence score', type: 'success' },
  ],
  cloud: [
    { text: '$ terraform apply -auto-approve --target=module.vpc_mesh', type: 'cmd' },
    { text: '☁ [AWS-East] Provisioning multi-AZ VPC with NAT Gateway redundance', type: 'info' },
    { text: '☁ [GCP-Central] Configuring Anthos multi-cloud service interconnect', type: 'info' },
    { text: '🔒 [IAM] Enforcing zero-trust role boundaries & least-privilege tokens', type: 'success' },
    { text: '⚡ [Route 53] Latency-based DNS failover records updated', type: 'info' },
    { text: '✓ [CloudFormation] IaC drift check: 0 changes outside repository state', type: 'success' },
    { text: '✓ Infrastructure healthy: 99.99% multi-region SLA online', type: 'success' },
  ],
};

export const TerminalSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'devops' | 'ai' | 'cloud'>('devops');
  const [visibleCount, setVisibleCount] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleTabChange = (tab: 'devops' | 'ai' | 'cloud') => {
    setActiveTab(tab);
    setVisibleCount(1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < LOG_SETS[activeTab].length) {
          return prev + 1;
        }
        return prev;
      });
    }, 450);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleRestart = () => {
    setIsSimulating(true);
    setVisibleCount(1);
    setTimeout(() => setIsSimulating(false), 800);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Decorative Outer Glow Ring */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/25 via-fuchsia-600/30 to-purple-600/25 rounded-2xl blur-xl opacity-75 animate-pulse-glow" />

      {/* Floating Status Badges around terminal */}
      <div className="hidden sm:flex absolute -top-5 -right-4 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-[#120726]/90 border border-fuchsia-500/30 backdrop-blur-xl shadow-lg shadow-fuchsia-950/50 text-[11px] font-mono text-fuchsia-300 animate-float">
        <Cpu className="w-3.5 h-3.5 text-pink-400" />
        <span>K8s Pods: 48/48 Healthy</span>
      </div>

      <div
        className="hidden sm:flex absolute -bottom-5 -left-4 z-20 items-center gap-2 px-3 py-1.5 rounded-full bg-[#120726]/90 border border-purple-500/30 backdrop-blur-xl shadow-lg shadow-purple-950/50 text-[11px] font-mono text-purple-300 animate-float"
        style={{ animationDelay: '2.5s' }}
      >
        <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
        <span>Security Scan: 100% Passed</span>
      </div>

      {/* Main Terminal Shell */}
      <div className="relative rounded-2xl bg-[#0b0518]/90 border border-purple-500/30 shadow-2xl backdrop-blur-2xl overflow-hidden text-left">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#130728]/80 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-gray-400 font-medium">
              xetech-orchestrator@cluster-01
            </span>
          </div>

          <button
            onClick={handleRestart}
            className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400 hover:text-white px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition"
            title="Re-run simulation"
          >
            <RotateCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-fuchsia-400' : ''}`} />
            <span className="hidden xs:inline">Simulate</span>
          </button>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center border-b border-purple-500/20 px-3 py-1.5 gap-2 bg-[#0d061e]/50 overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as 'devops' | 'ai' | 'cloud')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-fuchsia-600/25 text-pink-300 border border-fuchsia-500/40 shadow-sm'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Terminal Content / Log Window */}
        <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed min-h-[260px] max-h-[340px] overflow-y-auto space-y-2">
          {LOG_SETS[activeTab].slice(0, visibleCount).map((log, index) => {
            const isLatest = index === visibleCount - 1;
            return (
              <div
                key={index}
                className={`flex items-start gap-2.5 transition-all duration-200 ${
                  isLatest ? 'opacity-100 translate-x-0' : 'opacity-90'
                }`}
              >
                <span className="text-gray-500 select-none text-[11px] pt-0.5">
                  {`0${index + 1}`}
                </span>
                <span
                  className={`${
                    log.type === 'cmd'
                      ? 'text-fuchsia-300 font-semibold'
                      : log.type === 'success'
                      ? 'text-emerald-400'
                      : log.type === 'warn'
                      ? 'text-amber-300'
                      : 'text-purple-200'
                  }`}
                >
                  {log.text}
                </span>
              </div>
            );
          })}

          {/* Pulsing blinking cursor */}
          <div className="flex items-center gap-2 text-fuchsia-400 pt-1">
            <span className="text-gray-500 select-none text-[11px]">❯</span>
            <span className="w-2 h-4 bg-fuchsia-400 animate-pulse" />
          </div>
        </div>

        {/* Terminal Bottom Status Ribbon */}
        <div className="px-4 py-2 bg-[#0e0620] border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-emerald-400 font-semibold">Ready & Synchronized</span>
          </div>
          <span className="text-gray-400">Lat: 12ms • Multi-Cloud Active</span>
        </div>
      </div>
    </div>
  );
};
