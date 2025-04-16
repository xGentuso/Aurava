import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://proventa.health'),
  title: "Proventa | Predict. Prevent. Prosper.",
  description: "Proventa is a radically personalized health platform that integrates your wearable, wellness, and environmental data to predict vulnerabilities before they appear.",
  keywords: "health platform, preventative healthcare, wellness tracking, health prediction, personalized health",
  openGraph: {
    title: "Proventa | Predict. Prevent. Prosper.",
    description: "Proventa is a radically personalized health platform that integrates your wearable, wellness, and environmental data to predict vulnerabilities before they appear.",
    url: "https://proventa.health",
    siteName: "Proventa",
    images: [
      {
        url: "/ProventaLogo.png",
        width: 1200,
        height: 630,
        alt: "Proventa - The Future of Preventative Healthcare",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proventa | Predict. Prevent. Prosper.",
    description: "Proventa is a radically personalized health platform that integrates your wearable, wellness, and environmental data to predict vulnerabilities before they appear.",
    images: ["/ProventaLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}; 