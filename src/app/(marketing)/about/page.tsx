import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { team, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section>
        <Container className="py-16 xl:py-24">
          <Eyebrow>04 · About</Eyebrow>
          <Heading as="h1" size="l">
            The studio behind the signal.
          </Heading>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-6 py-16 border-t xl:py-24 border-border xl:grid xl:grid-cols-2 xl:gap-16">
          <Heading as="h2" size="m" className="mb-5 xl:mb-6">
            Why one studio, six channels
          </Heading>
          <p className="font-body text-ink-soft xl:hidden">
            Most brands piece their presence together from three or four vendors. Signal is one small team covering
            every channel, so your site, feed, and inbox sound like the same brand.
          </p>
          <p className="hidden xl:block font-body text-ink-soft">
            Most brands piece their presence together from three or four different vendors — a dev shop, a video
            freelancer, a social manager, an email tool nobody logs into. Signal exists because that seams shows. We
            built one small team that covers every channel, so your site, your feed, and your inbox all sound like the
            same brand, because they&apos;re built by the same people.
          </p>
        </Container>
      </section>

      <section>
        <Container className="py-16 border-t xl:py-24 border-border">
          <Eyebrow>The team</Eyebrow>
          <Heading as="h2" size="m" className="mb-7 md:mb-8 xl:mb-12">
            Small, senior, hands-on.
          </Heading>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
            {team.map((person) => (
              <div key={person.name} className="flex items-center gap-4 xl:block">
                <div className="size-14 xl:size-[72px] rounded-full bg-ink text-bg flex items-center justify-center font-display font-bold text-base xl:text-xl mb-0 xl:mb-5 shrink-0">
                  {person.initials}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg mb-0.5 xl:mb-2">{person.name}</h3>
                  <p className="text-sm font-body text-ink-soft">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 border-t xl:py-24 border-border">
          <Eyebrow>Values</Eyebrow>
          <Heading as="h2" size="m" className="mb-7 md:mb-8 xl:mb-12">
            What we actually mean by that.
          </Heading>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="p-8 border border-border bg-surface">
                <h3 className="mb-2 text-lg font-bold font-display">{value.title}</h3>
                <p className="text-sm font-body text-ink-soft xl:hidden">{value.descriptionShort}</p>
                <p className="hidden text-sm xl:block font-body text-ink-soft">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
