import { Client, Account, Databases } from "appwrite";
import {
	Client as SVClient,
	Account as SVAccount,
	Databases as SVDatabases,
} from "node-appwrite";

const client = new Client()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
export const databases = new Databases(client);
export const account = new Account(client);

export const svClient = new SVClient()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
	.setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!);
export const svDatabases = new SVDatabases(svClient);
export const svAccount = new SVAccount(svClient);

export default client;
