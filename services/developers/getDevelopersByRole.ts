import db from "@/lib/appwrite/db";
import { Query } from "appwrite";
export const getDevelopersByRole = async (role: string) => {
    const developers = await db.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
        [Query.equal("role", role), Query.orderAsc("name")],
    );
    return developers.documents;
};
