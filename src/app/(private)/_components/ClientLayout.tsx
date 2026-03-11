"use client";

import { PrivateAside } from "@privateComponents/PrivateAside";
import { HeroBanner } from "@privateComponents/HeroBanner";
import { usePathname } from "next/navigation";

export default function ClientPrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isFeedPage = usePathname() === "/feed";

  return (
    <>
      {isFeedPage && <HeroBanner />}
      <div className="mx-auto flex w-full flex-1 gap-10 pt-10 pb-[80px] px-4 md:px-[72px] ">
        <main className="flex-1 md:border-r border-border-primary md:pr-10">
          {children}
        </main>
        <PrivateAside />
      </div>
    </>
  );
}
