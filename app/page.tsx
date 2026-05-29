import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Pricing from "@/components/landing/Pricing";

/**
 * Home page component renders the main landing page.
 * It imports the landing components and structures them inside the primary layout wrapper.
 *
 * @returns {React.ReactElement} The root landing page.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
}


