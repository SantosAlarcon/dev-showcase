"use server";

import { redirect } from "next/navigation";

import { LoginOAuthUseCase } from "@/src/application/use-cases/auth/LoginOAuthUseCase";
import { LoginUseCase } from "@/src/application/use-cases/auth/LoginUseCase";
import { AppwriteAuthRepository } from "@/src/infrastructure/data/AppwriteAuthRepository";
import { OAuthProvider } from "appwrite";
import { RegisterUseCase } from "@/src/application/use-cases/auth/RegisterUseCase";
import { ActionState } from "@/utils/with-callbacks";
import { CheckExistingUserUseCase } from "@/src/application/use-cases/auth/CheckExistingUserUseCase";

const authRepository = new AppwriteAuthRepository();
const loginUseCase = new LoginUseCase(authRepository);
const loginOAuthUseCase = new LoginOAuthUseCase(authRepository);
const registerUseCase = new RegisterUseCase(authRepository);
const checkExistingUserUseCase = new CheckExistingUserUseCase(authRepository);

export const handleLogin = async (
    _actionState: ActionState,
    formData: FormData,
): Promise<ActionState> => {
    const data = {
        email: formData.get("email").toString(),
        password: formData.get("password").toString(),
    };

    const result = await loginUseCase.execute(data.email, data.password);

    if (result.session) {
        redirect("/discover");
    }

	// Return an error message if the login fails (invalid credentials or the user is not found)
    return {
        message: "Invalid credentials. Please check your email and password.",
        status: "ERROR",
		payload: formData,
    };
};

export const handleLoginOAuth = async (provider: OAuthProvider) => {
    try {
        const url = await loginOAuthUseCase.execute(provider);
        return { url };
    } catch (error) {
        return {
            message: "Something went wrong",
            status: "ERROR",
			payload: error,
        };
    }
};

export const handleRegister = async (
    _actionState: ActionState,
    formData: FormData,
): Promise<ActionState> => {
    const data = {
        name: formData.get("name").toString(),
        email: formData.get("email").toString(),
        password: formData.get("password").toString(),
        confirmPassword: formData.get("confirm-password").toString(),
    };

	// Check if the passwords match
    if (data.password !== data.confirmPassword) {
        return {
            message: "Passwords do not match",
            status: "ERROR",
            payload: formData,
        };
    }

	// Check if the password is at least 8 characters
    if (data.password.length < 8) {
        return {
            message: "Password must be at least 8 characters",
            status: "ERROR",
            payload: formData,
        };
    }

	// Check if the user already exists in the Appwrite Users list
    if (await checkExistingUserUseCase.execute(data.email)) {
        return {
            message: "There is already an account with this email. Please user another email.",
            status: "ERROR",
            payload: formData,
        };
    }

    await registerUseCase.execute(data.name, data.email, data.password);

    return {
        message: "Registered successfully",
        status: "SUCCESS",
    };
};
