"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    useColorScheme,
} from "@mui/joy";
import { Menu as MenuIcon, X, Sun, Moon, Computer, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { logout } from "@/app/actions/authActions";
import { getCookie } from "@/app/actions/cookieActions";

const navItems = [
    { name: "Discover", href: "/discover" },
    { name: "Technologies", href: "/technologies" },
    { name: "For Recruiters", href: "/for-recruiters" },
    { name: "About", href: "/about" },
];

const handleLogout = async () => {
    await logout();
};

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const { mode, setMode } = useColorScheme();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const checkCookie = async () => {
            const session = await getCookie("dev-showcase-session");
            if (session) {
                setLoggedIn(true);
            }
        };
        checkCookie();
    }, []);

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
                px: { xs: 1, md: 2 },
                backdropFilter: "blur(10px)",
                backgroundColor:
                    "rgba(var(--joy-palette-background-surface), 0.8)",
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
                    <Link
                        href="/"
                        passHref
                        aria-label="Home"
                        style={{ textDecoration: "none" }}
                    >
                        <Typography
                            component="div"
                            sx={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                color: "primary.500",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                cursor: "pointer",
                            }}
                        >
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
                            <Link
                                key={item.name}
                                href={item.href}
                                passHref
                                style={{ textDecoration: "none" }}
                            >
                                <Typography
                                    component="span"
                                    textColor={"text.primary"}
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
                            aria-label="search"
                            sx={{
                                display: { xs: "none", sm: "flex" },
                                color: "text.primary",
                            }}
                        >
                            <Search size={20} />
                        </IconButton>

                        <Dropdown>
                            <MenuButton
                                slots={{ root: IconButton }}
                                sx={{ color: "text.primary" }}
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
                                    <Sun
                                        size={18}
                                        style={{ color: "text.primary" }}
                                    />
                                    <Typography
                                        level="body-sm"
                                        textColor="text.primary"
                                        sx={{ ml: 1 }}
                                    >
                                        Light
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => setMode("dark")}>
                                    <Moon
                                        size={18}
                                        style={{ color: "text.primary" }}
                                    />
                                    <Typography
                                        level="body-sm"
                                        textColor="text.primary"
                                        sx={{ ml: 1 }}
                                    >
                                        Dark
                                    </Typography>
                                </MenuItem>
                                <MenuItem onClick={() => setMode("system")}>
                                    <Computer
                                        size={18}
                                        style={{ color: "text.primary" }}
                                    />
                                    <Typography
                                        level="body-sm"
                                        textColor="text.primary"
                                        sx={{ ml: 1 }}
                                    >
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
                                    sx={{ color: "text.primary" }}
                                    size="sm"
                                >
                                    Login
                                </Button>
                                <Button
                                    component={Link}
                                    href="/register"
                                    variant="solid"
                                    color="primary"
                                    size="sm"
                                >
                                    Register
                                </Button>
                                {loggedIn && (
                                    // @ts-ignore
                                    <Button
                                        onClick={handleLogout}
                                        variant="solid"
                                        color="danger"
                                        fullWidth
                                    >
                                        Logout
                                    </Button>
                                )}
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
                                        <Link
                                            href={item.href}
                                            passHref
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Typography
                                                component="div"
                                                sx={{
                                                    display: "block",
                                                    py: 2,
                                                    fontWeight: 500,
                                                    borderBottom: "1px solid",
                                                    borderColor: "divider",
                                                    color: "text.primary",
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

                                        {loggedIn && (
                                            // @ts-ignore
                                            <Button
                                                component={Link}
                                                onClick={handleLogout}
                                                variant="solid"
                                                color="danger"
                                                fullWidth
                                            >
                                                Logout
                                            </Button>
                                        )}
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
