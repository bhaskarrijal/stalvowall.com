import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import NextTopLoader from "nextjs-toploader";

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stalvo - Building a sustainable world",
  description: "We are Stalvo. We are building a sustainable world.",
  keywords: ["Stalvo", "Building", "Sustainable", "World"],
  authors: [{ name: "Stalvo", url: "https://stalvowall.com" }],
  creator: "Stalvo",
  publisher: "Stalvo",
  openGraph: {
    title: "Stalvo - Building a sustainable world",
    description: "We are Stalvo. We are building a sustainable world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#02378B" showSpinner={false} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
