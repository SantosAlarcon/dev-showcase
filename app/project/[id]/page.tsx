import ProjectNotFound from "@/components/layout/ProjectNotFound";
import { DeveloperInfo, Project } from "@/types/types";
import { getDeveloperInfo } from "@/utils/getDeveloperInfo";
import { getProjectInfo } from "@/utils/getProjectInfo";
import { Avatar, Box, Chip, Link, Typography } from "@mui/joy";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

export default async function ProjectProfile(props: {
	params: Promise<{ params: { id: string } }>;
}) {
	const params = await props.params;
	// @ts-ignore
	const { id } = params;
	const project: Project | undefined = getProjectInfo(id);
	const developer: DeveloperInfo | undefined = getDeveloperInfo(
		// @ts-ignore
		project?.userId,
	);

	if (!project) return <ProjectNotFound />;
	return (
		<Box
			py={8}
			width={{ md: "100%", lg: "1600px" }}
			sx={{
				margin: "auto",
				display: "flex",
				flexDirection: "column",
				gap: 2,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography level="h1">{project.title}</Typography>
			<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
				<Avatar
					src={developer.avatar}
					alt={developer.name + developer.surname}
				/>{" "}
				<Link href={`/developer/${project.userId}`}>
					{developer.name} {developer.surname}
				</Link>{" "}
				- <b>Published on</b>{" "}
				{new Date(project.publishedDate).toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				})}
			</Box>
			<Box sx={{ width: { xs: "85%", sm: "85%", md: "85%", lg: "1600px" } }} className="markdown-body">
				<Markdown remarkPlugins={[remarkGfm]}>
					{project.story}
				</Markdown>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
					alignItems: { lg: "start", md: "center" },
				}}
				width={{ md: "100%", lg: "1600px" }}
			>
				<Typography level="h2">Technologies used</Typography>
				<Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
					{project.technologies.map((tech, index) => (
						<Chip
							key={index}
							size="md"
							sx={{ borderRadius: "10rem", mx: 0.5 }}
						>
							<b>{tech}</b>
						</Chip>
					))}
				</Box>
			</Box>
		</Box>
	);
}
