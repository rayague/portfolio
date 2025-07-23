export const metadata = {
  title: "Formulaire - Ray Ague",
  description: "Partagez vos pensées, contactez Ray Ague ou proposez un projet via ce formulaire sécurisé. Développement web, collaboration, innovation.",
  keywords: "formulaire, contact, Ray Ague, projet, collaboration, développement web, innovation",
  openGraph: {
    title: "Formulaire - Ray Ague",
    description: "Partagez vos pensées, contactez Ray Ague ou proposez un projet via ce formulaire sécurisé. Développement web, collaboration, innovation.",
    url: "https://portfolio-cnkp.vercel.app/form",
    siteName: "Ray Ague - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray Ague Formulaire",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio-cnkp.vercel.app/form",
  },
};

import FormClient from "../components/FormClient";

export default function FormPage() {
  return <FormClient />;
}
