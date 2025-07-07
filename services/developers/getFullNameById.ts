import { getDeveloperInfo } from "./getDeveloperInfo";

const getFullNameById = async (id: string) => {
    const developer = await getDeveloperInfo(id);
    return `${developer.name} ${developer.surname}`;
};

export default getFullNameById;
