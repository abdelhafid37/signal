import Link from "next/link";
import Container from "../ui/Container";
import { navLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-bg">
      <Container className="py-16">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <p className="mb-3 font-bold font-display">SIGNAL</p>
            <p className="font-body text-sm text-ink-soft max-w-[240px]">
              Full-channel creative studio.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-4">
                Sitemap
              </p>

              <ul className="flex flex-col gap-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-body">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-soft mb-4">
                Contact
              </p>
              <div className="flex flex-col gap-y-2.5">
                <a
                  href="mailto:hello@signalstudio.co"
                  className="text-sm font-body"
                >
                  hello@signalstudio.co
                </a>
                <p className="text-sm font-body">Remote-first · Worldwide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-6 border-t gap-y-4 lg:flex-row lg:items-center lg:justify-between border-white/10 mt-14">
          <p className="font-mono text-xs text-ink-soft">
            &copy; {currentYear} Signal Studio. All rights reserved.
          </p>
          <p className="flex items-center font-mono text-xs gap-x-2">
            <span className="bg-tally size-1.5 rounded-full shrink-0 animate-pulse" />
            Available for projects
          </p>
        </div>
      </Container>
    </footer>
  );
}
