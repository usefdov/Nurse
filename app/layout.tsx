import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Youssef Mamdouh Mokhtar — Nursing Professional Portfolio",
  description:
    "Personal portfolio of Youssef Mamdouh Mokhtar, a young nursing professional passionate about patient care, healthcare, continuous learning, and professional development.",
  openGraph: {
    title: "Youssef Mamdouh Mokhtar — Nursing Professional Portfolio",
    description:
      "A modern personal portfolio focused on patient care, learning, and professional growth.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}