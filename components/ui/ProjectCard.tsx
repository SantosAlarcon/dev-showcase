import { Project } from "@/types/types";
import * as motion from "motion/react-client";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import {
    AspectRatio,
    Button,
    Card,
    Chip,
    Grid,
    Link,
    Stack,
    Typography,
} from "@mui/joy";

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Grid xs={12} md={4}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                }}
            >
                <Card
                    variant="outlined"
                    sx={{
                        height: "100%",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            boxShadow: "md",
                            transform: "translateY(-5px)",
                        },
                    }}
                >
                    <AspectRatio ratio="16/9" sx={{ mb: 2 }}>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            loading="lazy"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </AspectRatio>
                    <Typography
                        level="title-lg"
                        sx={{ mb: 1 }}
                        fontWeight={700}
                    >
                        <Link
                            href={`/project/${project.$id}`}
                            underline="none"
                            sx={{ color: "inherit" }}
                        >
                            {project.title}
                        </Link>
                    </Typography>
                    <Typography
                        level="body-sm"
                        sx={{
                            mb: 2,
                            color: "text.secondary",
                        }}
                    >
                        {project.description}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{
                            flexWrap: "wrap",
                            gap: 1,
                            mb: 2,
                        }}
                    >
                        {project.technologies.map((tech) => (
                            <Chip
                                key={tech}
                                size="sm"
                                variant="soft"
                                sx={{ px: 1.5 }}
                            >
                                {tech}
                            </Chip>
                        ))}
                    </Stack>
                    <Stack spacing={2} sx={{ mt: "auto" }}>
                        {project.githubRepo && (
                            <Button
                                component="a"
                                href={project.githubRepo}
                                variant="solid"
                                target="_blank"
                                aria-label="View on GitHub"
                                startDecorator={<GitHubIcon />}
                                sx={{ mt: "auto", backgroundColor: "black" }}
                            >
                                View on GitHub
                            </Button>
                        )}
                        {project.liveSite && (
                            <Button
                                component="a"
                                href={project.liveSite}
                                variant="solid"
                                color="primary"
                                aria-label="View live site"
                                target="_blank"
                                startDecorator={<OpenInNewIcon />}
                                sx={{ mt: "auto" }}
                            >
                                View Live Site
                            </Button>
                        )}
                    </Stack>
                </Card>
            </motion.div>
        </Grid>
    );
};

export default ProjectCard;
