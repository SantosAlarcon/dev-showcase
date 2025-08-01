import { IDeveloperRepository } from "@/src/domain/repositories/IDeveloperRepository";

export class CheckExistingDBUserUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(email: string) {
        return await this.developerRepository.checkUserDBExists(email);
    }
}
