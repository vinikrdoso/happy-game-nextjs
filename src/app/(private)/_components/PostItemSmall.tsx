"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Paragraph, Span } from "@/components/ui/Typography";

export interface PostItemSmallProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  "title"
> {
  title: string;
  authorName: string;
  authorAvatarSrc?: string | null;
  dateAndComments: string;
  badges?: string[];
  href: string;
}

const PostItemSmall = React.forwardRef<HTMLElement, PostItemSmallProps>(
  (
    {
      title,
      authorName,
      authorAvatarSrc,
      dateAndComments,
      badges = [],
      href,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={cn(
          "flex w-full flex-row gap-2 rounded p-4 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-surface-primary",
          className,
        )}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 ">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Avatar
                src={authorAvatarSrc}
                alt={authorName}
                size={25}
                className="shrink-0"
              />
              <Span variant="text4" className="text-text-surface-tertiary">
                {authorName}
              </Span>
            </div>
          </div>
          <Paragraph className="text-text-surface-primary">{title}</Paragraph>
          <Span variant="text4" className="text-text-tertiary">
            {dateAndComments}
          </Span>
        </div>
      </Link>
    );
  },
);

PostItemSmall.displayName = "PostItemSmall";

export { PostItemSmall };
