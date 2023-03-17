/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [{
    source: '/dashboard',
    destination: '/dashboard/overview',
    permanent: true,
  }],
}

module.exports = nextConfig
