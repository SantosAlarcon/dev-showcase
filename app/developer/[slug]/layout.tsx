import BaseLayout from "@/components/layout/BaseLayout";
import { address } from "@/constants/endpoints";
import { QueryClient } from "@tanstack/react-query";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<{ title: string }> {
    const { slug } = await params;
    const queryClient = new QueryClient();
    const developer = await queryClient.fetchQuery({
        queryKey: ["developer", slug],
        queryFn: () =>
            fetch(`${address}/api/developers/${slug}`).then((res) =>
                res.json(),
            ),
    });
    if (!developer) return { title: "User not found - DevShowcase" };

    return {
        title: `${developer.name} ${developer.surname} - DevShowcase`,
    };
}

const DeveloperLayout = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default DeveloperLayout;
