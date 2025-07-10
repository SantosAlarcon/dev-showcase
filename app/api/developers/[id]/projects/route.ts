import { NextRequest, NextResponse } from "next/server";
import { GetProjectsByDeveloperIdUseCase } from "@/src/application/use-cases/projects/GetProjectsByDeveloperIdUseCase";
import { AppwriteProjectRepository } from "@/src/infrastructure/data/AppwriteProjectRepository";

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
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;
    const projectRepository = new AppwriteProjectRepository();
    const getProjectsByDeveloperIdUseCase = new GetProjectsByDeveloperIdUseCase(
        projectRepository,
    );

    try {
        const projects = await getProjectsByDeveloperIdUseCase.execute(id);
        return NextResponse.json(projects);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch projects" },
            { status: 500 },
        );
    }
}
