export const metadata = {
  title: "Projets - Ray Ague",
  description: "Découvrez les projets réalisés par Ray Ague : développement web, applications innovantes, solutions digitales et plus encore.",
  keywords: "projets, portfolio, Ray Ague, développement web, applications, solutions digitales, IT, innovation",
  openGraph: {
    title: "Projets - Ray Ague",
    description: "Découvrez les projets réalisés par Ray Ague : développement web, applications innovantes, solutions digitales et plus encore.",
    url: "https://portfolio-cnkp.vercel.app/projects",
    siteName: "Ray Ague - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray Ague Projets",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio-cnkp.vercel.app/projects",
  },
};

import ProjectsClient from "../components/ProjectsClient";

export default function ProjectsPage() {
  return <ProjectsClient />;
}
