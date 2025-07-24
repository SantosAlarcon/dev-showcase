import { Project } from "../../../domain/entities/project";
import { IProjectRepository } from "../../../domain/repositories/IProjectRepository";

export class GetProjectsByDeveloperIdUseCase {
    constructor(private projectRepository: IProjectRepository) {}

    async execute(developerId: string): Promise<Project[]> {
        return this.projectRepository.getProjectsByDeveloperId(developerId);
    }
}
