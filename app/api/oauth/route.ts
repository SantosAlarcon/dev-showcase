import { account } from "@/lib/appwrite/client";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const secret = searchParams.get("secret");
    const userId = searchParams.get("userId");
    const cookieList = await cookies();

    if (secret && userId) {
        try {
            const session = await account.createSession(userId, secret);
            cookieList.set("dev_showcase_session", JSON.stringify(session), {
                path: "/",
                // httpOnly: true,
                // secure: process.env.NODE_ENV === "production",
                // sameSite: "lax",
                // maxAge: 60 * 60 * 24 * 30,
            });

            return NextResponse.redirect(new URL("/discover", req.url));
        } catch (error) {
            console.error("Error during OAuth callback:", error);
            return NextResponse.redirect(
                new URL("/login?error=oauth_failed", req.url),
            );
        }
    }

    return NextResponse.redirect(
        new URL("/login?error=invalid_oauth_params", req.url),
    );
}
