import { Models, OAuthProvider } from "appwrite";

type SessionProps = {
    session: Models.Session;
    error: string | null;
};

export interface IAuthRepository {
    login(email: string, password: string): Promise<SessionProps>;
    loginOAuth(provider: OAuthProvider): Promise<string>;
    createAuthUser(
        name: string,
		surname: string,
        email: string,
        password: string,
    ): Promise<Models.User<Models.Preferences> | null>;
    logout(): Promise<any>;
    getCurrentUser(): Promise<Models.User<Models.Preferences>> | null;
	getCurrentSession(): Promise<Models.Session | null>;
    checkUserAuthExists(email: string): Promise<boolean>;
}
