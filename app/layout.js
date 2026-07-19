import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

const inter = Inter({ subsets: ["latin"] });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ray AGUE",
  givenName: "Ray",
  familyName: "AGUE",
  jobTitle: "Full Stack Developer & Creative Designer",
  email: siteConfig.email,
  telephone: siteConfig.phone,
  url: siteConfig.siteUrl,
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Corte",
    addressRegion: "Haute-Corse",
    addressCountry: "FR",
    postalCode: "20250",
  },
  nationality: {
    "@type": "Country",
    name: "Bénin",
  },
  birthPlace: {
    "@type": "Country",
    name: "Bénin",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Université Pasquale Paoli, Corse",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Université Libre de Bolzano",
    },
  ],
  knowsAbout: ["Web Development", "Full Stack", "Laravel", "Next.js", "React", "JavaScript", "TypeScript", "PHP", "Tailwind CSS", "Three.js"],
};

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  author: "Ray AGUE",
  keywords: siteConfig.keywords.join(", "),
  icons: {
    icon: '/profile.JPG',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.siteUrl,
    siteName: "Ray AGUE - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray AGUE Portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/web.png"],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
    languages: {
      fr: siteConfig.siteUrl,
      en: siteConfig.siteUrl,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-lenis-prevent>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="Ray AGUE" />
        <meta name="copyright" content="Ray AGUE" />
        <meta name="application-name" content="Ray AGUE - Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Ray AGUE" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="keywords" content={siteConfig.keywords.join(", ")} />
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/profile.JPG" />
        <link rel="icon" type="image/png" sizes="32x32" href="/profile.JPG" />
        <link rel="shortcut icon" href="/profile.JPG" />
        <link rel="apple-touch-icon" href="/profile.JPG" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteConfig.siteUrl} />
        <link rel="alternate" hrefLang="fr" href={siteConfig.siteUrl} />
        <link rel="alternate" hrefLang="en" href={siteConfig.siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:image" content={`${siteConfig.siteUrl}/web.png`} />
        <meta property="og:site_name" content="Ray AGUE - Portfolio" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <meta name="twitter:image" content={`${siteConfig.siteUrl}/web.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-slate-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
