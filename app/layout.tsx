import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const monoLabel = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-label",
  display: "swap",
  weight: ["400", "500"],
});

const title = "Klavermail — Done-For-You Klaviyo Email Marketing for Ecommerce";
const description =
  "Klavermail builds, writes, designs and manages every Klaviyo flow and campaign for ecommerce brands — so email becomes 30%+ of revenue. Live in 30 days. Book a free audit call.";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Klaviyo agency",
    "email marketing agency",
    "ecommerce email marketing",
    "done for you email marketing",
    "Klaviyo flows",
    "Shopify email marketing",
    "retention marketing agency",
  ],
  openGraph: {
    type: "website",
    url: `https://${site.domain}`,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

/**
 * Structured data. Helps the agency show up properly in search results and
 * lets Google render the review stars.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description,
  url: `https://${site.domain}`,
  email: site.email,
  serviceType: "Email Marketing Agency",
  areaServed: "Worldwide",
  knowsAbout: ["Klaviyo", "Email marketing", "Ecommerce retention", "Marketing automation"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable} ${monoLabel.variable}`}>
      <body className="antialiased">
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lime focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
