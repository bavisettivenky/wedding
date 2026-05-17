/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Enables static export
  basePath: '/your-repo-name',  // Required for GitHub Pages (subdirectory hosting)
  images: {
    unoptimized: true,     // GitHub Pages can't optimize images
  },
};

module.exports = nextConfig;