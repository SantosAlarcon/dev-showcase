import BaseLayout from "@/components/layout/BaseLayout";
import { getDeveloperInfo } from "@/services/developers/getDeveloperInfo";

export async function generateMetadata(props: {
	params: Promise<{ params: { id: string } }>;
}) {
	// @ts-ignore
	const { id } = await props.params;
	const developer = getDeveloperInfo(id);

	if (!developer) return { title: "User not found - DevShowcase" };

	return {
		title: `${developer.name} ${developer.surname} - DevShowcase`,
	};
}

const DiscoverPage = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default DiscoverPage;

