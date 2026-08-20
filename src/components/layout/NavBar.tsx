"use client";

import { useState } from "react";
import Container from "../ui/Container";
import { button } from "../ui/Button";
import Link from "next/link";
import { cn } from "@/lib/cn";

const links = [
  { number: "01", label: "Home", href: "/" },
  { number: "02", label: "Work", href: "/" },
  { number: "03", label: "Services", href: "/" },
  { number: "04", label: "About", href: "/" },
  { number: "05", label: "Contact", href: "/" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-border">
      <Container className="flex items-center justify-between py-6">
        <Link href="/" className="font-bold uppercase font-display">
          Signal
        </Link>

        <ul className="items-center justify-center hidden gap-x-8 lg:flex">
          {links.map((link) => (
            <li key={link.number}>
              <Link
                href={link.href}
                className="uppercase font-mono tracking-wide text-[13px]"
              >
                <span className="text-accent">{link.number}</span> {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          className={cn(button({ size: "sm" }), "hidden lg:inline-flex")}
        >
          Start a project
        </Link>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex lg:hidden"
        >
          <span className="w-5 h-3.5 flex flex-col justify-between">
            <span className="h-0.5 bg-ink block" />
            <span className="h-0.5 bg-ink block" />
            <span className="h-0.5 bg-ink block" />
          </span>
        </button>
      </Container>

      {isOpen && (
        <div className="border-t lg:hidden border-border">
          <Container className="flex flex-col py-6 gap-y-8">
            <ul className="flex flex-col items-center justify-center gap-y-8">
              {links.map((link) => (
                <li key={`mobile-${link.number}`}>
                  <Link
                    href={link.href}
                    className="uppercase font-mono tracking-wide text-[13px]"
                  >
                    <span className="text-accent">{link.number}</span>{" "}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/" className={button({ size: "md" })}>
              Start a project
            </Link>
          </Container>
        </div>
      )}
    </nav>
  );
}
