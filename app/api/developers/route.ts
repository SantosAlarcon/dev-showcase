import { getAllDevelopersUseCase, getDevelopersByCityUseCase, getDevelopersByCountryUseCase, getDevelopersByRoleUseCase, getDevelopersByStateUseCase } from "@/src/config";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const country = searchParams.get("country");
    const role = searchParams.get("role");
    const city = searchParams.get("city");
    const state = searchParams.get("state");

    try {
        if (country) {
            const developers =
                await getDevelopersByCountryUseCase.execute(country);
            return NextResponse.json(developers);
        }

        if (role) {
            const developers = await getDevelopersByRoleUseCase.execute(role);
            return NextResponse.json(developers);
        }

        if (city) {
            const developers = await getDevelopersByCityUseCase.execute(city);
            return NextResponse.json(developers);
        }

        if (state) {
            const developers = await getDevelopersByStateUseCase.execute(state);
            return NextResponse.json(developers);
        }

        const developers = await getAllDevelopersUseCase.execute();
        return NextResponse.json(developers);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch developers" },
            { status: 500 },
        );
    }
}
