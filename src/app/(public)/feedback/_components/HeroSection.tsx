"use client";

import { Check } from "lucide-react";
import type { Platform } from "../../cadastro/types";

interface HeroSectionProps {
  fullName: string;
  platform: Platform;
}

// Get platform-specific description using switch/case
function getPlatformDescription(platform: Platform): string {
  switch (platform) {
    case "pc":
      return "Prepare-se para uma experiência épica no mundo dos games para PC!";
    case "console":
      return "Relaxe e aproveite os melhores jogos no conforto do seu sofá!";
    case "mobile":
      return "Jogue onde estiver e conecte-se com gamers do mundo todo!";
    case "retro":
      return "Reviva os clássicos que marcaram gerações de jogadores!";
    default:
      return "Parabéns! Você agora faz parte da nossa comunidade de gamers.";
  }
}

export function HeroSection({ fullName, platform }: HeroSectionProps) {
  const description = getPlatformDescription(platform);

  return (
    <section
      className="
        // Layout
        relative flex items-center justify-center overflow-hidden
        // Spacing
        py-20 md:py-32
        // Background
        bg-gradient-to-br from-primary-green-base/10 via-background to-secondary-pink-base/10
        dark:from-primary-green-base/5 dark:via-background dark:to-secondary-pink-base/5
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            // Position
            absolute -top-1/2 -right-1/4
            // Size
            w-[600px] h-[600px]
            // Style
            rounded-full bg-primary-green-base/20 dark:bg-primary-green-base/10
            blur-3xl
            animate-pulse
          "
        />
        <div
          className="
            // Position
            absolute -bottom-1/2 -left-1/4
            // Size
            w-[600px] h-[600px]
            // Style
            rounded-full bg-secondary-pink-base/20 dark:bg-secondary-pink-base/10
            blur-3xl
            animate-pulse
          "
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Success Icon */}
          <div className="mb-8 inline-flex animate-bounce-slow">
            <div
              className="
                // Layout
                relative flex items-center justify-center
                // Size
                h-24 w-24
                // Style
                rounded-full bg-primary text-primary-foreground
                shadow-2xl
              "
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />

              {/* Icon */}
              <Check className="relative h-12 w-12" strokeWidth={3} />
            </div>
          </div>

          {/* Title */}
          <h1
            className="
              // Typography
              font-heading text-4xl md:text-5xl lg:text-6xl font-bold
              // Spacing
              mb-6
              // Animation
              animate-fadeIn
            "
          >
            Bem-vindo(a),{" "}
            <span
              className="
                // Typography
                bg-clip-text text-transparent
                // Background
                bg-gradient-to-r from-primary-green-base to-primary-green-lighter-1
              "
            >
              {fullName}!
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              // Typography
              text-lg md:text-xl text-text-muted
              // Spacing
              mb-8
              // Animation
              animate-fadeIn
            "
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            {description}
          </p>

          {/* Success Badge */}
          <div
            className="
              // Layout
              inline-flex items-center gap-2
              // Spacing
              px-6 py-3
              // Style
              rounded-full
              bg-primary/10 dark:bg-primary/20
              border border-primary/20
              // Animation
              animate-fadeIn
            "
            style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Check className="h-5 w-5 text-primary" />
            <span className="font-semibold text-primary">Cadastro realizado com sucesso!</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
