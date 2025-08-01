import { DeveloperInfo } from "../entities/developer";

export interface IDeveloperRepository {
	checkUserDBExists(email: string): Promise<boolean>;
	createNewDeveloper(id: string, name: string, surname: string, email: string): Promise<void>;
	updateDeveloper(id: string, developerInfo: DeveloperInfo): Promise<void>;
	deleteDeveloper(id: string): Promise<void>;
    getAllSkills(skills: string): string[];
    getAllDevelopers(): Promise<DeveloperInfo[]>;
    getDeveloperById(id: string): Promise<DeveloperInfo | null>;
	getDeveloperBySlug(slug: string): Promise<DeveloperInfo | null>;
    getFeaturedDevelopers(): Promise<DeveloperInfo[]>;
    getDevelopersByCity(city: string): Promise<DeveloperInfo[]>;
    getDevelopersByCountry(country: string): Promise<DeveloperInfo[]>;
    getDevelopersByRole(role: string): Promise<DeveloperInfo[]>;
    getDevelopersByState(state: string): Promise<DeveloperInfo[]>;
	unpublishDeveloper(id: string): Promise<void>;
	publishDeveloper(id: string): Promise<void>;
}
