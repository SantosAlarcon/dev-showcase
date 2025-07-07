import { getDevelopers } from "@/lib/appwrite/api";

export const getAllDevelopers = async () => {
	try {
		const developers = await getDevelopers();
		return developers;
	} catch (error) {
		console.error("Error in getAllDevelopers service:", error);
		// Depending on your error handling strategy, you might want to:
		// - Return an empty array
		// - Return a specific error object
		// - Re-throw the error to be handled by the UI layer
		return [];
	}
};
