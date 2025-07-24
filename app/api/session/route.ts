import type { Models } from "appwrite";
import { NextResponse } from "next/server";
import { account } from "@/lib/appwrite/client";

export async function GET() {
	const session: Models.Session = await account.getSession("current");
	if (session) {
		return NextResponse.json(session);
	}
	return NextResponse.json({error: "No session found"}, {status: 404});
}
