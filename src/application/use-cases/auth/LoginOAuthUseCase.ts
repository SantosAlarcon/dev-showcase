import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";
import { OAuthProvider } from "appwrite";

export class LoginOAuthUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute(provider: OAuthProvider) {
        return await this.authRepository.loginOAuth(provider);
    }
}
