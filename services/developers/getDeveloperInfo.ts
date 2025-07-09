import db from "@/lib/appwrite/db";
import { DeveloperInfo } from "@/types/types";

export const getDeveloperInfo = async (id: string) => {
	const result = await db.getDocument(
		process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!,
		process.env.NEXT_PUBLIC_APPWRITE_DEVELOPERS_COLLECTION_ID!,
		id
	);

	const developer: DeveloperInfo = {
		id: result.id,
		name: result.name,
		surname: result.surname,
		title: result.title,
		country: result.country,
		state: result.state,
		city: result.city,
		memberSince: result.memberSince,
		avatar: result.avatar,
		bannerImage: result.bannerImage,
		skills: JSON.parse(result.skills),
		reviews: result.reviews,
		followers: result.followers,
		availability: result.availability,
		bio: result.bio,
		email: result.email,
		freelancer: result.freelancer,
		workExperience: JSON.parse(result.workExperience),
		languages: result.languages,
		social: JSON.parse(result.social),
	}

    return developer;
};
