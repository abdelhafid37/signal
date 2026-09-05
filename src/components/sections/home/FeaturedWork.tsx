import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { featuredWork } from "@/lib/data";
import Link from "next/link";
import React from "react";
import WorkCard from "./WorkCard";
import { cn } from "@/lib/cn";
import { button } from "@/components/ui/Button";

export default function FeaturedWork() {
  return (
    <section>
      <Container className="py-16 border-t lg:py-24 border-border">
        <div className="mb-9 xl:mb-14 xl:flex xl:items-end xl:justify-between">
          <div>
            <Eyebrow>Selected work</Eyebrow>
            <Heading as="h2" size="m">
              Recent Work
            </Heading>
          </div>
          <Link href="/work" className={cn(button({ variant: "ghost" }), "hidden xl:inline-flex")}>
            View All Work →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:hidden">
          {featuredWork.slice(0, 2).map((project) => (
            <WorkCard key={project.title} {...project} description={project.descriptionShort ?? project.description} />
          ))}
        </div>

        <div className="hidden gap-6 xl:grid xl:grid-cols-3">
          {featuredWork.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>

        <Link href="/work" className={cn(button({ variant: "ghost" }), "self-start mt-7 md:mt-[18px] xl:hidden")}>
          View All Work →
        </Link>
      </Container>
    </section>
  );
}
