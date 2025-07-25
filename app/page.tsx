import * as motion from "motion/react-client";
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Stack,
    Chip,
    AspectRatio,
} from "@mui/joy";
import { Search, ChevronRight } from "lucide-react";
import FeaturedDevelopers from "@/components/home/FeaturedDevelopers";
import TestimonialSection from "@/components/home/TestimonialSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import TechnologyTags from "@/components/home/TechnologyTags";

import Image from "next/image";
import BaseLayout from "@/components/layout/BaseLayout";
import LatestProjects from "@/components/home/LatestProjects";
import { AppwriteAuthRepository } from "@/src/infrastructure/data/AppwriteAuthRepository";
import { GetCurrentUserUseCase } from "@/src/application/use-cases/auth/GetCurrentUserUseCase";

export default async function Home() {
    const authRepository = new AppwriteAuthRepository();
    const getCurrentUserCase = new GetCurrentUserUseCase(authRepository);
    const user = await getCurrentUserCase.execute();
	console.log(user);

    return (
        <BaseLayout>
            <Box sx={{ overflow: "hidden" }}>
                {/* Hero Section */}
                <Box
                    sx={{
                        position: "relative",
                        bgcolor: "background.surface",
                        pt: { xs: 10, md: 16 },
                        pb: { xs: 8, md: 12 },
                        px: 2,
                    }}
                >
                    <Container maxWidth="lg">
                        <Grid container spacing={4} alignItems="center">
                            <Grid xs={12} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Typography
                                        level="h1"
                                        sx={{
                                            fontSize: {
                                                xs: "2.5rem",
                                                md: "3.5rem",
                                            },
                                            fontWeight: 800,
                                            lineHeight: 1.2,
                                            mb: 2,
                                        }}
                                    >
                                        Discover{" "}
                                        <Box
                                            component="span"
                                            sx={{
                                                color: "primary.500",
                                                position: "relative",
                                                "&::after": {
                                                    content: '""',
                                                    position: "absolute",
                                                    width: "100%",
                                                    height: "30%",
                                                    bottom: "5px",
                                                    left: 0,
                                                    backgroundColor:
                                                        "primary.100",
                                                    zIndex: -1,
                                                },
                                            }}
                                        >
                                            exceptional
                                        </Box>{" "}
                                        developer talent
                                    </Typography>
                                    <Typography
                                        level="body-lg"
                                        sx={{
                                            color: "text.primary",
                                            mb: 4,
                                            maxWidth: "500px",
                                        }}
                                    >
                                        Connect with skilled developers who can
                                        turn your vision into reality. Browse
                                        portfolios, explore projects, and find
                                        the perfect talent for your team.
                                    </Typography>

                                    <Stack
                                        direction={{ xs: "column", sm: "row" }}
                                        spacing={2}
                                        sx={{ mb: 4 }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                backgroundColor:
                                                    "background.body",
                                                borderRadius: "md",
                                                p: 1,
                                                width: {
                                                    xs: "100%",
                                                    sm: "350px",
                                                },
                                                border: "1px solid",
                                                borderColor: "divider",
                                            }}
                                        >
                                            <Search
                                                size={20}
                                                style={{ marginLeft: "8px" }}
                                            />
                                        </Box>
                                        <Button
                                            size="lg"
                                            color="primary"
                                            endDecorator={
                                                <ChevronRight size={16} />
                                            }
                                        >
                                            Find Developers
                                        </Button>
                                    </Stack>

                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        flexWrap="wrap"
                                        useFlexGap
                                        sx={{ gap: 1 }}
                                    >
                                        <Typography
                                            level="body-sm"
                                            sx={{ color: "text.primary" }}
                                        >
                                            Popular:
                                        </Typography>
                                        <Chip
                                            variant="soft"
                                            size="sm"
                                            sx={{ cursor: "pointer" }}
                                        >
                                            Full Stack
                                        </Chip>
                                        <Chip
                                            variant="soft"
                                            size="sm"
                                            sx={{ cursor: "pointer" }}
                                        >
                                            React
                                        </Chip>
                                        <Chip
                                            variant="soft"
                                            size="sm"
                                            sx={{ cursor: "pointer" }}
                                        >
                                            Python
                                        </Chip>
                                        <Chip
                                            variant="soft"
                                            size="sm"
                                            sx={{ cursor: "pointer" }}
                                        >
                                            Mobile
                                        </Chip>
                                    </Stack>
                                </motion.div>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                >
                                    <AspectRatio
                                        ratio="4/3"
                                        objectFit="cover"
                                        sx={{
                                            borderRadius: "lg",
                                            overflow: "hidden",
                                            boxShadow: "lg",
                                        }}
                                    >
                                        <Image
                                            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                                            alt="Developers collaborating on code"
                                            style={{ objectFit: "cover" }}
                                            width={1024}
                                            height={1024}
                                            priority
                                        />
                                    </AspectRatio>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Stats Section */}
                <Box sx={{ py: 6, bgcolor: "primary.900" }}>
                    <Container>
                        <Grid container spacing={4} justifyContent="center">
                            {[
                                { value: "10,000+", label: "Developers" },
                                { value: "5,000+", label: "Projects" },
                                { value: "2,500+", label: "Companies" },
                                { value: "95%", label: "Success Rate" },
                            ].map((stat, index) => (
                                <Grid xs={6} sm={3} key={index}>
                                    <Box
                                        sx={{
                                            textAlign: "center",
                                            p: 2,
                                        }}
                                    >
                                        <Typography
                                            level="h2"
                                            sx={{
                                                color: "white",
                                                fontWeight: 700,
                                                mb: 1,
                                            }}
                                        >
                                            {stat.value}
                                        </Typography>
                                        <Typography
                                            level="body-md"
                                            sx={{
                                                color: "primary.100",
                                            }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Tech Tags Section */}
                <TechnologyTags />

                {/* How It Works Section */}
                <HowItWorksSection />

                {/* Featured Developers Section */}
                <FeaturedDevelopers />

                {/* Latest Projects Section */}
                <LatestProjects />

                {/* Testimonials Section */}
                <TestimonialSection />

                {/* CTA Section */}
                <Box
                    sx={{
                        py: { xs: 8, md: 12 },
                        bgcolor: "background.surface",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            width: "500px",
                            height: "500px",
                            background:
                                "radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0) 70%)",
                            top: "-250px",
                            right: "-250px",
                            borderRadius: "50%",
                            zIndex: 0,
                        }}
                    />
                    <Container
                        maxWidth="md"
                        sx={{ position: "relative", zIndex: 1 }}
                    >
                        <Box sx={{ textAlign: "center" }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    level="h2"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 800,
                                        fontSize: { xs: "2rem", md: "2.5rem" },
                                    }}
                                >
                                    Ready to find your perfect developer?
                                </Typography>
                                <Typography
                                    level="body-lg"
                                    sx={{
                                        mb: 4,
                                        maxWidth: "650px",
                                        mx: "auto",
                                        color: "text.primary",
                                    }}
                                >
                                    Start browsing our curated collection of top
                                    developer talent or post your project
                                    requirements to get matched with the perfect
                                    candidates.
                                </Typography>
                                <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    spacing={2}
                                    justifyContent="center"
                                >
                                    <Button
                                        variant="solid"
                                        color="primary"
                                        size="lg"
                                        endDecorator={
                                            <ChevronRight size={16} />
                                        }
                                        component="a"
                                        href="/discover"
                                    >
                                        Browse Developers
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="neutral"
                                        size="lg"
                                        component="a"
                                        href="/post-job"
                                    >
                                        Post a Job
                                    </Button>
                                </Stack>
                            </motion.div>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </BaseLayout>
    );
}
