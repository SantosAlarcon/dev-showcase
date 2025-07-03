import { appwriteDatabaseId, appwriteEndpoint, appwriteProjectId, appwriteProjectsCollectionId} from "@/constants/endpoints";
import { NextRequest } from "next/server";

/**
 * @swagger
 * /api/projects/{id}:
 *   get:
 *     summary: Get project by id
 *     description: Get project information with the id provided
 *     tags:
 *       - Projects
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Project id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Project not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export async function GET(_request: NextRequest, params: Promise<{params: {id: string}}>) {
	const p = await params;
	const projectInfo = await fetch(`${appwriteEndpoint}/databases/${appwriteDatabaseId}/collections/${appwriteProjectsCollectionId}/documents/${p.params.id}`,{headers: {"X-Appwrite-Project": appwriteProjectId}}).then((res) => res.json());

	if (!projectInfo) {
		return Response.json({ error: "Project not found" }, {status: 404, statusText: "Project Not Found"});
	}

	return Response.json(projectInfo);
}
