import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	output: 'export',
	images: {
		unoptimized: true,
	},
	allowedDevOrigins: ['192.168.1.150'],
};

export default nextConfig;
