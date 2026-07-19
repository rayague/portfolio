export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Ray AGUE for projects, collaborations or opportunities in web and mobile development.",
  openGraph: {
    title: "Contact | Ray AGUE",
    description:
      "Get in touch with Ray AGUE for projects, collaborations or opportunities.",
    url: "https://portfolio-cnkp.vercel.app/contact",
    siteName: "Ray AGUE — Portfolio",
    images: [{ url: "/web.png", width: 1200, height: 630, alt: "Ray AGUE Contact" }],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: "https://portfolio-cnkp.vercel.app/contact" },
};

import ContactClient from "../components/ContactClient";

export default function ContactPage() {
  return <ContactClient />;
}
