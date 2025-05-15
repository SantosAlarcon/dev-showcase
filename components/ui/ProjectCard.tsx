import { Project } from "@/types/types";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Chip from "@mui/joy/Chip";
import Grid from "@mui/joy/Grid";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import { motion } from "motion/react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

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
                        <img
                            src={project.image}
                            alt={project.title}
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </AspectRatio>
                    <Typography level="title-md" sx={{ mb: 1 }}>
                        {project.title}
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
                            gap: 0.5,
                            mb: 2,
                        }}
                    >
                        {project.technologies.map((tech) => (
                            <Chip key={tech} size="sm" variant="soft" sx={{ px: 2 }}>
                                {tech}
                            </Chip>
                        ))}
                    </Stack>
                    <Button
                        component="a"
                        href={project.link}
                        variant="solid"
                        color="primary"
                        endDecorator={<OpenInNewIcon />}
                        sx={{ mt: "auto" }}
                    >
                        View Project
                    </Button>
                </Card>
            </motion.div>
        </Grid>
    );
};

export default ProjectCard;
