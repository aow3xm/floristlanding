import type { Metadata } from "next";
import { Lato, Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
});
const raleway = Raleway({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Florist Landing Page",
  description: "A landing page for a florist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${(lato.variable, raleway.variable)}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
