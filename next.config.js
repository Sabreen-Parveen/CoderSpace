/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/analytics/codeforces",
        destination: "http://127.0.0.1:5501/pages/cfviz/index.html",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
