import { SkillsInfo } from "@/types/types";

export const getAllSkills = (skills: SkillsInfo): string[] => {
    return [...skills.frontend, ...skills.backend, ...skills.other];
};
