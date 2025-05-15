import ProjectNotFound from "@/components/layout/ProjectNotFound";
import { getProjectInfo } from "@/utils/getProjectInfo";
import { Box } from "@mui/joy";

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

export default async function ProjectProfile(props: {params: Promise<{ params: { id: string } }>}) {
	const params = await props.params;
	// @ts-ignore
	const { id } = params;
	const project = getProjectInfo(id);

	if (!project) return <ProjectNotFound />;
	return (
		<Box p={8}>
			<h1>Project</h1>
		</Box>
	)
};
