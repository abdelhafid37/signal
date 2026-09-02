import { cn } from "@/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const buttonVariants = cva("inline-flex items-center justify-center uppercase font-mono", {
  variants: {
    variant: {
      primary: "bg-accent text-surface",
      secondary: "ring-1 ring-inset ring-ink text-ink",
      ghost: "border-b border-ink text-ink",
    },
    size: {
      sm: "py-[11px] px-5 text-xs rounded",
      md: "py-4 px-7 text-sm rounded",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
  compoundVariants: [{ variant: "ghost", class: "px-0 rounded-none" }],
});

export function button(props: VariantProps<typeof buttonVariants> = {}) {
  return cn(buttonVariants(props));
}

interface ButtonProps extends VariantProps<typeof buttonVariants>, React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(button({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
