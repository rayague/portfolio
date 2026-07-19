/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
