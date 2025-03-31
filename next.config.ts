import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'k3gea9bzgia7xqlt.public.blob.vercel-storage.com',
      },
    ],
  },
}

export default nextConfig
