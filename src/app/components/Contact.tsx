import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { SocialIcon } from "./icons";

const { email, available, socials } = profile;
const iconSocials = socials.filter((s) => s.icon !== "email");

export function Contact() {
   return (
         <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
              <Reveal>
                 <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-primary/10 to-primary-soft/10 px-6 py-16 text-center dark:border-white/10">
                    {/* glow */}
                    <div
                     aria-hidden
                     className="absolute -top-16 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
                      />

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Get in touch
                    </p>
                    <h2
                    className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl"
                      >
                        Let's build something great together
                      </h2>
                    <p className="mx-auto mt-4 max-w-xl text-foreground/70">
                        {available} — I'm usually quick to respond, so feel free
                       to reach me through any of the channels below.
                      </p>

                      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                         <a
                        href={`mailto:${email}`}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-indigo-600"
                         >
                            <SocialIcon icon="email" size={16} />
                          Email me
                         </a>

                         <div className="flex items-center gap-3">
                            {iconSocials.map((s) => (
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
                 </div>
              </Reveal>
           </section>
        );
}
