import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Standard section with an eyebrow + heading, centered and constrained. */
export function Section({
   id,
   eyebrow,
   title,
   children,
   className = "",
}: {
    id: string;
    eyebrow?: string;
    title: string;
    children: ReactNode;
    className?: string;
}) {
   return (
        <section id={id} className={`mx-auto max-w-6xl px-6 py-24 ${className}`.trim()}>
          <Reveal>
            <div className="mb-14 text-center">
               {eyebrow && (
                   <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      {eyebrow}
                    </p>
                 )}
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                   {title}
                </h2>
                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-soft" />
               </div>
            </Reveal>
            {children}
        </section>
    );
}
