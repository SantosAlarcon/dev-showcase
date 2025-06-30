import { getProjectsByDeveloper } from "@/services/projects/getProjectsByDeveloper";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, params: Promise<{params: {id: string}}>) {
	const p = await params;
	const projects = getProjectsByDeveloper(p.params.id);

	return Response.json(projects);
}
