import db from "@/lib/appwrite/db";
import { Query } from "appwrite";

export const getFeaturedDevelopers = async () => {
	try {
		const result = await db.listDocuments(
			process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
			process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
			[Query.orderDesc("followers"), Query.limit(9)],
		);

		return result.documents;
	} catch (error) {
		console.error("Error in getAllDevelopers service:", error);
		// Depending on your error handling strategy, you might want to:
		// - Return an empty array
		// - Return a specific error object
		// - Re-throw the error to be handled by the UI layer
		return [];
	}
};
