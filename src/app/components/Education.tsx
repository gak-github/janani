import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const { education } = profile;

export function Education() {
   return (
         <Section id="education" eyebrow="Learning" title="Education & training">
             <div className="grid gap-6 sm:grid-cols-2">
                {education.map((e, i) => (
                   <Reveal key={`${e.school}-${i}`} delay={i * 80}>
                      <article className="h-full rounded-2xl border border-black/10 bg-white/50 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:bg-white/5">
                         <div className="flex items-start justify-between gap-3">
                            <h3 className="text-lg font-semibold">{e.degree}</h3>
                            <span className="whitespace-nowrap rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-foreground/60 dark:bg-white/10">
                                {e.start}&ndash;{e.end}
                            </span>
                         </div>
                         <p className="mt-1 text-sm font-medium text-primary">
                            {e.school} &middot; {e.location}
                         </p>
                         {e.details && (
                            <p className="mt-3 text-sm text-foreground/70">
                               {e.details}
                            </p>
                         )}
                      </article>
                   </Reveal>
                ))}
             </div>
           </Section>
       );
}
