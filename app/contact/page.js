export const metadata = {
  title: "Contact - Ray Ague",
  description: "Contactez Ray Ague pour toute demande de projet, collaboration ou information sur le développement web et les solutions digitales.",
  keywords: "contact, Ray Ague, projet, collaboration, information, développement web, solutions digitales",
  openGraph: {
    title: "Contact - Ray Ague",
    description: "Contactez Ray Ague pour toute demande de projet, collaboration ou information sur le développement web et les solutions digitales.",
    url: "https://portfolio-cnkp.vercel.app/contact",
    siteName: "Ray Ague - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray Ague Contact",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio-cnkp.vercel.app/contact",
  },
};

import ContactClient from "../components/ContactClient";

export default function ContactPage() {
  return <ContactClient />;
}
