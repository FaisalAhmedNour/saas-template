"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Custom SVG component representing the GitHub logo.
 * Modeled after the standard Lucide SVG vector definition.
 */
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Custom SVG component representing the Twitter/X logo.
 * Modeled after the standard Lucide SVG vector definition.
 */
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

/**
 * Custom SVG component representing the LinkedIn logo.
 * Modeled after the standard Lucide SVG vector definition.
 */
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

/**
 * Interface representing a column group of navigation links in the footer.
 */
interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

/**
 * Navigation lists for the product, resources, and legal columns.
 */
const footerNavigation: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Support", href: "/support" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

/**
 * Footer component renders a responsive global page footer.
 *
 * Design and Layout Details:
 * - Employs a dark background (zinc-900 in light mode, zinc-950 in dark mode) and white/light text to follow dark mode themes.
 * - Responsive Grid Layout: 4 columns on desktop, 2 on tablet, 1 on mobile.
 * - Left column contains the SaaS branding/tagline.
 * - Middle columns hold categorized link sections.
 * - A divider separates the grid from the footer bottom bar.
 * - Bottom bar aligns copyright information on the left and interactive Lucide social icons on the right.
 *
 * @returns {React.ReactElement} The shared footer component.
 */
export default function Footer() {
  const pathname = usePathname();

  // Hide the footer on authentication, dashboard, and settings routes to allow full-screen pages
  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/settings")
  ) {
    return null;
  }

  return (
    <footer className="w-full bg-zinc-900 dark:bg-zinc-950 text-zinc-300 dark:text-zinc-400 border-t border-zinc-800 dark:border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main 4-column layout: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-tight hover:text-zinc-100 transition-colors"
            >
              SaaSify
            </Link>
            <p className="text-sm text-zinc-400 dark:text-zinc-500 leading-relaxed max-w-xs">
              Build faster. Ship smarter. The ultimate Next.js foundation for your next SaaS venture.
            </p>
          </div>

          {/* Columns 2-4: Product, Resources, and Legal links */}
          {footerNavigation.map((group, groupIdx) => (
            <div key={groupIdx} className="flex flex-col space-y-4">
              <h3 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider select-none">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Horizontal Divider */}
        <hr className="my-12 border-zinc-800 dark:border-zinc-900" />

        {/* Bottom Bar: Copyright on left, Social Icons on right */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 text-center sm:text-left select-none">
            &copy; 2024 SaaSify. All rights reserved.
          </p>

          {/* Social Links Row */}
          <div className="flex items-center space-x-5">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 dark:hover:bg-zinc-900/50 transition-all duration-200"
              aria-label="Twitter profile"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 dark:hover:bg-zinc-900/50 transition-all duration-200"
              aria-label="GitHub profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/50 dark:hover:bg-zinc-900/50 transition-all duration-200"
              aria-label="LinkedIn profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
