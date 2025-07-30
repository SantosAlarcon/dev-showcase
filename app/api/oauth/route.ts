import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite/server";
import { checkExistingUserUseCase, createNewDeveloperUseCase } from "@/src/config";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const secret = searchParams.get("secret");
    const userId = searchParams.get("userId");
    const cookieList = await cookies();

    if (secret && userId) {
        try {
			const {account} = await createAdminClient();
            
			// Create a new session
			const session = await account.createSession(userId, secret);
            
			// Set the session cookie
			cookieList.set("dev-showcase-session", session.secret, {
                path: "/",
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24 * 30,
            });

			// Create a new user if it doesn't exist
			const user = await account.get();
			const name = user.name.split(" ")[0];
			const surname = user.name.split(" ")[1];
			const userExists = await checkExistingUserUseCase.execute(user.email);
			if (!userExists) {
				await createNewDeveloperUseCase.execute(user.$id, name, surname, user.email);
			}

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
