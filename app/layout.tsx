import "../styles/globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Providers from "./providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const font = Figtree({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-figtree",
});

export const metadata: Metadata = {
    title: "DevShowcase - Find Exceptional Developer Talent",
    description:
        "Connect with skilled developers. Browse portfolios, view projects, and find the perfect talent for your team.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={font.className}>
            <body>
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
