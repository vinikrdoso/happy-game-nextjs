import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { PrivateNavbar } from "@privateComponents/PrivateNavbar";
import ClientPrivateLayout from "@privateComponents/ClientLayout";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <PrivateNavbar session={session} />

      <ClientPrivateLayout>{children}</ClientPrivateLayout>
    </div>
  );
}
