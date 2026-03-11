import { Display1, Span } from "@/components/ui/Typography";

export function HeroBanner() {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex justify-center items-center p-4 bg-neutral-950 bg-[url('/img/hero-shapes.svg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url('/img/noise.png')] opacity-50" />

      <div className="gap-2 flex-col flex justify-center items-center">
        <Display1 className="mix-blend-difference text-neutral-50">
          O que você está <br /> jogando hoje?
        </Display1>
        <Span className="mix-blend-difference text-neutral-50" variant="text1">
          Compartilhe conquistas, peça dicas ou descubra jogos através da <br />
          comunidade. Ambiente moderado, zero toxicidade.
        </Span>
      </div>
    </div>
  );
}
