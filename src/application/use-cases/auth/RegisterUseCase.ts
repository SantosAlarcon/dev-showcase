import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class RegisterUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute(name: string, email: string, password: string) {
        if (!email || !password || !name) {
            throw new Error("Missing required fields");
        }
        return this.authRepository.register(name, email, password);
    }
}
