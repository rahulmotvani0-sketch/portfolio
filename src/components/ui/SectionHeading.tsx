import * as React from "react";
import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

export function SectionHeading({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex items-center gap-3 mb-3">
        <Terminal className="h-6 w-6 text-cyan-400" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-100">{title}</h2>
      </div>
      {subtitle && <p className="text-slate-400 text-lg max-w-2xl">{subtitle}</p>}
      <div className="h-px w-full bg-gradient-to-r from-cyan-500/20 to-transparent mt-6" />
    </div>
  );
}
