import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class CheckExistingUserUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute(email: string) {
        return await this.authRepository.checkUserExists(email);
    }
}
