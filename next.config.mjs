/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,           // target SVG files
      issuer: /\.[jt]sx?$/,      // imported from JS/TS/JSX/TSX files
      use: ["@svgr/webpack"],    // use SVGR to turn SVG into React component
    });
    return config;
  },
};

export default nextConfig;