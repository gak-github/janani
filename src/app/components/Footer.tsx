import { profile } from "@/data/profile";
import { SocialIcon } from "./icons";

const { name, socials } = profile;

export function Footer() {
   const year = new Date().getFullYear();
   return (
         <footer
          className="border-t border-black/10 bg-white/40 py-10 dark:border-white/10 dark:bg-white/5"
            >
               <div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row"
             >
                <p className="text-sm text-foreground/60">
                  &copy; {year} {name}. Built with Next.js &amp; Tailwind CSS.
                </p>
                <div className="flex items-center gap-3">
                   {socials.map((s) => (
                      <a
                     key={s.label}
                     href={s.href}
                     target={s.icon === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="text-foreground/50 transition hover:text-primary"
                        >
                           <SocialIcon icon={s.icon} size={18} />
                        </a>
                   ))}
                </div>
             </div>
          </footer>
      );
}
