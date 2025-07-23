export const metadata = {
  title: "Accueil - Ray Ague",
  description: "Bienvenue sur le portfolio de Ray Ague, développeur web passionné. Découvrez ses projets, compétences et solutions digitales innovantes.",
  keywords: "accueil, portfolio, Ray Ague, ray, ague, ray ague, junior, junior ague, ray junior, Ague, RAY, AGUE, RAY AGUE, nextJS, Motivation, motivation, MOTIVATION, nextjs, NEXTJS, Portfolio, PORTFOLIO, Projects, projects, PROJECTS, project, projets, Projet portfolio, développeur web, projets, compétences, solutions digitales, IT",
  openGraph: {
    title: "Accueil - Ray Ague",
    description: "Bienvenue sur le portfolio de Ray Ague, développeur web passionné. Découvrez ses projets, compétences et solutions digitales innovantes.",
    url: "https://portfolio-cnkp.vercel.app/",
    siteName: "Ray Ague - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray Ague Accueil",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio-cnkp.vercel.app/",
  },
};

import HomeClient from "./components/HomeClient";

export default function Home() {
  return <HomeClient />;
}
