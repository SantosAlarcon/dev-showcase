import BaseLayout from "@/components/layout/BaseLayout";
import { address } from "@/constants/endpoints";

export async function generateMetadata(props: {
    params: Promise<{ id: string }>;
}) {
    // @ts-ignore
    const params = await props.params;
    const { id } = params;
    const developer = await fetch(`${address}/api/developers/${id}`).then(
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
