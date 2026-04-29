import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Agentic Coding Boilerplate",
    template: "%s | Agentic Coding Boilerplate",
  },
  description:
    "Complete agentic coding boilerplate with authentication, database, AI integration, and modern tooling - perfect for building AI-powered applications and autonomous agents",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "AI",
    "OpenRouter",
    "Boilerplate",
    "Authentication",
    "PostgreSQL",
  ],
  authors: [{ name: "Agentic Coding Boilerplate" }],
  creator: "Agentic Coding Boilerplate",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Agentic Coding Boilerplate",
    title: "Agentic Coding Boilerplate",
    description:
      "Complete agentic coding boilerplate with authentication, database, AI integration, and modern tooling",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Coding Boilerplate",
    description:
      "Complete agentic coding boilerplate with authentication, database, AI integration, and modern tooling",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Agentic Coding Boilerplate",
  description:
    "Complete agentic coding boilerplate with authentication, database, AI integration, and modern tooling",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Agentic Coding Boilerplate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased min-h-screen flex flex-col grid-bg`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          <main id="main-content" className="flex-1 relative">{children}</main>
          <SiteFooter />
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
