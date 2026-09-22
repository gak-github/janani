import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const { experience } = profile;

export function Experience() {
   return (
         <Section id="experience" eyebrow="Career" title="Where I've worked">
            <div className="mx-auto max-w-3xl">
               <ol className="relative border-l border-black/10 pl-8 dark:border-white/10">
                  {experience.map((job, i) => (
                     <Reveal key={`${job.company}-${i}`} as="li" delay={i * 80}>
                        <div className="relative mb-10 last:mb-0">
                           {/* Node */}
                           <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-4 border-background bg-primary dark:border-[#05050a]" />

                           <div className="rounded-2xl border border-black/10 bg-white/50 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:bg-white/5">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                 <h3 className="text-lg font-semibold">{job.role}</h3>
                                 <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                                       job.current
                                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                            : "bg-black/5 text-foreground/60 dark:bg-white/10"
                                    }`}
                                 >
                                   {job.start} &ndash; {job.end}
                                </span>
                              </div>

                              <p className="mt-1 text-sm font-medium text-primary">
                                 {job.company}
                                  &middot; {job.location}
                              </p>

                              <p className="mt-3 text-sm text-foreground/70">
                                 {job.summary}
                              </p>

                              {job.highlights.length > 0 && (
                                  <ul className="mt-4 space-y-2">
                                     {job.highlights.map((h) => (
                                        <li
                                       key={h}
                                       className="flex items-start gap-2 text-sm text-foreground/75"
                                       >
                                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                          {h}
                                       </li>
                                    ))}
                                  </ul>
                              )}

                              <div className="mt-4 flex flex-wrap gap-2">
                                 {job.tech.map((t) => (
                                    <span
                                       key={t}
                                       className="rounded-md bg-black/5 px-2.5 py-1 font-mono text-xs text-foreground/70 dark:bg-white/10"
                                    >
                                        {t}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     </Reveal>
                  ))}
               </ol>
            </div>
          </Section>
      );
}
