"use client";

import { ThemeToggle } from "@/components/ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import { Menu } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Início" },
    { href: "/historia", label: "História" },
    { href: "/plataforma", label: "Plataforma" },
  ];

  return (
    <header
      className={cn(
        "bg-primary-green-darker-1 dark:bg-neutral-950 text-neutral-950 font-semibold dark:text-neutral-50",
        "dark:border-b dark:border-border",
        "w-full fixed z-50"
      )}
    >
      <div className="container mx-auto p-6 flex w-full justify-between items-center">
        <Link href={links[0].href}>
          <Logo variant="black" className="dark:hidden" />
          <Logo variant="white" className="hidden dark:block" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "px-3 py-3 rounded transition-colors font-medium",
                      isActive
                        ? "bg-primary-green-darker-2 dark:bg-primary-green-darker-2/30 text-primary-green-base"
                        : "hover:bg-primary-green-base dark:hover:bg-gray-500/15 dark:text-gray-300 text-gray-900 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button size="lg" variant="default">
            Inscreva-se
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-green-base bg-transparent hover:bg-background-primary"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-background dark:bg-background"
            >
              <nav className="flex flex-col items-center gap-6 mt-8">
                {links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "w-full text-center px-4 py-3 rounded transition-colors text-lg",
                        isActive
                          ? "bg-primary-green-darker-2 dark:bg-primary-green-darker-2 text-neutral-50"
                          : "hover:bg-background-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Button variant="default" className="w-full">
                  Inscreva-se
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
