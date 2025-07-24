import { Project } from "../entities/project";

export interface IProjectRepository {
    getAllProjects(): Promise<Project[]>;
    getProjectById(id: string): Promise<Project | null>;
    getLatestProjects(): Promise<Project[]>;
    getProjectsByDeveloperId(developerId: string): Promise<Project[]>;
}
