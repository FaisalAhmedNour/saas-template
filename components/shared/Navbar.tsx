"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Navbar component renders a fully responsive, sticky, and dark-mode compatible navigation bar.
 *
 * Desktop Features:
 * - Left logo linked to home route.
 * - Center anchor navigation links (#features, #pricing, #faq).
 * - Right action buttons ("Login" and "Get Started") built with shadcn/ui.
 *
 * Mobile Features:
 * - Hamburger icon which toggles a vertical navigation and action menu dropdown.
 * - Auto-close behavior when clicking any navigation link or page action.
 *
 * Scroll Behavior:
 * - Transitions background colors and applies a shadow once scroll position exceeds 10 pixels.
 *
 * @returns {React.ReactElement} The responsive Navbar component.
 */
export default function Navbar() {
  // State to manage whether the mobile dropdown menu is open
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  
  // State to track scroll position to change background styling dynamically
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);

  // Monitor scroll behavior to toggle the backdrop and shadow design after 10px scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Invoke once initially to set the correct state on component mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the mobile menu helper to avoid code duplication
  const closeMenu = () => setIsMenuOpen(false);

  // List of center navigation links with their anchor IDs
  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/95 shadow-sm border-b border-zinc-200 dark:bg-zinc-900/95 dark:border-zinc-800"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight"
            >
              SaaSify
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side: Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              asChild
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Layout: Hamburger Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800 focus:outline-none transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout: Dropdown Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-b border-zinc-200 dark:bg-zinc-900 dark:border-zinc-800 shadow-lg">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Stacked Buttons */}
            <div className="pt-4 pb-2 border-t border-zinc-200 dark:border-zinc-800 space-y-2 px-3">
              <Button
                variant="outline"
                asChild
                onClick={closeMenu}
                className="w-full justify-center border-zinc-200 hover:bg-zinc-100 text-zinc-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                onClick={closeMenu}
                className="w-full justify-center bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
