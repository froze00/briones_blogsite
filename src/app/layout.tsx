import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "The Dev Journal — OJT at Raicom LLC",
  description:
    "A weekly journal documenting Ritchelene E. Briones' on-the-job training as a Full-Stack Web Developer Trainee at Raicom LLC.",
  keywords: [
    "OJT",
    "internship",
    "Raicom LLC",
    "web development",
    "Full-Stack Developer Trainee",
    "weekly accomplishment report",
  ],
  authors: [{ name: "Ritchelene E. Briones" }],
  openGraph: {
    title: "The Dev Journal — OJT at Raicom LLC",
    description:
      "A weekly journal documenting an internship as a Full-Stack Web Developer Trainee at Raicom LLC.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
