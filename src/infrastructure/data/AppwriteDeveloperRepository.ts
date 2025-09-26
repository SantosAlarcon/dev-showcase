import { Query } from "appwrite";
import { databases } from "../../../lib/appwrite/client";
import type { DeveloperInfo } from "../../domain/entities/developer";
import type { IDeveloperRepository } from "../../domain/repositories/IDeveloperRepository";
import { storage } from "@/lib/appwrite/storage";

export class AppwriteDeveloperRepository implements IDeveloperRepository {
    getDeveloperAvatar(fileId: string): typeof Image {
        const avatar = storage.getFileView({
            bucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID!,
            fileId: fileId,
        });
        // @ts-ignore
        return avatar;
    }
    getDeveloperBackground(fileId: string): typeof Image {
        const background = storage.getFileView({
            bucketId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID!,
            fileId: fileId,
        });
        // @ts-ignore
        return background;
    }
    async checkUserDBExists(email: string): Promise<boolean> {
        const results = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
            [Query.equal("email", email)],
        );

        if (results.total > 0) {
            return true;
        }
        return false;
    }
    async unpublishDeveloper(id: string): Promise<void> {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
            id,
            {
                isPublic: false,
            },
        );
    }
    async publishDeveloper(id: string): Promise<void> {
        await databases.updateDocument(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
            id,
            {
                isPublic: true,
            },
        );
    }
    async createNewDeveloper(
        userId: string,
        name: string,
        surname: string,
        email: string,
    ): Promise<void> {
        try {
            const newDeveloper: DeveloperInfo = {
                id: userId,
                name: name,
                surname: surname,
                slug: "",
                title: "",
                country: "",
                state: "",
                city: "",
                memberSince: "",
                avatarFileId: "",
                bannerFileId: "",
                skills: { frontend: [], backend: [], other: [] },
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
                isPublic: false,
            };
            databases.createDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                userId,
                {
                    id: userId,
                    name: newDeveloper.name,
                    surname: newDeveloper.surname,
                    title: newDeveloper.title,
                    slug: newDeveloper.slug,
                    country: newDeveloper.country,
                    state: newDeveloper.state,
                    city: newDeveloper.city,
                    memberSince: newDeveloper.memberSince,
                    avatarFileId: newDeveloper.avatarFileId,
                    bannerFileId: newDeveloper.bannerFileId,
                    skills: JSON.stringify(newDeveloper.skills),
                    reviews: newDeveloper.reviews,
                    followers: newDeveloper.followers,
                    availability: newDeveloper.availability,
                    bio: newDeveloper.bio,
                    email: newDeveloper.email,
                    freelance: false,
                    freelanceHourlyRate: 0,
                    workExperience: JSON.stringify(newDeveloper.workExperience),
                    languages: newDeveloper.languages,
                    social: JSON.stringify(newDeveloper.social),
                },
            );
        } catch (error) {
            console.error("Error creating new developer:", error);
            throw new Error("Failed to create new developer");
        }
    }
    async updateDeveloper(
        id: string,
        developerInfo: DeveloperInfo,
    ): Promise<void> {
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

    async updateBackgroundImage(id: string, image: string): Promise<void> {
        try {
            await databases.updateDocument(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                id,
                {
                    bannerImage: image,
                },
            );
        } catch (error) {
            console.error("Error updating developer:", error);
            throw new Error("Failed to update developer");
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
                [Query.equal("isPublic", true)],
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
                slug: result.slug,
                surname: result.surname,
                title: result.title,
                country: result.country,
                state: result.state,
                city: result.city,
                memberSince: result.memberSince,
                avatarFileId: result.avatarFileId,
                bannerFileId: result.bannerFileId,
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
                isPublic: result.isPublic,
            };
            return developerFound;
        } catch (error) {
            console.error("Error fetching developer:", error);
            return null;
        }
    }

    async getDeveloperBySlug(slug: string): Promise<DeveloperInfo | null> {
        try {
            const resultList = await databases.listDocuments(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
                [Query.equal("slug", slug)],
            );

            const result = resultList.documents[0];

            const developerFound: DeveloperInfo = {
                id: result.id,
                name: result.name,
                slug: result.slug,
                surname: result.surname,
                title: result.title,
                country: result.country,
                state: result.state,
                city: result.city,
                memberSince: result.memberSince,
                avatarFileId: result.avatarFileId,
                bannerFileId: result.bannerFileId,
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
                isPublic: result.isPublic,
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
                [
                    Query.orderDesc("followers"),
                    Query.limit(9),
                    Query.equal("isPublic", true),
                ],
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
                [
                    Query.equal("city", city),
                    Query.limit(9),
                    Query.equal("isPublic", true),
                ],
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
                [
                    Query.equal("country", country),
                    Query.limit(9),
                    Query.equal("isPublic", true),
                ],
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
                [
                    Query.equal("role", role),
                    Query.limit(9),
                    Query.equal("isPublic", true),
                ],
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
                [
                    Query.equal("state", state),
                    Query.limit(9),
                    Query.equal("isPublic", true),
                ],
            );
            return result.documents as unknown as DeveloperInfo[];
        } catch (error) {
            console.error("Error in getDevelopersByState service:", error);
            return [];
        }
    }
}
