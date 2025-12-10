/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Wenn du auf username.github.io/repo-name deployst, uncomment die nächste Zeile:
  // basePath: '/VibeCodingTest',
}

module.exports = nextConfig
