"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Button, Divider, FormLabel, Input, Stack } from "@mui/joy";
import { OAuthProvider } from "appwrite";
import { useActionState } from "react";
import { handleLogin, handleLoginOAuth } from "@/app/actions/authActions";
import { createToastCallbacks } from "@/utils/toast-callbacks";
import { withCallbacks } from "@/utils/with-callbacks";
import Link from "next/link";

const LoginComponent = () => {
    const [actionState, loginAction, pending] = useActionState(
        // @ts-ignore
        withCallbacks(handleLogin, createToastCallbacks({})),
        { message: "", status: "NONE" },
    );

    return (
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
            <h1>Login</h1>
            <Stack columnGap={1} display={"flex"} flexDirection={"row"}>
                <span>Don't have an account yet? </span>
                <Link href={"/register"} aria-label="Go to the register page">
                    Create one here
                </Link>
            </Stack>

            <form action={loginAction}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <FormLabel>Email</FormLabel>
                    <Input
                        name="email"
                        placeholder="Introduce a valid email address"
                        aria-label="Introduce a valid email address"
                        required
                        type="email"
                        disabled={pending}
                        defaultValue={
                            // @ts-ignore
                            (actionState.payload?.get("email") || "") as string
                        }
                    />
                    <FormLabel>Password</FormLabel>
                    <Input
                        name="password"
                        placeholder="Introduce your password"
                        aria-label="Introduce your password"
                        required
                        type="password"
                        disabled={pending}
                        defaultValue={
                            // @ts-ignore
                            (actionState.payload?.get("password") ||
                                "") as string
                        }
                    />
                    <Button
                        type="submit"
                        variant="solid"
                        color="primary"
                        disabled={pending}
                        loading={pending}
                    >
                        {!pending && "Login"}
                    </Button>
                </Box>
            </form>
            <Divider
                sx={{ "--joy-palette-divider": "white" }}
                orientation="horizontal"
            >
                OR
            </Divider>
            <Button
                variant="solid"
                color="primary"
                startDecorator={<GoogleIcon />}
                aria-label="Login with Google"
                onClick={() => handleLoginOAuth(OAuthProvider.Google)}
            >
                Login with Google
            </Button>
            <Button
                variant="solid"
                color="primary"
                startDecorator={<GitHubIcon />}
                aria-label="Login with GitHub"
                onClick={() => handleLoginOAuth(OAuthProvider.Github)}
            >
                Login with GitHub
            </Button>
        </Stack>
    );
};

export default LoginComponent;
