import { NextRequest, NextResponse } from "next/server";
import { getProjectsByDeveloperIdUseCase } from "@/src/config";

/**
 * @swagger
 * /api/developers/{slug}/projects:
 *   get:
 *     summary: Get projects by developer slug
 *     description: Returns all projects by the developer slug provided
 *     tags:
 *       - Developers
 *     parameters:
 *       - name: slug
 *         in: path
 *         description: Developer slug
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
    { params }: { params: Promise<{ slug: string }> },
) {
    const { slug } = await params;

    try {
        const projects = await getProjectsByDeveloperIdUseCase.execute(slug);
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 },
        );
    }
}
