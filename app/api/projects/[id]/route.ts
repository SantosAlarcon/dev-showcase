import { NextRequest, NextResponse } from "next/server";
import { getProjectByIdUseCase } from "@/src/config";

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
export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    try {
        const project = await getProjectByIdUseCase.execute(id);

        if (!project) {
            return NextResponse.json(
                { error: "Project not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch project" },
            { status: 500 },
        );
    }
}
