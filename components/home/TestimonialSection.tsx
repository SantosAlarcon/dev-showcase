import * as motion from "motion/react-client";
import { Box, Typography, Container, Grid } from "@mui/joy";
import TestimonialCard from "../ui/TestimonialCard";

const testimonials = [
    {
        id: 1,
        content:
            "DevShowcase helped me find the perfect developer for our e-commerce project. The ability to review actual projects and code samples made all the difference in our selection process.",
        author: {
            name: "Emma Wilson",
            role: "CTO, RetailTech Inc.",
            avatar: "/images/Testimonial1.webp",
        },
    },
    {
        id: 2,
        content:
            "As a developer, this platform has been incredible for showcasing my work and connecting with companies that value my specific skill set. I landed a dream contract within two weeks of creating my profile.",
        author: {
            name: "Michael Reeves",
            role: "Full Stack Developer",
            avatar: "/images/Testimonial2.webp",
        },
    },
    {
        id: 3,
        content:
            "The quality of talent on DevShowcase exceeds any other platform we've used.We built our entire development team through connections made here, and it's been transformative for our startup.",
        author: {
            name: "Sarah Chang",
            role: "Founder, InnovateSoft",
            avatar: "/images/Testimonial3.jpeg",
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
                                color: "text.primary",
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
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
