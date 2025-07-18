import MinimalLayout from "@/components/layout/MinimalLayout";

export async function generateMetadata(): Promise<{ title: string; description: string; }> {
	return {
		title: "Register - Talent Showcase",
		description: "Register page for Talent Showcase",
	};
}

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<MinimalLayout>
			{children}
		</MinimalLayout>
	)
}

export default RegisterLayout;
