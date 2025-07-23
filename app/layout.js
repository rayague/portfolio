import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Ague - Portfolio",
  description: "Welcome to Ray Ague's portfolio, a passionate and creative web developer. Explore my innovative projects and skills in front-end and back-end development, and discover how I transform ideas into effective digital solutions. My portfolio showcases my achievements, technical expertise, and ability to tackle challenges to create modern and tailored web experiences.",
  author: "Ray Ague",
  keywords: "Ray Ague, ray, ague, ray ague, junior, junior ague, ray junior, Ague, RAY, AGUE, RAY AGUE, nextJS, Motivation, motivation, MOTIVATION, nextjs, NEXTJS, Portfolio, PORTFOLIO, Projects, projects, PROJECTS, project, projets, Projet portfolio, web developer, projects, IT, software, development, developer, développement web",
  icons: {
    icon: '/profile.JPG',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ray Ague - Portfolio",
    description: "Welcome to Ray Ague's portfolio, a passionate and creative web developer. Explore my innovative projects and skills in front-end and back-end development, and discover how I transform ideas into effective digital solutions. My portfolio showcases my achievements, technical expertise, and ability to tackle challenges to create modern and tailored web experiences.",
    url: "https://portfolio-cnkp.vercel.app/",
    siteName: "Ray Ague - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray Ague Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ray Ague - Portfolio",
    description: "Welcome to Ray Ague's portfolio, a passionate and creative web developer. Explore my innovative projects and skills in front-end and back-end development, and discover how I transform ideas into effective digital solutions. My portfolio showcases my achievements, technical expertise, and ability to tackle challenges to create modern and tailored web experiences.",
    images: ["/web.png"],
  },
  alternates: {
    canonical: "https://portfolio-cnkp.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Ray Ague" />
        <meta name="copyright" content="Ray Ague" />
        <meta name="application-name" content="Ray Ague - Portfolio" />
        <meta name="apple-mobile-web-app-title" content="Ray Ague" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="keywords" content="portfolio, Ray Ague, ray, ague, ray ague, junior, junior ague, ray junior, Ague, RAY, AGUE, RAY AGUE, nextJS, Motivation, motivation, MOTIVATION, nextjs, NEXTJS, Portfolio, PORTFOLIO, Projects, projects, PROJECTS, project, projets, Projet portfolio, développeur web, projets, compétences, solutions digitales, IT, innovation, blog, contact" />
        <meta name="description" content="Welcome to Ray Ague's portfolio, a passionate web developer. Discover his projects, skills, and innovative digital solutions in front-end and back-end development. Explore a world of creativity, innovation, and motivation in the field of web development." />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/profile.JPG" />
        <link rel="icon" type="image/png" sizes="32x32" href="/profile.JPG" />
        <link rel="shortcut icon" href="/profile.JPG" />
        <link rel="apple-touch-icon" href="/profile.JPG" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://portfolio-cnkp.vercel.app/" />
        <link rel="alternate" hrefLang="fr" href="https://portfolio-cnkp.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ray Ague - Portfolio" />
        <meta property="og:description" content="Bienvenue sur le portfolio de Ray Ague, développeur web passionné. Découvrez ses projets, compétences et solutions digitales innovantes." />
        <meta property="og:url" content="https://portfolio-cnkp.vercel.app/" />
        <meta property="og:image" content="https://portfolio-cnkp.vercel.app/web.png" />
        <meta property="og:site_name" content="Ray Ague - Portfolio" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ray Ague - Portfolio" />
        <meta name="twitter:description" content="Bienvenue sur le portfolio de Ray Ague, développeur web passionné. Découvrez ses projets, compétences et solutions digitales innovantes." />
        <meta name="twitter:image" content="https://portfolio-cnkp.vercel.app/web.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
