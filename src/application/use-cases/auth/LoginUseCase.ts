import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class LoginUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute(email: string, password: string) {
        if (!email || !password) {
            throw new Error("Missing required fields");
        }
        return this.authRepository.login(email, password);
    }
}
