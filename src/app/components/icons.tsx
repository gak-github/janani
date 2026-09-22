import type { SVGProps } from "react";
import type { SocialKind } from "@/data/profile";

/* ----------------------------------------------------------------------- */
/*  Shared SVG base                                                           */
/* ----------------------------------------------------------------------- */
type IconProps = SVGProps<SVGSVGElement> & {
   size?: number;
};

function Base({
   size = 24,
   children,
   ...props
}: IconProps & { children: React.ReactNode }) {
   return (
      <svg
         width={size}
         height={size}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={1.8}
         strokeLinecap="round"
         strokeLinejoin="round"
         aria-hidden="true"
         {...props}
      >
        {children}
      </svg>
   );
}

/* ----------------------------------------------------------------------- */
/*  UI icons                                                                  */
/* ----------------------------------------------------------------------- */
export const SunIcon = (p: IconProps) => (
   <Base {...p}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
   </Base>
);

export const MoonIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
   </Base>
);

export const MenuIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M4 6h16M4 12h16M4 18h16" />
   </Base>
);

export const CloseIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M18 6 6 18M6 6l12 12" />
   </Base>
);

export const ArrowDownIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
   </Base>
);

export const MapPinIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
   </Base>
);

export const ExternalLinkIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6M10 14 21 3" />
   </Base>
);

export const DownloadIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
   </Base>
);

export const MailIcon = (p: IconProps) => (
   <Base {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
   </Base>
);

export const CodeIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
   </Base>
);

/* ----------------------------------------------------------------------- */
/*  Social icons                                                              */
/* ----------------------------------------------------------------------- */
const LinkedInIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
   </Base>
);

const GitHubIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
   </Base>
);

const GlobeIcon = (p: IconProps) => (
   <Base {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
   </Base>
);

const TwitterIcon = (p: IconProps) => (
   <Base {...p}>
      <path d="M4 4l7 9M4 20l7-9M20 4l-7 9M20 20l-7-9" />
   </Base>
);

const socialIconMap: Record<
   SocialKind,
   (p: IconProps) => React.ReactElement
> = {
   github: GitHubIcon,
   linkedin: LinkedInIcon,
   email: MailIcon,
   twitter: TwitterIcon,
   globe: GlobeIcon,
};

export function SocialIcon({
   icon,
   ...props
}: IconProps & { icon: SocialKind }) {
   const Cmp = socialIconMap[icon] ?? GlobeIcon;
   return <Cmp {...props} />;
}
