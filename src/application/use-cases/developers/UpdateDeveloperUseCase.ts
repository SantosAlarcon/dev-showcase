import { DeveloperInfo } from "@/src/domain/entities/developer";
import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class UpdateDeveloperUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(id: string, developerData: DeveloperInfo): Promise<void> {
        return this.developerRepository.updateDeveloper(id, developerData);
    }
}
