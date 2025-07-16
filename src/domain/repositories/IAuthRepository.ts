import { OAuthProvider } from "appwrite";
import { AuthUser } from "../entities/user";

export interface IAuthRepository {
    login(email: string, password: string): Promise<AuthUser |null>;
    loginOAuth(provider: OAuthProvider): void;
	register(name: string, email: string, password: string): Promise<AuthUser | null>;
    logout(): Promise<any>;
    getCurrentUser(): Promise<AuthUser | any>;
}
