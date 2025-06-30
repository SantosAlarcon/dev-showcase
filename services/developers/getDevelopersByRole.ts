import developersData from "@/data/mockDeveloperData";
import { DeveloperInfo } from "@/types/types";

export const getDevelopersByRole = (role: string) => {
	const developers = developersData.filter((developer: DeveloperInfo) => developer.title === role);
	return developers;
};
