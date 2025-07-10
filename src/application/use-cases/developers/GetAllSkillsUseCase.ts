import { IDeveloperRepository } from '../../../domain/repositories/IDeveloperRepository';

export class GetAllSkillsUseCase {
  constructor(private developerRepository: IDeveloperRepository) {}

  execute(skills: string): string[] {
    return this.developerRepository.getAllSkills(skills);
  }
}
