"use client";

import { useState, useEffect } from "react";
import { 
  Activity, 
  Terminal, 
  CheckCircle2, 
  Play, 
  RefreshCw, 
  ShieldAlert, 
  Cpu, 
  Zap,
  Check
} from "lucide-react";

interface Scenario {
  id: string;
  name: string;
  severity: 'CRITICAL' | 'HIGH' | 'WARNING';
  component: string;
  triggerDescription: string;
  logs: string[];
  automatedAction: string;
  resolutionTime: string;
}

export default function SreSandbox() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("k8s-oom");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const scenarios: Scenario[] = [
    {
      id: "k8s-oom",
      name: "K8s Pod CrashLoopBackOff (VRAM OOM)",
      severity: "CRITICAL",
      component: "SARA-II Model Worker Pod",
      triggerDescription: "Local vLLM worker container exceeded 16GB GPU memory limit during 13B model inference batch.",
      logs: [
        "[00:00.100] [ALERT] Prometheus alert fired: container_memory_working_set_bytes > 98%",
        "[00:00.350] [K8S] Pod sara-ii-llm-worker-7d9f8c OOMKilled (Exit Code 137)",
        "[00:00.800] [AUTOPLAYBOOK] SRE Watchdog triggered: Initiating local model VRAM purge...",
        "[00:01.400] [CIRCUIT] Opening circuit breaker. Temporarily rerouting prompts to OpenAI Cloud Fallback...",
        "[00:02.100] [K8S] Restarting sara-ii-llm-worker-7d9f8c with isolated VRAM thread pool limits...",
        "[00:03.000] [HEALTH] Pod status: Running (1/1 Ready). Circuit breaker closed.",
        "[00:03.500] [RCA SUMMARY] Resolved in 3.5s. Zero user request drops recorded."
      ],
      automatedAction: "Dynamic circuit breaker rerouted traffic to backup LLM API while restarting local container with VRAM pool isolation.",
      resolutionTime: "3.5s"
    },
    {
      id: "sonarqube-gate",
      name: "SonarQube Quality Gate Rejection",
      severity: "HIGH",
      component: "Bitbucket CI/CD Pipeline #482",
      triggerDescription: "Developer pull request contained an outdated dependency with known CVSS 8.2 Remote Code Execution flaw.",
      logs: [
        "[00:00.050] [CI/CD] Bitbucket Pipeline triggered for PR #104 (feature/auth-refactor)",
        "[00:00.900] [DEVSECOPS] Executing Snyk SCA scan & SonarQube SAST analysis...",
        "[00:01.600] [SECURITY] [CRITICAL] CVE-2024-XXXX detected in package 'npm/old-lib@2.1.0'",
        "[00:02.000] [QUALITY GATE] Quality Gate Status: FAILED (0 Critical Vulnerabilities Policy Violated)",
        "[00:02.400] [AUTOPLAYBOOK] Blocking deployment pipeline. PR status set to 'Failed Checks'.",
        "[00:02.800] [ALERT] Slack alert sent to #devsecops-alerts with patch recommendation: upgrade to v2.4.0",
        "[00:03.200] [RCA SUMMARY] Pipeline safely blocked vulnerable code from reaching staging."
      ],
      automatedAction: "Enforced fail-closed policy, posted automated PR comment with exact patch version, and notified security leads.",
      resolutionTime: "3.2s"
    },
    {
      id: "terraform-drift",
      name: "Terraform Cloud Infrastructure Drift",
      severity: "WARNING",
      component: "AWS Security Group (Production VPC)",
      triggerDescription: "Manual console edit opened port 22 (SSH) to 0.0.0.0/0 on production database subnet.",
      logs: [
        "[00:00.100] [CRON] Scheduled Terraform Drift Detection job executed (`terraform plan`)",
        "[00:01.200] [DRIFT] Detected resource modification outside IaC: aws_security_group.db_sg",
        "[00:01.800] [CHECKOV] Security Policy Violation: Ingress 0.0.0.0/0 on port 22 strictly prohibited",
        "[00:02.500] [AUTOPLAYBOOK] Triggering GitOps reconciliation workflow...",
        "[00:03.200] [TERRAFORM] Executing targeted `terraform apply` to overwrite manual drift...",
        "[00:04.100] [SUCCESS] Ingress rule 0.0.0.0/0 revoked. Security group restored to canonical state.",
        "[00:04.800] [RCA SUMMARY] Drift remediated. Audit trail logged to CloudTrail & Wazuh SIEM."
      ],
      automatedAction: "Automated drift detection detected unauthorized console modification and reapplied Terraform canonical state.",
      resolutionTime: "4.8s"
    },
    {
      id: "postgres-pool",
      name: "PostgreSQL Connection Exhaustion",
      severity: "HIGH",
      component: "LeadPulse AI Transactional DB",
      triggerDescription: "Unindexed JSONB query spike exhausted active database connection pool limits (100/100).",
      logs: [
        "[00:00.100] [MONITOR] Prometheus alert: pg_stat_activity_count > 95%",
        "[00:00.600] [SRE ALERT] LeadPulse API latency elevated: P99 > 1,200ms",
        "[00:01.200] [AUTOPLAYBOOK] Activating PgBouncer dynamic connection scaling...",
        "[00:02.000] [REDIS] Enabling read-through cache for lead payload lookups...",
        "[00:02.900] [DB] Idle client connections terminated (`idle_in_transaction_session_timeout`)",
        "[00:03.800] [METRICS] Active DB connections dropped to 28/100. P99 latency restored to 35ms.",
        "[00:04.300] [RCA SUMMARY] System auto-recovered. Recommendation: Add GIN index on lead_payload."
      ],
      automatedAction: "Scaled connection pooling via PgBouncer, enabled Redis caching, and purged idle database sessions.",
      resolutionTime: "4.3s"
    }
  ];

  const activeScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning && currentStep < activeScenario.logs.length - 1) {
      interval = setInterval(() => {
        setCurrentStep((prev) => prev + 1);
      }, 700);
    } else if (isRunning && currentStep >= activeScenario.logs.length - 1) {
      const timer = setTimeout(() => setIsRunning(false), 0);
      return () => clearTimeout(timer);
    }
    return () => clearInterval(interval);
  }, [isRunning, currentStep, activeScenario]);

  const handleStartSimulation = () => {
    setCurrentStep(0);
    setIsRunning(true);
  };

  const handleSelectScenario = (id: string) => {
    setActiveScenarioId(id);
    setCurrentStep(0);
    setIsRunning(false);
  };

  return (
    <section id="sre-sandbox" className="py-20 bg-slate-950 border-b border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <Activity className="w-4 h-4" /> Interactive SRE Incident Sandbox
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Automated Incident Response & RCA Simulator
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-2xl">
              Test Rahul&apos;s automated incident playbooks by triggering production incident scenarios in real time.
            </p>
          </div>

          {/* Action Trigger Button */}
          <div className="mt-6 md:mt-0">
            <button
              onClick={handleStartSimulation}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer shadow-lg ${
                isRunning
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                  : "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20"
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-emerald-400" />
                  <span>Executing Automated Playbook...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Run Scenario Playbook</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Sandbox Content Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Select Scenario */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-slate-400 font-bold uppercase mb-1">
              Select Incident Scenario:
            </div>

            {scenarios.map((scenario) => {
              const isSelected = scenario.id === activeScenarioId;
              return (
                <button
                  key={scenario.id}
                  onClick={() => handleSelectScenario(scenario.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                    isSelected
                      ? "bg-slate-900 border-emerald-500/60 shadow-lg shadow-emerald-500/10"
                      : "bg-slate-950/80 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                      scenario.severity === 'CRITICAL' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30' :
                      scenario.severity === 'HIGH' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' :
                      'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {scenario.severity}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Component: {scenario.component.split(' ')[0]}
                    </span>
                  </div>

                  <div className="font-bold text-slate-200 text-sm">
                    {scenario.name}
                  </div>

                  <div className="text-xs text-slate-400 line-clamp-2">
                    {scenario.triggerDescription}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Terminal Stream Log Output */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4 shadow-2xl">
            
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 font-mono text-xs text-slate-300 font-bold">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>SRE AUTOMATED PLAYBOOK RUNNER — {activeScenario.name}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="text-slate-400">Resolution SLA:</span>
                <span className="text-emerald-400 font-bold">{activeScenario.resolutionTime}</span>
              </div>
            </div>

            {/* Terminal Window Output */}
            <div className="bg-black/90 rounded-xl border border-slate-800/80 p-4 font-mono text-xs space-y-2 h-[260px] overflow-y-auto">
              {activeScenario.logs.slice(0, currentStep + 1).map((logLine, idx) => {
                const isError = logLine.includes('ALERT') || logLine.includes('CRITICAL') || logLine.includes('FAILED');
                const isSuccess = logLine.includes('SUCCESS') || logLine.includes('RCA SUMMARY') || logLine.includes('HEALTH');
                const isPlaybook = logLine.includes('AUTOPLAYBOOK') || logLine.includes('CIRCUIT');

                return (
                  <div
                    key={idx}
                    className={`leading-relaxed animate-in fade-in duration-150 ${
                      isError ? "text-rose-400 font-semibold" :
                      isSuccess ? "text-emerald-400 font-semibold" :
                      isPlaybook ? "text-cyan-300 font-semibold" :
                      "text-slate-300"
                    }`}
                  >
                    {logLine}
                  </div>
                );
              })}

              {currentStep < activeScenario.logs.length - 1 && (
                <div className="text-slate-500 animate-pulse flex items-center gap-2 pt-1">
                  <span>Executing SRE remediation step {currentStep + 1}...</span>
                </div>
              )}
            </div>

            {/* Automated Remediation Summary Card */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <ShieldAlert className="w-4 h-4" /> Automated SRE Remediation Policy
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {activeScenario.automatedAction}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
