import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./App.scss";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Piotr Lubecki",
  description: "Portfolio Piotr Lubecki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
