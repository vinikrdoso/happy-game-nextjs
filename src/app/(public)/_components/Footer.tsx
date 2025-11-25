import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Instagram, Youtube, Gamepad2, Twitter } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Gamepad2, href: "#", label: "Discord" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const legalLinks = [
    { href: "#", label: "Termos de Uso" },
    { href: "#", label: "Política de Privacidade" },
    { href: "#", label: "Cookies" },
  ];

  return (
    <footer className="bg-primary-green-darker-1 dark:bg-neutral-black text-neutral-black dark:text-neutral-white py-8 px-4 h-[330px] flex flex-col justify-between">
      {/* Top Section - Logo and Social Media */}
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <Logo variant="black" size="lg" className="dark:hidden" />
        <Logo variant="white" size="lg" className="hidden dark:block" />

        {/* Social Media Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="bg-color-neutral-grey-1 dark:bg-color-neutral-grey-2 border-0 hover:bg-color-neutral-grey-2 dark:hover:bg-color-neutral-grey-1"
                aria-label={social.label}
                asChild
              >
                <Link href={social.href}>
                  <Icon className="h-5 w-5" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-color-border" />

      {/* Middle Section - Legal Links */}
      <nav className="flex justify-center items-center gap-6 flex-wrap">
        {legalLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm hover:text-primary-green-base dark:hover:text-primary-green-base transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-sm text-color-text-muted">
        © 2025 Happy Game. Todos os direitos reservados.
      </div>
    </footer>
  );
}
