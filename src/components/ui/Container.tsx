import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("px-8 md:px-12 xl:px-32 max-w-[1440px] mx-auto", className)}>{children}</div>;
}
