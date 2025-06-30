import developersData from "@/data/mockDeveloperData";
import { DeveloperInfo } from "@/types/types";

export const getDevelopersByCountry = (country: string) => {
	const developers = developersData.filter((developer: DeveloperInfo) => developer.country === country);
	return developers;
};
