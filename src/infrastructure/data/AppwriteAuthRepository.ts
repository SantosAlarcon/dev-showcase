import { account } from "@/lib/appwrite/client";
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { AuthUser } from "@/src/domain/entities/user";
import { ID, OAuthProvider } from "appwrite";
import { Models } from "node-appwrite";

type SessionProps = {
	session: Models.Session;
	error: string | null;
};

export class AppwriteAuthRepository implements IAuthRepository {
	async checkUserExists(email: string): Promise<boolean> {
		const userList = await fetch(
			`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!}/users?queries[]={"method":"equal","attribute":"email","values": ["${email}"]}`,
			{
				method: "GET",
				headers: {
					"X-Appwrite-Project": process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
					"X-Appwrite-Key": process.env.NEXT_PUBLIC_APPWRITE_KEY!,
				},
			},
		).then((res) => res.json());
		const existingUser = userList.users[0];
		// Return true if the user exists
		return !!existingUser;
	}

	async login(email: string, password: string): Promise<SessionProps | null> {
		try {
			await account.createEmailPasswordSession(email, password);
			const session = this.getCurrentUser();
			// @ts-ignore
			return { session, error: null };
		} catch (error) {
			return { session: null, error: error.message };
		}
	}
	loginOAuth(provider: OAuthProvider) {
		account.createOAuth2Token(
			provider,
			`${process.env.NEXT_PUBLIC_ADDRESS}/api/oauth`,
			`${process.env.NEXT_PUBLIC_ADDRESS}/login`,
		);
	}

	async register(
		name: string,
		email: string,
		password: string,
	): Promise<AuthUser | null> {
		await account.create(ID.unique(), email, password, name);
		await this.login(email, password);
		return this.getCurrentUser();
	}
	async logout(): Promise<void> {
		await account.deleteSession("current");
	}
	async getCurrentUser(): Promise<Models.User<Models.Preferences>> | null {
		try {
			const user = await account.get();
			return user;
		} catch (error) {
			console.error("Error fetching user:", error);
			return null;
		}
	}
}
