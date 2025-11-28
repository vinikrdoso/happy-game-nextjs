import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const communities = [
  {
    image: "/img/game-together.png",
    category: "Inovação",
    title: "Um espaço para todos os gamers",
    description:
      "Compartilhe experiências, descubra novas histórias e faça parte de algo maior.",
    link: "/plataforma",
    linkText: "Explorar comunidade",
  },
  {
    image: "/img/fight.png",
    category: "Comunidade",
    title: "Descubra e compartilhe",
    description:
      "Participe de discussões, analise e deixe sua marca na história gamer",
    link: "/plataforma",
    linkText: "Explorar",
  },
  {
    image: "/img/setup.png",
    category: "Diversão",
    title: "Entre para o jogo",
    description: "Receba novidades e atualizações sobre a plataforma.",
    link: "/cadastro",
    linkText: "Inscreva-se",
  },
  {
    image: "/img/povos-originarios.png",
    category: "Diversidade",
    title: "Comunidade brasileira",
    description:
      "Das raízes ancestrais ao pixel art. Conecte-se com gamers que celebram a diversidade cultural brasileira e honram todas as suas histórias.",
    link: "/plataforma",
    linkText: "Começar jornada",
  },
];

export function CommunitiesSection() {
  return (
    <section className="py-20 dark:bg-[linear-gradient(135deg,#1A1A1A_0%,#252525_50%,#1A1A1A_100%)] bg:background-tertiary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
            Descubra sua comunidade gamer
          </h2>
          <p className="text-lg dark:text-neutral-400 text-neutral-600">
            Nostálgico dos clássicos? Competitivo nas ranked? Ou só curte jogar?
            Aqui todo gamer tem seu espaço para brilhar e se conectar.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communities.map((community, index) => (
            <Card
              key={index}
              className="h-full flex flex-col  cursor-pointer overflow-hidden border-neutral-700 hover:border-primary-green-base hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-primary-green-base/20"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={community.image}
                  alt={community.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary-green-base mb-2 font-semibold">
                  {community.category}
                </div>
                <CardTitle className="text-xl">{community.title}</CardTitle>
              </CardHeader>
              <CardContent className="grow">
                <CardDescription className="text-neutral-400">
                  {community.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={community.link}
                  className="text-primary-green-base hover:text-primary-green-darker-1 transition-colors font-semibold group"
                >
                  {community.linkText}{" "}
                  <span className="inline-block group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
