/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};
import withBundleAnalyzer from "@next/bundle-analyzer";
export default process.env.ANALYZE === "true" ? withBundleAnalyzer()(nextConfig) : nextConfig;
