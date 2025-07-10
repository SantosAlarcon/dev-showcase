import { Project } from '../../../domain/entities/project';
import { IProjectRepository } from '../../../domain/repositories/IProjectRepository';

export class GetProjectByIdUseCase {
  constructor(private projectRepository: IProjectRepository) {}

  async execute(id: string): Promise<Project | null> {
    return this.projectRepository.getProjectById(id);
  }
}
