import db from "@/lib/appwrite/db";

export const getDeveloperInfo = async (id: string) => {
	const developer = await db.getDocument(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
		process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
		id
	);
    return developer;
};
