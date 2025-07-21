import Providers from "@/app/providers";
import Header from "./Header";
import Footer from "./Footer";
import { Figtree } from "next/font/google";

const font = Figtree({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-figtree",
});

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={font.className} data-scroll-behavior="smooth">
            <body>
                <Providers>
                    <div>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
};

export default BaseLayout;
