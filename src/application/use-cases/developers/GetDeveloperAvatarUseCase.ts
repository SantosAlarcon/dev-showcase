import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class GetDeveloperAvatarUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    execute(fileId: string): typeof Image {
        return this.developerRepository.getDeveloperAvatar(fileId);
    }
}
