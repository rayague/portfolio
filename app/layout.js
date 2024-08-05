import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PortFolio",
  description: "PortFolio site by Ray AGUE"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="profile.JPG" type="image/png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
