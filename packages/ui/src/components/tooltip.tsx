"use client";

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "../core/lib/utils"

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "ui-z-50 ui-overflow-hidden ui-rounded-md ui-bg-primary ui-px-3 ui-py-1.5 ui-text-xs ui-text-primary-foreground ui-animate-in ui-fade-in-0 ui-zoom-in-95 data-[state=closed]:ui-animate-out data-[state=closed]:ui-fade-out-0 data-[state=closed]:ui-zoom-out-95 data-[side=bottom]:ui-slide-in-from-top-2 data-[side=left]:ui-slide-in-from-right-2 data-[side=right]:ui-slide-in-from-left-2 data-[side=top]:ui-slide-in-from-bottom-2 ui-origin-[--radix-tooltip-content-transform-origin]",
        className
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
