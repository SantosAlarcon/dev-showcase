import { Models, OAuthProvider } from "appwrite";

type SessionProps = {
    session: Models.Session;
    error: string | null;
};

export interface IAuthRepository {
    login(email: string, password: string): Promise<any>;
    loginOAuth(provider: OAuthProvider): Promise<string>;
    register(
        name: string,
		surname: string,
        email: string,
        password: string,
    ): Promise<SessionProps | null>;
    logout(): Promise<any>;
    getCurrentUser(): Promise<Models.User<Models.Preferences>> | null;
	getCurrentSession(): Promise<Models.Session | null>;
    checkUserExists(email: string): Promise<boolean>;
}
