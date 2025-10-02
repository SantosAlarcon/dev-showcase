import type { OAuthProvider } from "appwrite";
import type { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class LoginOAuthUseCase {
    public constructor(private readonly authRepository: IAuthRepository) {}

    public async execute(provider: OAuthProvider): Promise<string> {
        return this.authRepository.loginOAuth(provider);
    }
}
