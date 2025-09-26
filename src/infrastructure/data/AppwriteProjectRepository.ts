import { IProjectRepository } from "../../domain/repositories/IProjectRepository";
import { Project } from "../../domain/entities/project";
import { databases } from "../../../lib/appwrite/client";
import { Query } from "appwrite";

export class AppwriteProjectRepository implements IProjectRepository {
    async getAllProjects(): Promise<Project[]> {
        try {
            const response = await databases.listRows(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID!,
                [Query.orderAsc("publishedDate")],
            );
            return response.rows as unknown as Project[];
        } catch (error) {
            console.error("Error fetching projects:", error);
            throw new Error("Failed to fetch projects");
        }
    }

    async getProjectById(id: string): Promise<Project | null> {
        try {
            const result = await databases.getRow(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID!,
                id,
            );
            return result as unknown as Project;
        } catch (error) {
            console.error("Error fetching project:", error);
            return null;
        }
    }

    async getLatestProjects(): Promise<Project[]> {
        try {
            const result = await databases.listRows(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID!,
                [Query.orderDesc("publishedDate"), Query.limit(9)],
            );
            return result.rows as unknown as Project[];
        } catch (error) {
            console.error("Error in getLatestProjects service:", error);
            return [];
        }
    }

    async getProjectsByDeveloperId(developerId: string): Promise<Project[]> {
        try {
            const projects = await databases.listRows(
                process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
                process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID!,
                [
                    Query.equal("developerId", developerId),
                    Query.orderAsc("publishedDate"),
                ],
            );
            return projects.rows as unknown as Project[];
        } catch (error) {
            console.error("Error fetching projects by developer:", error);
            return [];
        }
    }
}
