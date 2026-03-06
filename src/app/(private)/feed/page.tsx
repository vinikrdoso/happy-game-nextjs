import { PostItem } from "../_components/PostItem";
import { H1 } from "@/components/ui/Typography";

export default function FeedPage() {
  return (
    <div className="p-4 md:p-8">
      <H1 className="text-text-primary">Feed</H1>
      <div className="mt-6 space-y-2">
        <PostItem
          title="Resident Evil requiem é o melhor jogo de 2026"
          authorName="Technomancer"
          dateAndComments="05 Mar - 13 Comentários"
          badges={["Dicas", "Opinião"]}
          href="/feed/1"
        />
        <PostItem
          variant="secondary"
          title="Novos jogos indie para acompanhar em 2026"
          authorName="GamerFan"
          dateAndComments="04 Mar - 8 Comentários"
          badges={["Dicas"]}
        />
      </div>
    </div>
  );
}
