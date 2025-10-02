import { describe, it, expect } from 'vitest';
import { GetDeveloperByIdUseCase } from '../../../../src/application/use-cases/developers/GetDeveloperByIdUseCase';
import { IDeveloperRepository } from '../../../../src/domain/repositories/IDeveloperRepository';
import { DeveloperInfo } from '../../../../src/domain/entities/developer';

// Mock implementation of the IDeveloperRepository for testing purposes
class MockDeveloperRepository implements IDeveloperRepository {
  private developers: DeveloperInfo[] = [
    {
      $id: '1',
      name: 'John',
      surname: 'Doe',
      slug: 'john-doe',
      title: 'Software Developer',
      country: 'USA',
      state: 'California',
      city: 'San Francisco',
      memberSince: new Date().toISOString(),
      skills: { frontend: ['React'], backend: ['Node.js'], other: [] },
      reviews: 10,
      followers: 100,
      availability: 'Full-time',
      bio: 'A passionate developer.',
      email: 'john.doe@example.com',
      freelancer: false,
      workExperience: [],
      languages: ['English'],
      social: { github: 'johndoe' },
      isPublic: true,
    },
  ];

  async getDeveloperById(id: string): Promise<DeveloperInfo | null> {
    const developer = this.developers.find((dev) => dev.$id === id);
    return Promise.resolve(developer || null);
  }
  
  // Implement other methods of IDeveloperRepository as needed for the compiler, 
  // but they can throw an error as they are not used in this test.
  getAllSkills(skills: string): string[] {
    throw new Error('Method not implemented.');
  }
  getAllDevelopers(): Promise<DeveloperInfo[]> {
    throw new Error('Method not implemented.');
  }
  getFeaturedDevelopers(): Promise<DeveloperInfo[]> {
    throw new Error('Method not implemented.');
  }
  getDevelopersByCity(city: string): Promise<DeveloperInfo[]> {
    throw new Error('Method not implemented.');
  }
  getDevelopersByCountry(country: string): Promise<DeveloperInfo[]> {
    throw new Error('Method not implemented.');
  }
  getDevelopersByRole(role: string): Promise<DeveloperInfo[]> {
    throw new Error('Method not implemented.');
  }
  getDevelopersByState(state: string): Promise<DeveloperInfo[]> {
    throw new Error('Method not implemented.');
  }
  getDeveloperBySlug(slug: string): Promise<DeveloperInfo | null> {
      throw new Error('Method not implemented.');
  }
  checkExistingDBUser(id: string): Promise<boolean> {
      throw new Error('Method not implemented.');
  }
  createNewDeveloper(developer: DeveloperInfo): Promise<DeveloperInfo> {
      throw new Error('Method not implemented.');
  }
  updateDeveloper(id: string, developer: Partial<DeveloperInfo>): Promise<DeveloperInfo> {
      throw new Error('Method not implemented.');
  }
  deleteDeveloper(id: string): Promise<void> {
      throw new Error('Method not implemented.');
  }
  publishDeveloper(id: string): Promise<DeveloperInfo> {
      throw new Error('Method not implemented.');
  }
  unpublishDeveloper(id: string): Promise<DeveloperInfo> {
      throw new Error('Method not implemented.');
  }
  updateBGImage(id: string, background: string): Promise<DeveloperInfo> {
      throw new Error('Method not implemented.');
  }
  getDeveloperBackground(id: string): Promise<string | null> {
      throw new Error('Method not implemented.');
  }
  getDeveloperAvatar(id: string, name: string): Promise<string> {
      throw new Error('Method not implemented.');
  }
}

describe('GetDeveloperByIdUseCase', () => {
  it('should return a developer when a valid ID is provided', async () => {
    // Arrange
    const mockDeveloperRepository = new MockDeveloperRepository();
    const getDeveloperByIdUseCase = new GetDeveloperByIdUseCase(mockDeveloperRepository);
    const developerId = '1';
    const expectedDeveloper: DeveloperInfo = {
        $id: '1',
        name: 'John',
        surname: 'Doe',
        slug: 'john-doe',
        title: 'Software Developer',
        country: 'USA',
        state: 'California',
        city: 'San Francisco',
        memberSince: new Date().toISOString(),
        skills: { frontend: ['React'], backend: ['Node.js'], other: [] },
        reviews: 10,
        followers: 100,
        availability: 'Full-time',
        bio: 'A passionate developer.',
        email: 'john.doe@example.com',
        freelancer: false,
        workExperience: [],
        languages: ['English'],
        social: { github: 'johndoe' },
        isPublic: true,
    };

    // Act
    const result = await getDeveloperByIdUseCase.execute(developerId);

    // Assert
    //This is a temporary workaround to avoid comparing dates
    if(result) {
        result.memberSince = expectedDeveloper.memberSince;
    }
    expect(result).to.deep.equal(expectedDeveloper);
  });

  it('should return null when an invalid ID is provided', async () => {
    // Arrange
    const mockDeveloperRepository = new MockDeveloperRepository();
    const getDeveloperByIdUseCase = new GetDeveloperByIdUseCase(mockDeveloperRepository);
    const developerId = '2';

    // Act
    const result = await getDeveloperByIdUseCase.execute(developerId);

    // Assert
    expect(result).to.be.null;
  });
});