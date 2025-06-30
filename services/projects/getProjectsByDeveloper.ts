import { Project } from "@/types/types";
import { projectsData } from "@/data/mockProjectData";

export const getProjectsByDeveloper = (developerId: string) => {
	const projects: Project[] | undefined = projectsData
		.filter((project: Project) => project.developerId === developerId)
		.toSorted((a, b) => a.publishedDate.localeCompare(b.publishedDate));
	return projects;
};
