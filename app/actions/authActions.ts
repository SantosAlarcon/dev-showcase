"use server";

import type { OAuthProvider } from "appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/appwrite/server";
import type { ActionState } from "@/utils/with-callbacks";
import {
    checkExistingUserUseCase,
    getCurrentUserUseCase,
    loginUseCase,
    logoutUseCase,
    registerUseCase,
} from "@/src/config";

export const getCurrentUser = async (): Promise<ActionState> => {
    const user = await getCurrentUserUseCase.execute();

    if (user) {
        console.log(`User: ${user}`);
        return {
            message: "Logged in successfully",
            status: "SUCCESS",
            payload: user,
        };
    }

    return {
        message: "You are not logged in",
        status: "ERROR",
        payload: null,
    };
};

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
        const cookieList = await cookies();
        cookieList.set("dev-showcase-session", result.session.secret, {
            path: "/",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

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
    const { account } = await createAdminClient();
    const redirectUrl = await account.createOAuth2Token(
        provider,
        `${process.env.NEXT_PUBLIC_ADDRESS}/api/oauth`,
        `${process.env.NEXT_PUBLIC_ADDRESS}/login`,
    );
    return redirect(redirectUrl);
};

export const logout = async () => {
    await logoutUseCase.execute();
    const cookieList = await cookies();
    cookieList.delete("dev-showcase-session");
    return redirect("/login");
};

export const handleRegister = async (
    _actionState: ActionState,
    formData: FormData,
): Promise<ActionState> => {
    const data = {
        name: formData.get("name").toString(),
        surname: formData.get("surname").toString(),
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
            message:
                "There is already an account with this email. Please user another email.",
            status: "ERROR",
            payload: formData,
        };
    }

    // Register the user in the Appwrite Users list and create a session
    await registerUseCase.execute(
        data.name,
        data.surname,
        data.email,
        data.password,
    );

    return {
        message: "Registered successfully",
        status: "SUCCESS",
    };
};
