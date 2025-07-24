import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";

export class GetCurrentSessionUseCase {
    constructor(private authRepository: IAuthRepository) {}

    async execute() {
        return this.authRepository.getCurrentSession();
    }
}
