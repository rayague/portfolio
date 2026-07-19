export const metadata = {
  title: "Compétences - Ray AGUE | Développeur Web Full Stack Corse",
  description: "Découvrez les compétences techniques de Ray AGUE, développeur web full stack basé à Corte : Laravel, Next.js, React, Three.js, Tailwind CSS et plus.",
  keywords: "compétences, skills, Ray AGUE, développeur, Laravel, Next.js, React, Three.js, Tailwind, Git, Python, développement web, Corse, Corte",
  openGraph: {
    title: "Compétences - Ray AGUE",
    description: "Découvrez les compétences techniques de Ray AGUE, développeur web full stack basé à Corte.",
    url: "https://portfolio-cnkp.vercel.app/skills",
    siteName: "Ray AGUE - Portfolio",
    images: [{ url: "/web.png", width: 1200, height: 630, alt: "Ray AGUE Compétences" }],
    locale: "fr_FR",
    type: "website",
  },
  alternates: { canonical: "https://portfolio-cnkp.vercel.app/skills" },
};

import SkillsClient from "../components/SkillsClient";

export default function SkillsPage() {
  return <SkillsClient />;
}
