"use client";

import { useState } from "react";
import Link from "next/link";
import { useColorMode } from "@/app/providers";
import {
    Box,
    IconButton,
    Typography,
    Button,
    Container,
    Stack,
    Sheet,
    Dropdown,
    Menu,
    MenuButton,
    MenuItem,
} from "@mui/joy";
import { Menu as MenuIcon, X, Sun, Moon, Computer, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
    { name: "Discover", href: "/discover" },
    { name: "Technologies", href: "/technologies" },
    { name: "For Recruiters", href: "/for-recruiters" },
    { name: "About", href: "/about" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { mode, setMode } = useColorMode();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <Sheet
            component="header"
            sx={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                py: 2,
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(var(--background-start-rgb), 0.8)",
                borderBottom: "1px solid",
                borderColor: "divider",
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Link href="/" passHref>
                        <Typography
                            level="h4"
                            component="div"
                            sx={{
                                fontWeight: "bold",
                                color: "primary.500",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
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
                    </Link>

                    {/* Desktop Navigation */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            gap: 4,
                            alignItems: "center",
                        }}
                    >
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                                <Typography
                                    component="span"
                                    sx={{
                                        fontWeight: 500,
                                        position: "relative",
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            width: "0%",
                                            height: "2px",
                                            bottom: "-4px",
                                            left: 0,
                                            backgroundColor: "primary.500",
                                            transition: "width 0.3s ease",
                                        },
                                        "&:hover::after": {
                                            width: "100%",
                                        },
                                        cursor: "pointer",
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Link>
                        ))}
                    </Box>

                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <IconButton
                            variant="plain"
                            color="neutral"
                            aria-label="search"
                            sx={{ display: { xs: "none", sm: "flex" } }}
                        >
                            <Search size={20} />
                        </IconButton>

                        <Dropdown>
                            <MenuButton
                                slots={{ root: IconButton }}
                                slotProps={{
                                    root: {
                                        variant: "plain",
                                        color: "neutral",
                                    },
                                }}
                                aria-label="Theme switcher"
                            >
                                {mode === "light" ? (
                                    <Sun size={20} />
                                ) : mode === "dark" ? (
                                    <Moon size={20} />
                                ) : (
                                    <Computer size={20} />
                                )}
                            </MenuButton>
                            <Menu placement="bottom-end">
                                <MenuItem onClick={() => setMode("light")}>
                                    <Sun size={18} />
                                    <Typography level="body-sm" sx={{ ml: 1 }}>
                                        Light
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => setMode("dark")}>
                                    <Moon size={18} />
                                    <Typography level="body-sm" sx={{ ml: 1 }}>
                                        Dark
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => setMode("system")}>
                                    <Computer size={18} />
                                    <Typography level="body-sm" sx={{ ml: 1 }}>
                                        System
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Dropdown>

                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <Stack direction="row" spacing={1}>
                                <Button
                                    component={Link}
                                    href="/login"
                                    variant="plain"
                                    color="neutral"
                                    size="sm"
                                >
                                    Login
                                </Button>
                                <Button
                                    component={Link}
                                    href="/signup"
                                    variant="solid"
                                    color="primary"
                                    size="sm"
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                        </Box>

                        <IconButton
                            variant="plain"
                            color="neutral"
                            onClick={toggleMobileMenu}
                            sx={{ display: { md: "none" } }}
                        >
                            {mobileMenuOpen ? (
                                <X size={24} />
                            ) : (
                                <MenuIcon size={24} />
                            )}
                        </IconButton>
                    </Box>
                </Box>
            </Container>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <Box
                            sx={{
                                py: 4,
                                px: 2,
                                display: { md: "none" },
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <motion.div
                                variants={container}
                                initial="hidden"
                                animate="show"
                            >
                                {navItems.map((item) => (
                                    <motion.div key={item.name}>
                                        <Link href={item.href} passHref>
                                            <Typography
                                                component="div"
                                                sx={{
                                                    display: "block",
                                                    py: 2,
                                                    fontWeight: 500,
                                                    borderBottom: "1px solid",
                                                    borderColor: "divider",
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div variants={item}>
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        sx={{ mt: 3 }}
                                    >
                                        <Button
                                            component={Link}
                                            href="/login"
                                            variant="plain"
                                            color="neutral"
                                            fullWidth
                                        >
                                            Login
                                        </Button>
                                        <Button
                                            component={Link}
                                            href="/signup"
                                            variant="solid"
                                            color="primary"
                                            fullWidth
                                        >
                                            Sign Up
                                        </Button>
                                    </Stack>
                                </motion.div>
                            </motion.div>
                        </Box>
                    </motion.div>
                )}
            </AnimatePresence>
        </Sheet>
    );
}
