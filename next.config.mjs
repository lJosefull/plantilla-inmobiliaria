/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: {
      production: true,
    },
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/icons/{{member}}',
    },
  },
}

export default nextConfig