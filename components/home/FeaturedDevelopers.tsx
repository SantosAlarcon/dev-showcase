"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    Avatar,
    Chip,
    Stack,
    IconButton,
    AspectRatio,
    Button,
    CardOverflow,
    CardContent,
} from "@mui/joy";
import { ChevronRight, ExternalLink, MessageCircle, Heart } from "lucide-react";

const developers = [
    {
        id: 1,
        name: "Alex Johnson",
        title: "Full Stack Developer",
        location: "San Francisco, CA",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        coverImage:
            "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        skills: ["React", "Node.js", "TypeScript", "MongoDB"],
        rating: 4.9,
        reviews: 28,
        isAvailable: true,
    },
    {
        id: 2,
        name: "Samantha Chen",
        title: "Frontend Developer",
        location: "New York, NY",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        coverImage:
            "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        skills: ["React", "Vue.js", "JavaScript", "CSS/SASS"],
        rating: 4.8,
        reviews: 16,
        isAvailable: true,
    },
    {
        id: 3,
        name: "David Martinez",
        title: "Mobile Developer",
        location: "Austin, TX",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        coverImage:
            "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        skills: ["React Native", "Flutter", "Kotlin", "Swift"],
        rating: 4.7,
        reviews: 20,
        isAvailable: false,
    },
    {
        id: 4,
        name: "Mira Patel",
        title: "Backend Developer",
        location: "Seattle, WA",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        coverImage:
            "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        skills: ["Python", "Django", "PostgreSQL", "AWS"],
        rating: 5.0,
        reviews: 31,
        isAvailable: true,
    },
];

export default function FeaturedDevelopers() {
    const [likedDevelopers, setLikedDevelopers] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        if (likedDevelopers.includes(id)) {
            setLikedDevelopers(likedDevelopers.filter((devId) => devId !== id));
        } else {
            setLikedDevelopers([...likedDevelopers, id]);
        }
    };

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                bgcolor: "background.body",
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
                            Top Talent
                        </Typography>
                        <Typography
                            level="h2"
                            sx={{
                                mb: { xs: 1, sm: 0 },
                                fontWeight: 700,
                                fontSize: { xs: "1.75rem", md: "2.25rem" },
                            }}
                        >
                            Featured Developers
                        </Typography>
                    </motion.div>

                    <Button
                        component={Link}
                        href="/discover"
                        variant="outlined"
                        color="neutral"
                        endDecorator={<ChevronRight size={16} />}
                    >
                        View All Developers
                    </Button>
                </Box>

                <Grid container spacing={3}>
                    {developers.map((developer, index) => (
                        <Grid key={developer.id} xs={12} md={6} lg={3}>
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
                                        height: "100%",
                                        overflow: "hidden",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            boxShadow: "md",
                                            transform: "translateY(-5px)",
                                        },
                                    }}
                                >
                                    <CardOverflow>
                                        <AspectRatio ratio="21/9">
                                            <img
                                                src={developer.coverImage}
                                                alt={`${developer.name}'s cover`}
                                                style={{ objectFit: "cover" }}
                                            />
                                        </AspectRatio>
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 12,
                                                right: 12,
                                                display: "flex",
                                                gap: 1,
                                            }}
                                        >
                                            {developer.isAvailable && (
                                                <Chip
                                                    variant="soft"
                                                    size="sm"
                                                    color="success"
                                                    sx={{
                                                        borderRadius: "pill",
                                                        px: 1,
                                                    }}
                                                >
                                                    Available
                                                </Chip>
                                            )}
                                        </Box>
                                    </CardOverflow>

                                    <CardContent>
                                        <Box
                                            sx={{
                                                mt: -5,
                                                display: "flex",
                                                alignItems: "flex-end",
                                                justifyContent: "space-between",
                                            }}
                                        >
                                            <Avatar
                                                src={developer.avatar}
                                                alt={developer.name}
                                                size="lg"
                                                sx={{
                                                    border: "3px solid",
                                                    borderColor:
                                                        "background.surface",
                                                    width: 64,
                                                    height: 64,
                                                }}
                                            />
                                            <Box
                                                sx={{ display: "flex", gap: 1 }}
                                            >
                                                <IconButton
                                                    variant="soft"
                                                    size="sm"
                                                    color={
                                                        likedDevelopers.includes(
                                                            developer.id,
                                                        )
                                                            ? "danger"
                                                            : "neutral"
                                                    }
                                                    onClick={() =>
                                                        toggleLike(developer.id)
                                                    }
                                                >
                                                    <Heart
                                                        size={16}
                                                        fill={
                                                            likedDevelopers.includes(
                                                                developer.id,
                                                            )
                                                                ? "currentColor"
                                                                : "none"
                                                        }
                                                    />
                                                </IconButton>
                                                <IconButton
                                                    component={Link}
                                                    href={`/message/${developer.id}`}
                                                    variant="soft"
                                                    size="sm"
                                                >
                                                    <MessageCircle size={16} />
                                                </IconButton>
                                            </Box>
                                        </Box>

                                        <Typography
                                            level="title-md"
                                            sx={{ mt: 2, fontWeight: 600 }}
                                        >
                                            {developer.name}
                                        </Typography>

                                        <Typography
                                            level="body-sm"
                                            sx={{
                                                color: "text.secondary",
                                                mb: 1,
                                            }}
                                        >
                                            {developer.title} •{" "}
                                            {developer.location}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                                mb: 2,
                                            }}
                                        >
                                            {Array(5)
                                                .fill(0)
                                                .map((_, i) => (
                                                    <Box
                                                        key={i}
                                                        component="span"
                                                        sx={{
                                                            display:
                                                                "inline-block",
                                                            width: 12,
                                                            height: 12,
                                                            borderRadius: "50%",
                                                            bgcolor:
                                                                i <
                                                                Math.floor(
                                                                    developer.rating,
                                                                )
                                                                    ? "warning.400"
                                                                    : "neutral.200",
                                                        }}
                                                    />
                                                ))}
                                            <Typography
                                                level="body-xs"
                                                sx={{ ml: 0.5 }}
                                            >
                                                {developer.rating} (
                                                {developer.reviews} reviews)
                                            </Typography>
                                        </Box>

                                        <Stack
                                            direction="row"
                                            flexWrap="wrap"
                                            spacing={1}
                                            useFlexGap
                                            sx={{ mb: 2, gap: 0.5 }}
                                        >
                                            {developer.skills
                                                .slice(0, 4)
                                                .map((skill) => (
                                                    <Chip
                                                        key={skill}
                                                        size="sm"
                                                        variant="soft"
                                                    >
                                                        {skill}
                                                    </Chip>
                                                ))}
                                        </Stack>

                                        <Button
                                            component={Link}
                                            href={`/developer/${developer.id}`}
                                            fullWidth
                                            variant="solid"
                                            color="primary"
                                            endDecorator={
                                                <ExternalLink size={14} />
                                            }
                                            sx={{ mt: "auto" }}
                                        >
                                            View Profile
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
