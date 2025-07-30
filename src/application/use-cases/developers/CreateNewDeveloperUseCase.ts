import { IDeveloperRepository } from "../../../domain/repositories/IDeveloperRepository";

export class CreateNewDeveloperUseCase {
    constructor(private developerRepository: IDeveloperRepository) {}

    async execute(id: string, name: string, surname: string, email: string): Promise<void> {
        return this.developerRepository.createNewDeveloper(id, name, surname, email);
    }
}
