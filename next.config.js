/**
 * Enable static HTML export for Next.js
 * Note: This forces `next build` to produce a static `out/` directory.
 * Make sure your app uses only static-compatible features (no server-only API routes,
 * no server components that require per-request rendering).
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

module.exports = nextConfig;
