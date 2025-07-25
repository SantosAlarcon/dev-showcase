import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
	const cookieList = await cookies();
	const session = cookieList?.get("dev-showcase-session");

	try {
		if (session) {
			return NextResponse.json(JSON.parse(session.value));
		}
	} catch (error) {
		return NextResponse.json({error: "Error fetching session"}, {status: 500});
	}

	return NextResponse.json({error: "No session found"}, {status: 404});
}
