import { ThemeToggle } from "@/_components/ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-primary-green-base p-4 h-[72px]">
      <span>logo</span>
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/acervo">Acervo</Link>
        </li>
        <li>
          <Link href="/plataforma">Plataforma</Link>
        </li>
        <li>
          <Link href="/login">Cadastro</Link>
        </li>
        <ThemeToggle />
      </ul>
    </header>
  );
}
