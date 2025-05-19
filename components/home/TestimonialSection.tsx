"use client";

import { motion } from "motion/react";
import { Box, Typography, Container, Card, Avatar, Grid } from "@mui/joy";

const testimonials = [
    {
        id: 1,
        content:
            "DevShowcase helped me find the perfect developer for our e-commerce project. The ability to review actual projects and code samples made all the difference in our selection process.",
        author: {
            name: "Emma Wilson",
            role: "CTO, RetailTech Inc.",
            avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    },
    {
        id: 2,
        content:
            "As a developer, this platform has been incredible for showcasing my work and connecting with companies that value my specific skill set. I landed a dream contract within two weeks of creating my profile.",
        author: {
            name: "Michael Reeves",
            role: "Full Stack Developer",
            avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    },
    {
        id: 3,
        content:
            "The quality of talent on DevShowcase exceeds any other platform we've used.We built our entire development team through connections made here, and it's been transformative for our startup.",
        author: {
            name: "Sarah Chang",
            role: "Founder, InnovateSoft",
            avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
    },
];

export default function TestimonialSection() {
    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "background.body",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background elements */}
            <Box
                sx={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    background:
                        "radial-gradient(circle, rgba(33, 150, 243, 0.05) 0%, rgba(33, 150, 243, 0) 70%)",
                    bottom: "-250px",
                    left: "-250px",
                    borderRadius: "50%",
                    zIndex: 0,
                }}
            />

            <Container sx={{ position: "relative", zIndex: 1 }}>
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
                            Testimonials
                        </Typography>
                        <Typography
                            level="h2"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                fontSize: { xs: "2rem", md: "2.5rem" },
                            }}
                        >
                            What our users say
                        </Typography>
                        <Typography
                            level="body-lg"
                            sx={{
                                color: "text.secondary",
                                maxWidth: "650px",
                                mx: "auto",
                            }}
                        >
                            Hear from recruiters and developers who have found
                            success through our platform.
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={4}>
                    {testimonials.map((testimonial, index) => (
                        <Grid key={testimonial.id} xs={12} md={4}>
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
                                    variant="soft"
                                    sx={{
                                        p: 4,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        position: "relative",
                                        overflow: "visible",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-8px)",
                                        },
                                        "&::before": {
                                            content: '"""',
                                            position: "absolute",
                                            top: -30,
                                            left: 20,
                                            fontSize: "6rem",
                                            lineHeight: 1,
                                            fontFamily: "serif",
                                            color: "primary.200",
                                            opacity: 0.5,
                                        },
                                    }}
                                >
                                    <Typography
                                        level="body-md"
                                        sx={{
                                            mb: 3,
                                            fontStyle: "italic",
                                            position: "relative",
                                            zIndex: 1,
                                        }}
                                    >
                                        "{testimonial.content}"
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            mt: "auto",
                                        }}
                                    >
                                        <Avatar
                                            src={testimonial.author.avatar}
                                            alt={testimonial.author.name}
                                        />
                                        <Box>
                                            <Typography
                                                level="title-sm"
                                                sx={{ fontWeight: 600 }}
                                            >
                                                {testimonial.author.name}
                                            </Typography>
                                            <Typography
                                                level="body-xs"
                                                sx={{ color: "text.secondary" }}
                                            >
                                                {testimonial.author.role}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
