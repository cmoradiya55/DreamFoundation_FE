import type { Metadata } from "next";
import GrowLikeGujaratiComponent from "./GrowLikeGujaratiComponent";

export const metadata: Metadata = {
  title: "Grow Like Gujarati | Dream Foundation",
  description:
    "Stock market education and financial literacy programs to build confident, long-term investors with Grow Like Gujarati by Dream Foundation.",
  openGraph: {
    title: "Grow Like Gujarati | Dream Foundation",
    description:
      "Learn equity, mutual funds, ETFs, risk management, and practical investing tools through Grow Like Gujarati.",
    type: "website",
    url: "https://dreamfoundation.in/grow-like-gujarati",
    siteName: "Dream Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Like Gujarati | Dream Foundation",
    description:
      "Financial literacy and stock market education with practical tools, workshops, and mentorship.",
  },
};

export default function GrowLikeGujaratiPage() {
  return <GrowLikeGujaratiComponent />;
}

