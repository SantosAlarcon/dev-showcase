"use client";
import useAuth from "@/hooks/useAuth";
import {
	Box,
	Button,
	Divider,
	FormLabel,
	Input,
	Snackbar,
	Stack,
} from "@mui/joy";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { OAuthProvider } from "appwrite";
import { handleLogin, handleLoginOAuth } from "@/app/actions/authActions";

const LoginComponent = () => {
	const [open, setOpen] = useState(false);
	const { loading, setLoading, setError, error } = useAuth();
	
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
				<h1>Login</h1>
				<p>
					Don't have an account yet?{" "}
					<a href={"#"} aria-label="Create new account here">
						Create one here
					</a>
				</p>

				<form action={async (formData) => {
                    const result = await handleLogin(formData);
                    if (result?.error) {
                        setError(result.error);
                        setOpen(true);
                    }
                }}>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
						<Button type="submit" variant="solid" color="primary">
							{loading ? "Loading..." : "Login"}
						</Button>
					</Box>
				</form>
				<Divider
					sx={{ "--joy-palette-divider": "white" }}
					orientation="horizontal"
				>
					OR
				</Divider>
				<Button variant="solid" color="primary" startDecorator={<GoogleIcon />} aria-label="Login with Google" onClick={() => handleLoginOAuth(OAuthProvider.Google)}>
					Login with Google
				</Button>
				<Button variant="solid" color="primary" startDecorator={<GitHubIcon />} aria-label="Login with GitHub" onClick={async () => {
                    const result = await handleLoginOAuth(OAuthProvider.Github);
                    if (result?.error) {
                        setError(result.error);
                        setOpen(true);
                    }
                }}>
					Login with GitHub
				</Button>
			</Stack>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={open}
				color="danger"
				onClose={() => setOpen(false)}
				autoHideDuration={6000}
				sx={{backgroundColor: "background.body"}}
			>
				{error}
			</Snackbar>
		</>
	);
};

export default LoginComponent;
