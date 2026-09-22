"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

const STORAGE_KEY = "theme";

/**
 * Toggles class-based dark mode on <html>. The initial state is set by an
 * inline script in layout.tsx (before first paint) to avoid a flash; this
 * component only syncs the button label after mount.
 */
export function ThemeToggle() {
   const [theme, setTheme] = useState<"light" | "dark">("light");

   useEffect(() => {
      const root = document.documentElement;
      setTheme(root.classList.contains("dark") ? "dark" : "light");
   }, []);

   const toggle = () => {
      const root = document.documentElement;
      const next = theme === "dark" ? "light" : "dark";
      root.classList.toggle("dark", next === "dark");
      try {
         localStorage.setItem(STORAGE_KEY, next);
       } catch {
         /* ignore storage errors (e.g. private mode) */
       }
      setTheme(next);
   };

   return (
       <button
         type="button"
         onClick={toggle}
         aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-foreground transition hover:scale-105 hover:border-primary dark:border-white/15 dark:bg-white/5"
       >
          {theme === "dark" ? (
            <SunIcon size={18} />
           ) : (
            <MoonIcon size={18} />
           )}
       </button>
     );
}
