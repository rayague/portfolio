export const metadata = {
  title: "Ray AGUE - Développeur Web Full Stack à Corte, Corse",
  description: "Développeur web full stack basé à Corte (Haute-Corse). Création de sites modernes, applications web et solutions digitales. Formé à l'Université Pasquale Paoli.",
  keywords: "accueil, portfolio, Ray AGUE, développeur web, Corse, Corte, full stack, développement web",
  openGraph: {
    title: "Ray AGUE - Développeur Web Full Stack à Corte, Corse",
    description: "Développeur web full stack basé à Corte (Haute-Corse). Création de sites modernes, applications web et solutions digitales.",
    url: "https://portfolio-cnkp.vercel.app/",
    siteName: "Ray AGUE - Portfolio",
    images: [{ url: "/web.png", width: 1200, height: 630, alt: "Ray AGUE Accueil" }],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://portfolio-cnkp.vercel.app/" },
};

import HomeClient from "./components/HomeClient";

export default function Home() {
  return <HomeClient />;
}
