/** @type {import('next').NextConfig} */
const nextConfig = {
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
      {
        source: '/sitemap-admission.xml',
        destination: '/sitemap-admission',
      },
      {
        source: '/sitemap-admit-card.xml',
        destination: '/sitemap-admit-card',
      },
      {
        source: '/sitemap-answer-key.xml',
        destination: '/sitemap-answer-key',
      },
      {
        source: '/sitemap-results.xml',
        destination: '/sitemap-results',
      },
      {
        source: '/sitemap-syllabus.xml',
        destination: '/sitemap-syllabus',
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/login",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      {
        source: "/admin-x9k2m-secure/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  
};

export default nextConfig;
