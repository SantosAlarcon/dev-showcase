import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";
import { OAuthProvider } from "appwrite";

export class LoginOAuthUseCase {
	constructor(private authRepository: IAuthRepository) {}

	async execute(provider: OAuthProvider) {
		try {
			return await this.authRepository.loginOAuth(provider);
		} catch (AppwriteException) {
			throw new Error("Invalid credentials");
		}
	}
}
