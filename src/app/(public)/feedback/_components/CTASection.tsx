"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CTASection() {
  return (
    <section
      className="
        // Spacing
        py-16 md:py-24
        // Background
        bg-gradient-to-br from-background to-background-primary
      "
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h3
            className="
              // Typography
              font-heading text-3xl md:text-4xl font-bold
              // Spacing
              mb-6
              // Animation
              animate-fadeIn
            "
          >
            Siga nossa jornada nas redes sociais
          </h3>

          {/* Description */}
          <p
            className="
              // Typography
              text-lg text-text-muted
              // Spacing
              mb-8
              // Animation
              animate-fadeIn
            "
            style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
          >
            Fique por dentro de todas as novidades, lançamentos e eventos exclusivos da nossa
            comunidade gamer. Acompanhe nosso conteúdo e faça parte dessa história épica!
          </p>

          {/* CTA Button */}
          <div
            className="
              // Layout
              flex flex-col sm:flex-row
              gap-4
              justify-center
              // Animation
              animate-fadeIn
            "
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            <Button size="lg" asChild>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  // Layout
                  inline-flex items-center gap-2
                "
              >
                <Instagram className="h-5 w-5" />
                Seguir no Instagram
              </a>
            </Button>

            <Button size="lg" variant="outline" asChild>
              <Link href="/">Voltar para Home</Link>
            </Button>
          </div>

          {/* Success Message */}
          <div
            className="
              // Spacing
              mt-12 p-6
              // Border & Background
              rounded-2xl
              border border-border
              bg-primary/5 dark:bg-primary/10
              // Animation
              animate-fadeIn
            "
            style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
          >
            <p className="text-text-muted">
              📧 <strong>Fique atento!</strong> Em breve você receberá um e-mail com mais
              informações sobre como participar da nossa comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
