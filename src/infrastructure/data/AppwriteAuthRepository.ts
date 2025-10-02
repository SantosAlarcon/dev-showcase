import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { ID, OAuthProvider } from "appwrite";
import { Models } from "node-appwrite";
import { createAdminClient, createSessionClient } from "@/lib/appwrite/server";

type SessionProps = {
    session: Models.Session;
    error: string | null;
};

export class AppwriteAuthRepository implements IAuthRepository {
    /**
     * Check if the user already exists in the Appwrite Users list
     * @param email
     * @returns Promise<boolean>
     */
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

    /**
     * Login the user with the provided email and password
     * @param email
     * @param password
     * @returns Promise<SessionProps | null>
     */
    async login(email: string, password: string): Promise<SessionProps | null> {
        const { account } = await createAdminClient();

        try {
            const session = await account.createEmailPasswordSession({
                email,
                password,
            });
            if (session) {
                return { session, error: null };
            }
        } catch (error) {
            return { session: null, error: "No session found" };
        }
    }

    /**
     * Login the user with the provided OAuth provider
     * @param provider
     * @returns Promise<string | null>
     */
    async loginOAuth(provider: OAuthProvider): Promise<string | null> {
        const { account } = await createAdminClient();
        const url = account.createOAuth2Token({
            provider,
            success: `${process.env.NEXT_PUBLIC_ADDRESS}/api/oauth/success`,
            failure: `${process.env.NEXT_PUBLIC_ADDRESS}/api/oauth/failure`,
        });

        return url;
    }

    /**
     * Register the user with the provided email, password, and name
     * @param name
     * @param surname
     * @param email
     * @param password
     * @returns Promise<SessionProps | null>
     */
    async createAuthUser(
        name: string,
        surname: string,
        email: string,
        password: string,
    ): Promise<Models.User<Models.Preferences> | null> {
        const { account } = await createAdminClient();
        const newUserId = ID.unique();

        const newUser = await account.create({
            userId: newUserId,
            email: email,
            password: password,
            name: `${name} ${surname}`,
        });
        return newUser;
    }

    /**
     * Logout the user
     * @returns Promise<void>
     */
    async logout(): Promise<void> {
        const { account } = await createSessionClient();
        await account.deleteSession({
            sessionId: "current",
        });
    }

    /**
     * Get the current user from the Appwrite Users list
     * @returns Promise<Models.User<Models.Preferences> | null>
     */
    async getCurrentUser(): Promise<Models.User<Models.Preferences>> | null {
        try {
            const { account } = await createSessionClient();
            const user: Models.User<Models.Preferences> = await account.get();
            if (user) {
                return user;
            }
        } catch (error) {
            console.log(error);
        }
        return null;
    }

    /**
     * Get the current session from the Appwrite Users list
     * @returns Promise<Models.Session | null>
     */
    async getCurrentSession(): Promise<Models.Session | null> {
        const { account } = await createAdminClient();
        const session: Models.Session = await account.getSession({
            sessionId: "current",
        });
        if (session) {
            return session;
        }
        return null;
    }
}
