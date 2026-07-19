export const metadata = {
  title: "Projects",
  description:
    "Explore Ray AGUE's projects: every public GitHub repository plus client work shipped to production — web apps, mobile apps and digital solutions.",
  openGraph: {
    title: "Projects | Ray AGUE",
    description:
      "Every public GitHub repository plus client work shipped to production.",
    url: "https://portfolio-cnkp.vercel.app/projects",
    siteName: "Ray AGUE — Portfolio",
    images: [{ url: "/web.png", width: 1200, height: 630, alt: "Ray AGUE Projects" }],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://portfolio-cnkp.vercel.app/projects" },
};

import ProjectsClient from "../components/ProjectsClient";

export default function ProjectsPage() {
  return <ProjectsClient />;
}
