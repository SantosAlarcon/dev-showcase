import { getProjectsByDeveloper } from "@/services/projects/getProjectsByDeveloper";
import { NextRequest } from "next/server";

/**
 * @swagger
 * /api/developers/{id}/projects:
 *   get:
 *     summary: Get projects by developer id
 *     description: Returns all projects by the developer id provided
 *     tags:
 *       - Developers
 *     parameters:
 *       - name: id
 *         in: path
 *         description: Developer id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Projects found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: Developer not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
export async function GET(
    _request: NextRequest,
    params: Promise<{ params: { id: string } }>,
) {
    const p = await params;
    const projects = getProjectsByDeveloper(p.params.id);

    return Response.json(projects);
}
