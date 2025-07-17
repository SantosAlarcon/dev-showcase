import MinimalLayout from "@/components/layout/MinimalLayout";

export async function generateMetadata(): Promise<{ title: string; description: string; }> {
	return {
		title: "Login - Talent Showcase",
		description: "Login page for Talent Showcase",
	};
}

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<MinimalLayout>
			{children}
		</MinimalLayout>
	)
}

export default LoginLayout;
