import db from "@/lib/appwrite/db";
import { Query } from "appwrite";

export const getAllProjects = async () => {
	return db.listDocuments(process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!, process.env.NEXT_PUBLIC_APPWRITE_PROJECTS_COLLECTION_ID!, [Query.orderAsc("publishedDate")]);
};
