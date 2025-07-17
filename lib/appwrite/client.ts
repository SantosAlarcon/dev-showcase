import { Account, Client, Databases } from 'node-appwrite';

const client = new Client();
export const databases = new Databases(client);
export const account = new Account(client);

client
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)

export default client;
