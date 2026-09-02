import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "outline" | "success" }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700",
    outline: "border border-cyan-500/30 text-cyan-400 bg-cyan-950/20",
    success: "border border-green-500/30 text-green-400 bg-green-950/20",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export { Badge };
