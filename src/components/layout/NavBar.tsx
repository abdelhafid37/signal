"use client";

import { useState } from "react";
import Container from "../ui/Container";
import { button } from "../ui/Button";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <Container className="flex items-center justify-between py-6">
        <Link href="/" className="font-bold font-display">
          SIGNAL
        </Link>

        <nav aria-label="Primary">
          <ul className="items-center justify-center hidden gap-x-8 lg:flex">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn("uppercase font-mono tracking-wide text-[13px]", isActive && "text-accent")}
                  >
                    <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href="/contact" className={cn(button({ size: "sm" }), "hidden lg:inline-flex")}>
          Start a Project
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex items-center gap-x-2 lg:hidden"
        >
          <span className="w-5 h-3.5 flex flex-col justify-between">
            <span className="h-0.5 bg-ink block" />
            <span className="h-0.5 bg-ink block" />
            <span className="h-0.5 bg-ink block" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wide">{isOpen ? "Close" : "Menu"}</span>
        </button>
      </Container>

      {isOpen && (
        <div className="absolute left-0 w-full border-t lg:hidden border-border top-full bg-bg">
          <Container className="flex flex-col py-6 gap-y-8">
            <nav aria-label="Mobile">
              <ul className="flex flex-col items-center justify-center gap-y-8">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;

                  return (
                    <li key={`mobile-${link.href}`}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn("font-mono text-base tracking-wide uppercase", isActive && "text-accent")}
                      >
                        <span className="text-accent">{String(index + 1).padStart(2, "0")}</span> {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <Link href="/contact" onClick={() => setIsOpen(false)} className={button({ size: "md" })}>
              Start a Project
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
