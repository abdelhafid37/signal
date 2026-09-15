import { button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

interface CTABannerProps {
  eyebrow: string;
  heading: string;
  headingShort?: string;
}

export default function CTABanner({ eyebrow, heading, headingShort }: CTABannerProps) {
  return (
    <section>
      <Container className="text-center bg-ink text-bg py-14 md:py-18 xl:py-[100px]">
        <Eyebrow isDark className="justify-center">
          {eyebrow}
        </Eyebrow>
        <Heading as="h2" size="m" className="mb-6 md:mb-7 xl:hidden">
          {headingShort ?? heading}
        </Heading>
        <Heading as="h2" size="m" className="hidden xl:mb-8 xl:block">
          {heading}
        </Heading>
        <Link href="/contact" className={button({ variant: "primary" })}>
          Start a Project
        </Link>
      </Container>
    </section>
  );
}
