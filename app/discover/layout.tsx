import BaseLayout from "@/components/layout/BaseLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "DevShowcase - Find Exceptional Developer Talent",
	description:
		"Connect with skilled developers. Browse portfolios, view projects, and find the perfect talent for your team.",
};

const DiscoverPage = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default DiscoverPage;
