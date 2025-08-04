import BaseLayout from "@/components/layout/BaseLayout";
import { getCurrentUserUseCase, getDeveloperByIdUseCase } from "@/src/config";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "My Profile - DevShowcase",
};

const ProfileLayout = async ({ children }: { children: ReactNode }) => {
    const user = await getCurrentUserUseCase.execute();

	if (!user) {
		return redirect("/login");
	}

    const userInfo = await getDeveloperByIdUseCase.execute(user.$id);

    return <BaseLayout>{children}</BaseLayout>;
};

export default ProfileLayout;
