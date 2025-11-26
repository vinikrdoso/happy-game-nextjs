"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Carousel";
import { Rocket, Gamepad2, Box, Users, Headphones } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  TimelineItem,
  type TimelineItemData,
} from "@/app/(public)/_components/TimelineItem";

export default function Historia() {
  const backgroundImages = [
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1525323559199-ee5b69062cce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1640955011254-39734e60b16f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1571716846319-21f2bf095516?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498736297812-3a08021f206f?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: false });

  const timelineData: TimelineItemData[] = [
    {
      period: "1970 • 1980",
      title: "O Início de Tudo",
      description:
        "Quando os jogos saíram dos laboratórios e invadiram os fliperamas, dando início a uma revolução cultural que mudaria o entretenimento para sempre. **Pong, Space Invaders e Pac-Man** se tornaram os primeiros ícones de uma nova era.",
      games: ["Pong", "Space Invaders", "Pac-Man"],
      icon: Rocket,
    },
    {
      period: "1980 • 1990",
      title: "A Batalha dos Gigantes",
      description:
        "A rivalidade épica entre Nintendo e Sega que definiu uma geração inteira e levou os consoles para as casas de milhões de jogadores. **Super Mario Bros. e Sonic the Hedgehog** se tornaram mais que personagens - viraram símbolos culturais.",
      games: ["Super Mario Bros.", "Sonic the Hedgehog"],
      icon: Gamepad2,
    },
    {
      period: "1990 • 2000",
      title: "Uma Nova Dimensão",
      description:
        "A transição revolucionária para os gráficos 3D e o nascimento dos jogos online, conectando jogadores de todo o mundo pela primeira vez. **Super Mario 64, Quake e EverQuest** abriram portais para mundos antes inimagináveis.",
      games: ["Super Mario 64", "Quake", "EverQuest"],
      icon: Box,
    },
    {
      period: "2000 • 2010",
      title: "A Democratização dos Games",
      description:
        "O surgimento das redes sociais, dos jogos independentes e do e-sports como fenômeno global e cultural. **World of Warcraft, Minecraft e League of Legends** provaram que jogos são mais que entretenimento - são comunidades.",
      games: ["World of Warcraft", "Minecraft", "League of Legends"],
      icon: Users,
    },
    {
      period: "2010 • PRESENTE",
      title: "O Futuro é Agora",
      description:
        "A era dos jogos como serviço, da realidade virtual, dos dispositivos móveis e do metaverso, onde as fronteiras entre o real e o virtual se dissolvem. **Fortnite, Among Us e Pokémon GO** redefinindo como jogamos, trabalhamos e nos conectamos.",
      games: ["Fortnite", "Among Us", "Pokémon GO"],
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen bg-color-background text-neutral-950 dark:text-neutral-50">
      <section className="relative h-[calc(100vh-72px)] w-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full [&>div]:h-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
            }}
            plugins={[autoplayPlugin]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full [&>div:first-child]:h-full [&>div:first-child]:w-full [&>div:first-child]:overflow-hidden [&>div:last-child]:h-full [&>div:last-child]:ml-0! [&>div:last-child]:w-full">
              {backgroundImages.map((src, index) => (
                <CarouselItem
                  key={index}
                  className="h-full basis-full pl-0 min-w-full w-full flex-none"
                  style={{ width: "100%", minWidth: "100%", maxWidth: "100%" }}
                >
                  <div
                    className="relative h-[calc(100vh-72px)] w-full shrink-0"
                    style={{ width: "100%" }}
                  >
                    <Image
                      src={src}
                      alt={`Gaming background ${index + 1}`}
                      fill
                      className="object-cover blur-in-xs scale-110 brightness-50"
                      sizes="100vw"
                      unoptimized
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 from-neutral-950/80 via-neutral-950/70 to-neutral-950/80" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 sm:px-8 py-16 pointer-events-none">
          <div className="max-w-4xl mx-auto text-center space-y-6 pointer-events-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              A evolução dos games ao longo das{" "}
              <span className="relative inline-block">
                décadas
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-green-base" />
              </span>
            </h1>

            <p className="text-neutral-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Dos primeiros fliperamas até os mundos imersivos da atualidade,
              descubra como os jogos moldaram gerações e continuam transformando
              a forma de jogar e se conectar.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                asChild
                className="bg-primary-green-base hover:bg-primary-green-lighter-1 text-neutral-950 font-medium px-8 py-6 text-base rounded-md w-full sm:w-auto"
              >
                <Link href="/historia" className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  Explore a História
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-primary-green-base bg-transparent hover:bg-primary-green-base/10 text-white font-medium px-8 py-6 text-base rounded-md w-full sm:w-auto"
              >
                <Link href="/plataforma" className="flex items-center gap-2">
                  <Gamepad2 className="h-5 w-5" />
                  Nossa Plataforma
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-color-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-primary-green-base text-center mb-16">
            UMA VIAGEM PELA HISTÓRIA
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="space-y-6">
                <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-950 dark:text-white leading-tight">
                  O presente está repleto de jogos incríveis, mas nem sempre foi
                  assim.
                </p>
                <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                  Cada década trouxe inovações que revolucionaram a indústria e
                  definiram como jogamos hoje.
                </p>
              </div>
            </div>

            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  item={item}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-72px-330px)] px-8 py-16 bg-color-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-950 dark:text-white">
            Pronto para fazer parte desta história?
          </h1>

          <div className="space-y-2 text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-2xl mx-auto">
            <p>A história dos games continua sendo escrita a cada dia.</p>
            <p>
              E aqui, você é protagonista dela! Junte-se à nossa comunidade e
              descubra o que o futuro dos jogos reserva.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button
              asChild
              className="bg-primary-green-base hover:bg-primary-green-lighter-1 text-neutral-950 font-medium px-8 py-6 text-base rounded-md w-full sm:w-auto"
            >
              <Link href="/cadastro">Inscreva-se Agora</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-primary-green-base bg-transparent hover:bg-primary-green-base/10 text-neutral-950 dark:text-white font-medium px-8 py-6 text-base rounded-md w-full sm:w-auto"
            >
              <Link href="/plataforma">Explorar Plataforma</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
