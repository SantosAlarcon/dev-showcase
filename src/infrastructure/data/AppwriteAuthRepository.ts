import { account } from "@/lib/appwrite/client";
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { AuthUser } from "@/src/domain/entities/user";
import { ID, OAuthProvider } from "appwrite";
import { redirect } from "next/navigation";

export class AppwriteAuthRepository implements IAuthRepository {
    async login(email: string, password: string): Promise<AuthUser | null> {
        await account.createSession(email, password);
        return this.getCurrentUser();
    }
    async loginOAuth(provider: OAuthProvider) {
        const url: string = await account.createOAuth2Token(
            provider,
            `${process.env.NEXT_PUBLIC_ADDRESS}/api/oauth`,
            `${process.env.NEXT_PUBLIC_ADDRESS}/login`,
        );
        return redirect(url);
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
