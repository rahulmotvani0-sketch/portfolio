import * as React from "react";
import { cn } from "@/lib/utils";
import { 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Activity, 
  Users, 
  GitCommit, 
  CheckCircle, 
  Box 
} from "lucide-react";

type NodeIcon = "user" | "app" | "load-balancer" | "container" | "database" | "security" | "monitoring" | "git" | "pipeline" | "server";

const iconMap = {
  "user": Users,
  "app": Box,
  "load-balancer": Cloud,
  "container": Server,
  "server": Server,
  "database": Database,
  "security": ShieldCheck,
  "monitoring": Activity,
  "git": GitCommit,
  "pipeline": CheckCircle,
};

interface DiagramNode {
  id: string;
  label: string;
  icon: NodeIcon;
  sublabel?: string;
}

export function ArchitectureFlow({
  nodes,
  direction = "vertical",
  className,
}: {
  nodes: DiagramNode[];
  direction?: "vertical" | "horizontal";
  className?: string;
}) {
  return (
    <div className={cn(
      "flex", 
      direction === "vertical" ? "flex-col items-center space-y-6" : "flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6",
      className
    )}>
      {nodes.map((node, i) => {
        const Icon = iconMap[node.icon];
        return (
          <React.Fragment key={node.id}>
            <div className="arch-node w-48 z-10 bg-slate-900 border-slate-700">
              <Icon className="h-8 w-8 text-cyan-400 mb-2" />
              <div className="font-medium text-slate-200">{node.label}</div>
              {node.sublabel && <div className="text-xs text-slate-400 mt-1">{node.sublabel}</div>}
            </div>
            {i < nodes.length - 1 && (
              <div className={cn(
                "flex items-center justify-center",
                direction === "vertical" ? "h-8 w-full" : "h-8 w-full md:h-full md:w-8"
              )}>
                <div className={cn(
                  "border-slate-600 border-dashed",
                  direction === "vertical" ? "border-l-2 h-full" : "border-l-2 h-full md:border-l-0 md:border-t-2 md:w-full"
                )} />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
