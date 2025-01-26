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
    trailingSlash: true,
  };
  
  export default nextConfig;
  