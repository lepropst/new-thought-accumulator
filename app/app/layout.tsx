import Header from "@/components/header";
import "@/styles/globals.css";
import { Tinos } from "next/font/google";

import CentralNavigation from "@/components/central-navigation";
import { PropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import Head from "next/head";
import nightwind from "nightwind";

const inter = Tinos({ weight: ["400", "700"], style: ["normal", "italic"], subsets: ["latin"], display: "swap" });

export const metadata = {
    title: "Unendlich",
    description: "Created by Elias Rangel",
};
export type RootLayoutProps = { children: ReactNode };
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" className="dark">
            <Head>
                <script dangerouslySetInnerHTML={{ __html: nightwind.init() }} />
            </Head>

            <body className={cn("bg", inter.className)}>
                <Header>
                    <CentralNavigation />
                </Header>
                {children}
            </body>
        </html>
    );
}
