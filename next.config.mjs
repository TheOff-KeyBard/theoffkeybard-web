/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async redirects() {
    return [
      { source: "/tales", destination: "/ledger", permanent: true },
      { source: "/tales/:path*", destination: "/ledger/:path*", permanent: true },
    ];
  },
};

export default nextConfig;