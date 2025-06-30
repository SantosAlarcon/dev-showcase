import { getDeveloperInfo } from "@/services/developers/getDeveloperInfo";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, params: Promise<{params: {id: string}}>) {
	const p = await params;
	const developerInfo = getDeveloperInfo(p.params.id);

	if (!developerInfo) {
		return Response.json({ error: "Developer not found" }, {status: 404, statusText: "Developer Not Found"});
	}

	return Response.json(developerInfo);
}
