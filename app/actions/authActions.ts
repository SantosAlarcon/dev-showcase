"use server";

import { redirect } from "next/navigation";

import { LoginOAuthUseCase } from "@/src/application/use-cases/auth/LoginOAuthUseCase";
import { LoginUseCase } from "@/src/application/use-cases/auth/LoginUseCase";
import { AppwriteAuthRepository } from "@/src/infrastructure/data/AppwriteAuthRepository";
import { OAuthProvider } from "appwrite";

const authRepository = new AppwriteAuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const loginOAuthUseCase = new LoginOAuthUseCase(authRepository);

export const handleLogin = async (formData: FormData) => {
    const email = formData.get("email").toString();
    const password = formData.get("password").toString();

    const result = await loginUseCase.execute(email, password);

    if (result.session) {
        redirect("/discover");
    }

    return {
        error: result.error,
    };
};

export const handleLoginOAuth = async (provider: OAuthProvider) => {
    try {
        const url = await loginOAuthUseCase.execute(provider);
        return { url };
    } catch (error) {
        return {
            error: "Something went wrong",
        };
    }
};

export const handleRegister = async (formData: FormData) => {
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

	return {
		message: "Registered successfully",
	};

    // const result = await loginUseCase.execute(email, password);
    //
    // if (result.error) {
    //     return {
    //         error: result.error,
    //     };
    // }
    //
    // if (result.session) {
    //     return {
    //         error: "You are already logged in",
    //     };
    // }
    //
    //
    // const user = await authRepository.createUser(name, email, password);
    //
    // return {
    //     user,
    // };
};
