import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import SmoothScrollWrapper from "./lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Consultant Website",
  description: "A website for consultants built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} >
      <body className="antialiased font-inter">
        <Header />
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        <Footer />
      </body>
    </html>
  );
}
