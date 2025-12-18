import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Driver Engagement Strategy | Doug Oberbeck",
  description: "A case study on improving driver engagement health at Curri through data-driven insights and the Driver Pulse feedback system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
