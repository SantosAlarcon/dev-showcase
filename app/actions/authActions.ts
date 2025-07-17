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

    if (result) {
        redirect("/discover");
    }

    return {
        error: "Invalid credentials",
    };
};

export const handleLoginOAuth = async (provider: OAuthProvider) => {
    try {
        await loginOAuthUseCase.execute(provider);
        redirect("/discover");
    } catch (error) {
        return {
            error: "Something went wrong",
        };
    }
};
