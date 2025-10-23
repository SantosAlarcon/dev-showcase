import { NextResponse, NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
    if (
        request.nextUrl.pathname.startsWith("/api/") ||
        request.nextUrl.pathname.startsWith("/login/") ||
        request.nextUrl.pathname.startsWith("/register/") ||
		request.nextUrl.pathname.startsWith("/discover/") ||
		request.nextUrl.pathname.startsWith("/profile/") ||
        request.nextUrl.pathname.startsWith("/reset-password/") ||
        request.nextUrl.pathname.startsWith("/new-password/")
    ) {
        return NextResponse.next();
    }
}

// Apply this proxy only to files in the app directory and these directories
export const config = {
    //matcher: ["/((?!api|static|.*\\..*|_next).*)", "/login", "/register", "/reset-password", "/new-password"],
    matcher: [
        "/((?!api|discover|login|profile|register|reset-password|new-password|static|.*\\..*|_next).*)",
    ],
};
