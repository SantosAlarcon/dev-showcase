import { NextRequest, NextResponse } from "next/server";
import { getDeveloperBySlugUseCase } from "@/src/config";

/**
 * @swagger
 * /api/developers/{slug}:
 *   get:
 *     summary: Get developer by slug
 *     description: Get developer information with the slug provided
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
    { params }: { params: Promise<{ slug: string }> },
) {
    const { slug } = await params;

    try {
        const developer = await getDeveloperBySlugUseCase.execute(slug);

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
