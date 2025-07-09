import db from "@/lib/appwrite/db";
import { Query } from "appwrite";

export const getProjectsByDeveloper = async (developerId: string) => {
	const projects = await db.listDocuments(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
		process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID!, [Query.equal("developerId", developerId), Query.orderAsc("publishedDate")]
	);
	return projects.documents;
};
