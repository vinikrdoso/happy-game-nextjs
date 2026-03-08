"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Span } from "@/components/ui/Typography";

type FeedTab = "popular" | "seguindo";

const tabs: { id: FeedTab; label: string }[] = [
  { id: "popular", label: "Popular" },
  { id: "seguindo", label: "Seguindo" },
];

export function FeedHeader() {
  const [activeTab, setActiveTab] = React.useState<FeedTab>("popular");

  return (
    <header className="flex w-full items-center justify-between border-b border-border-primary bg-bg-primary px-4  pb-6 md:px-0">
      <nav
        className="flex items-center gap-6"
        role="tablist"
        aria-label="Filtrar feed"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "rounded px-1 py-1.5 outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              activeTab === tab.id
                ? "text-text-highlight-purple"
                : "text-text-primary hover:text-text-secondary",
            )}
          >
            <Span
              variant="text2"
              weight={activeTab === tab.id ? "bold" : "regular"}
            >
              {tab.label}
            </Span>
          </button>
        ))}
      </nav>
      <Button variant="default" size="medium" type="button">
        Criar post
      </Button>
    </header>
  );
}
