import { NextRequest, NextResponse } from "next/server";
import { GetAllDevelopersUseCase } from "@/src/application/use-cases/developers/GetAllDevelopersUseCase";
import { AppwriteDeveloperRepository } from "@/src/infrastructure/data/AppwriteDeveloperRepository";
import { GetDevelopersByCountryUseCase } from "@/src/application/use-cases/developers/GetDevelopersByCountryUseCase";
import { GetDevelopersByRoleUseCase } from "@/src/application/use-cases/developers/GetDevelopersByRoleUseCase";
import { GetDevelopersByCityUseCase } from "@/src/application/use-cases/developers/GetDevelopersByCityUseCase";
import { GetDevelopersByStateUseCase } from "@/src/application/use-cases/developers/GetDevelopersByStateUseCase";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    const country = searchParams.get("country");
    const role = searchParams.get("role");
    const city = searchParams.get("city");
    const state = searchParams.get("state");

    const developerRepository = new AppwriteDeveloperRepository();
    const getAllDevelopersUseCase = new GetAllDevelopersUseCase(
        developerRepository,
    );
    const getDevelopersByCountryUseCase = new GetDevelopersByCountryUseCase(
        developerRepository,
    );
    const getDevelopersByRoleUseCase = new GetDevelopersByRoleUseCase(
        developerRepository,
    );
    const getDevelopersByCityUseCase = new GetDevelopersByCityUseCase(
        developerRepository,
    );
    const getDevelopersByStateUseCase = new GetDevelopersByStateUseCase(
        developerRepository,
    );

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
