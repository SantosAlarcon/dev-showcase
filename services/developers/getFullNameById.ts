import { getDeveloperInfo } from "./getDeveloperInfo";

const getFullNameById = (id: string) => {
    const developer = getDeveloperInfo(id);
    return `${developer.name} ${developer.surname}`;
};

export default getFullNameById;
