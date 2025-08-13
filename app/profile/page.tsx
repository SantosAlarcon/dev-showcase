import ProfilePageComponent from "@/components/ui/ProfilePageComponent";
import { getCurrentUserUseCase, getDeveloperByIdUseCase } from "@/src/config";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";

export const revalidate = 3600;
export const dynamic = "force-dynamic";

const ProfilePage = async () => {
    const queryClient: QueryClient = new QueryClient();

    const user = await queryClient.fetchQuery({
        queryKey: ["user"],
        queryFn: () => getCurrentUserUseCase.execute(),
    });

    const developer = await queryClient.fetchQuery({
        queryKey: ["developer", user.$id],
        queryFn: () => getDeveloperByIdUseCase.execute(user.$id),
    });

    if (!developer) {
        return null;
    }

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProfilePageComponent developer={developer} />
        </HydrationBoundary>
    );
};

export default ProfilePage;
