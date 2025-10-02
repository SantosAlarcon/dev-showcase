import ProfilePageComponent from "@/components/ui/ProfilePageComponent";
import { getProfileData } from "@/app/actions/developerActions";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

const ProfilePage = async () => {
	const queryClient: QueryClient = new QueryClient();

	const developer = await getProfileData();

	if (!developer) {
		return null;
	}

	await queryClient.prefetchQuery({
		queryKey: ["developer", developer.$id],
		queryFn: () => Promise.resolve(developer),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<ProfilePageComponent developer={developer} />
		</HydrationBoundary>
	);
};

export default ProfilePage;
