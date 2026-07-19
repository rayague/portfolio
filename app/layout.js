import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import ClientShell from "./components/ClientShell";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ray AGUE",
  givenName: "Ray",
  familyName: "AGUE",
  jobTitle: "Software Engineer & Full Stack Developer",
  email: siteConfig.email,
  url: siteConfig.siteUrl,
  sameAs: [
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
  ],
  nationality: { "@type": "Country", name: "Benin" },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Université de Corse Pasquale Paoli",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "École Supérieure le Faucon",
    },
  ],
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "Full Stack",
    "Laravel",
    "Next.js",
    "React",
    "React Native",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Tailwind CSS",
    "Three.js",
  ],
};

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seo.title,
    template: "%s | Ray AGUE",
  },
  description: siteConfig.seo.description,
  authors: [{ name: "Ray AGUE" }],
  keywords: siteConfig.keywords.join(", "),
  icons: { icon: "/profile.JPG" },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: siteConfig.siteUrl,
    siteName: "Ray AGUE — Portfolio",
    images: [
      { url: "/web.png", width: 1200, height: 630, alt: "Ray AGUE Portfolio" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["/web.png"],
  },
  alternates: { canonical: siteConfig.siteUrl },
};

export const viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-slate-950 text-white antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
