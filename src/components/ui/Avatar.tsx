"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import Image from "next/image";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string | null;
  alt?: string;
  size?: number;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ src, alt = "", size = 50, className, ...props }, ref) => {
    const showImage = !!src;

    return (
      <div
        ref={ref}
        role="img"
        aria-label={alt || (showImage ? "Foto do perfil" : "Sem foto")}
        className={cn(
          "inline-flex items-center justify-center overflow-hidden rounded-full bg-action-primary-default text-action-white shrink-0",
          className,
        )}
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
        {...props}
      >
        {showImage ? (
          <Image
            src={src ?? ""}
            alt={alt}
            className="h-full w-full object-cover"
            width={50}
            height={50}
          />
        ) : (
          <Icon
            name="User"
            size={Math.round(size * 0.6)}
            className="text-action-white"
            aria-hidden
          />
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export { Avatar };
