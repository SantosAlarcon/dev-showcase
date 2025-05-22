"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
} from "@mui/joy";
import { ChevronRight } from "lucide-react";

import GridDeveloperCard from "../ui/GridDeveloperCard";
import developersData from "@/data/mockDeveloperData";

export default function FeaturedDevelopers() {
    const [likedDevelopers, setLikedDevelopers] = useState<string[]>([]);

    const toggleLike = (id: string) => {
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
                    {developersData.map((developer, index) => (
                        <Grid key={developer.id} xs={12} md={6} lg={3}>
							<GridDeveloperCard developer={developer} index={index} toggleLike={() => toggleLike(developer.id)} isLiked={likedDevelopers.includes(developer.id)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
