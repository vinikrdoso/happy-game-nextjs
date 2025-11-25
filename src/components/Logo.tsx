import { cva, type VariantProps } from "class-variance-authority";
import Image from "next/image";
import { cn } from "@/lib/utils";

const logoSizeVariants = cva("w-auto", {
  variants: {
    size: {
      sm: "h-6",
      default: "h-8",
      lg: "h-12",
      xl: "h-16",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const logoPaths = {
  white: "/img/logo/logo-white.svg",
  black: "/img/logo/logo-black.svg",
} as const;

type LogoVariant = keyof typeof logoPaths;

interface LogoProps extends VariantProps<typeof logoSizeVariants> {
  variant?: LogoVariant;
  className?: string;
  alt?: string;
}

export function Logo({
  variant = "white",
  size,
  className,
  alt = "Happy Game",
}: LogoProps) {
  const src = logoPaths[variant];
  const sizeClass = logoSizeVariants({ size });

  return (
    <Image
      src={src}
      alt={alt}
      width={300}
      height={83}
      className={cn(sizeClass, className)}
    />
  );
}
