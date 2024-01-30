import { Button } from "@repo/ui/components/ui/button";

export default function Page() {
  return (
    <main>   <h1 className="text-3xl font-bold underline text-cyan-600">
      Simples
    </h1>
      <Button variant="outline">Button</Button>
      <Button>Click me</Button>
    </main>
  );
}
