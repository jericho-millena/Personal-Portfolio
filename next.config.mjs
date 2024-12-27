/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix: "./", // Required for GitHub Pages
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Adds trailing slashes to routes (required for GitHub Pages)
};

export default nextConfig;
