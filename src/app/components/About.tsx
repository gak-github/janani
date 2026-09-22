import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { CodeIcon, MapPinIcon } from "./icons";

const { about, stats, facts, location, available } = profile;

export function About() {
   return (
         <section id="about" className="mx-auto max-w-6xl px-6 py-24">
             <Reveal>
                <div className="mb-14 text-center">
                   <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                   About me
                   </p>
                   <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    A little background
                   </h2>
                   <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-soft" />
                </div>
             </Reveal>

             <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Bio */}
                <Reveal>
                   <div className="space-y-4 text-base leading-relaxed text-foreground/75">
                      {about.map((p, i) => (
                         <p key={i}>{p}</p>
                      ))}

                      <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-foreground/60">
                         <span className="inline-flex items-center gap-2">
                            <MapPinIcon size={16} className="text-primary" />
                             {location}
                          </span>
                         <span className="inline-flex items-center gap-2">
                            <CodeIcon size={16} className="text-primary" />
                             {available}
                          </span>
                      </div>
                   </div>
                </Reveal>

                {/* Stats + facts */}
                <Reveal delay={120}>
                   <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid grid-cols-2 gap-4">
                         {stats.map((s) => (
                            <div
                           key={s.label}
                           className="rounded-2xl border border-black/10 bg-white/50 p-5 text-center transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/5"
                            >
                               <div className="bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-3xl font-extrabold text-transparent">
                                  {s.value}
                               </div>
                               <div className="mt-1 text-xs font-medium uppercase tracking-wide text-foreground/60">
                                  {s.label}
                               </div>
                            </div>
                         ))}
                      </div>

                      <div className="rounded-2xl border border-black/10 bg-white/50 p-5 dark:border-white/10 dark:bg-white/5">
                         <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-foreground/70">
                           Quick facts
                         </h3>
                         <ul className="space-y-2.5 text-sm text-foreground/70">
                            {facts.map((f) => (
                               <li
                              key={f}
                              className="flex items-start gap-2"
                               >
                                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    {f}
                                </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </Reveal>
             </div>
          </section>
       );
}
