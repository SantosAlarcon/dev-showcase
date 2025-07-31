
import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class UnpublishDeveloperUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(id: string): Promise<void> {
        return this.developerRepository.unpublishDeveloper(id);
    }
}
