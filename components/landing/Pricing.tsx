import * as React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

/**
 * Interface detailing the typescript structure for a pricing plan.
 */
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  featured: boolean;
  badge?: string;
}

/**
 * Structured dataset for the three pricing plans.
 * Organized sequentially: Starter, Pro (featured), and Enterprise.
 */
const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for side projects",
    features: [
      "1 Project",
      "Basic components",
      "Community support",
      "Deploy to Vercel",
      "Basic analytics",
    ],
    buttonText: "Get Started",
    buttonLink: "/register",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For growing products",
    features: [
      "Unlimited projects",
      "All components",
      "Priority support",
      "Custom domain",
      "Advanced analytics",
      "Remove branding",
    ],
    buttonText: "Get Started",
    buttonLink: "/register",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "$49",
    description: "For serious businesses",
    features: [
      "Everything in Pro",
      "White label",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Team management",
    ],
    buttonText: "Contact Sales",
    buttonLink: "/register",
    featured: false,
  },
];

/**
 * Pricing component renders the subscription tier pricing section for the landing page.
 *
 * Design Guidelines Met:
 * - Centered vertical layout with category label, title, and subtitle.
 * - Responsive 3-card structure (desktop row, mobile stacked) with a scale-105 hover/focus states.
 * - Highlights the middle plan (Pro) with a 'Most Popular' badge, violet border accent, and scale boost.
 * - Fully conforms to the Tailwind dark: theme (light: zinc-900 / dark: zinc-100 text).
 * - Utilizes standard Lucide check icons in green to highlight value features.
 *
 * @returns {React.ReactElement} The rendered pricing section component.
 */
export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/50"
    >
      {/* Centered layout wrapper to constrain width and center content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header with structured metadata labels */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          {/* Small uppercase category label */}
          <span className="text-xs sm:text-sm font-bold tracking-widest text-zinc-500 dark:text-zinc-400 uppercase select-none">
            PRICING
          </span>
          
          {/* Section Main Title */}
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Simple, transparent pricing
          </h2>
          
          {/* Section Subtitle */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-zinc-500 dark:text-zinc-400 text-balance leading-relaxed">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards Grid: 3 columns on desktop, stacked on mobile */}
        <div className="mt-16 w-full grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {pricingPlans.map((plan, idx) => {
            return (
              <div
                key={idx}
                className={`relative flex flex-col justify-between p-8 rounded-2xl bg-white dark:bg-zinc-900/40 border transition-all duration-300 ease-in-out ${
                  plan.featured
                    ? "border-2 border-violet-600 dark:border-violet-500 shadow-xl shadow-violet-500/5 md:scale-105 z-10 hover:shadow-violet-500/10"
                    : "border-zinc-200 dark:border-zinc-800/80 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
                }`}
              >
                {/* 
                  Featured badge at top of the highlighted card:
                  Uses absolute position relative to the card container.
                */}
                {plan.featured && plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold bg-violet-600 dark:bg-violet-500 text-white shadow-sm uppercase tracking-wider select-none">
                    {plan.badge}
                  </span>
                )}

                {/* Card Title & Content Wrapper */}
                <div>
                  {/* Plan Name */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    {plan.name}
                  </h3>

                  {/* Plan Description */}
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {plan.description}
                  </p>

                  {/* Price display with base alignment */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      / month
                    </span>
                  </div>

                  {/* Features list: Uses standard vertical flex structure with green Check icons */}
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-3">
                        {/* Green checkmark icon wrapper */}
                        <div className="flex-shrink-0 mt-0.5">
                          <Check className="h-5 w-5 text-emerald-500 dark:text-emerald-400 stroke-[3]" aria-hidden="true" />
                        </div>
                        <span className="text-sm text-zinc-600 dark:text-zinc-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button: Placed at the bottom using flex column alignment */}
                <div className="mt-8">
                  <Link
                    href={plan.buttonLink}
                    className={`w-full ${
                      plan.featured
                        ? "inline-flex items-center justify-center h-11 px-4 rounded-lg text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white dark:bg-violet-500 dark:hover:bg-violet-600 shadow-md shadow-violet-500/20 dark:shadow-violet-500/10 transition-all duration-200"
                        : "inline-flex items-center justify-center h-11 px-4 rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-200"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
