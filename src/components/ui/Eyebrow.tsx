import { cn } from "@/lib/cn";
import type { ReactNode } from "react";
import Dot from "./Dot";

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
        "font-mono uppercase flex items-center gap-x-2 text-[13px] tracking-widest mb-4",
        isDark ? "text-tally" : "text-accent",
        className,
      )}
    >
      <Dot isSquare className="bg-current" />
      {children}
    </span>
  );
}
