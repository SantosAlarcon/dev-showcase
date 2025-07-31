
import { AppwriteAuthRepository } from '../infrastructure/data/AppwriteAuthRepository';
import { AppwriteDeveloperRepository } from '../infrastructure/data/AppwriteDeveloperRepository';
import { AppwriteProjectRepository } from '../infrastructure/data/AppwriteProjectRepository';
import { CheckExistingUserUseCase } from '../application/use-cases/auth/CheckExistingUserUseCase';
import { GetCurrentSessionUseCase } from '../application/use-cases/auth/GetCurrentSessionUseCase';
import { GetCurrentUserUseCase } from '../application/use-cases/auth/GetCurrentUserUseCase';
import { LoginOAuthUseCase } from '../application/use-cases/auth/LoginOAuthUseCase';
import { LoginUseCase } from '../application/use-cases/auth/LoginUseCase';
import { LogoutUseCase } from '../application/use-cases/auth/LogoutUseCase';
import { RegisterUseCase } from '../application/use-cases/auth/RegisterUseCase';
import { GetAllDevelopersUseCase } from '../application/use-cases/developers/GetAllDevelopersUseCase';
import { GetAllSkillsUseCase } from '../application/use-cases/developers/GetAllSkillsUseCase';
import { GetDeveloperByIdUseCase } from '../application/use-cases/developers/GetDeveloperByIdUseCase';
import { GetDevelopersByCityUseCase } from '../application/use-cases/developers/GetDevelopersByCityUseCase';
import { GetDevelopersByCountryUseCase } from '../application/use-cases/developers/GetDevelopersByCountryUseCase';
import { GetDevelopersByRoleUseCase } from '../application/use-cases/developers/GetDevelopersByRoleUseCase';
import { GetDevelopersByStateUseCase } from '../application/use-cases/developers/GetDevelopersByStateUseCase';
import { GetFeaturedDevelopersUseCase } from '../application/use-cases/developers/GetFeaturedDevelopersUseCase';
import { GetAllProjectsUseCase } from '../application/use-cases/projects/GetAllProjectsUseCase';
import { GetLatestProjectsUseCase } from '../application/use-cases/projects/GetLatestProjectsUseCase';
import { GetProjectByIdUseCase } from '../application/use-cases/projects/GetProjectByIdUseCase';
import { GetProjectsByDeveloperIdUseCase } from '../application/use-cases/projects/GetProjectsByDeveloperIdUseCase';
import { CreateNewDeveloperUseCase } from '../application/use-cases/developers/CreateNewDeveloperUseCase';
import { UpdateDeveloperUseCase } from '../application/use-cases/developers/UpdateDeveloperUseCase';
import { DeleteDeveloperUseCase } from '../application/use-cases/developers/DeleteDeveloperUseCase';
import { UnpublishDeveloperUseCase } from '../application/use-cases/developers/UnpublicDeveloperUseCase';
import { PublishDeveloperUseCase } from '../application/use-cases/developers/PublicDeveloperUseCase';

// Repositories
const authRepository = new AppwriteAuthRepository();
const developerRepository = new AppwriteDeveloperRepository();
const projectRepository = new AppwriteProjectRepository();

// Auth Use Cases
export const checkExistingUserUseCase = new CheckExistingUserUseCase(authRepository);
export const getCurrentSessionUseCase = new GetCurrentSessionUseCase(authRepository);
export const getCurrentUserUseCase = new GetCurrentUserUseCase(authRepository);
export const loginOAuthUseCase = new LoginOAuthUseCase(authRepository);
export const loginUseCase = new LoginUseCase(authRepository);
export const logoutUseCase = new LogoutUseCase(authRepository);
export const registerUseCase = new RegisterUseCase(authRepository);

// Developer Use Cases
export const getAllDevelopersUseCase = new GetAllDevelopersUseCase(developerRepository);
export const getAllSkillsUseCase = new GetAllSkillsUseCase(developerRepository);
export const getDeveloperByIdUseCase = new GetDeveloperByIdUseCase(developerRepository);
export const getDevelopersByCityUseCase = new GetDevelopersByCityUseCase(developerRepository);
export const getDevelopersByCountryUseCase = new GetDevelopersByCountryUseCase(developerRepository);
export const getDevelopersByRoleUseCase = new GetDevelopersByRoleUseCase(developerRepository);
export const getDevelopersByStateUseCase = new GetDevelopersByStateUseCase(developerRepository);
export const getFeaturedDevelopersUseCase = new GetFeaturedDevelopersUseCase(developerRepository);
export const createNewDeveloperUseCase = new CreateNewDeveloperUseCase(developerRepository);
export const updateDeveloperUseCase = new UpdateDeveloperUseCase(developerRepository);
export const deleteDeveloperUseCase = new DeleteDeveloperUseCase(developerRepository);
export const unpublishDeveloperUseCase = new UnpublishDeveloperUseCase(developerRepository);
export const publishDeveloperUseCase = new PublishDeveloperUseCase(developerRepository);

// Project Use Cases
export const getAllProjectsUseCase = new GetAllProjectsUseCase(projectRepository);
export const getLatestProjectsUseCase = new GetLatestProjectsUseCase(projectRepository);
export const getProjectByIdUseCase = new GetProjectByIdUseCase(projectRepository);
export const getProjectsByDeveloperIdUseCase = new GetProjectsByDeveloperIdUseCase(projectRepository);
