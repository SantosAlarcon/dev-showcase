import * as motion from "motion/react-client";
import Link from "next/link";
import { Box, Typography, Container, Grid, Button } from "@mui/joy";
import { ChevronRight } from "lucide-react";

import GridFeaturedDeveloperCard from "../ui/GridFeaturedDeveloperCard";
import { DeveloperInfo } from "@/src/domain/entities/developer";
import { getFeaturedDevelopersUseCase } from "@/src/config";
import { QueryClient } from "@tanstack/react-query";

export default async function FeaturedDevelopers() {

	const queryClient = new QueryClient();

	const featuredDevelopers = await queryClient.fetchQuery({
		queryKey: ["featuredDevelopers"],
		queryFn: () => getFeaturedDevelopersUseCase.execute(),
	});

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                px: 2,
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
                    {featuredDevelopers.map(
                        (developer: DeveloperInfo, index: number) => (
                            <GridFeaturedDeveloperCard
                                developer={developer}
                                key={developer.$id}
                                index={index}
                            />
                        ),
                    )}
                </Grid>
            </Container>
        </Box>
    );
}
