import { button } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Dot from "@/components/ui/Dot";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { cn } from "@/lib/cn";
import Link from "next/link";

const channels = ["CH.01 WEB", "CH.02 VIDEO", "CH.03 SOCIAL", "CH.04 EMAIL"];

export default function Home() {
  return (
    <Container className="py-16 lg:py-24">
      <div className="flex flex-col gap-12 xl:grid xl:grid-cols-2 xl:gap-16 xl:items-center">
        <div>
          <Eyebrow>Full-channel creative studio</Eyebrow>
          <Heading
            as="h1"
            size="xl"
            className="max-w-3xl mb-6 xl:text-display-l"
          >
            We build the site. <br className="hidden lg:block" />
            Cut the footage. <br className="hidden lg:block" />
            Run the feed. <br className="hidden lg:block" />
            Land the inbox.
          </Heading>
          <p className="max-w-xl font-body text-body-lg text-ink-soft mb-9">
            Signal is a small studio that handles web development, video
            editing, social management, and email marketing under one roof — so
            your brand looks and sounds the same everywhere it shows up.
          </p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              href="/work"
              className={cn(
                button({ variant: "primary" }),
                "w-full justify-center md:w-auto",
              )}
            >
              See the Work
            </Link>
            <Link
              href="/contact"
              className={cn(
                button({ variant: "secondary" }),
                "w-full justify-center md:w-auto",
              )}
            >
              Start a Project
            </Link>
          </div>
        </div>
        <div className="relative p-10 border border-border bg-surface">
          <span className="absolute top-0 left-0 w-[18px] h-[18px] border-t-2 border-l-2 border-ink" />
          <span className="absolute top-0 right-0 w-[18px] h-[18px] border-t-2 border-r-2 border-ink" />
          <span className="absolute bottom-0 left-0 w-[18px] h-[18px] border-b-2 border-l-2 border-ink" />
          <span className="absolute bottom-0 right-0 w-[18px] h-[18px] border-b-2 border-r-2 border-ink" />

          <p className="flex items-center mb-6 font-mono text-xs text-accent gap-x-2">
            <Dot className="bg-accent" />
            ON AIR — ALL CHANNELS ACTIVE
          </p>

          <div className="grid grid-cols-2 gap-3">
            {channels.map((label) => (
              <span
                key={label}
                className="px-3 py-2 font-mono text-xs uppercase border border-border bg-surface"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
