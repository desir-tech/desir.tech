import type { Metadata } from "next";
import { VT323 } from "next/font/google";

import Header from "@includes/Header"
import Footer from "@includes/Footer"


import "./globals.css";

const vt323 = VT323({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desir Tech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vt323.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
