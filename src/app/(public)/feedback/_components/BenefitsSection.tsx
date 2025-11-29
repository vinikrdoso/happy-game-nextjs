"use client";

import {
  Users,
  Trophy,
  Calendar,
  Sword,
  Sparkles,
  Target,
  Medal,
  Swords,
  Gamepad2,
} from "lucide-react";
import type { BenefitCard } from "../types";
import type { Genre } from "../../cadastro/types";
import { fixedCards, cardsByGenre } from "../data/benefitCards";

interface BenefitsSectionProps {
  genres: Genre[];
}

// Map icon strings to Lucide components
const iconMap = {
  Users,
  Trophy,
  Calendar,
  Sword,
  Sparkles,
  Target,
  Medal,
  Swords,
  Gamepad2,
};

function BenefitCardComponent({ card, index }: { card: BenefitCard; index: number }) {
  const IconComponent = iconMap[card.icon as keyof typeof iconMap];

  return (
    <div
      className="
        // Layout
        group
        // Spacing
        p-6
        // Border & Background
        rounded-2xl
        bg-background-primary/50 dark:bg-background-primary/30
        border border-border
        backdrop-blur-sm
        // Hover Effects
        hover:border-primary/50
        hover:bg-background-primary dark:hover:bg-background-primary/50
        // Transitions
        transition-all duration-300
        // Shadow
        hover:shadow-xl hover:shadow-primary/10
        // Transform
        hover:-translate-y-1
        // Animation
        animate-fadeIn
      "
      style={{
        animationDelay: `${index * 0.1}s`,
        opacity: 0,
        animationFillMode: "forwards",
      }}
    >
      {/* Icon */}
      <div
        className="
          // Layout
          mb-4 inline-flex
          // Size
          h-14 w-14
          // Alignment
          items-center justify-center
          // Style
          rounded-xl
          bg-primary/10 dark:bg-primary/20
          // Transitions
          transition-all duration-300
          // Group Hover
          group-hover:bg-primary group-hover:scale-110
        "
      >
        {IconComponent && (
          <IconComponent
            className="
              // Size
              h-7 w-7
              // Color
              text-primary
              // Group Hover
              group-hover:text-primary-foreground
              // Transitions
              transition-colors duration-300
            "
          />
        )}
      </div>

      {/* Title */}
      <h3
        className="
          // Typography
          font-heading text-xl font-bold
          // Spacing
          mb-3
          // Color
          text-neutral-950 dark:text-neutral-50
        "
      >
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted leading-relaxed">{card.description}</p>
    </div>
  );
}

export function BenefitsSection({ genres }: BenefitsSectionProps) {
  // Combine fixed cards with genre-specific cards
  const allCards: BenefitCard[] = [...fixedCards];

  genres.forEach((genre) => {
    const genreCard = cardsByGenre[genre];
    if (genreCard) {
      allCards.push(genreCard);
    }
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <div
              className="
                // Layout
                mb-4 inline-block
                // Spacing
                px-4 py-2
                // Style
                rounded-full
                bg-primary/10 dark:bg-primary/20
                // Typography
                text-sm font-semibold uppercase tracking-wider
                text-primary
              "
            >
              Benefícios Exclusivos
            </div>

            <h2
              className="
                // Typography
                font-heading text-3xl md:text-4xl font-bold
                // Spacing
                mb-4
              "
            >
              O que te aguarda na comunidade
            </h2>

            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              Seja um dos pioneiros a construir a comunidade que vai preservar o passado,
              viver o presente e criar o futuro dos videogames.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCards.map((card, index) => (
              <BenefitCardComponent key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
