import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ThemeProvider } from "@/components/ThemeProvider";
import { business } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const viewport: Viewport = {
  themeColor: "#0EA5E9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export const metadata: Metadata = {
  metadataBase: new URL("https://friseur-legende.de"),
  title: {
    default: `${business.name} | Premium Barbershop Nürnberg`,
    template: `%s | ${business.name}`
  },
  description: business.description,
  keywords: [
    "Friseur Nürnberg",
    "Barbershop Nürnberg",
    "Herrenfriseur Nürnberg",
    "Bartpflege Nürnberg",
    "Fade Haarschnitt",
    "Premium Barbershop",
    "Herren Styling",
    "Friseur Legende"
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://friseur-legende.de",
    siteName: business.name,
    title: `${business.name} | Premium Barbershop Nürnberg`,
    description: business.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: business.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Premium Barbershop Nürnberg`,
    description: business.description,
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://friseur-legende.de"
  },
  verification: {
    // Add verification codes when available
    // google: "verification-code",
  }
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: business.name,
  description: business.description,
  url: "https://friseur-legende.de",
  telephone: business.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.address.city,
    addressCountry: "DE"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.4521,
    longitude: 11.0767
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00"
    }
  ],
  priceRange: "€€",
  image: "https://friseur-legende.de/og-image.jpg",
  sameAs: [
    business.socialLinks.instagram,
    business.socialLinks.facebook,
    business.socialLinks.tiktok
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <Header />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}
