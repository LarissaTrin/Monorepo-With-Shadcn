"use client";

import { cn } from "../core/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("ui-animate-pulse ui-rounded-md ui-bg-primary/10", className)}
      {...props}
    />
  )
}

export { Skeleton }
