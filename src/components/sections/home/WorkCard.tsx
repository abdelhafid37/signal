interface WorkCardProps {
  initials: string;
  title: string;
  tags: string[];
  description: string;
}

export default function WorkCard({ description, initials, tags, title }: WorkCardProps) {
  return (
    <div>
      <div className="h-[220px] mb-5 border md:h-[200px] xl:h-[220px] md:mb-[18px] xl:mb-5 border-border bg-surface flex items-center justify-center font-mono text-xs text-ink-soft uppercase tracking-wide">
        {initials} - IMAGE
      </div>
      <h3 className="mb-2 text-lg font-bold font-display">{title}</h3>
      <div className="flex gap-2 mb-2.5">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 font-mono text-xs uppercase border border-border bg-surface">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-sm font-body text-ink-soft">{description}</p>
    </div>
  );
}
