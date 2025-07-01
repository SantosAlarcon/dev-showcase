import BaseLayout from "@/components/layout/BaseLayout";
import { getProjectInfo } from "@/services/projects/getProjectInfo";

export async function generateMetadata(props: {
	params: Promise<{ params: { id: string } }>;
}) {
	// @ts-ignore
	const { id } = await props.params;
	const project = getProjectInfo(id);

	if (!project) return { title: "Project not found - DevShowcase" };

	return {
		title: `${project.title} - DevShowcase`,
	};
}

const ProjectPage = ({ children }: { children: React.ReactNode }) => {
    return <BaseLayout>{children}</BaseLayout>;
};

export default ProjectPage;
