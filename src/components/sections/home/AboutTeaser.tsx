import { button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import Link from "next/link";

const stats = [
  { number: "2021", label: "Founded" },
  { number: "40+", label: "Client Served" },
  { number: "6", label: "Channels Covered" },
];

export default function AboutTeaser() {
  return (
    <section>
      <Container className="py-16 border-t lg:py-24 border-border">
        <div className="flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:gap-16 xl:items-center">
          <div>
            <Eyebrow>The studio</Eyebrow>
            <Heading as="h2" size="m" className="hidden mb-6 xl:block">
              One small team, direct access — no account managers in between.
            </Heading>
            <Heading as="h2" size="m" className="mb-6 xl:hidden">
              One small team, direct access.
            </Heading>
            <Link href="/about" className={cn(button({ variant: "ghost" }), "hidden xl:inline-flex")}>
              More About Us →
            </Link>
          </div>

          <div className="flex flex-wrap justify-between mb-6 gap-y-6 xl:mb-0 md:flex-nowrap md:justify-normal md:gap-12 xl:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="w-[48%] md:w-auto">
                <p className="text-3xl font-bold font-display text-accent md:text-4xl">{stat.number}</p>
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mt-1.5 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link href="/about" className={cn(button({ variant: "ghost" }), "xl:hidden self-start")}>
            More About Us →
          </Link>
        </div>
      </Container>
    </section>
  );
}
