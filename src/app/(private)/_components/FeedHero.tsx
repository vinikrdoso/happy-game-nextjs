import { H1, Paragraph } from "@/components/ui/Typography";

export function FeedHero() {
  return (
    <section className="border-b border-border-primary bg-bg-primary px-4 py-8 md:py-10">
      <div className="mx-auto max-w-4xl">
        <H1 className="text-text-primary">Feed</H1>
        <Paragraph className="mt-1 text-text-secondary">
          Suas atualizações e o que está acontecendo na comunidade.
        </Paragraph>
      </div>
    </section>
  );
}
