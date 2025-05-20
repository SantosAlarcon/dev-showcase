import developersData from "@/data/mockDeveloperData";
import { DeveloperInfo } from "@/types/types";

export const getDeveloperInfo = (id: string) => {
	// @ts-ignore
    const developer: DeveloperInfo = developersData.find(
        (developer: DeveloperInfo) => developer.id === id,
    );
    return developer;
};
