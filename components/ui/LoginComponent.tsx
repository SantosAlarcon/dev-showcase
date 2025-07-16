"use client";
import useAuth from "@/hooks/useAuth";
import { LoginUseCase } from "@/src/application/use-cases/auth/LoginUseCase";
import { AppwriteAuthRepository } from "@/src/infrastructure/data/AppwriteAuthRepository";
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
import { LoginOAuthUseCase } from "@/src/application/use-cases/auth/LoginOAuthUseCase";
import { OAuthProvider } from "appwrite";

const LoginComponent = () => {
	const [open, setOpen] = useState(false);
	const authRepository = new AppwriteAuthRepository();
	const loginUseCase = new LoginUseCase(authRepository);
    const loginOauthUseCase = new LoginOAuthUseCase(authRepository);
	const { loading, setLoading, setError, error } = useAuth();

	const handleLogin = async (formData: FormData) => {
		const email = formData.get("email").toString();
		const password = formData.get("password").toString();

		setLoading(true);
		await loginUseCase.execute(email, password).catch((error) => {
			setOpen(true);
			setError(
				"The user with that email and password does not exist. Please check the email and password.",
			);
			console.error(error);
		});
		setLoading(false);
	};

    const handleLoginOAuth = async (provider: OAuthProvider) => {
        await loginOauthUseCase.execute(provider).catch((errorMessage) => {
            setOpen(true);
            setError(
                "The user with that email and password does not exist. Please check the email and password.",
            );
            console.error(errorMessage.message);
        });
        setLoading(false);
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
			>
				<h1>Login</h1>
				<p>
					Don't have an account yet?{" "}
					<a href={"#"} aria-label="Create new account here">
						Create one here
					</a>
				</p>

				<form action={handleLogin}>
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
				<Button variant="solid" color="primary" startDecorator={<GitHubIcon />} aria-label="Login with GitHub" onClick={() => handleLoginOAuth(OAuthProvider.Github)}>
					Login with GitHub
				</Button>
			</Stack>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				open={open}
				onClose={() => setOpen(false)}
				autoHideDuration={6000}
			>
				{error}
			</Snackbar>
		</>
	);
};

export default LoginComponent;
