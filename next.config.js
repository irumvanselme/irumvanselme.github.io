/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    outDir: "./docs",

    images: {
        loader: "akamai",
        path: "",
    },
};

module.exports = nextConfig;
