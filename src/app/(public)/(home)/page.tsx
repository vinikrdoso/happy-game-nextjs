import { HeroSection } from "./_components/HeroSection";
import { CommunitiesSection } from "./_components/CommunitiesSection";
import { StatsSection } from "./_components/StatsSection";
import { CTASection } from "./_components/CTASection";
import Image from "next/image";
import { GameGodImage } from "./_components/GameGodImage";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CommunitiesSection />
      <StatsSection />
      <GameGodImage />
      <CTASection />
    </div>
  );
}
