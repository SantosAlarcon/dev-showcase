import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { ID, OAuthProvider } from "appwrite";
import { Models } from "node-appwrite";
import { createAdminClient, createSessionClient } from "@/lib/appwrite/server";
import { createNewDeveloperUseCase } from "@/src/config";

type SessionProps = {
    session: Models.Session;
    error: string | null;
};

export class AppwriteAuthRepository implements IAuthRepository {
    async checkUserAuthExists(email: string): Promise<boolean> {
        const userList = await fetch(
            `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!}/users?queries[]={"method":"equal","attribute":"email","values": ["${email}"]}`,
            {
                method: "GET",
                headers: {
                    "X-Appwrite-Project":
                        process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
                    "X-Appwrite-Key": process.env.NEXT_PUBLIC_APPWRITE_API_KEY!,
                },
            },
        ).then((res) => res.json());
        const existingUser = userList.users[0];

        if (existingUser) {
            return true;
        }
        return false;
    }

    async login(email: string, password: string): Promise<SessionProps | null> {
        const { account } = await createAdminClient();

		try {
			const session = await account.createEmailPasswordSession(
				email,
				password,
			);
			if (session) {
				return { session, error: null };
			}
		} catch (error) {
			return { session: null, error: "No session found" };
		}

    }

    async loginOAuth(provider: OAuthProvider): Promise<string | null> {
        const { account } = await createAdminClient();
        const url = account.createOAuth2Token(
            provider,
            `${process.env.NEXT_PUBLIC_ADDRESS}/api/oauth`,
            `${process.env.NEXT_PUBLIC_ADDRESS}/login`,
        );

		return url;
    }

    async register(
        name: string,
		surname: string,
        email: string,
        password: string,
    ): Promise<SessionProps | null> {
        const { account } = await createAdminClient();
		const newUserId = ID.unique();

		// Create a new user if it doesn't exist
		const userExists = await this.checkUserAuthExists(email);
		if (!userExists) {
			await createNewDeveloperUseCase.execute(newUserId, name, surname, email);
		}

        await account.create(newUserId, email, password, `${name} ${surname}`);
        return await this.login(email, password);
    }

    async logout(): Promise<void> {
        const { account } = await createSessionClient();
        await account.deleteSession("current");
    }

    async getCurrentUser(): Promise<Models.User<Models.Preferences>> | null {
        const { account } = await createAdminClient();
        const user: Models.User<Models.Preferences> = await account.get();
        if (user) {
            return user;
        }
        return null;
    }

    async getCurrentSession(): Promise<Models.Session | null> {
        const { account } = await createAdminClient();
        const session: Models.Session = await account.getSession("current");
        if (session) {
            return session;
        }
        return null;
    }
}
