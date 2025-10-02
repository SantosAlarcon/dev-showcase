"use server";

import type { OAuthProvider } from "appwrite";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
	checkExistingAuthUserUseCase,
	getCurrentUserUseCase,
	loginOAuthUseCase,
	loginUseCase,
	logoutUseCase,
	registerUseCase,
} from "@/src/config";
import type { ActionState } from "@/utils/with-callbacks";


/**
 * Get the current user from the Appwrite Users list
 * @returns {Promise<ActionState>}
 */
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

/**
 * Handle the login form submission
 * @param {ActionState} _actionState
 * @param {FormData} formData
 * @returns {Promise<ActionState | void>}
 */
export const handleLogin = async (
	_actionState: ActionState,
	formData: FormData,
): Promise<ActionState | void> => {
	const data = {
		email: formData.get("email").toString(),
		password: formData.get("password").toString(),
	};

	const result = await loginUseCase.execute(data.email, data.password);

	// If the login is successful, set the session cookie and redirect to the discover page
	if (result.session) {
		const cookieList = await cookies();
		cookieList.set("dev-showcase-session", result.session.secret, {
			path: "/",
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
		});

		return redirect("/profile");
	}

	// Return an error message if the login fails (invalid credentials or the user is not found)
	return {
		message: "Invalid credentials. Please check your email and password.",
		status: "ERROR",
		payload: formData,
	};
};

/** Handle the OAuth login form submission 
 * @param {OAuthProvider} provider
 * @returns void
 */
export const handleLoginOAuth = async (provider: OAuthProvider) => {
	const redirectUrl = await loginOAuthUseCase.execute(provider);
	return redirect(redirectUrl);
};

/** Handle the logout form submission
 * @returns void
 */
export const logout = async () => {
	await logoutUseCase.execute();
	const cookieList = await cookies();
	cookieList.delete("dev-showcase-session");
	return redirect("/login");
};

/**
 * Handle the register form submission
 * @param {ActionState} _actionState
 * @param {FormData} formData
 * @returns {Promise<ActionState | void>}
 */
export const handleRegister = async (
	_actionState: ActionState,
	formData: FormData,
): Promise<ActionState | void> => {
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
	if (await checkExistingAuthUserUseCase.execute(data.email)) {
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

	return redirect("/profile");

	/**
		return {
			message: "Registered successfully",
			status: "SUCCESS",
		};
	**/
};
