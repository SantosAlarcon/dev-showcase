/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
	allowedDevOrigins: ["http://localhost", "http://192.168.72.128"],
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
