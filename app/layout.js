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
  title: "Adhham Safwan | Portfolio",
  description: "Adhham Safwan",
  openGraph: {
    title: "Adhham Safwan | Portfolio",
    description: "Adhham Safwan",
    type: "website",
    locale: "en_US",
    url: "https://adhham.com",
    site_name: "Adhham Safwan",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Adhham Safwan",
      },
    ],
  },
  twitter: {
    handle: "@adhham",
    site: "@adhham",
    cardType: "summary_large_image",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
