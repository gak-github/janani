import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

const { name, email, tagline, location } = profile;

export const metadata: Metadata = {
     title: `${name} · Software Engineer`,
     description:
      `${name} — ${tagline} Based in ${location}.`,
   openGraph: {
      title: `${name} · Software Engineer`,
      description: `${tagline} Based in ${location}.`,
      type: "website",
    },
    alternates: {
      canonical: "/",
     },
};

// Runs before first paint to apply the saved theme and prevent a flash.
const themeInit = `
(function () {
   try {
      var t = localStorage.getItem('theme');
      var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var dark = t ? t === 'dark' : d;
      document.documentElement.classList.toggle('dark', dark);
   } catch (e) {}
})();
`;

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
   return (
      <html
        lang="en"
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
         >
          <body
            suppressHydrationWarning
            className="min-h-screen antialiased"
             >
                <script dangerouslySetInnerHTML={{ __html: themeInit }} />
                {children}
             </body>
         </html>
      );
}
