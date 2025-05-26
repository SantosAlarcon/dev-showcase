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
    Button,
    AspectRatio,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    Divider,
    Tooltip,
    Skeleton,
} from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import TvIcon from "@mui/icons-material/Tv";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WorkIcon from "@mui/icons-material/Work";
import DownloadIcon from "@mui/icons-material/Download";
import ChatIcon from "@mui/icons-material/Chat";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GroupsIcon from "@mui/icons-material/Groups";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { getDeveloperInfo } from "@/utils/developers/getDeveloperInfo";
import { getCurrency } from "@/utils/getCurrency";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/types/types";
import { Suspense } from "react";
import UserNotFound from "@/components/layout/UserNotFound";
import { getProjectsByUser } from "@/utils/projects/getProjectsByUser";
import Image from "next/image";
import Markdown from "react-markdown";

export async function generateMetadata(props: {
    params: Promise<{ params: { id: string } }>;
}) {
    // @ts-ignore
    const { id } = await props.params;
    const developer = getDeveloperInfo(id);

    if (!developer) return { title: "User not found - DevShowcase" };

    return {
        title: `${developer.name} ${developer.surname} - DevShowcase`,
    };
}

export default async function DeveloperProfile(props: {
    params: Promise<{ params: { id: string } }>;
}) {
    const params = await props.params;
    // @ts-ignore
    const { id } = params;
    const developer = getDeveloperInfo(id);
    const projects = getProjectsByUser(id);

    if (!developer) return <UserNotFound />;

    return (
        <Box
            sx={{
                bgcolor: "background.body",
                pb: 8,
            }}
        >
            {/* Cover Image */}
            <Box
                sx={{
                    position: "relative",
                    height: { xs: "180px", md: "280px" },
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <AspectRatio ratio="21/9" sx={{ minHeight: "100%" }}>
                    {developer.bannerImage && (
                        <Image
                            src={developer.bannerImage}
                            alt="Cover"
                            width={1920}
                            height={1080}
                            priority
                            style={{ objectFit: "cover", width: "100%" }}
                        />
                    )}
                </AspectRatio>
            </Box>

            <Container
                maxWidth="xl"
                sx={{
                    display: "flex",
                    gap: 4,
                    mt: -8,
                    flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "column",
                        lg: "row",
                    },
                }}
            >
                {/* Profile Header */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            p: { xs: 2, md: 4 },
                            width: {
                                xs: "100%",
                                sm: "100%",
                                md: "100%",
                                lg: "400px",
                            },
                            borderRadius: "lg",
                            mb: 4,
                        }}
                    >
                        <Grid container spacing={3} alignItems="flex-end">
                            <Grid xs={12} md={12} lg={12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        gap: 2,
                                        mb: 2,
                                    }}
                                >
                                    <Avatar
                                        src={developer.avatar}
                                        alt={developer.name}
                                        sx={{
                                            width: { xs: 96, md: 120 },
                                            height: { xs: 96, md: 120 },
                                            border: "4px solid",
                                            borderColor: "background.surface",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            flexDirection: "column",
                                            width: "100%",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                gap: 2,
                                            }}
                                        >
                                            <Typography
                                                level="h3"
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: {
                                                        xs: "1.5rem",
                                                        md: "2rem",
                                                    },
                                                }}
                                            >
                                                {developer.name}{" "}
                                                {developer.surname}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            level="title-lg"
                                            sx={{
                                                textAlign: "center",
                                                color: "text.secondary",
                                                mb: 1,
                                            }}
                                        >
                                            {developer.title}
                                        </Typography>
                                        {( developer.availability === "Freelance" || developer.availability === "Full-time" ) && (
                                            <Chip
                                                variant="soft"
                                                size="md"
                                                color="success"
                                                sx={{
                                                    alignSelf: "center",
                                                    borderRadius: "10rem",
                                                    py: 1,
                                                    px: 2,
                                                    mb: 1,
                                                }}
                                                startDecorator={"●"}
                                            >
                                                Available for hire
                                            </Chip>
                                        )}

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "start",
                                                justifyContent: "start",
                                                flexDirection: "column",
                                                gap: 1,
                                                my: 2,
                                                fontSize: "1.3rem",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                <LocationPinIcon htmlColor="inherit" />
                                                <Typography
                                                    level="body-sm"
                                                    textColor="inherit"
                                                >
                                                    {developer.city},{" "}
                                                    {developer.state},{" "}
                                                    {developer.country}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                <WorkIcon htmlColor="inherit" />
                                                <Typography
                                                    level="body-sm"
                                                    textColor="inherit"
                                                >
                                                    experience
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                <CalendarMonthIcon htmlColor="inherit" />
                                                <Typography
                                                    level="body-sm"
                                                    textColor="inherit"
                                                >
                                                    Joined on{" "}
                                                    {new Date(
                                                        developer.memberSince,
                                                    ).toLocaleDateString(
                                                        "en-US",
                                                        {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        },
                                                    )}
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: 1,
                                                    alignItems: "center",
                                                }}
                                            >
                                                <GroupsIcon htmlColor="inherit" />
                                                <Typography
                                                    level="body-sm"
                                                    textColor={"inherit"}
                                                >
                                                    {developer.followers}
                                                </Typography>
                                            </Box>
                                            {developer.freelancer && (
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        gap: 1,
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <AttachMoneyIcon htmlColor="inherit" />
                                                    <Typography
                                                        level="body-sm"
                                                        textColor="inherit"
                                                    >
                                                        {
                                                            developer.freelancer
                                                                .hourlyRate
                                                        }
                                                        {`${getCurrency(new Date().toLocaleString().slice(0, 2))}`}{" "}
                                                        / hour
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            {developer.social.github && (
                                                <IconButton
                                                    component="a"
                                                    href={
                                                        developer.social.github
                                                    }
                                                    aria-label="GitHub"
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="GitHub"
                                                        variant="solid"
                                                    >
                                                        <GitHubIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}
                                            {developer.social.linkedin && (
                                                <IconButton
                                                    component="a"
                                                    href={
                                                        developer.social
                                                            .linkedin
                                                    }
                                                    aria-label="LinkedIn"
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="LinkedIn"
                                                        variant="solid"
                                                    >
                                                        <LinkedInIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}
                                            {developer.social.facebook && (
                                                <IconButton
                                                    component="a"
                                                    aria-label="Facebook"
                                                    href={
                                                        developer.social
                                                            .facebook
                                                    }
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="Facebook"
                                                        variant="solid"
                                                    >
                                                        <FacebookIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}
                                            {developer.social.twitter && (
                                                <IconButton
                                                    component="a"
                                                    aria-label="Twitter"
                                                    href={
                                                        developer.social.twitter
                                                    }
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="Twitter"
                                                        variant="solid"
                                                    >
                                                        <TwitterIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}
                                            {developer.social.instagram && (
                                                <IconButton
                                                    component="a"
                                                    aria-label="Instagram"
                                                    href={
                                                        developer.social
                                                            .instagram
                                                    }
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="Instagram"
                                                        variant="solid"
                                                    >
                                                        <InstagramIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}
                                            {developer.social.devto && (
                                                <IconButton
                                                    component="a"
                                                    aria-label="Instagram"
                                                    href={
                                                        developer.social.devto
                                                    }
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="Dev.to"
                                                        variant="solid"
                                                    >
                                                        <LogoDevIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}
                                            {developer.social.youtube && (
                                                <IconButton
                                                    component="a"
                                                    aria-label="YouTube"
                                                    href={
                                                        developer.social.devto
                                                    }
                                                    target="_blank"
                                                    variant="plain"
                                                    size="md"
                                                >
                                                    <Tooltip
                                                        title="YouTube"
                                                        variant="solid"
                                                    >
                                                        <YouTubeIcon htmlColor="inherit" />
                                                    </Tooltip>
                                                </IconButton>
                                            )}

                                            <IconButton
                                                component="a"
                                                href={
                                                    developer.social.portfolio
                                                }
                                                aria-label="Portfolio"
                                                target="_blank"
                                                variant="plain"
                                                size="md"
                                            >
                                                <Tooltip
                                                    title="Portfolio"
                                                    variant="solid"
                                                >
                                                    <OpenInNewIcon htmlColor="inherit" />
                                                </Tooltip>
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid xs={12} md={12} lg={12}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "row",
                                            md: "column",
                                        },
                                        gap: 2,
                                        justifyContent: {
                                            xs: "center",
                                            md: "center",
                                        },
                                        alignItems: {
                                            xs: "center",
                                            md: "center",
                                        },
                                    }}
                                >
                                    <Stack
                                        direction="column"
                                        spacing={2}
                                        width="100%"
                                    >
                                        <Button
                                            component={Link}
                                            href={`/message/${developer.id}`}
                                            variant="solid"
                                            color="primary"
                                            startDecorator={<ChatIcon />}
                                            size="lg"
                                            aria-label="Contact Me"
                                            sx={{
                                                padding: ".75rem 0",
                                                borderRadius: "10rem",
                                            }}
                                        >
                                            Contact Me
                                        </Button>
                                        <IconButton
                                            variant="soft"
                                            color="neutral"
                                            size="lg"
                                            aria-label="Share button"
                                            sx={{
                                                padding: ".75rem 0",
                                                borderRadius: "10rem",
                                            }}
                                        >
                                            <ShareOutlinedIcon />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Card>
                </Box>

                {/* Content Tabs */}
                <Tabs sx={{ mb: 4, width: "100%" }} selectionFollowsFocus>
                    <TabList
                        variant="plain"
                        sx={{
                            p: 0,
                            gap: 2,
                            mb: 2,
                            "--Tab-indicatorThickness": "3px",
                            "--Tab-indicatorColor":
                                "var(--joy-palette-primary-500)",
                        }}
                    >
                        <Tab sx={{ color: "inherit" }}>About</Tab>
                        <Tab sx={{ color: "inherit" }}>Projects</Tab>
                        <Tab sx={{ color: "inherit" }}>Experience</Tab>
                        <Tab sx={{ color: "inherit" }}>Skills</Tab>
                    </TabList>

                    <TabPanel value={0}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography
                                level="title-lg"
                                sx={{ mb: 2 }}
                                fontWeight={700}
                                fontSize={"1.5rem"}
                            >
                                About Me
                            </Typography>
                            <Typography
                                level="body-md"
                                sx={{ mb: 4, whiteSpace: "pre-line" }}
                            >
                                {developer.bio}
                            </Typography>

                            <Grid container spacing={4}>
                                <Grid xs={12} md={6}>
                                    <Typography
                                        level="title-md"
                                        sx={{ mb: 2 }}
                                        fontWeight={700}
                                        fontSize={"1.25rem"}
                                    >
                                        Languages
                                    </Typography>
                                    <Stack spacing={1} sx={{ mb: 4 }}>
                                        {developer.languages.map(
                                            (language, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 1,
                                                    }}
                                                >
                                                    <LanguageIcon />
                                                    <Typography level="body-md">
                                                        {language}
                                                    </Typography>
                                                </Box>
                                            ),
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid xs={12} md={6}>
                                    <Typography
                                        level="title-md"
                                        sx={{ mb: 2 }}
                                        fontWeight={700}
                                        fontSize={"1.25rem"}
                                    >
                                        Contact Information
                                    </Typography>
                                    <Stack spacing={1} sx={{ mb: 4 }}>
                                        <Button
                                            component="a"
                                            href={`mailto:${developer.email}`}
                                            variant="plain"
                                            color="neutral"
                                            startDecorator={<MailOutlineIcon />}
                                            sx={{
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            {developer.email}
                                        </Button>
                                        <Button
                                            component="a"
                                            href={developer.social.portfolio}
                                            target="_blank"
                                            variant="plain"
                                            color="neutral"
                                            startDecorator={<OpenInNewIcon />}
                                            sx={{
                                                justifyContent: "flex-start",
                                            }}
                                        >
                                            {developer.social.portfolio}
                                        </Button>
                                    </Stack>

                                    <Button
                                        variant="soft"
                                        color="primary"
                                        startDecorator={<DownloadIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Download Resume
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </TabPanel>

                    <TabPanel value={1}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography
                                level="title-lg"
                                sx={{ mb: 3 }}
                                fontWeight={700}
                                fontSize={"1.5rem"}
                            >
                                Projects
                            </Typography>
                            <Grid container spacing={3}>
                                {projects.length > 0 ? (
                                    projects?.map((project: Project) => (
                                        <Suspense
                                            key={project.title}
                                            fallback={
                                                <Skeleton
                                                    variant="rectangular"
                                                    width="100%"
                                                    height="100%"
                                                />
                                            }
                                        >
                                            <ProjectCard
                                                key={project.title}
                                                project={project}
                                            />
                                        </Suspense>
                                    ))
                                ) : (
                                    <Typography level="body-md" sx={{ mb: 4 }}>
                                        This user has no projects yet.
                                    </Typography>
                                )}
                            </Grid>
                        </Card>
                    </TabPanel>

                    <TabPanel value={2}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography
                                level="title-lg"
                                sx={{ mb: 3 }}
                                fontWeight={700}
                                fontSize={"1.5rem"}
                            >
                                Work Experience
                            </Typography>
                            <Stack spacing={3} divider={<Divider />}>
                                {developer.workExperience.map((work, index) => (
                                    <Box key={index}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexDirection: {
                                                    xs: "column",
                                                    sm: "row",
                                                },
                                                mb: 1,
                                            }}
                                        >
                                            <Typography level="title-lg">
                                                {work.title}
                                            </Typography>
                                            <Typography
                                                level="body-md"
                                                sx={{ color: "text.tertiary" }}
                                            >
                                                {work.startDate} -{" "}
                                                {work.endDate}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            level="title-md"
                                            sx={{
                                                mb: 1,
                                                color: "text.secondary",
                                            }}
                                        >
                                            {work.company} - ({work.location})
                                        </Typography>
                                        <Markdown>{work.description}</Markdown>
                                    </Box>
                                ))}
                            </Stack>
                        </Card>
                    </TabPanel>

                    <TabPanel value={3}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography
                                level="title-lg"
                                sx={{ mb: 3 }}
                                fontWeight={700}
                                fontSize={"1.5rem"}
                            >
                                Skills & Technologies
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid xs={12} md={4}>
                                    <Typography
                                        level="title-lg"
                                        startDecorator={<CodeIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Frontend
                                    </Typography>
                                    <Stack spacing={1}>
                                        {developer.skills.frontend.map(
                                            (skill: string) => (
                                                <Box
                                                    key={skill}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <Typography level="body-md">
                                                        - {skill}
                                                    </Typography>
                                                </Box>
                                            ),
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid xs={12} md={4}>
                                    <Typography
                                        level="title-lg"
                                        startDecorator={<SettingsIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Backend
                                    </Typography>
                                    <Stack spacing={1}>
                                        {developer.skills.backend.map(
                                            (skill) => (
                                                <Box
                                                    key={skill}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <Typography level="body-md">
                                                        - {skill}
                                                    </Typography>
                                                </Box>
                                            ),
                                        )}
                                    </Stack>
                                </Grid>

                                <Grid xs={12} md={4}>
                                    <Typography
                                        level="title-lg"
                                        startDecorator={<TvIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Other Technologies
                                    </Typography>
                                    <Stack spacing={1}>
                                        {developer.skills.other.map(
                                            (skill: string) => (
                                                <Box
                                                    key={skill}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "space-between",
                                                    }}
                                                >
                                                    <Typography level="body-md">
                                                        - {skill}
                                                    </Typography>
                                                </Box>
                                            ),
                                        )}
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Card>
                    </TabPanel>
                </Tabs>
            </Container>
        </Box>
    );
}
