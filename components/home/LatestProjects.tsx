import * as motion from "motion/react-client";
import Link from "next/link";
import { Box, Typography, Container, Grid, Button } from "@mui/joy";
import { ChevronRight } from "lucide-react";
import { Project } from "@/types/types";
import GridProjectCard from "../ui/GridProjectCard";
import { getLatestProjects } from "@/services/projects/getLatestProjects";

export default async function LatestProjects() {
	const projectList = await getLatestProjects();

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                px: 2,
                bgcolor: "background.surface",
            }}
        >
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: { xs: "flex-start", sm: "center" },
                        flexDirection: { xs: "column", sm: "row" },
                        mb: 6,
                        gap: 2,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <Typography
                            level="title-md"
                            sx={{
                                color: "primary.500",
                                fontWeight: 600,
                                mb: 1,
                            }}
                        >
                            Showcase
                        </Typography>
                        <Typography
                            level="h2"
                            sx={{
                                mb: { xs: 1, sm: 0 },
                                fontWeight: 700,
                                fontSize: { xs: "1.75rem", md: "2.25rem" },
                            }}
                        >
                            Featured Projects
                        </Typography>
                    </motion.div>

                    <Button
                        component={Link}
                        href="/projects"
                        variant="outlined"
                        color="neutral"
                        endDecorator={<ChevronRight size={16} />}
                    >
                        View All Projects
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {projectList.map((project, index: number) => (
                        <GridProjectCard key={project.$id} project={project} index={index} />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
