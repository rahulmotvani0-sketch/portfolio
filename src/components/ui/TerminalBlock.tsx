"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function TerminalBlock({
  command,
  output,
  className,
}: {
  command?: string;
  output?: string;
  className?: string;
}) {
  return (
    <div className={cn("terminal-window font-fira text-sm", className)}>
      <div className="terminal-header">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
          <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-slate-400 text-xs flex-1 text-center font-sans pr-14">
          bash - ~
        </div>
      </div>
      <div className="p-4 bg-slate-950/80 overflow-x-auto">
        {command && (
          <div className="flex mb-2">
            <span className="text-green-400 mr-2">$</span>
            <span className="text-slate-200">{command}</span>
          </div>
        )}
        {output && <div className="text-slate-400 whitespace-pre-wrap">{output}</div>}
      </div>
    </div>
  );
}
