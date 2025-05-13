import { motion } from "motion/react";
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

import { getDeveloperInfo } from "@/utils/getDeveloperInfo";

export async function generateMetadata(props: {
    params: Promise<{ params: { id: string } }>;
}) {
    // @ts-ignore
    const { id } = await props.params;
    const developer = getDeveloperInfo(id);
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
                    <img
                        src={developer.bannerImage}
                        alt="Cover"
                        style={{ objectFit: "cover", width: "100%" }}
                    />
                </AspectRatio>
            </Box>

            <Container maxWidth="xl" sx={{display: "flex", gap: 4, mt: -8}}>
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
                            borderRadius: "lg",
                            mb: 4,
                        }}
                    >
                        <Grid container spacing={3} alignItems="flex-end">
                            <Grid xs={12} md={8}>
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
                                    <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                flexWrap: "wrap",
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
                                            {developer.isAvailable && (
                                                <Chip
                                                    variant="soft"
                                                    size="sm"
                                                    color="success"
                                                    sx={{
                                                        borderRadius: "10rem",
                                                    }}
                                                >
                                                    Available for hire
                                                </Chip>
                                            )}
                                        </Box>
                                        <Typography
                                            level="title-lg"
                                            sx={{
                                                color: "text.secondary",
                                                mb: 1,
                                            }}
                                        >
                                            {developer.title}
                                        </Typography>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 2,
                                                mb: 2,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                <LocationPinIcon />
                                                <Typography level="body-sm">
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
                                                <WorkIcon />
                                                <Typography level="body-sm">
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
                                                <CalendarMonthIcon />
                                                <Typography level="body-sm">
													Joined on{" "}
                                                    {new Date(developer.memberSince).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}
                                                </Typography>
                                            </Box>
											<Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
												<GroupsIcon />
												<Typography level="body-sm">
													{developer.followers}
												</Typography>
											</Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                gap: 1.5,
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="GitHub"
                                                        variant="solid"
                                                    >
                                                        <GitHubIcon />
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="LinkedIn"
                                                        variant="solid"
                                                    >
                                                        <LinkedInIcon />
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="Facebook"
                                                        variant="solid"
                                                    >
                                                        <FacebookIcon />
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="Twitter"
                                                        variant="solid"
                                                    >
                                                        <TwitterIcon />
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="Instagram"
                                                        variant="solid"
                                                    >
                                                        <InstagramIcon />
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="Dev.to"
                                                        variant="solid"
                                                    >
                                                        <LogoDevIcon />
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
                                                    color="neutral"
                                                    size="sm"
                                                >
                                                    <Tooltip
                                                        title="YouTube"
                                                        variant="solid"
                                                    >
                                                        <YouTubeIcon />
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
                                                color="neutral"
                                                size="sm"
                                            >
                                                <Tooltip
                                                    title="Portfolio"
                                                    variant="solid"
                                                >
                                                    <OpenInNewIcon />
                                                </Tooltip>
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid xs={12} md={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: {
                                            xs: "row",
                                            md: "column",
                                        },
                                        gap: 2,
                                        justifyContent: {
                                            xs: "flex-start",
                                            md: "flex-end",
                                        },
                                        alignItems: {
                                            xs: "center",
                                            md: "flex-end",
                                        },
                                        mt: { xs: 0, md: 2 },
                                    }}
                                >
                                    <Typography
                                        level="title-lg"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {developer.hourlyRate}
                                    </Typography>

                                    <Stack direction="row" spacing={1}>
                                        <Button
                                            component={Link}
                                            href={`/message/${developer.id}`}
                                            variant="solid"
                                            color="primary"
                                            startDecorator={<ChatIcon />}
                                            size="lg"
                                        >
                                            Contact Me
                                        </Button>
                                        <IconButton
                                            variant="soft"
                                            color="neutral"
                                            size="lg"
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
                <Tabs sx={{ mb: 4 }}>
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
                        <Tab>About</Tab>
                        <Tab>Projects</Tab>
                        <Tab>Experience</Tab>
                        <Tab>Skills</Tab>
                    </TabList>

                    <TabPanel value={0}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography level="title-lg" sx={{ mb: 2 }}>
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
                                    <Typography level="title-md" sx={{ mb: 2 }}>
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
                                    <Typography level="title-md" sx={{ mb: 2 }}>
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
                        <Card variant="outlined">
                            <Typography level="title-lg" sx={{ mb: 3 }}>
                                Projects
                            </Typography>
                            <Grid container spacing={3}>
                                {developer.projects.map((project, index) => (
                                    <Grid key={index} xs={12} md={4}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                            }}
                                        >
                                            <Card
                                                variant="outlined"
                                                sx={{
                                                    height: "100%",
                                                    transition: "all 0.3s ease",
                                                    "&:hover": {
                                                        boxShadow: "md",
                                                        transform:
                                                            "translateY(-5px)",
                                                    },
                                                }}
                                            >
                                                <AspectRatio
                                                    ratio="16/9"
                                                    sx={{ mb: 2 }}
                                                >
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        style={{
                                                            objectFit: "cover",
                                                        }}
                                                    />
                                                </AspectRatio>
                                                <Typography
                                                    level="title-md"
                                                    sx={{ mb: 1 }}
                                                >
                                                    {project.title}
                                                </Typography>
                                                <Typography
                                                    level="body-sm"
                                                    sx={{
                                                        mb: 2,
                                                        color: "text.secondary",
                                                    }}
                                                >
                                                    {project.description}
                                                </Typography>
                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                    useFlexGap
                                                    sx={{
                                                        flexWrap: "wrap",
                                                        gap: 0.5,
                                                        mb: 2,
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
                                                <Button
                                                    component="a"
                                                    href={project.link}
                                                    variant="solid"
                                                    color="primary"
                                                    endDecorator={
                                                        <OpenInNewIcon />
                                                    }
                                                    sx={{ mt: "auto" }}
                                                >
                                                    View Project
                                                </Button>
                                            </Card>
                                        </motion.div>
                                    </Grid>
                                ))}
                            </Grid>
                        </Card>
                    </TabPanel>

                    <TabPanel value={2}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography level="title-lg" sx={{ mb: 3 }}>
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
                                            <Typography level="title-md">
                                                {work.title}
                                            </Typography>
                                            <Typography
                                                level="body-sm"
                                                sx={{ color: "text.tertiary" }}
                                            >
                                                {work.startDate} - {work.endDate}
                                            </Typography>
                                        </Box>
                                        <Typography
                                            level="title-sm"
                                            sx={{
                                                mb: 1,
                                                color: "text.secondary",
                                            }}
                                        >
                                            {work.company}
                                        </Typography>
                                        <Typography level="body-md">
                                            {work.description}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Card>
                    </TabPanel>

                    <TabPanel value={3}>
                        <Card variant="outlined" sx={{ p: 4 }}>
                            <Typography level="title-lg" sx={{ mb: 3 }}>
                                Skills & Technologies
                            </Typography>
                            <Grid container spacing={4}>
                                <Grid xs={12} md={4}>
                                    <Typography
                                        level="title-md"
                                        startDecorator={<CodeIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Frontend
                                    </Typography>
                                    <Stack spacing={2} sx={{ mb: 4 }}>
                                        {developer.skills
                                            .filter((skill) =>
                                                [
                                                    "React",
                                                    "TypeScript",
                                                    "Next.js",
                                                    "Redux",
                                                ].includes(skill),
                                            )
                                            .map((skill) => (
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
                                                        {skill}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
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
                                                                        borderRadius:
                                                                            "50%",
                                                                        ml: 0.5,
                                                                        bgcolor:
                                                                            skill ===
                                                                                "React" ||
                                                                            skill ===
                                                                                "TypeScript"
                                                                                ? i <
                                                                                  5
                                                                                    ? "primary.400"
                                                                                    : "neutral.200"
                                                                                : i <
                                                                                    4
                                                                                  ? "primary.400"
                                                                                  : "neutral.200",
                                                                    }}
                                                                />
                                                            ))}
                                                    </Box>
                                                </Box>
                                            ))}
                                    </Stack>
                                </Grid>

                                <Grid xs={12} md={4}>
                                    <Typography
                                        level="title-md"
                                        startDecorator={<SettingsIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Backend
                                    </Typography>
                                    <Stack spacing={2} sx={{ mb: 4 }}>
                                        {developer.skills
                                            .filter((skill) =>
                                                [
                                                    "Node.js",
                                                    "Express.js",
                                                    "MongoDB",
                                                    "GraphQL",
                                                ].includes(skill),
                                            )
                                            .map((skill) => (
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
                                                        {skill}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
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
                                                                        borderRadius:
                                                                            "50%",
                                                                        ml: 0.5,
                                                                        bgcolor:
                                                                            skill ===
                                                                                "Node.js" ||
                                                                            skill ===
                                                                                "MongoDB"
                                                                                ? i <
                                                                                  5
                                                                                    ? "primary.400"
                                                                                    : "neutral.200"
                                                                                : i <
                                                                                    4
                                                                                  ? "primary.400"
                                                                                  : "neutral.200",
                                                                    }}
                                                                />
                                                            ))}
                                                    </Box>
                                                </Box>
                                            ))}
                                    </Stack>
                                </Grid>

                                <Grid xs={12} md={4}>
                                    <Typography
                                        level="title-md"
                                        startDecorator={<TvIcon />}
                                        sx={{ mb: 2 }}
                                    >
                                        Other Technologies
                                    </Typography>
                                    <Stack spacing={2} sx={{ mb: 4 }}>
                                        {developer.skills
                                            .filter((skill) =>
                                                ["AWS", "Jest", "Git"].includes(
                                                    skill,
                                                ),
                                            )
                                            .map((skill) => (
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
                                                        {skill}
                                                    </Typography>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
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
                                                                        borderRadius:
                                                                            "50%",
                                                                        ml: 0.5,
                                                                        bgcolor:
                                                                            skill ===
                                                                            "AWS"
                                                                                ? i <
                                                                                  4
                                                                                    ? "primary.400"
                                                                                    : "neutral.200"
                                                                                : i <
                                                                                    3
                                                                                  ? "primary.400"
                                                                                  : "neutral.200",
                                                                    }}
                                                                />
                                                            ))}
                                                    </Box>
                                                </Box>
                                            ))}
                                    </Stack>
                                </Grid>
                            </Grid>

                            <Typography level="title-md" sx={{ mb: 2, mt: 2 }}>
                                All Technologies
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                }}
                            >
                                {developer.skills.map((skill) => (
                                    <Chip key={skill} variant="soft" size="md">
                                        {skill}
                                    </Chip>
                                ))}
                            </Box>
                        </Card>
                    </TabPanel>
                </Tabs>
            </Container>
        </Box>
    );
}
