"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Wraps children and reveals them (fade + slide up) when they scroll into
 * view. Uses IntersectionObserver and respects prefers-reduced-motion.
 */
export function Reveal({
   children,
   as: Tag = "div",
   className = "",
   delay = 0,
}: {
   children: ReactNode;
   as?: ElementType;
   className?: string;
    delay?: number;
}) {
   const ref = useRef<HTMLElement | null>(null);
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const el = ref.current;
      if (!el) return;

      // If reduced motion is requested, show immediately.
      const reduce = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) {
         setVisible(true);
         return;
      }

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  setVisible(true);
                  observer.unobserve(entry.target);
               }
              });
            },
         { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

   return (
      <Tag
         ref={ref}
         className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
          style={{ transitionDelay: `${delay}ms` }}
       >
         {children}
       </Tag>
    );
}
