import BaseLayout from "@/components/layout/BaseLayout";
import { address } from "@/constants/endpoints";
import { QueryClient } from "@tanstack/react-query";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<{ title: string }> {
    const queryClient = new QueryClient();
    const { id } = await params;

    const project = await queryClient.fetchQuery({
        queryKey: ["projects", id],
        queryFn: () =>
            fetch(`${address}/api/projects/${id}`).then((res) => res.json()),
    });

    if (!project) return { title: "Project not found - DevShowcase" };

    return {
        title: `${project.title} - DevShowcase`,
    };
}

const ProjectLayout = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default ProjectLayout;
