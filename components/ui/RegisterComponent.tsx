"use client";
import { handleRegister } from "@/app/actions/authActions";
import { createToastCallbacks } from "@/utils/toast-callbacks";
import { withCallbacks } from "@/utils/with-callbacks";
import { Box, Button, FormLabel, Input, Stack } from "@mui/joy";
import { useActionState } from "react";

const RegisterComponent = () => {
    const [actionState, action, pending] = useActionState(
        withCallbacks(
            handleRegister,
            // @ts-ignore
            createToastCallbacks({}),
        ),
        { message: "", status: "NONE" },
    );

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
                    Already have an account?{" "}
                    <a href={"/login"} aria-label="Go to the login page">
                        Login here
                    </a>
                </p>

                <form action={action}>
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
                            disabled={pending}
                            defaultValue={
                                (actionState.payload?.get("name") ||
                                    "") as string
                            }
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            placeholder="Introduce a valid email address"
                            aria-label="Introduce a valid email address"
                            required
                            type="email"
                            disabled={pending}
                            defaultValue={
                                (actionState.payload?.get("email") ||
                                    "") as string
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
                                (actionState.payload?.get("password") ||
                                    "") as string
                            }
                        />
                        <FormLabel>Confirm password</FormLabel>
                        <Input
                            name="confirm-password"
                            placeholder="Confirm your password"
                            aria-label="Confirm your password"
                            required
                            type="password"
                            disabled={pending}
                            defaultValue={
                                (actionState.payload?.get("confirm-password") ||
                                    "") as string
                            }
                        />
                        <Button
                            type="submit"
                            variant="solid"
                            color="primary"
                            disabled={pending}
                        >
                            Register
                        </Button>
                    </Box>
                </form>
            </Stack>
        </>
    );
};

export default RegisterComponent;
