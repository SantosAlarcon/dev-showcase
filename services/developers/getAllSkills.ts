export const getAllSkills = (skills: string): string[] => {
	const skillsObject = JSON.parse(skills);
    return [...skillsObject.frontend, ...skillsObject.backend, ...skillsObject.other];
};
