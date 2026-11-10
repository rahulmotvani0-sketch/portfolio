"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Play, Copy, Check, Sparkles, Shield, Cpu, RefreshCw, Layers } from "lucide-react";

interface CommandPreset {
  category: "Kubernetes" | "Service Mesh" | "Disaster Recovery" | "DevSecOps" | "Terraform";
  label: string;
  command: string;
  description: string;
  output: string;
}

const COMMAND_PRESETS: CommandPreset[] = [
  {
    category: "Service Mesh",
    label: "Verify Istio mTLS",
    command: "istioctl authn tls-check backend-api.production.svc.cluster.local",
    description: "Validates STRICT mutual TLS status across Istio Envoy service mesh proxies.",
    output: `HOST:PORT                                  STATUS     SERVER     CLIENT     AUTHN POLICY     KEYS
backend-api.production.svc.cluster.local:8080   OK         STRICT     STRICT     default/production  OK
auth-service.production.svc.cluster.local:9000  OK         STRICT     STRICT     default/production  OK
database.production.svc.cluster.local:5432      OK         STRICT     STRICT     default/production  OK

[SUCCESS] 100% of inter-service traffic in namespace 'production' is encrypted via SPIFFE identity & STRICT mTLS.`
  },
  {
    category: "Disaster Recovery",
    label: "Velero DR Restore",
    command: "velero restore create --from-backup prod-daily-backup-latest --wait",
    description: "Executes cross-namespace automated disaster recovery restoration drill from S3 snapshot.",
    output: `Restore request 'restore-prod-daily-backup-latest-20261109' submitted successfully.
Waiting for restore to complete...
[12:00:02] Phase: InProgress
[12:00:14] Restoring Namespace 'production' [PersistentVolumes, Deployments, Services, ConfigMaps, Secrets]
[12:00:28] Restored 48 items out of 48 total items.
[12:00:31] Phase: Completed (0 errors, 0 warnings)

RTO (Recovery Time Objective): 29s | RPO (Recovery Point Objective): < 1hr
Validation: kubectl get pods -n production -> 6/6 pods Running (Ready).`
  },
  {
    category: "Kubernetes",
    label: "HPA Autoscaling Trigger",
    command: "kubectl get hpa,pods -l app=ha-microservice -n production",
    description: "Inspects Horizontal Pod Autoscaler metrics under dynamic traffic load.",
    output: `NAME                                            REFERENCE                    TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
horizontalpodautoscaler.autoscaling/ha-hpa      Deployment/ha-microservice   cpu: 82%/60%    2         12        8          4d12h

NAME                                  READY   STATUS    RESTARTS   AGE     NODE
pod/ha-microservice-687f58cb9d-9h2kd   1/1     Running   0          42s     worker-node-02
pod/ha-microservice-687f58cb9d-b4xvl   1/1     Running   0          42s     worker-node-03
pod/ha-microservice-687f58cb9d-f2m9q   1/1     Running   0          2m      worker-node-01
pod/ha-microservice-687f58cb9d-k8pxz   1/1     Running   0          2m      worker-node-02
pod/ha-microservice-687f58cb9d-p91mc   1/1     Running   0          18m     worker-node-01
pod/ha-microservice-687f58cb9d-z4wql   1/1     Running   0          18m     worker-node-03

[AUTOSCALE EVENT] Scaled up replica count from 2 to 8 (Trigger: CPU > 60% sustained for 30s).`
  },
  {
    category: "DevSecOps",
    label: "Trivy CVE Container Scan",
    command: "trivy image --severity HIGH,CRITICAL --ignore-unfixed rahul-prod/backend:v2.4.1",
    description: "Evaluates shift-left vulnerability quality gate on production container image.",
    output: `2026-11-09T12:00:00.120Z INFO Vulnerability scanning initiated: rahul-prod/backend:v2.4.1
2026-11-09T12:00:01.450Z INFO OS: alpine 3.20.2 (distroless unprivileged runner)
2026-11-09T12:00:02.100Z INFO Scanning 48 application dependencies & OS packages...

Total: 0 (UNKNOWN: 0, LOW: 0, MEDIUM: 0, HIGH: 0, CRITICAL: 0)

[PASSED] Quality Gate: 0 Critical / 0 High vulnerabilities detected.
Cosign Signature: Verified with Rekor public ledger (OIDC Subject: github.com/rahulmotvani0-sketch).
Syft SBOM generated: spdx-json format stored in build artifacts.`
  },
  {
    category: "Terraform",
    label: "Terraform Drift Check",
    command: "terraform plan -detailed-exitcode -compact-warnings",
    description: "Verifies zero infrastructure drift across AWS multi-region production state.",
    output: `Acquiring state lock from DynamoDB table 'terraform-locks'...
Refreshing Terraform state in s3://rahul-terraform-state-prod/...
module.vpc.aws_vpc.main: Refreshing state... [id=vpc-084a9f8e21]
module.eks.aws_eks_cluster.primary: Refreshing state... [id=prod-eks-cluster]
module.waf.aws_wafv2_web_acl.api_gateway: Refreshing state... [id=waf-acl-9842]

No changes. Your infrastructure matches the configuration.

Terraform has compared your real infrastructure against your configuration and found no differences.
Exit Code 0: Zero configuration drift detected.`
  }
];

export default function InteractiveTerminal() {
  const [selectedPreset, setSelectedPreset] = useState<CommandPreset>(COMMAND_PRESETS[0]);
  const [history, setHistory] = useState<{ command: string; output: string }[]>([
    {
      command: COMMAND_PRESETS[0].command,
      output: COMMAND_PRESETS[0].output
    }
  ]);
  const [inputCommand, setInputCommand] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history, isTyping]);

  const executePreset = (preset: CommandPreset) => {
    setSelectedPreset(preset);
    setIsTyping(true);
    setTimeout(() => {
      setHistory(prev => [...prev, { command: preset.command, output: preset.output }]);
      setIsTyping(false);
    }, 350);
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCommand.trim()) return;

    const matched = COMMAND_PRESETS.find(
      p => p.command.toLowerCase().includes(inputCommand.toLowerCase().trim()) ||
           inputCommand.toLowerCase().trim().includes(p.label.toLowerCase())
    );

    const output = matched 
      ? matched.output 
      : `bash: command not found: ${inputCommand}\nType one of the preset commands above (e.g., 'istioctl', 'velero', 'kubectl', 'trivy', 'terraform').`;

    setHistory(prev => [...prev, { command: inputCommand, output }]);
    setInputCommand("");
  };

  const handleCopyCurrent = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output}`).join("\n\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearTerminal = () => {
    setHistory([
      {
        command: selectedPreset.command,
        output: selectedPreset.output
      }
    ]);
  };

  return (
    <section id="interactive-terminal" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-4">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive Production Terminal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Live Cloud & SRE Command Playground
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2">
            Click any command preset below to simulate real-world cluster operations, security audits, disaster recovery, and GitOps self-healing.
          </p>
        </div>

        {/* Command Preset Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {COMMAND_PRESETS.map((preset, idx) => {
            const isSelected = selectedPreset.label === preset.label;
            return (
              <button
                key={idx}
                onClick={() => executePreset(preset)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all border ${
                  isSelected
                    ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/10"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700"
                }`}
              >
                <Play className={`w-3 h-3 ${isSelected ? "text-cyan-400 fill-cyan-400" : "text-slate-500"}`} />
                <span className="font-semibold">{preset.label}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                  {preset.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Terminal Window */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                rahul@cloud-bastion:~/production-ops (k8s-prod-cluster-01)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCurrent}
                title="Copy terminal session"
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="text-[11px]">{copied ? "Copied" : "Copy"}</span>
              </button>
              <button
                onClick={clearTerminal}
                title="Clear output"
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-xs transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="text-[11px]">Clear</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 max-h-[460px] overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-slate-700">
            <div className="text-slate-500 text-xs pb-2 border-b border-slate-800/60">
              # Antigravity Cloud Operations Console v2.6.4 — Authenticated as rahul (ClusterAdmin/Prod-RO)<br />
              # Type any command below or click a scenario preset above to inspect output.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-300">
                  <span className="text-emerald-400 font-bold">rahul@bastion:~$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed pl-4 border-l-2 border-slate-800 text-[11px] sm:text-xs">
                  {item.output}
                </pre>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-cyan-300 animate-pulse">
                <span className="text-emerald-400 font-bold">rahul@bastion:~$</span>
                <span>Executing {selectedPreset.label}...</span>
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Input Bar */}
          <form onSubmit={handleManualSubmit} className="flex items-center gap-2 px-4 py-3 bg-slate-950 border-t border-slate-800">
            <span className="text-emerald-400 font-bold text-xs">rahul@bastion:~$</span>
            <input
              type="text"
              value={inputCommand}
              onChange={(e) => setInputCommand(e.target.value)}
              placeholder="Try: kubectl get pods, velero restore, istioctl, trivy, or terraform..."
              className="flex-1 bg-transparent text-white text-xs sm:text-sm focus:outline-none placeholder:text-slate-600 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1 rounded bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold transition-all"
            >
              Run
            </button>
          </form>
        </div>

        {/* Real Codebase Footnote */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 px-2 gap-2">
          <span>
            💡 Powered by real configurations from your <span className="text-slate-400 font-mono">istio-service-mesh</span>, <span className="text-slate-400 font-mono">velero-backup</span>, and <span className="text-slate-400 font-mono">k8s-autoscaling</span> projects.
          </span>
          <span className="text-slate-400 font-mono">
            Zero static credentials • 100% Declarative GitOps
          </span>
        </div>

      </div>
    </section>
  );
}

