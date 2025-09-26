import { Models } from "appwrite";
import { databases } from "./client";
import { createSessionClient } from "./server";

export const getDevelopers = async () => {
    try {
        const response: Models.RowList = await databases.listRows(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
        );
        return response.rows;
    } catch (error) {
        console.error("Error fetching developers:", error);
        throw new Error("Failed to fetch developers");
    }
};

export const getLoggedInUser = async () => {
    try {
        const { account } = await createSessionClient();
        return await account.get();
    } catch (error) {
        return null;
    }
}
