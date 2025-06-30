import developersData from "@/data/mockDeveloperData";
import { DeveloperInfo } from "@/types/types";

export const getDevelopersByCity = (city: string) => {
	const developers = developersData.filter((developer: DeveloperInfo) => developer.city === city);
	return developers;
};
