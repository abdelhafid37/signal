import Footer from "@/components/layout/Footer";
import { button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { contactInfo } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <section>
        <Container className="py-16 xl:py-24">
          <Eyebrow>05 · Contact</Eyebrow>
          <Heading as="h1" size="l" className="mb-8 md:mb-10 xl:mb-14">
            Let&apos;s get your signal out there.
          </Heading>

          <div className="flex flex-col gap-10 xl:grid xl:grid-cols-2 xl:items-start xl:gap-16">
            <form className="max-w-[480px]">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2.5"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jordan Casey"
                  className="w-full border border-border bg-surface p-4 font-body text-[15px] focus:outline-none focus:border-[1.5px] focus:border-accent"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2.5"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jordan@company.com"
                  className="w-full border border-border bg-surface p-4 font-body text-[15px] focus:outline-none focus:border-[1.5px] focus:border-accent"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about the project..."
                  className="w-full border border-border bg-surface p-4 font-body text-[15px] focus:outline-none focus:border-[1.5px] focus:border-accent min-h-[120px] resize-none"
                />
              </div>

              <button type="submit" className={button({ variant: "primary" }) + " w-full justify-center xl:w-auto"}>
                Send Message
              </button>
            </form>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1 xl:gap-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="p-8 border border-border bg-surface">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-ink-soft mb-2.5">{item.label}</p>
                  <p className="font-body text-[15px] xl:text-[17px]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Footer variant="contact" />
    </>
  );
}
