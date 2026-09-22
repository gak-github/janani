import { profile } from "@/data/profile";
import { ArrowDownIcon, DownloadIcon, SocialIcon } from "./icons";

const {
   name,
   role,
   tagline,
   initials,
   socials,
   resumeUrl,
   available,
} = profile;

const primarySocials = socials.filter((s) => s.icon !== "email");

export function Hero() {
   return (
         <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden pt-16"
           >
              {/* Animated gradient backdrop */}
              <div
            aria-hidden
            className="animate-gradient absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-[#0b1020] dark:via-[#05050a] dark:to-[#100a26]"
              />
              <div
            aria-hidden
            className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
              />
              <div
            aria-hidden
            className="absolute -right-24 bottom-24 -z-10 h-72 w-72 rounded-full bg-primary-soft/20 blur-3xl dark:bg-primary-soft/20"
              />

              <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.4fr_1fr]">
                 {/* Left: intro */}
                 <div>
                    <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-medium text-foreground/70 backdrop-blur dark:border-white/10 dark:bg-white/5">
                       <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                       </span>
                       {available}
                    </p>

                    <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
                    Hi, I'm{" "}
                       <span className="bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent">
                           {name.split(" ")[0]}
                       </span>
                       .
                    </h1>

                    <p className="mt-5 text-xl font-medium text-foreground/80 dark:text-foreground/90">
                       {role}
                    </p>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/70">
                       {tagline}
                    </p>
                    {/* Actions */}
                    <div className="mt-9 flex flex-wrap items-center gap-3">
                       <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-indigo-600"
                        >
                        Get in touch
                           <ArrowDownIcon size={16} />
                       </a>
                       <a
                      href="#projects"
                      className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary dark:border-white/15 dark:bg-white/5"
                        >
                        View my work
                       </a>
                       {resumeUrl && (
                           <a
                          href={resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-foreground/70 transition hover:text-primary"
                            >
                               <DownloadIcon size={16} />
                            Resume
                          </a>
                       )}
                    </div>

                    {/* Socials */}
                    <div className="mt-8 flex items-center gap-3">
                       {primarySocials.map((s) => (
                           <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 text-foreground/70 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/5"
                            >
                               <SocialIcon icon={s.icon} size={18} />
                          </a>
                       ))}
                    </div>
                 </div>

                 {/* Right: avatar (initials monogram) */}
                 <div className="flex justify-center lg:justify-end">
                    <div className="animate-float relative">
                       <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-primary to-primary-soft opacity-30 blur-2xl" />
                       <div className="flex h-56 w-56 items-center justify-center rounded-full border border-black/10 bg-gradient-to-br from-primary to-primary-soft text-7xl font-bold text-white shadow-2xl shadow-primary/30 sm:h-64 sm:w-64">
                          {initials}
                       </div>
                    </div>
                 </div>
              </div>

              {/* Scroll cue */}
              <a
            href="#about"
            aria-label="Scroll to about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 transition hover:text-primary"
              >
                 <ArrowDownIcon size={22} className="animate-bounce" />
              </a>
            </section>
         );
}
