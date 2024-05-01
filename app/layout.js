import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#112233",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata = {
  title: "Adhham Safwan | Full Stack Web Developer",
  description: "Bringing ideas to life through code Crafting digital experiences that are both beautiful and functional.",
  openGraph: {
    title: "Adhham Safwan | Full Stack Web Developer",
    description: "Bringing ideas to life through code Crafting digital experiences that are both beautiful and functional.",
    type: "website",
    locale: "en_US",
    url: "https://adhhamdev.vercel.app",
    siteName: "Adhham Safwan | Full Stack Web Developer",
    authors: ['Adhham Safwan'],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhham Safwan | Full Stack Web Developer",
    description: "Bringing ideas to life through code Crafting digital experiences that are both beautiful and functional.",
    creator: "Adhham Safwan",
  },
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
