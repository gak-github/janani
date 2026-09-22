"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
   const [open, setOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 20);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

   // Prevent body scroll when the mobile menu is open.
   useEffect(() => {
      document.body.style.overflow = open ? "hidden" : "";
      return () => {
         document.body.style.overflow = "";
      };
    }, [open]);

   return (
       <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
             scrolled
                ? "border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/40"
                : "border-b border-transparent bg-transparent"
             }`}
       >
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
              {/* Brand */}
             <a
                href="#home"
                className="group flex items-center gap-2 font-semibold tracking-tight"
             >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-soft text-sm font-bold text-white shadow-lg shadow-primary/30 transition group-hover:scale-105">
                   {profile.initials}
                </span>
                <span className="text-lg">{profile.name.split(" ")[0]}</span>
             </a>

             {/* Desktop links */}
             <div className="hidden items-center gap-1 md:flex">
                {NAV_LINKS.map((link) => (
                   <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-black/5 hover:text-foreground dark:text-foreground/80 dark:hover:bg-white/10 dark:hover:text-white"
                   >
                      {link.label}
                   </a>
                ))}
             </div>

             <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                   type="button"
                   onClick={() => setOpen((v) => !v)}
                   aria-label={open ? "Close menu" : "Open menu"}
                   aria-expanded={open}
                   className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 md:hidden dark:border-white/15 dark:bg-white/5"
                >
                   {open ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
                </button>
             </div>
          </nav>

          {/* Mobile menu */}
          {open && (
             <div className="md:hidden">
                <button
                   type="button"
                   aria-hidden
                   tabIndex={-1}
                   onClick={() => setOpen(false)}
                   className="fixed inset-0 top-16 z-40 h-[calc(100vh-4rem)] w-full cursor-default bg-black/40 backdrop-blur-sm"
                />
                <div className="absolute inset-x-0 top-16 z-50 border-b border-black/10 bg-white/95 px-6 py-4 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a12]/95">
                   <ul className="flex flex-col gap-1">
                      {NAV_LINKS.map((link) => (
                         <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-4 py-3 text-base font-medium text-foreground/80 transition hover:bg-black/5 dark:text-foreground/90 dark:hover:bg-white/10"
                         >
                            {link.label}
                         </a>
                      ))}
                   </ul>
                </div>
             </div>
          )}
       </header>
    );
}
