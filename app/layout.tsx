import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Thought Accumulator",
  description: "Used create next app to produce the initial project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const routes: String[] = ['Todos','Notes','Events','Dashboard']

  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="bg-slate-800 text-white w-full py-2 px-1 flex space-x-3 align-text-bottom">
        <label className="text-md solid text-slate-400">Navigate to:</label>
        {routes.map((e,i)=>
          <Link href={e.toLowerCase() === "dashboard" ? "/":"data/"+e.toLowerCase()}key={`${e}-${i}`}className="rounded px-3 hover:underline text-md">{e}</Link>

          )}
      </nav>
        {children}</body>
    </html>
  );
}
