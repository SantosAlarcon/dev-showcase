import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class GetCurrentUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute() {
        return this.authRepository.getCurrentUser();
    }
}
