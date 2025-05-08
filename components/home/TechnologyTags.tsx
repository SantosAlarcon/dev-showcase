"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Container, Chip, Stack } from "@mui/joy";

const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "FastAPI",
    "Ruby",
    "Rails",
    "PHP",
    "Laravel",
    "Java",
    "Spring Boot",
    "Kotlin",
    "Swift",
    "Flutter",
    "React Native",
    "C#",
    ".NET",
    "Go",
    "Rust",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
];

export default function TechnologyTags() {
    const [selectedTech, setSelectedTech] = useState<string | null>(null);

    const handleTechClick = (tech: string) => {
        setSelectedTech(tech === selectedTech ? null : tech);
    };

    return (
        <Box
            sx={{
                py: 8,
                bgcolor: "background.body",
            }}
        >
            <Container>
                <Box sx={{ textAlign: "center", mb: 6 }}>
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
                            Browse by technology
                        </Typography>
                        <Typography
                            level="h3"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                            }}
                        >
                            Find developers by expertise
                        </Typography>
                        <Typography
                            level="body-md"
                            sx={{
                                color: "text.secondary",
                                maxWidth: "600px",
                                mx: "auto",
                            }}
                        >
                            Discover talent specialized in the technologies you
                            need for your project.
                        </Typography>
                    </motion.div>
                </Box>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        useFlexGap
                        spacing={1}
                        sx={{
                            gap: 1,
                            justifyContent: "center",
                        }}
                    >
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.03,
                                }}
                                viewport={{ once: true }}
                            >
                                <Chip
                                    variant={
                                        selectedTech === tech ? "solid" : "soft"
                                    }
                                    color={
                                        selectedTech === tech
                                            ? "primary"
                                            : "neutral"
                                    }
                                    onClick={() => handleTechClick(tech)}
                                    sx={{
                                        cursor: "pointer",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            boxShadow:
                                                "0 2px 8px rgba(0, 0, 0, 0.1)",
                                            transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    {tech}
                                </Chip>
                            </motion.div>
                        ))}
                    </Stack>
                </motion.div>
            </Container>
        </Box>
    );
}
