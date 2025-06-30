import { getProjectInfo } from "@/services/projects/getProjectInfo";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, params: Promise<{params: {id: string}}>) {
	const p = await params;
	const projectInfo = getProjectInfo(p.params.id);

	if (!projectInfo) {
		return Response.json({ error: "Project not found" }, {status: 404, statusText: "Project Not Found"});
	}

	return Response.json(projectInfo);
}
