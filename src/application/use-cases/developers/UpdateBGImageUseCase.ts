import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class UpdateBGImageUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(id: string, image: string): Promise<void> {
        return this.developerRepository.updateBackgroundImage(id, image);
    }
}
