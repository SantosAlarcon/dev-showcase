import { DeveloperInfo } from "../entities/developer";

export interface IDeveloperRepository {
	getAllSkills(skills: string): string[];
    getAllDevelopers(): Promise<DeveloperInfo[]>;
    getDeveloperById(id: string): Promise<DeveloperInfo | null>;
    getFeaturedDevelopers(): Promise<DeveloperInfo[]>;
    getDevelopersByCity(city: string): Promise<DeveloperInfo[]>;
    getDevelopersByCountry(country: string): Promise<DeveloperInfo[]>;
    getDevelopersByRole(role: string): Promise<DeveloperInfo[]>;
    getDevelopersByState(state: string): Promise<DeveloperInfo[]>;
}
