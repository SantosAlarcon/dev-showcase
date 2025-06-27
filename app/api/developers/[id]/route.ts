import { getDeveloperInfo } from "@/services/developers/getDeveloperInfo";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, params: Promise<{params: {id: string}}>) {
	const p = await params;
	const developerInfo = getDeveloperInfo(p.params.id);
	console.log(request.nextUrl);

	return Response.json(developerInfo);
}
