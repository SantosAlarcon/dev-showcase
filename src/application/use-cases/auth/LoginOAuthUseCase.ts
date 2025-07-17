import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";
import { OAuthProvider } from "appwrite";

export class LoginOAuthUseCase {
	constructor(private authRepository: IAuthRepository) {}

	execute(provider: OAuthProvider) {
		this.authRepository.loginOAuth(provider);
	}
}
