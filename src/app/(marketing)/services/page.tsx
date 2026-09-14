import Container from "@/components/ui/Container";
import CTABanner from "@/components/ui/CTABanner";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesFull, process } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section>
        <Container className="py-16 xl:py-24">
          <Eyebrow>03 · Services</Eyebrow>
          <Heading as="h1" size="l">
            Every channel your brand shows up on.
          </Heading>
        </Container>
      </section>

      <section>
        <Container className="py-16 border-t xl:py-24 border-border">
          <div className="grid gap-6 md:grid-cols-2 xl:hidden">
            {servicesFull.map((s) => (
              <ServiceCard key={s.number} number={s.number} title={s.title} description={s.descriptionShort} />
            ))}
          </div>

          <div className="hidden gap-6 xl:grid xl:grid-cols-3">
            {servicesFull.map((s) => (
              <ServiceCard key={s.number} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 border-t xl:py-24 border-border">
          <Eyebrow>How we work</Eyebrow>
          <Heading as="h2" size="m" className="mb-6 md:mb-8 xl:mb-12">
            Four steps. No surprises.
          </Heading>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((step) => (
              <div key={step.number}>
                <p className="font-display font-bold text-accent text-2xl md:text-[26px] xl:text-[28px] mb-2.5">
                  {step.number}
                </p>
                <h3 className="mb-2 text-lg font-bold font-display">{step.title}</h3>
                <p className="text-sm font-body text-ink-soft xl:hidden">{step.descriptionShort}</p>
                <p className="hidden text-sm xl:block font-body text-ink-soft">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        eyebrow="Let's talk"
        heading="Not sure which channel you need first?"
        headingShort="Not sure what you need first?"
      />
    </>
  );
}
