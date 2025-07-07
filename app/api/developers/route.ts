import { getDevelopersByCity } from "@/services/developers/getDevelopersByCity";
import { getDevelopersByCountry } from "@/services/developers/getDevelopersByCountry";
import { getDevelopersByState } from "@/services/developers/getDevelopersByState";
import { NextRequest, NextResponse } from "next/server";
import rolesList from "@/constants/roles";
import { getDevelopersByRole } from "@/services/developers/getDevelopersByRole";
import { getDevelopers } from "@/lib/appwrite/api";

export async function GET(_request: NextRequest) {
	const developersList = await getDevelopers();
	// const country = request.nextUrl.searchParams.get('country');
	// const state = request.nextUrl.searchParams.get('state');
	// const city = request.nextUrl.searchParams.get('city');
	// const limit = request.nextUrl.searchParams.get('limit');
	// const role = request.nextUrl.searchParams.get('role');
	//
	// if (country) {
	// 	return NextResponse.json(getDevelopersByCountry(country));
	// }
	//
	// if (state) {
	// 	return NextResponse.json(getDevelopersByState(state));
	// }
	//
	// if (city) {
	// 	return NextResponse.json(getDevelopersByCity(city));
	// }
	//
	// if (rolesList.includes(role)) {
	// 	return NextResponse.json(getDevelopersByRole(role));
	// }
	//
	//    return NextResponse.json({ error: 'country, city, state or role parameter is required' }, { status: 400 });
	return NextResponse.json(developersList);
}
