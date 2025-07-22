import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const code = searchParams.get("code");
	const state = searchParams.get("state");

	console.log("code:", code);
	console.log("state:", state);

	if (code && state) {
		try {
			return NextResponse.redirect(new URL("/discover", req.url));
		} catch (error) {
			console.error("Error during OAuth callback:", error);
			return NextResponse.redirect(new URL("/login?error=oauth_failed", req.url));
		}
	}

	return NextResponse.redirect(new URL("/login?error=invalid_oauth_params", req.url));
}
