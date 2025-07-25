import BaseLayout from "@/components/layout/BaseLayout";
import { address } from "@/constants/endpoints";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<{ title: string }> {
    const { id } = await params;
    const project = await fetch(`${address}/api/projects/${id}`).then((res) =>
        res.json(),
    );

    if (!project) return { title: "Project not found - DevShowcase" };

    return {
        title: `${project.title} - DevShowcase`,
    };
}

const ProjectPage = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default ProjectPage;
