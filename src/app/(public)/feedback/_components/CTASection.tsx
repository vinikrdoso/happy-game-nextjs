"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-br from-background to-background-primary">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Title */}
          <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
            Siga nossa jornada nas redes sociais
          </h3>

          {/* Description */}
          <p
            className="text-lg text-text-muted mb-8 animate-fadeIn"
            style={{
              animationDelay: "0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Fique por dentro de todas as novidades, lançamentos e eventos
            exclusivos da nossa comunidade gamer. Acompanhe nosso conteúdo e
            faça parte dessa história épica!
          </p>

          {/* CTA Button */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <Button size="lg" asChild>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" inline-flex items-center gap-2"
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
            className=" mt-12 p-6 rounded-2xl border border-border bg-primary/5 dark:bg-primary/10 animate-fadeIn"
            style={{
              animationDelay: "0.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <p className="text-text-muted">
              📧 <strong>Fique atento!</strong> Em breve você receberá um e-mail
              com mais informações sobre como participar da nossa comunidade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
