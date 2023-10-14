"use client";

import Header from "@/components/Header";
import "./globals.css";

import { Inter } from "next/font/google";
import { useRef } from "react";
import { ThemeProvider } from "next-themes";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const re = useRef<HTMLDivElement>(null);
  return (
    <html lang="en">

      <body className={inter.className}>
        <Header ref={re} routes={["draw", "note", "list", "table", "data"]} />
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  );
}
