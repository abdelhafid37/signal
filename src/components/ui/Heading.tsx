import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

const heading = cva("font-display font-bold tracking-tight", {
  variants: {
    size: {
      xl: "text-display-xl",
      l: "text-display-l",
      m: "text-display-m",
    },
  },
  defaultVariants: { size: "m" },
});

interface HeadingProps extends VariantProps<typeof heading> {
  as: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
}

export default function Heading({
  as,
  children,
  className,
  size,
}: HeadingProps) {
  const Tag = as;
  return <Tag className={cn(heading({ size }), className)}>{children}</Tag>;
}
