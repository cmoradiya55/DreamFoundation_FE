import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";

export const metadata: Metadata = {
  title: "Dream Foundation | Empowering Dreams, Shaping Futures",
  description:
    "Discover Dream Foundation programs: Tiny Yatra, Helix Academy, and Grow Like Gujarati. Join experiential learning, competitive exam prep, and financial education designed to shape brighter futures.",
  openGraph: {
    title: "Dream Foundation | Empowering Dreams, Shaping Futures",
    description:
      "Explore Tiny Yatra, Helix Academy, and Grow Like Gujarati—programs for experiential learning, exam preparation, and financial education.",
    url: "https://dreamfoundation.in/",
    siteName: "Dream Foundation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Foundation | Empowering Dreams, Shaping Futures",
    description:
      "Experiential learning, competitive exam prep, and financial education with Tiny Yatra, Helix Academy, and Grow Like Gujarati.",
  },
};

export default function HomePage() {
  return <Hero />;
}