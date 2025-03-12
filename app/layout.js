import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Ague - Portfolio",
  description: "PortFolio site by Ray Ague",
  author: "Ray Ague",
  keywords:
    "Ray Ague, ray, ague, ray ague, junior, junior ague, ray junior, portfolio, web developer, projects, IT, software development"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="Ray Ague, portfolio, web developer, projects, IT, software development, blog"
      />
      <meta name="author" content="Ray Ague" />
      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content="/web.png" />
      <meta property="og:url" content="https://portfolio-cnkp.vercel.app/" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>Ray Ague - Portfolio</title>
      <link rel="icon" href="web.png" type="image/png" />
      {/* Google Analytics */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
