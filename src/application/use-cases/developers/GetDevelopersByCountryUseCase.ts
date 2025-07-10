import { DeveloperInfo } from '../../../domain/entities/developer';
import { IDeveloperRepository } from '../../../domain/repositories/IDeveloperRepository';

export class GetDevelopersByCountryUseCase {
  constructor(private developerRepository: IDeveloperRepository) {}

  async execute(country: string): Promise<DeveloperInfo[] | null> {
    return this.developerRepository.getDevelopersByCountry(country);
  }
}
