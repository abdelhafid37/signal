import { cn } from "@/lib/cn";

export default function Dot({
  isSquare = false,
  className,
}: {
  isSquare?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "size-1.5 shrink-0",
        !isSquare && "rounded-full",
        className,
      )}
    />
  );
}
