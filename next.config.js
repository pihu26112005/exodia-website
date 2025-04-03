/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'res.cloudinary.com',
      'a64j3m5x58.ufs.sh'
    ],
  },
}

module.exports = nextConfig 