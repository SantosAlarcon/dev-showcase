import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class GetDeveloperBackgroundUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    execute(fileId: string): typeof Image {
        return this.developerRepository.getDeveloperBackground(fileId);
    }
}
