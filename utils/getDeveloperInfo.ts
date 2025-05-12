import { DeveloperInfo } from "@/types/types";
import developersData from "@/data/mockData";

export const getDeveloperInfo = (id: string) => {
    const developer: DeveloperInfo = developersData.find(
        (developer: DeveloperInfo) => developer.id === id,
    );
    return developer;
};
