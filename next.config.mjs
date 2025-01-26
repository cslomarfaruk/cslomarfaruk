/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sandbox.sslcommerz.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "**.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
        pathname: "/**",
      },
    ],
  },
  // experimental: {
  //   optimizeCss: true,
  //   // nextScriptWorkers: true,
  // },
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },
  trailingSlash: true,
};

export default nextConfig;
