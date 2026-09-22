import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { ExternalLinkIcon, CodeIcon } from "./icons";

const { projects } = profile;

export function Projects() {
   return (
        <Section
          id="projects"
          eyebrow="Selected work"
          title="Projects I'm proud of"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 100} className="h-full">
                <article
                  className={`group flex h-full flex-col rounded-2xl border bg-white/50 p-6 transition hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10 dark:bg-white/5 ${
                    p.featured
                       ? "border-primary/30 dark:border-primary/30"
                       : "border-black/10 dark:border-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                     <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                           <CodeIcon size={16} />
                        </span>
                         {p.name}
                     </h3>
                    {p.featured && (
                        <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          Featured
                        </span>
                    )}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/70">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                     {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-black/5 px-2.5 py-1 font-mono text-xs text-foreground/70 dark:bg-white/10"
                        >
                          {t}
                        </span>
                     ))}
                  </div>

                  {(p.live || p.repo) && (
                      <div className="mt-5 flex gap-4 border-t border-black/5 pt-4 dark:border-white/5">
                        {p.live && (
                            <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition hover:text-primary"
                            >
                               <ExternalLinkIcon size={15} />
                               Live demo
                            </a>
                        )}
                        {p.repo && (
                            <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition hover:text-primary"
                            >
                               <CodeIcon size={15} />
                               Source
                            </a>
                        )}
                      </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Section>
   );
}
