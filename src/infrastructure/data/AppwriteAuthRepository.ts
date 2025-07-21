import { account, svAccount } from "@/lib/appwrite/client";
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { AuthUser } from "@/src/domain/entities/user";
import { ID, OAuthProvider } from "appwrite";
import { Models } from "node-appwrite";

type SessionProps = {
	session: Models.Session;
	error: string | null;
};

export class AppwriteAuthRepository implements IAuthRepository {
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
        account.createOAuth2Session(
            provider,
            `${process.env.NEXT_PUBLIC_ADDRESS}`,
            `${process.env.NEXT_PUBLIC_ADDRESS}/login`
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
    async getCurrentUser(): Promise<AuthUser | null> {
        try {
            const user = await account.get();
            return {
                id: user.$id,
                name: user.name,
                email: user.email,
            };
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    }
}
