/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure compatibility with Netlify
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // App directory is enabled by default in Next.js 14
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig 