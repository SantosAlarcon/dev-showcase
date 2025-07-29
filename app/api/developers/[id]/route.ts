import { NextRequest, NextResponse } from "next/server";
import { getDeveloperByIdUseCase } from "@/src/config";

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
export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> },
) {
    const { id } = await params;

    try {
        const developer = await getDeveloperByIdUseCase.execute(id);

        if (!developer) {
            return NextResponse.json(
                { error: "Developer not found" },
                { status: 404 },
            );
        }

        return NextResponse.json(developer);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch developer" },
            { status: 500 },
        );
    }
}
