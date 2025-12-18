import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const roboto = Roboto({ subsets: ['latin'], variable: '--font-sans' });

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
    <html lang="en" className={roboto.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
