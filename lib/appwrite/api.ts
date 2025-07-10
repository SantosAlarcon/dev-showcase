import { databases } from './client';

export const getDevelopers = async () => {
    try {
        const response = await databases.listDocuments(
            process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
            process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!
        );
        return response.documents;
    } catch (error) {
        console.error('Error fetching developers:', error);
        throw new Error('Failed to fetch developers');
    }
};
