/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/Home',
                permanent: true
            }
        ]
    }
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE == "true"
});

module.exports = withBundleAnalyzer(nextConfig)