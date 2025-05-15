import { Project } from "@/types/types";
import { projectsData } from "@/data/mockProjectData";

export const getProjectsByUser = (userId: string) => {
	const projects: Project[] | undefined = projectsData
		.filter((project: Project) => project.userId === userId)
		.toSorted((a, b) => a.publishedDate.localeCompare(b.publishedDate));
	return projects;
};
