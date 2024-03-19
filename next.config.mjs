/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d10sa4fpz3p23y.cloudfront.net",
        port: "",
        pathname: "/public/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cinch-sg-production.s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/public/uploads/**",
      },
    ],
  },
};

export default nextConfig;
