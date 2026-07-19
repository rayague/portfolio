export const metadata = {
  title: "Skills",
  description:
    "Technical skills of Ray AGUE, software engineer and full stack developer: Laravel, Next.js, React, React Native, Three.js, Tailwind CSS and more.",
  openGraph: {
    title: "Skills | Ray AGUE",
    description:
      "Technical skills of Ray AGUE, software engineer and full stack developer.",
    url: "https://portfolio-cnkp.vercel.app/skills",
    siteName: "Ray AGUE — Portfolio",
    images: [{ url: "/web.png", width: 1200, height: 630, alt: "Ray AGUE Skills" }],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://portfolio-cnkp.vercel.app/skills" },
};

import SkillsClient from "../components/SkillsClient";

export default function SkillsPage() {
  return <SkillsClient />;
}
