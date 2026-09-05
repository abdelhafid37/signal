import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section>
      <Container className="py-16 border-t lg:py-24 border-border">
        <Eyebrow>What clients say</Eyebrow>

        <div className="md:hidden">
          <TestimonialCard
            quote={testimonials[0].quoteMobile ?? testimonials[0].quote}
            name={testimonials[0].name}
            company={testimonials[0].company}
          />
        </div>

        <div className="hidden grid-cols-2 gap-6 md:grid xl:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} quote={t.quoteTablet ?? t.quote} name={t.name} company={t.company} />
          ))}
        </div>

        <div className="hidden grid-cols-2 gap-6 xl:grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
