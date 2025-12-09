import { ReactNode, memo } from "react";
import { cn } from "@/lib/utils";

interface SleepyCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const SleepyCard = memo(({ children, className, delay = 0 }: SleepyCardProps) => {
  return (
    <div
      className={cn(
        "sleepy-card animate-fade-in-up opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
});

SleepyCard.displayName = "SleepyCard";

export default SleepyCard;
