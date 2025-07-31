
import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class PublishDeveloperUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(id: string): Promise<void> {
        return this.developerRepository.publishDeveloper(id);
    }
}
