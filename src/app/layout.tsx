import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Geist, Geist_Mono } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { site } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], preload: false });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: true,
});

const title = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s — ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title,
    description: site.description,
    images: [{ url: "/hero/hero-bg-end.jpg", width: 1280, height: 720, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#eae3d6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      // Browser extensions add attributes to <html>/<body> before hydration; don't report those.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-dvh" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-hunter focus:px-4 focus:py-3 focus:text-cream-2"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
