/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.glsl$/,
      use: 'glsl-shader-loader',
    });
    return config;
  },
};

export default nextConfig;