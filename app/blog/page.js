export const metadata = {
  title: "Blog - Ray Ague",
  description: "Découvrez les articles, conseils et actualités de Ray Ague sur le développement web, les projets innovants et la motivation dans le domaine IT.",
  keywords: "blog, articles, conseils, actualités, Ray Ague, développement web, IT, motivation, projets",
  openGraph: {
    title: "Blog - Ray Ague",
    description: "Découvrez les articles, conseils et actualités de Ray Ague sur le développement web, les projets innovants et la motivation dans le domaine IT.",
    url: "https://portfolio-cnkp.vercel.app/blog",
    siteName: "Ray Ague - Portfolio",
    images: [
      {
        url: "/web.png",
        width: 1200,
        height: 630,
        alt: "Ray Ague Blog",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: "https://portfolio-cnkp.vercel.app/blog",
  },
};

import BlogClient from "../components/BlogClient";

export default function BlogPage() {
  return <BlogClient />;
}
