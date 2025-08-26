import type { Route } from "../+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website Development" },
  ];
}

export default function Home() {
  console.log('Hello from home...');
  
  return <section>My App</section>
}
