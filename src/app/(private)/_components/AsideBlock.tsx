"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FrameIcon } from "@/components/ui/FrameIcon";
import type { IconName } from "@/components/ui/Icon";
import { H4 } from "@/components/ui/Typography";

export interface AsideBlockProps extends React.HTMLAttributes<HTMLElement> {
  icon: IconName;
  title: string;
}

const AsideBlock = React.forwardRef<HTMLElement, AsideBlockProps>(
  ({ icon, title, children, className, ...props }, ref) => {
    return (
      <section
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn("", className)}
        {...props}
      >
        <header className="mb-4 flex items-center gap-3">
          <FrameIcon name={icon} variant="primary" size="md" />
          <H4 className="text-text-primary">{title}</H4>
        </header>
        <div className="flex flex-col gap-4">{children}</div>
      </section>
    );
  },
);

AsideBlock.displayName = "AsideBlock";

export { AsideBlock };
