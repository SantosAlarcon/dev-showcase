import { DeveloperInfo } from "../../../domain/entities/developer";
import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class GetDeveloperBySlugUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(slug: string): Promise<DeveloperInfo | null> {
        return this.developerRepository.getDeveloperBySlug(slug);
    }
}
