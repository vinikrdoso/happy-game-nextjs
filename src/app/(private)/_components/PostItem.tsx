"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { Paragraph, Span } from "@/components/ui/Typography";

export interface PostItemProps extends Omit<
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

const PostItem = React.forwardRef<HTMLElement, PostItemProps>(
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
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 border-r border-border-primary py-px pr-2">
          <Paragraph className="text-text-surface-primary">{title}</Paragraph>
          <div className="flex items-center gap-2">
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
            <Span variant="text4" className="text-text-tertiary">
              {dateAndComments}
            </Span>
          </div>
        </div>
        {badges.length > 0 && (
          <div className="flex shrink-0 items-center gap-2 p-2">
            {badges.map((label) => (
              <Badge key={label} variant="default">
                {label}
              </Badge>
            ))}
          </div>
        )}
      </Link>
    );
  },
);

PostItem.displayName = "PostItem";

export { PostItem };
