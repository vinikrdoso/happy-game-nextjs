import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-color-background text-color-foreground p-8">
      <h1 className="font-heading text-4xl mb-4">Home</h1>
      <div className="flex flex-wrap gap-4">
        <Button>Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="destructive">Click me</Button>
        <Button variant="ghost">Click me</Button>
        <Button variant="link">Click me</Button>
      </div>
    </div>
  );
}
