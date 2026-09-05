interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  company: string;
}

export default function TestimonialCard({ company, name, quote, role }: TestimonialCardProps) {
  return (
    <div className="p-8 border border-border bg-surface">
      <p className="font-body text-base xl:text-[17px] mb-4 md:mb-[18px] xl:mb-5">&quot;{quote}&quot;</p>
      <p className="font-mono text-xs uppercase text-accent">
        {name} — {role ? `${role}, ` : ""}
        {company}
      </p>
    </div>
  );
}
