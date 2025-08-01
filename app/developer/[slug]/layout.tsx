import BaseLayout from "@/components/layout/BaseLayout";
import { address } from "@/constants/endpoints";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<{ title: string }> {
    const { slug } = await params;
    const developer = await fetch(`${address}/api/developers/${slug}`).then(
        (res) => res.json(),
    );

    if (!developer) return { title: "User not found - DevShowcase" };

    return {
        title: `${developer.name} ${developer.surname} - DevShowcase`,
    };
}

const DiscoverPage = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default DiscoverPage;
