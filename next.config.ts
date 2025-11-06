import { NextConfig } from "next";

const nextConfig: NextConfig = {
	allowedDevOrigins: ["http://localhost", "http://192.168.72.128"],
	reactCompiler: true,
	experimental: {
		turbopackFileSystemCacheForDev: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*",
			},
		],
	},
};

export default nextConfig;
