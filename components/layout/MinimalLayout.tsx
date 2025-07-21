import Providers from "@/app/providers";
import { Figtree } from "next/font/google";

const font = Figtree({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-figtree",
});

const MinimalLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className={font.className} data-scroll-behavior="smooth">
            <body>
                <Providers>
                    <div>
                        <main>{children}</main>
                    </div>
                </Providers>
            </body>
        </html>
    );
};

export default MinimalLayout;
