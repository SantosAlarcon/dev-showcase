import { IDeveloperRepository } from "../../domain/repositories/IDeveloperRepository";
import { DeveloperInfo } from "../../domain/entities/developer";
import { databases } from "../../../lib/appwrite/client";
import { Query } from "appwrite";

export class AppwriteDeveloperRepository implements IDeveloperRepository {
    async createNewDeveloper(userId: string, name: string, surname: string, email: string): Promise<void> {
		try {
			const newDeveloper: DeveloperInfo = {
				id: userId,
				name: name,
				surname: surname,
				title: "",
				country: "",
				state: "",
				city: "",
				memberSince: "",
				avatar: "",
				bannerImage: "",
				skills: {frontend: [], backend: [], other: []},
				reviews: 0,
				followers: 0,
				availability: "Freelance",
				bio: "",
				email: email,
				freelancer: false,
				workExperience: [],
				languages: [],
				social: {
					github: "",
					linkedin: "",
					twitter: "",
					facebook: "",
					instagram: "",
				},
			};
			databases.createDocument(
				process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
				process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
				userId,
				[ JSON.stringify(newDeveloper) ],
			);
		} catch (error) {
			console.error("Error creating new developer:", error);
			throw new Error("Failed to create new developer");
		}
    }
    async updateDeveloper(id: string, developerInfo: DeveloperInfo): Promise<void> {
		try {
			await databases.updateDocument(
				process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
				process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
				id,
				developerInfo,
			);
		} catch (error) {
			console.error("Error updating developer:", error);
			throw new Error("Failed to update developer");
		}
    }
    async deleteDeveloper(id: string): Promise<void> {
		try {
			await databases.deleteDocument(
				process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
				process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
				id,
			);
		} catch (error) {
			console.error("Error deleting developer:", error);
			throw new Error("Failed to delete developer");
		}
    }
    getAllSkills(skills: string): string[] {
		const skillsObject = JSON.parse(skills);
		const skillsArray = Object.values(skillsObject);
        try {
			return skillsArray.flat() as string[];
        } catch (error) {
            console.error("Error fetching skills:", error);
            throw new Error("Failed to fetch skills");
        }
    }

    async getAllDevelopers(): Promise<DeveloperInfo[]> {
        try {
            const response = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
            );
            return response.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error fetching developers:", error);
            throw new Error("Failed to fetch developers");
        }
    }

    async getDeveloperById(id: string): Promise<DeveloperInfo | null> {
        try {
            const result = await databases.getDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                id,
            );
            const developerFound: DeveloperInfo = {
                id: result.$id,
                name: result.name,
                surname: result.surname,
                title: result.title,
                country: result.country,
                state: result.state,
                city: result.city,
                memberSince: result.memberSince,
                avatar: result.avatar,
                bannerImage: result.bannerImage,
                skills: JSON.parse(result.skills),
                reviews: result.reviews,
                followers: result.followers,
                availability: result.availability,
                bio: result.bio,
                email: result.email,
                freelancer: result.freelancer,
                workExperience: JSON.parse(result.workExperience),
                languages: result.languages,
                social: JSON.parse(result.social),
            };
            return developerFound;
        } catch (error) {
            console.error("Error fetching developer:", error);
            return null;
        }
    }

    async getFeaturedDevelopers(): Promise<DeveloperInfo[]> {
        try {
            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                [Query.orderDesc("followers"), Query.limit(9)],
            );
            return result.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error in getFeaturedDevelopers service:", error);
            return [];
        }
    }

    async getDevelopersByCity(city: string): Promise<DeveloperInfo[]> {
        try {
            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                [Query.equal("city", city), Query.limit(9)],
            );
            return result.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error in getDevelopersByCity service:", error);
            return [];
        }
    }

    async getDevelopersByCountry(country: string): Promise<DeveloperInfo[]> {
        try {
            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                [Query.equal("country", country), Query.limit(9)],
            );
            return result.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error in getDevelopersByCountry service:", error);
            return [];
        }
    }

    async getDevelopersByRole(role: string): Promise<DeveloperInfo[]> {
        try {
            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                [Query.equal("role", role), Query.limit(9)],
            );
            return result.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error in getDevelopersByRole service:", error);
            return [];
        }
    }

    async getDevelopersByState(state: string): Promise<DeveloperInfo[]> {
        try {
            const result = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                [Query.equal("state", state), Query.limit(9)],
            );
            return result.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error in getDevelopersByState service:", error);
            return [];
        }
    }
}
