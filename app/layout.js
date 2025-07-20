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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
