import BaseLayout from "@/components/layout/BaseLayout";
import { getCurrentUserUseCase } from "@/src/config";
import { QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "My Profile - DevShowcase",
};

const ProfileLayout = async ({ children }: { children: ReactNode }) => {
	const queryClient: QueryClient = new QueryClient();
    const user = await queryClient.fetchQuery({
		queryKey: ["user"],
        queryFn: () => getCurrentUserUseCase.execute()
    });

    if (!user) {
        return redirect("/login");
    }

    return (
            <BaseLayout>{children}</BaseLayout>
    );
};

export default ProfileLayout;
