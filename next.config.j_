/** @type {import('next').NextConfig} */
const nextConfig = {
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
