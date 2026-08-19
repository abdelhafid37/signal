import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export default function Eyebrow({
  children,
  className,
  isDark = false,
}: {
  children: ReactNode;
  className?: string;
  isDark?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-mono uppercase flex items-center gap-x-2 text-[13px] tracking-widest",
        isDark ? "text-tally" : "text-accent",
        className,
      )}
    >
      <span className="bg-current size-1.5 shrink-0" />
      {children}
    </span>
  );
}
