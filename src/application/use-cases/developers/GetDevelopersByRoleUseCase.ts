import { DeveloperInfo } from '../../../domain/entities/developer';
import { IDeveloperRepository } from '../../../domain/repositories/IDeveloperRepository';

export class GetDevelopersByRoleUseCase {
  constructor(private developerRepository: IDeveloperRepository) {}

  async execute(id: string): Promise<DeveloperInfo[] | null> {
    return this.developerRepository.getDevelopersByRole(id);
  }
}
