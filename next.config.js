/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStricMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ]
},
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/${member}",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random",
      },
    ],
  },
};

module.exports = nextConfig;
