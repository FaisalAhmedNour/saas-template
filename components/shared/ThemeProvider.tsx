"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

/**
 * ThemeProvider wraps the NextThemesProvider from next-themes to facilitate
 * reactive light/dark theme switching inside standard React/Next.js App Router context.
 *
 * @param {ThemeProviderProps} props - Properties including React children and next-themes configurations.
 * @returns {React.ReactElement} The theme provider context wrapper.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Theme context needs to be initialized on client-side and propagated down the virtual tree.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
