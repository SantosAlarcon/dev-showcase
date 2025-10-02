import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/appwrite/server";
import { getLoggedInUser } from "@/lib/appwrite/api";
import { checkExistingDBUserUseCase, createNewDeveloperUseCase } from "@/src/config";

export async function GET(req: NextRequest) {
    const { searchParams } = req.nextUrl;
    const secret = searchParams.get("secret");
    const userId = searchParams.get("userId");
    const cookieList = await cookies();

    if (secret && userId) {
        try {
			const {account} = await createAdminClient();

			// Create a new session
			const session = await account.createSession({
				userId: userId,
				secret: secret,
			});

			// Set the session cookie
			cookieList.set("dev-showcase-session", session.secret, {
                path: "/",
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 60 * 60 * 24 * 30,
            });

			// Create a new user if it doesn't exist in the developer database
			const user = await getLoggedInUser();
			const name = user.name.split(" ")[0];
			const surname = (user.name.split(" ")[2] !== "") ? `${user.name.split(" ")[1]} ${user.name.split(" ")[2]}` : user.name.split(" ")[1];
			const userExistsInDB = await checkExistingDBUserUseCase.execute(user.email);
			if (!userExistsInDB) {
				await createNewDeveloperUseCase.execute(userId, name, surname, user.email);
			}

            return NextResponse.redirect(new URL("/profile", req.url));
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
