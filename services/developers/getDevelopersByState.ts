import developersData from "@/data/mockDeveloperData";
import { DeveloperInfo } from "@/types/types";

export const getDevelopersByState = (state: string) => {
	const developers = developersData.filter((developer: DeveloperInfo) => developer.state === state);
	return developers;
};
