import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { GlobalSpotlight } from "@/components/layout/GlobalSpotlight";
import { BackToTop } from "@/components/ui/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { personalData } from "@/data/personal";
import { socialsData } from "@/data/socials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${personalData.name} | ${personalData.role}`,
    template: `%s | ${personalData.name}`,
  },
  description: personalData.heroSubtitle,
  metadataBase: new URL("https://dakshchaudhary.com"), // Update to your actual domain
  keywords: ["AI", "Machine Learning", "Software Engineer", "Python", "Generative AI", personalData.name, "Portfolio"],
  authors: [{ name: personalData.name }],
  creator: personalData.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dakshchaudhary.com",
    title: `${personalData.name} | ${personalData.role}`,
    description: personalData.heroSubtitle,
    siteName: `${personalData.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalData.name} | ${personalData.role}`,
    description: personalData.heroSubtitle,
    creator: "@dakshchaudhary",
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://dakshchaudhary.com/#person",
        name: personalData.name,
        jobTitle: personalData.role,
        description: personalData.heroSubtitle,
        url: "https://dakshchaudhary.com",
        sameAs: socialsData.filter(s => s.url.startsWith("http")).map(s => s.url),
      },
      {
        "@type": "WebSite",
        "@id": "https://dakshchaudhary.com/#website",
        url: "https://dakshchaudhary.com",
        name: `${personalData.name} Portfolio`,
        publisher: {
          "@id": "https://dakshchaudhary.com/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground relative transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalSpotlight />
          <Navbar />
          <main className="flex-1 flex flex-col pt-0">
            {children}
          </main>
          <BackToTop />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
