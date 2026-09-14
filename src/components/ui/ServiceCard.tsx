interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ServiceCard({ description, number, title }: ServiceCardProps) {
  return (
    <div className="p-8 border border-border bg-surface">
      <p className="mb-3 font-mono text-xs text-accent">{number}</p>
      <h3 className="mb-2 text-lg font-bold font-display">{title}</h3>
      <p className="text-sm font-body text-ink-soft">{description}</p>
    </div>
  );
}
