import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const secret = searchParams.get("secret");
	const userId = searchParams.get("userId");

	if (secret && userId) {
		try {
			return NextResponse.redirect(new URL("/discover", req.url));
		} catch (error) {
			console.error("Error during OAuth callback:", error);
			return NextResponse.redirect(new URL("/login?error=oauth_failed", req.url));
		}
	}

	return NextResponse.redirect(new URL("/login?error=invalid_oauth_params", req.url));
}
