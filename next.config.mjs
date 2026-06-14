/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap",
      },
      {
        source: '/sitemap-pages.xml',
        destination: '/sitemap-pages',
      },
      {
        source: '/sitemap-jobs.xml',
        destination: '/sitemap-jobs',
      },
      {
        source: '/sitemap-tools.xml',
        destination: '/sitemap-tools',
      },
    ];
  },
};

export default nextConfig;
