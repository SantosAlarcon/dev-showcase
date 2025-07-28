"use server"
import { cookies } from "next/headers";

export const setCookie = async (name: string, value: string, options: any) => {
	const cookieList = await cookies();
    cookieList.set(name, value, options);
};

export const getCookie = async (name: string) => {
	const cookieList = await cookies();
    return cookieList.get(name);
};

export const deleteCookie = async (name: string) => {
	const cookieList = await cookies();
	cookieList.delete(name);
};
