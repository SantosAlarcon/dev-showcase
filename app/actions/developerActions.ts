'use server';

import { getCurrentUserUseCase, getDeveloperByIdUseCase } from "@/src/config";

export const getProfileData = async () => {
    const user = await getCurrentUserUseCase.execute();

    if (!user) {
        return null;
    }

    const developer = await getDeveloperByIdUseCase.execute(user.$id);

    return developer;
};