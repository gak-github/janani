import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const { skills } = profile;

export function Skills() {
   return (
         <Section
          id="skills"
          eyebrow="Toolkit"
          title="Skills & technologies"
          >
             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skills.map((group, i) => (
                   <Reveal
                  key={group.category}
                  delay={i * 70}
                  className="h-full"
                  >
                     <div
                     className="h-full rounded-2xl border border-black/10 bg-white/50 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 dark:border-white/10 dark:bg-white/5"
                     >
                        <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                           <span
                           className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-primary to-primary-soft"
                           />
                           {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                           {group.items.map((item) => (
                              <span
                              key={item}
                              className="rounded-lg border border-black/5 bg-black/[0.03] px-3 py-1.5 text-sm font-medium text-foreground/75 transition hover:border-primary/40 hover:text-foreground dark:border-white/5 dark:bg-white/5"
                              >
                                 {item}
                              </span>
                           ))}
                        </div>
                     </div>
                  </Reveal>
                 ))}
             </div>
           </Section>
       );
}
