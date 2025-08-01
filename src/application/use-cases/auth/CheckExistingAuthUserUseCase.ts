import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class CheckExistingAuthUserUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute(email: string) {
        return await this.authRepository.checkUserAuthExists(email);
    }
}
