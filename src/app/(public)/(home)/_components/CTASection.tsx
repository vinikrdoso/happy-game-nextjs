import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold">
            Junte-se à nossa comunidade gamer
          </h2>
          <p className="text-lg text-neutral-400">
            Seja um dos pioneiros a construir a comunidade que vai preservar o
            passado, viver o presente e criar o futuro dos videogames.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/cadastro">
              <Button size="lg" className="text-lg px-8">
                Inscreva-se
              </Button>
            </Link>
            <Link href="/platform">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Saiba mais
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
