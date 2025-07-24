import "../styles/globals.css";
import type { Metadata } from "next";

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
    return children;
}
