/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-front.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
        port: "",
        pathname: "/badges/**",
      },
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
        port: "",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
