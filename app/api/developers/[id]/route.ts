import { getDeveloperInfo } from "@/services/developers/getDeveloperInfo";
import { NextRequest } from "next/server";

/**
 * @swagger
 * /api/developers/{id}:
 *   get:
 *     summary: Get developer by id
 *     description: Get developer information with the id provided
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
 *         description: Developer found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Developer'
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
export async function GET(_request: NextRequest, params: Promise<{params: {id: string}}>) {
	const p = await params;
	const developerInfo = getDeveloperInfo(p.params.id);

	if (!developerInfo) {
		return Response.json({ error: "Developer not found" }, {status: 404, statusText: "Developer Not Found"});
	}

	return Response.json(developerInfo);
}
