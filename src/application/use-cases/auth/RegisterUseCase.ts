import { IAuthRepository } from "@/src/domain/repositories/IAuthRepository";
import { IDeveloperRepository } from "@/src/domain/repositories/IDeveloperRepository";

export class RegisterUseCase {
    constructor(
        private authRepository: IAuthRepository,
        private developerRepository: IDeveloperRepository,
    ) {}

    async execute(
        name: string,
        surname: string,
        email: string,
        password: string,
    ) {
        if (!email || !password || !name || !surname) {
            throw new Error("Missing required fields");
        }

        const authUser = await this.authRepository.createAuthUser(
            name,
            surname,
            email,
            password,
        );

        if (authUser) {
            await this.developerRepository.createNewDeveloper(
                authUser.$id,
                name,
                surname,
                email,
            );

            return this.authRepository.login(email, password);
        }

        return null;
    }
}
