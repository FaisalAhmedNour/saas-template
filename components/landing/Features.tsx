import * as React from "react";
import { Zap, Palette, Moon, Smartphone, Lock, BarChart2, LucideIcon } from "lucide-react";

/**
 * Interface defining the structure of each feature card.
 */
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * Structured static dataset containing details for the 6 core features.
 * Arranged logically to highlight technical, visual, and operational readiness.
 */
const featuresData: FeatureItem[] = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Next.js 14 with App Router for maximum performance out of the box.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Pre-built components using shadcn/ui and Tailwind CSS. Customize everything easily.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description: "Full dark mode support included. Looks great in any lighting condition.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Pixel-perfect on every screen size. Mobile-first design throughout.",
  },
  {
    icon: Lock,
    title: "Auth Ready",
    description: "Login and register pages pre-built. Just connect your auth provider of choice.",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description: "Beautiful dashboard with charts and stats. Ready to connect to your data.",
  },
];

/**
 * Features component renders a responsive showcase section highlighting the SaaS project capabilities.
 * 
 * Design Details:
 * - Employs a 3-column desktop / 2-column tablet / 1-column mobile grid of cards.
 * - Each card uses a smooth transition, scaling up and deepening shadows on hover.
 * - Conforms strictly to project branding rules: using violet accent colors and zinc color tokens.
 * - Fully compatible with light and dark modes out of the box.
 * 
 * @returns {React.ReactElement} The features section element.
 */
export default function Features() {
  return (
    <section
      id="features"
      className="relative py-24 overflow-hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/50"
    >
      {/* Container wrapper ensuring page margins align correctly with the layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Small uppercase category label */}
          <span className="text-xs sm:text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase select-none">
            Features
          </span>
          
          {/* Main feature section header */}
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Everything you need to launch
          </h2>
          
          {/* Subheading text providing high-level SaaS template value proposition */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 text-balance leading-relaxed">
            Stop wasting time on boilerplate. Start with everything ready.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-start p-6 sm:p-8 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/60 dark:border-zinc-800/40 hover:border-violet-500/20 dark:hover:border-violet-400/20 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 dark:hover:shadow-black/40 hover:scale-105 transition-all duration-300 ease-in-out cursor-default"
              >
                {/* 
                  Icon Container:
                  Features a colored square box using the primary violet color palette.
                  Slight background opacity in dark mode matches modern SaaS aesthetics.
                */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 stroke-[2]" aria-hidden="true" />
                </div>

                {/* Feature Title */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="mt-3 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
