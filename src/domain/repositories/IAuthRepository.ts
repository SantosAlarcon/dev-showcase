import { Models, OAuthProvider } from "appwrite";
import { AuthUser } from "../entities/user";

export interface IAuthRepository {
    login(email: string, password: string): Promise<any>;
    loginOAuth(provider: OAuthProvider): Promise<string>;
    register(
        name: string,
        email: string,
        password: string,
    ): Promise<AuthUser | null>;
    logout(): Promise<any>;
    getCurrentUser(): Promise<Models.User<Models.Preferences>> | null;
	getCurrentSession(): Promise<Models.Session | null>;
    checkUserExists(email: string): Promise<boolean>;
}
