"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Layers,
  LayoutDashboard,
  BarChart2,
  Users,
  CreditCard,
  Settings,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

/**
 * Interface representing a navigation link item structure.
 */
interface NavLinkItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

/**
 * Static list of navigation links with associated Lucide icons.
 */
const navigationLinks: NavLinkItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Analytics", href: "/dashboard", icon: BarChart2 }, // links to dashboard for UI only
  { label: "Customers", href: "/dashboard", icon: Users }, // links to dashboard for UI only
  { label: "Billing", href: "/dashboard", icon: CreditCard }, // links to dashboard for UI only
  { label: "Settings", href: "/settings", icon: Settings },
];

/**
 * DashboardLayout wraps all dashboard-specific pages with a standard layout.
 * It provides a desktop side navigation bar, a mobile top navbar with a slide-in sidebar overlay,
 * and a primary main content container with page titles and action widgets.
 *
 * @param {Object} props - Properties object.
 * @param {React.ReactNode} props.children - Inner pages.
 * @returns {React.ReactElement} The dashboard layout shell.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // State to manage mobile sidebar overlay visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState<boolean>(false);

  // Derive page title based on routing path to update UI header text
  const getPageTitle = (): string => {
    if (pathname.startsWith("/settings")) return "Settings";
    if (pathname.startsWith("/dashboard")) return "Dashboard";
    return "SaaSify";
  };

  /**
   * Helper function to determine if a link is active.
   * "Dashboard" is active ONLY when pathname is exactly "/dashboard".
   * For other items, we check if pathname starts with the route (e.g. "/settings").
   * Dummy links that reuse "/dashboard" are only styled active if they are Dashboard itself,
   * preventing multiple links from appearing active simultaneously.
   *
   * @param {NavLinkItem} item - Navigation item definition.
   * @returns {boolean} Whether the item should be rendered in the active state.
   */
  const checkIsActive = (item: NavLinkItem): boolean => {
    if (item.label === "Dashboard") {
      return pathname === "/dashboard";
    }
    if (item.href === "/dashboard") {
      return false; // Dummy pages like Analytics/Customers/Billing won't style as active
    }
    return pathname.startsWith(item.href);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* 
        ========================================================================
        1. DESKTOP SIDEBAR (Fixed Left, Hidden on Mobile)
        ========================================================================
      */}
      <aside className="hidden md:flex flex-col w-64 fixed inset-y-0 left-0 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800/80 z-20">
        {/* Top Header: Logo */}
        <div className="h-16 flex items-center gap-2.5 px-6 border-b border-zinc-200 dark:border-zinc-800/80">
          <Layers className="h-6 w-6 text-violet-600 dark:text-violet-500 animate-pulse" />
          <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white select-none">
            SaaSify
          </span>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {navigationLinks.map((item, idx) => {
            const Icon = item.icon;
            const isActive = checkIsActive(item);

            return (
              <Link
                key={idx}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 group",
                  isActive
                    ? "bg-violet-600 text-white dark:bg-violet-500 dark:text-zinc-950 font-bold shadow-md shadow-violet-500/10"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform duration-200 group-hover:scale-105",
                    isActive
                      ? "text-white dark:text-zinc-950"
                      : "text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100"
                  )}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Panel: User Avatar Card */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Avatar initial circle */}
            <div className="h-10 w-10 shrink-0 rounded-full bg-violet-100 dark:bg-violet-900/50 border border-violet-200 dark:border-violet-800 flex items-center justify-center font-bold text-violet-700 dark:text-violet-300 text-sm select-none">
              JD
            </div>
            {/* User metadata */}
            <div className="flex flex-col min-w-0 text-left">
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                John Doe
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                john@example.com
              </span>
            </div>
          </div>

          {/* Logout Action Button */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg shrink-0 transition-colors"
          >
            <Link href="/" aria-label="Log out of application">
              <LogOut className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </aside>

      {/* 
        ========================================================================
        2. MOBILE OVERLAY SIDEBAR DRAWER (Hidden on Desktop)
        ========================================================================
      */}
      {/* Dark overlay backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Drawer Panel container */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800/80 p-5 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Drawer Header: Logo and Close Button */}
        <div className="flex items-center justify-between pb-5 border-b border-zinc-200 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-violet-600 dark:text-violet-500" />
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white select-none">
              SaaSify
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 rounded-full"
            aria-label="Close sidebar navigation menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 py-6 space-y-1.5 overflow-y-auto">
          {navigationLinks.map((item, idx) => {
            const Icon = item.icon;
            const isActive = checkIsActive(item);

            return (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 group",
                  isActive
                    ? "bg-violet-600 text-white dark:bg-violet-500 dark:text-zinc-950 font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom User Card */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-lg">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="h-9 w-9 shrink-0 rounded-full bg-violet-100 dark:bg-violet-900/50 border border-violet-200 dark:border-violet-800 flex items-center justify-center font-bold text-violet-700 dark:text-violet-300 text-xs">
              JD
            </div>
            <div className="flex flex-col min-w-0 text-left">
              <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                John Doe
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                john@example.com
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-zinc-500 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg shrink-0"
          >
            <Link href="/" aria-label="Log out of application">
              <LogOut className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </aside>

      {/* 
        ========================================================================
        3. MAIN CONTENT LAYER
        ========================================================================
      */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0 w-full">
        {/* Top Header bar */}
        <header className="sticky top-0 z-30 h-16 w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-white/95 dark:bg-zinc-900/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800/80 shadow-sm transition-colors duration-200">
          {/* Left Title Area (Or Hamburger on Mobile) */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger menu trigger */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Open sidebar navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 select-none">
              {getPageTitle()}
            </h1>
          </div>

          {/* Right Action Widgets */}
          <div className="flex items-center space-x-2.5">
            {/* Notifications Bell */}
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full relative"
              aria-label="View user notifications"
            >
              <Bell className="h-5 w-5" />
              {/* Notification ping badge */}
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600 dark:bg-violet-500"></span>
              </span>
            </Button>

            {/* Dark Mode Theme Toggle */}
            <ThemeToggle />

            {/* User Profile Avatar initials circle */}
            <div className="h-8 w-8 rounded-full bg-violet-100 dark:bg-violet-900/50 border border-violet-200 dark:border-violet-800 flex items-center justify-center font-bold text-violet-700 dark:text-violet-300 text-xs shadow-inner cursor-pointer hover:ring-2 hover:ring-violet-500/20 select-none transition-all duration-200">
              JD
            </div>
          </div>
        </header>

        {/* Scrollable page content */}
        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 md:p-8 lg:p-10">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
