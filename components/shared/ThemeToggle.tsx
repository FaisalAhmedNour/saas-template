"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

/**
 * ThemeToggle component provides an interactive button that toggles between
 * light and dark themes using next-themes.
 *
 * It fulfills requirements:
 * - Shows Sun icon when theme is dark (clicking switches to light)
 * - Shows Moon icon when theme is light (clicking switches to dark)
 * - Features a smooth icon scale/rotation transition
 * - Uses a ghost/icon button layout
 *
 * Avoids hydration mismatch errors by deferring rendering until mounted on client.
 *
 * @returns {React.ReactElement | null} The theme toggle button, or a placeholder spacer if not mounted.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState<boolean>(false);

  // Hook to set mounted state on client-side loading to prevent hydration mismatches
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a blank spacer matching the button size to prevent layout shifting
    return <div className="w-9 h-9" />;
  }

  // Toggles the theme to light if dark, or dark if light
  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggleTheme}
      className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full relative"
      aria-label="Toggle theme"
    >
      {/* 
        Sun icon:
        - Visible (scale-100, rotate-0) when theme is dark
        - Hidden (scale-0, rotate-90) when theme is light
      */}
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
      
      {/* 
        Moon icon:
        - Visible (scale-100, rotate-0) when theme is light
        - Hidden (scale-0, -rotate-90) when theme is dark
      */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:rotate-90 dark:scale-0" />
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
