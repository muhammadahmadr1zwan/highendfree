import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

const Separator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("h-px bg-border", className)}
      {...props}
    />
  )
);

Separator.displayName = "Separator";

export { Separator };
