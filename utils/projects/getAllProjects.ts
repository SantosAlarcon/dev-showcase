import { projectsData } from "@/data/mockProjectData";
import { Project } from "@/types/types";

export const getAllProjects = () => {
    return projectsData.sort((a: Project, b: Project) =>
        a.publishedDate.localeCompare(b.publishedDate),
    );
};
