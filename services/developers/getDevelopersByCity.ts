import db from "@/lib/appwrite/db";
import { Query } from "appwrite";
export const getDevelopersByCity = async (city: string) => {
    const developers = await db.listDocuments(
        process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
        process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
        [Query.equal("city", city), Query.orderAsc("name")],
    );
    return developers.documents;
};
