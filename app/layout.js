import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ray Ague - Portfolio",
  description: "PortFolio site by Ray AGUE",
  author: "Ray Ague",
  keywords:
    "Ray Ague, portfolio, web developer, projects, IT, software development"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="Ray Ague, portfolio, web developer, projects, IT, software development"
      />
      <meta name="author" content="Ray Ague" />
      {/* Open Graph */}
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content="/profile.JPG" />
      <meta property="og:url" content="https://www.rayague.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>Ray Ague - Portfolio</title>
      <link rel="icon" href="profile.JPG" type="image/png" />
      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config');
            `
        }}
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
