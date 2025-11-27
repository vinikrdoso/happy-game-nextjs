"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  const handleLogout = () => {
    signOut({ callbackUrl: "/login" });
  };

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="border-primary-green-base bg-transparent hover:bg-primary-green-base/10 text-neutral-950 dark:text-white"
    >
      <LogOut className="h-4 w-4" />
      Sair
    </Button>
  );
}

