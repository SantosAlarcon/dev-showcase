import ProjectNotFound from "@/components/layout/ProjectNotFound";
import { Avatar, Box, Chip, Link, Typography } from "@mui/joy";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "@/styles/project.css";
import { address } from "@/constants/endpoints";
import { getDeveloperByIdUseCase } from "@/src/config";
import { QueryClient } from "@tanstack/react-query";

export const revalidate = 3600;

export default async function ProjectProfile(props: {
    params: Promise<{ id: string }>;
}) {
	const queryClient = new QueryClient();
    const { id } = await props.params;

	const project = await queryClient.fetchQuery({
		queryKey: ["projects", id],
		queryFn: () =>
			fetch(`${address}/api/projects/${id}`).then((res) => res.json()),
	});

    const developer = await queryClient.fetchQuery({
        queryKey: ["developer", project.developerId],
        queryFn: () =>
            getDeveloperByIdUseCase.execute(project.developerId),
    });

    if (!project) return <ProjectNotFound />;
    return (
        <Box
            py={{ xs: 4, md: 12 }}
            px="2"
            width={{ xs: "90%" }}
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
            <Typography
                level="title-sm"
                sx={{
                    textAlign: "center",
                }}
            >
                {project.description}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    py: 2,
                    color: "text.primary",
                }}
            >
                <Avatar
                    src={developer.avatar}
                    alt={developer.name + developer.surname}
                />{" "}
                <Link
                    href={`/developer/${developer.slug}`}
                    aria-label={`Go to ${developer.name} ${developer.surname}'s profile`}
                >
                    {developer.name} {developer.surname}
                </Link>{" "}
                - <b>Published on</b>{" "}
                {new Date(project.publishedDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </Box>
            <Image
                className="project__markdown__cover"
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                loading="lazy"
            />
            <Box
                width={"100%"}
                className="markdown-body"
                sx={{ color: "text.primary" }}
            >
                <Markdown remarkPlugins={[remarkGfm]}>{project.story}</Markdown>
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
                    {project.technologies.map((tech: string, index: number) => (
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
