import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Ague - Portfolio",
  description: "Welcome to Ray Ague's portfolio, a passionate and creative web developer. Explore my innovative projects and skills in front-end and back-end development, and discover how I transform ideas into effective digital solutions. My portfolio showcases my achievements, technical expertise, and ability to tackle challenges to create modern and tailored web experiences.",
  author: "Ray Ague",
  keywords: "Ray Ague, ray, ague, ray ague, junior, junior ague, ray junior, Ague, RAY, AGUE, RAY AGUE, nextJS, Motivation, motivation, MOTIVATION, nextjs, NEXTJS, Portfolio, PORTFOLIO, Projects, projects, PROJECTS, project, projets, Projet portfolio, web developer, projects, IT, software, development, developer, développement web"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://portfolio-cnkp.vercel.app/" />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/web.png" />
        <meta property="og:url" content="https://portfolio-cnkp.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={metadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{metadata.title}</title>
        <Link rel="shortcut icon" href="/web.png" type="image/x-icon" />
        <Link rel="shortcut icon" href="/web.png" type="image/x-icon"></Link>
        <link rel="shortcut icon" href="/web.png" type="image/x-icon" />
        
        
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
