"use client";

import { motion } from "motion/react";
import { Box, Typography, Container, Grid, Card, AspectRatio } from "@mui/joy";
import { Search, UserCheck, MessagesSquare, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const steps = [
    {
        icon: <Search size={24} />,
        title: "Discover Talent",
        description:
            "Browse profiles of skilled developers filtered by technology, experience, and availability.",
        image: "/images/Feature1.webp",
    },
    {
        icon: <UserCheck size={24} />,
        title: "Review Projects",
        description:
            "Examine their portfolio of work and evaluate their expertise through real projects.",
        image: "/images/Feature2.webp",
    },
    {
        icon: <MessagesSquare size={24} />,
        title: "Connect Directly",
        description:
            "Reach out to developers directly to discuss your project requirements and expectations.",
        image: "/images/Feature3.webp",
    },
    {
        icon: <CheckCircle2 size={24} />,
        title: "Hire with Confidence",
        description:
            "Make informed hiring decisions based on verified skills and portfolio evidence.",
        image: "/images/Feature4.webp",
    },
];

export default function HowItWorksSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "background.surface",
            }}
        >
            <Container>
                <Box sx={{ textAlign: "center", mb: 8 }}>
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
                            How it works
                        </Typography>
                        <Typography
                            level="h2"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                        >
                            Simple steps to find your ideal developer
                        </Typography>
                        <Typography
                            level="body-lg"
                            sx={{
                                color: "text.secondary",
                                maxWidth: "650px",
                                mx: "auto",
                            }}
                        >
                            Our platform makes it easy to discover, evaluate,
                            and connect with talented developers for your
                            projects.
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={4}>
                    {steps.map((step, index) => (
                        <Grid key={index} xs={12} sm={6} md={3}>
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
                                    sx={{
                                        p: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "md",
                                            transform: "translateY(-8px)",
                                        },
                                    }}
                                >
                                    <AspectRatio
                                        ratio="16/9"
                                        sx={{
                                            width: "100%",
                                            mb: 2,
                                            borderRadius: "md",
                                            overflow: "hidden",
                                            maxHeight: "140px",
                                        }}
                                    >
                                        <Image
                                            src={step.image}
                                            alt={step.title}
                                            style={{ objectFit: "cover" }}
                                            width={512}
                                            height={512}
                                            loading="lazy"
                                        />
                                    </AspectRatio>

                                    <Box
                                        sx={{
                                            mb: 2,
                                            p: 1.5,
                                            borderRadius: "50%",
                                            width: "fit-content",
                                            bgcolor: "primary.50",
                                            color: "primary.500",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {step.icon}
                                    </Box>

                                    <Typography
                                        level="title-lg"
                                        sx={{ mb: 1, fontWeight: 600 }}
                                    >
                                        {step.title}
                                    </Typography>

                                    <Typography
                                        level="body-md"
                                        sx={{
                                            color: "text.secondary",
                                            flexGrow: 1,
                                            textAlign: "center",
                                        }}
                                    >
                                        {step.description}
                                    </Typography>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
