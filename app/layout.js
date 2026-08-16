import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "../styles/globals.css";
import "../styles/animations.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://technology-craft.com"),

  title: {
    default: "Technology Craft | Digital Solutions & IT Services",
    template: "%s | Technology Craft",
  },

  description:
    "Technology Craft delivers premium web, mobile, software, IT, marketing, and design solutions for ambitious businesses.",

  keywords: [
    "Technology Craft",
    "web development",
    "web dev",
    "website",
    "mobile app development",
    "flutter app",
    "react native app",
    "mobile development",
    "moblie dev",
    "CRM",
    "ERP",
    "Network",
    "servers",
    "IT solutions",
    "software development",
    "Desktop apps",
    "Desktop development",
    "UI UX design",
    "graphic design",
    "digital marketing",
  ],

  authors: [{ name: "Technology Craft" }],
  creator: "Technology Craft",
  publisher: "Technology Craft",

  alternates: {
    canonical: "https://technology-craft.com",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Technology Craft | Digital Solutions & IT Services",
    description:
      "Technology Craft delivers premium web, mobile, software, IT, marketing, and design solutions for ambitious businesses.",
    type: "website",
    siteName: "Technology Craft",
    url: "https://technology-craft.com",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technology Craft - Digital Solutions & IT Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Craft | Digital Solutions & IT Services",
    description:
      "Premium web, mobile, software, IT, marketing, and design solutions for ambitious businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SpeedInsights />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
