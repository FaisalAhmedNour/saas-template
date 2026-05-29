"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Interface representing a single FAQ item structure.
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Structured static dataset containing the 5 FAQ items specified.
 */
const faqData: FAQItem[] = [
  {
    question: "Do I need to know React to use this template?",
    answer: "Basic React knowledge helps, but the template is structured cleanly so even beginners can follow along. Everything is commented.",
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Yes! Once you purchase the template, you can use it for unlimited personal and commercial projects.",
  },
  {
    question: "Does it include a backend?",
    answer: "The template is frontend-focused. It includes auth page UI and dashboard UI. You connect your own backend or use services like Supabase.",
  },
  {
    question: "Is dark mode included?",
    answer: "Yes, full dark mode is included and works out of the box using next-themes.",
  },
  {
    question: "Will I get future updates?",
    answer: "Yes, one-time purchase includes all future updates to this template.",
  },
];

/**
 * FAQ component renders a responsive Frequently Asked Questions section.
 *
 * Design and Layout Details:
 * - Anchored with section id="faq" and padded with py-24.
 * - Utilizes shadcn/ui Accordion component with beautiful modern transition animations.
 * - Fully responsive layout using mobile-first breakpoints.
 * - Adheres strictly to the Tailwind palette, dark-mode tokens, and typography guidelines.
 * - Large, bold, and centered main heading.
 *
 * @returns {React.ReactElement} The FAQ section element.
 */
export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full py-24 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/50"
    >
      {/* Outer layout container to constrain width and center children */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          {/* Subtle violet category badge tracking text */}
          <span className="text-xs sm:text-sm font-bold tracking-widest text-violet-600 dark:text-violet-400 uppercase select-none">
            Questions
          </span>
          
          {/* Main Title */}
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
            Frequently asked questions
          </h2>
          
          {/* Supporting Subheading */}
          <p className="mt-4 text-base sm:text-lg text-zinc-500 dark:text-zinc-400 text-balance leading-relaxed">
            Everything you need to know about the product. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion block */}
        <div className="w-full max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-zinc-200 dark:border-zinc-800/80 rounded-xl px-5 bg-zinc-50/50 dark:bg-zinc-900/20 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200"
              >
                {/* 
                  AccordionTrigger renders the question.
                  No underline class on hover to fit SaaS aesthetics, instead transitioning color.
                */}
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 py-5 hover:no-underline hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                  {item.question}
                </AccordionTrigger>
                
                {/* AccordionContent renders the answer */}
                <AccordionContent className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed pb-5 pr-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
