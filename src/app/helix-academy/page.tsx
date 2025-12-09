import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HelixAcademyComponent from "./HelixAcademyComponent";

export const metadata: Metadata = {
  title: "Helix Academy | Dream Foundation",
  description:
    "Focused coaching and personalized support for JEE Main & Advanced, NEET, and competitive exams with Helix Academy by Dream Foundation.",
  openGraph: {
    title: "Helix Academy | Dream Foundation",
    description:
      "Personalized coaching for JEE, NEET, and competitive exams with small batches, mock drills, and mentorship.",
    type: "website",
    url: "https://dreamfoundation.in/helix-academy",
    siteName: "Dream Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix Academy | Dream Foundation",
    description:
      "Focused coaching for JEE/NEET with mock drills, mentorship, and analytics-driven feedback.",
  },
};

export default function HelixAcademyPage() {
  return <HelixAcademyComponent />;
}

