import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class DeleteDeveloperUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(id: string): Promise<void> {
        return this.developerRepository.deleteDeveloper(id);
    }
}
