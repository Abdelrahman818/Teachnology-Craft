import { Geist, Geist_Mono } from "next/font/google";

import VisitorTracker from "../components/VisitorTracker";
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
  title: "Technology Craft | Digital product design, development & IT",
  description:
    "Technology Craft builds premium web, mobile, IT, marketing, and design solutions for ambitious teams.",
  openGraph: {
    title: "Technology Craft | Digital product design, development & IT",
    description:
      "Technology Craft builds premium web, mobile, IT, marketing, and design solutions for ambitious teams.",
    type: "website",
    siteName: "Technology Craft",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <VisitorTracker />
        {children}
      </body>
    </html>
  );
}
