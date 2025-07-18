"use client";
import useAuth from "@/hooks/useAuth";
import {
    Box,
    Button,
    FormLabel,
    Input,
    Snackbar,
    Stack,
} from "@mui/joy";
import { useState } from "react";

const RegisterComponent = () => {
    const [open, setOpen] = useState(false);
    const { loading, setLoading, setError, error } = useAuth();

    const handleRegister = (formData: FormData) => {
        const name = formData.get("name").toString();
        const email = formData.get("email").toString();
        const password = formData.get("password").toString();
        const confirmPassword = formData.get("confirm-password").toString();

        console.log(name, email, password, confirmPassword);

        if (password !== confirmPassword) {
            return {
                error: "Passwords do not match",
            };
        }
    };

    return (
        <>
            <Stack
                spacing={2}
                direction={"column"}
                bgcolor={"background.body"}
                py={4}
                px={8}
                borderRadius={"lg"}
                border={"1px solid"}
                borderColor={"neutral.700"}
            >
                <h1>Register</h1>
                <p>
                    Don't have an account yet?{" "}
                    <a href={"#"} aria-label="Create new account here">
                        Create one here
                    </a>
                </p>

                <form action={handleRegister}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <FormLabel>Name</FormLabel>
                        <Input
                            name="name"
                            placeholder="Introduce your name"
                            aria-label="Introduce your name"
                            required
                            type="text"
                            disabled={loading}
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            placeholder="Introduce a valid email address"
                            aria-label="Introduce a valid email address"
                            required
                            type="email"
                            disabled={loading}
                        />
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            placeholder="Introduce your password"
                            aria-label="Introduce your password"
                            required
                            type="password"
                            disabled={loading}
                        />
                        <FormLabel>Confirm password</FormLabel>
                        <Input
                            name="confirm-password"
                            placeholder="Confirm your password"
                            aria-label="Confirm your password"
                            required
                            type="password"
                            disabled={loading}
                        />
                        <Button type="submit" variant="solid" color="primary">
                            {loading ? "Loading..." : "Register"}
                        </Button>
                    </Box>
                </form>
            </Stack>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={open}
                color="danger"
                onClose={() => setOpen(false)}
                autoHideDuration={6000}
                sx={{ backgroundColor: "background.body" }}
            >
                {error}
            </Snackbar>
        </>
    );
};

export default RegisterComponent;
