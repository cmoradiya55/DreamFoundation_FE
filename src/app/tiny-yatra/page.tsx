import type { Metadata } from "next";
import TinyYatraComponent from "./TinyYatraComponent";

export const metadata: Metadata = {
  title: "Tiny Yatra | Dream Foundation",
  description:
    "A fun-filled, experiential journey that nurtures curiosity and early learning for young minds through Tiny Yatra by Dream Foundation.",
  openGraph: {
    title: "Tiny Yatra | Dream Foundation",
    description:
      "Experiential learning journeys for young minds—nurturing curiosity and early education.",
    type: "website",
    url: "https://dreamfoundation.in/tiny-yatra",
    siteName: "Dream Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Yatra | Dream Foundation",
    description:
      "Fun-filled, experiential journeys nurturing curiosity and early learning for young minds.",
  },
};

export default function TinyYatraPage() {
  return <TinyYatraComponent />;
}