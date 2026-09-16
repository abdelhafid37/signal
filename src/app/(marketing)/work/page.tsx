import Container from "@/components/ui/Container";
import CTABanner from "@/components/ui/CTABanner";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import WorkCard from "@/components/ui/WorkCard";
import { featuredWork } from "@/lib/data";

export default function WorkPage() {
  return (
    <>
      <section>
        <Container className="py-16 xl:py-24">
          <Eyebrow>02 · Work</Eyebrow>
          <Heading as="h1" size="l">
            Work we&apos;ve shipped across every channel.
          </Heading>
        </Container>
      </section>

      <section>
        <Container className="py-16 border-t xl:py-24 border-border">
          <div className="grid gap-6 md:grid-cols-2 xl:hidden">
            {featuredWork.map((p) => (
              <WorkCard
                key={p.title}
                initials={p.initials}
                title={p.title}
                tags={p.tags}
                description={p.workDescriptionShort ?? p.workDescription}
              />
            ))}
          </div>

          <div className="hidden gap-6 xl:grid xl:grid-cols-3">
            {featuredWork.map((p) => (
              <WorkCard
                key={p.title}
                initials={p.initials}
                title={p.title}
                tags={p.tags}
                description={p.workDescription}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        eyebrow="Let's talk"
        heading="Want to see your brand here next?"
        headingShort="Want to see your brand here?"
      />
    </>
  );
}
