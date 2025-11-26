"use client";

import React from "react";
import { type LucideIcon } from "lucide-react";

export interface TimelineItemData {
  period: string;
  title: string;
  description: string;
  games: string[];
  icon: LucideIcon;
}

interface TimelineItemProps {
  item: TimelineItemData;
  isLast?: boolean;
}

export function TimelineItem({ item, isLast = false }: TimelineItemProps) {
  const { period, title, description, games, icon: Icon } = item;

  const formatDescription = (text: string, gameList: string[]) => {
    let processedText = text.replace(/\*\*/g, "");

    const gamePattern = new RegExp(`(${gameList.join("|")})`, "gi");

    const parts = processedText.split(gamePattern);

    return parts.map((part, index) => {
      const isGame = gameList.some(
        (game) => part.toLowerCase() === game.toLowerCase()
      );
      if (isGame) {
        return (
          <strong
            key={index}
            className="text-neutral-950 dark:text-white font-semibold"
          >
            {part}
          </strong>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="group relative flex gap-8 pb-16">
      <div className="relative flex flex-col items-center min-w-16">
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700 group-hover:border-primary-green-base transition-colors">
          <Icon className="h-8 w-8 text-neutral-950 dark:text-white" />
        </div>

        {!isLast && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700 group-hover:bg-primary-green-base transition-colors" />
        )}
      </div>

      <div className="flex-1 pt-2">
        <div className="text-primary-green-base text-sm font-medium mb-2">
          {period}
        </div>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-neutral-950 dark:text-white mb-4">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-base leading-relaxed">
          {formatDescription(description, games)}
        </p>
      </div>
    </div>
  );
}
