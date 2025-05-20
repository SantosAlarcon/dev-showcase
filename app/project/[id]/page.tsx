import ProjectNotFound from "@/components/layout/ProjectNotFound";
import { DeveloperInfo, Project } from "@/types/types";
import { getDeveloperInfo } from "@/utils/developers/getDeveloperInfo";
import { getProjectInfo } from "@/utils/projects/getProjectInfo";
import { Avatar, Box, Chip, Link, Typography } from "@mui/joy";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/project.css";

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
			py={{ xs: 4, md: 12 }}
			width={{xs: "90%"}}
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
			<Typography level="title-sm">{project.description}</Typography>
			<Box sx={{ display: "flex", gap: 1, alignItems: "center", py: 2 }}>
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
			<Image className="project__markdown__cover" src={project.image} alt={project.title} width={600} height={400} loading="lazy" />
			<Box width={"100%"} className="markdown-body">
				<Markdown remarkPlugins={[remarkGfm]}>
					{project.story}
				</Markdown>
			</Box>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 2,
				}}
				alignItems={{ lg: "start", sm: "center", xs: "center" }}
				width="100%"
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
