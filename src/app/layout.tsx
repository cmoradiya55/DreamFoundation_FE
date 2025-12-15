import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dream Foundation",
    template: "Dream Foundation"
  },
  description: "Dream Foundation is dedicated to providing quality education and opportunities to help individuals achieve their dreams. Join our comprehensive programs and community initiatives.",
  authors: [{ name: "Dream Foundation" }],
  creator: "Dream Foundation",
  publisher: "Dream Foundation",
  icons: {
    icon: [
      { url: "/logos/dreamFoundation_logo.png", type: "image/png" },
      { url: "/logos/dreamFoundation_logo2.png", type: "image/png" },
    ],
    apple: [
      { url: "/logos/dreamFoundation_logo.png", type: "image/png" },
    ],
    shortcut: "/logos/dreamFoundation_logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dreamfoundation.in/",
    siteName: "Dream Foundation",
    title: "Dream Foundation - Education & Opportunities",
    description: "Dream Foundation is dedicated to providing quality education and opportunities to help individuals achieve their dreams.",
    images: [
      {
        url: "https://dreamfoundation.in/logos/dreamFoundation_logo.png",
        width: 1200,
        height: 630,
        alt: "Dream Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://dreamfoundation.in/logos/dreamFoundation_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <SpeedInsights />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
