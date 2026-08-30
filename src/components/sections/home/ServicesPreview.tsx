import Link from "next/link";
import { cn } from "@/lib/cn";
import { services } from "@/lib/data";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { button } from "@/components/ui/Button";

export default function ServicesPreview() {
  return (
    <section>
      <Container className="py-16 border-t lg:py-24 border-border">
        <div className="mb-9 lg:mb-14 lg:flex lg:items-end lg:justify-between">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <Heading as="h2" size="l">
              Six channels. One team.
            </Heading>
          </div>
          <Link
            href="/services"
            className={cn(
              button({ variant: "ghost" }),
              "hidden lg:inline-flex",
            )}
          >
            View Services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="p-8 border border-border bg-surface"
            >
              <p className="mb-3 font-mono text-xs text-accent">
                {service.number}
              </p>
              <h3 className="mb-2 text-lg font-bold font-display">
                {service.title}
              </h3>
              <p className="text-sm font-body text-ink-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className={cn(button({ variant: "ghost" }), "mt-7 md:mt-8 lg:hidden")}
        >
          View Services
        </Link>
      </Container>
    </section>
  );
}
