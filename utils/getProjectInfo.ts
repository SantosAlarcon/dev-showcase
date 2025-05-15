import { projectsData } from "@/data/mockProjectData";
import { Project } from "@/types/types";

export const getProjectInfo = (id: string) => {
	const project: Project | undefined = projectsData.find(
		 
		(project: Project) => project.id === id,
	);
	return project;
}
