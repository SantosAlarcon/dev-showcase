import { DeveloperInfo } from '../../../domain/entities/developer';
import { IDeveloperRepository } from '../../../domain/repositories/IDeveloperRepository';

export class GetFeaturedDevelopersUseCase {
  constructor(private developerRepository: IDeveloperRepository) {}

  async execute(): Promise<DeveloperInfo[]> {
    return this.developerRepository.getFeaturedDevelopers();
  }
}
