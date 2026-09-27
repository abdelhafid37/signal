import Link from "next/link";
import Container from "../ui/Container";
import { navLinks } from "@/lib/data";
import Dot from "../ui/Dot";

interface FooterProps {
  variant?: "home" | "inner" | "contact";
}

export default function Footer({ variant = "inner" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bg">
      <Container className="pt-12 pb-6 md:pt-16 xl:pt-20 md:pb-7 xl:pb-8">
        <div className="flex flex-col justify-between gap-9 md:gap-0 md:flex-row">
          <div>
            <p className="mb-3 font-bold font-display">SIGNAL</p>
            <p className="font-body text-sm text-ink-soft max-w-[240px] hidden md:block">
              Full-channel creative studio.
            </p>
          </div>

          <div className="flex gap-9 md:gap-12 xl:gap-20">
            <div className={variant === "contact" ? "hidden xl:block" : ""}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-4">Sitemap</p>

              <ul className="flex flex-col gap-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href} className="text-sm font-body">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {variant === "contact" ? (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-4">Social</p>
                <div className="flex flex-col gap-y-2.5">
                  <a href="#" className="text-sm font-body">
                    Instagram
                  </a>
                  <a href="#" className="text-sm font-body">
                    LinkedIn
                  </a>
                  <a href="#" className="text-sm font-body">
                    X
                  </a>
                </div>
              </div>
            ) : (
              <div className={variant === "inner" ? "hidden xl:block" : ""}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-4">Contact</p>
                <div className="flex flex-col gap-y-2.5">
                  <a href="mailto:hello@signalstudio.co" className="text-sm font-body">
                    hello@signalstudio.co
                  </a>
                  <p className="text-sm font-body">
                    <span className="xl:hidden">Remote-first</span>
                    <span className="hidden xl:inline">Remote-first · Worldwide</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col pt-6 border-t gap-y-4 md:flex-row md:items-center md:justify-between border-white/10 mt-14">
          <p className="font-mono text-xs text-ink-soft">
            <span className="xl:hidden">&copy; {currentYear} Signal Studio.</span>
            <span className="hidden xl:inline">&copy; {currentYear} Signal Studio. All rights reserved.</span>
          </p>
          <p className="flex items-center font-mono text-xs gap-x-2">
            <Dot className="bg-tally animate-pulse" />
            <span className="md:hidden">Available</span>
            <span className="hidden md:inline">Available for projects</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
