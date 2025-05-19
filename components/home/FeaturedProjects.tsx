"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    Stack,
    Chip,
    AspectRatio,
    Button,
    CardContent,
    CardOverflow,
} from "@mui/joy";
import { ChevronRight, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description:
            "A full-featured online store with product management, cart functionality, and secure payments.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        developer: {
            name: "Alex Johnson",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
        id: 2,
        title: "Finance Dashboard",
        description:
            "An analytics dashboard for tracking investments, expenses, and financial goals with data visualization.",
        image: "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        developer: {
            name: "Samantha Chen",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        technologies: ["Vue.js", "Firebase", "D3.js", "Tailwind CSS"],
    },
    {
        id: 3,
        title: "Fitness Mobile App",
        description:
            "A cross-platform mobile application for workout tracking, nutrition planning, and progress monitoring.",
        image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        developer: {
            name: "David Martinez",
            avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        technologies: ["React Native", "GraphQL", "Auth0", "Firebase"],
    },
    {
        id: 4,
        title: "Project Management Tool",
        description:
            "A collaborative platform for teams to manage tasks, track progress, and coordinate workflows.",
        image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        developer: {
            name: "Mira Patel",
            avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        technologies: ["Python", "Django", "PostgreSQL", "WebSockets"],
    },
];

export default function FeaturedProjects() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
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
                    {projects.map((project, index) => (
                        <Grid key={project.id} xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                            >
                                <Card
                                    variant="outlined"
                                    orientation="horizontal"
                                    sx={{
                                        flexDirection: {
                                            xs: "column",
                                            sm: "row",
                                        },
                                        height: "100%",
                                        overflow: "hidden",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "md",
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    <CardOverflow
                                        sx={{
                                            width: { xs: "100%", sm: "45%" },
                                            minHeight: {
                                                xs: "200px",
                                                sm: "auto",
                                            },
                                        }}
                                    >
                                        <AspectRatio
                                            ratio={{ xs: "16/9", sm: "1" }}
                                            sx={{ height: "100%" }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{ objectFit: "cover" }}
                                            />
                                        </AspectRatio>
                                    </CardOverflow>

                                    <CardContent>
                                        <Typography
                                            level="title-md"
                                            sx={{ mb: 1, fontWeight: 600 }}
                                        >
                                            {project.title}
                                        </Typography>

                                        <Typography
                                            level="body-sm"
                                            sx={{
                                                color: "text.secondary",
                                                mb: 2,
                                            }}
                                        >
                                            {project.description}
                                        </Typography>

                                        <Stack
                                            direction="row"
                                            spacing={1}
                                            useFlexGap
                                            sx={{
                                                mb: 2,
                                                flexWrap: "wrap",
                                                gap: 0.5,
                                            }}
                                        >
                                            {project.technologies.map(
                                                (tech) => (
                                                    <Chip
                                                        key={tech}
                                                        size="sm"
                                                        variant="soft"
                                                    >
                                                        {tech}
                                                    </Chip>
                                                ),
                                            )}
                                        </Stack>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 1,
                                                mb: 2,
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={project.developer.avatar}
                                                alt={project.developer.name}
                                                sx={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: "50%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                            <Typography level="body-xs">
                                                by {project.developer.name}
                                            </Typography>
                                        </Box>

                                        <Button
                                            component={Link}
                                            href={`/project/${project.id}`}
                                            variant="solid"
                                            color="primary"
                                            size="sm"
                                            endDecorator={
                                                <ExternalLink size={14} />
                                            }
                                            sx={{ mt: "auto" }}
                                        >
                                            View Project
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
