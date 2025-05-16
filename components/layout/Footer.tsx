"use client";

import Link from "next/link";
import {
    Box,
    Typography,
    Grid,
    Container,
    Divider,
    List,
    ListItem,
    IconButton,
} from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedinIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                backgroundColor: "background.surface",
                borderTop: "1px solid",
                borderColor: "divider",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={4}>
                    <Grid xs={12} sm={6} md={3}>
                        <Typography
                            level="h4"
                            sx={{
                                fontWeight: "bold",
                                color: "primary.500",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                mb: 2,
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    display: "inline-block",
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    bgcolor: "primary.500",
                                    mr: 1,
                                }}
                            />
                            DevShowcase
                        </Typography>
                        <Typography
                            level="body-sm"
                            sx={{ mb: 2, maxWidth: "25ch" }}
							textColor="inherit"
                        >
                            Connecting exceptional developers with opportunities
                            that matter.
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton
                                variant="plain"
                                size="md"
                                component="a"
                                href="https://github.com"
                            >
                                <GitHubIcon htmlColor="inherit" />
                            </IconButton>
                            <IconButton
                                variant="plain"
                                size="md"
                                component="a"
                                href="https://twitter.com"
                            >
                                <TwitterIcon htmlColor="inherit" />
                            </IconButton>
                            <IconButton
                                variant="plain"
                                size="md"
                                component="a"
                                href="https://linkedin.com"
                            >
                                <LinkedinIcon htmlColor="inherit" />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <Typography
                            level="title-md"
                            sx={{ mb: 2, fontWeight: "bold" }}
                        >
                            For Developers
                        </Typography>
                        <List sx={{ "--ListItem-paddingY": "0.5rem" }}>
                            <ListItem>
                                <Link href="/create-profile">
                                    Create a Profile
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/showcase-projects">
                                    Showcase Projects
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/developer-resources">
                                    Developer Resources
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/pricing">Pricing</Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <Typography
                            level="title-md"
                            sx={{ mb: 2, fontWeight: "bold" }}
                        >
                            For Recruiters
                        </Typography>
                        <List sx={{ "--ListItem-paddingY": "0.5rem" }}>
                            <ListItem>
                                <Link href="/find-talent">Find Talent</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/post-job">Post a Job</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/for-companies">For Companies</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/business-pricing">
                                    Business Pricing
                                </Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid xs={12} sm={6} md={3}>
                        <Typography
                            level="title-md"
                            sx={{ mb: 2, fontWeight: "bold" }}
                        >
                            Company
                        </Typography>
                        <List sx={{ "--ListItem-paddingY": "0.5rem" }}>
                            <ListItem>
                                <Link href="/about">About Us</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/blog">Blog</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/careers">Careers</Link>
                            </ListItem>
                            <ListItem>
                                <Link href="/contact">Contact</Link>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "space-between",
                        alignItems: { xs: "center", sm: "flex-start" },
                        gap: 2,
                    }}
                >
                    <Typography level="body-xs" textColor="inherit">
                        © {new Date().getFullYear()} DevShowcase. All rights
                        reserved.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}
                    >
                        <Link href="/privacy">
                            <Typography level="body-xs">
                                Privacy Policy
                            </Typography>
                        </Link>
                        <Link href="/terms">
                            <Typography level="body-xs">
                                Terms of Service
                            </Typography>
                        </Link>
                        <Link href="/cookies">
                            <Typography level="body-xs">
                                Cookie Policy
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
