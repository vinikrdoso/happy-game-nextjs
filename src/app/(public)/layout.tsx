import Header from "@/app/(public)/_components/Header";
import Footer from "@/app/(public)/_components/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full flex-1 h-[calc(100vh-72px-330px)]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
