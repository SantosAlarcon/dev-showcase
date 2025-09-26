import { Client, Account, Databases } from "appwrite";
import {
	Client as SVClient,
	Account as SVAccount,
	Databases as SVDatabases,
    TablesDB,
} from "node-appwrite";

// const client = new Client()
// 	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
// 	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
// export const databases = new Databases(client);
// export const account = new Account(client);

export const client = new SVClient()
	.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
	.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
	.setKey(process.env.NEXT_PUBLIC_APPWRITE_API_KEY!);
export const databases = new TablesDB(client);
export const account = new SVAccount(client);

export default client;
