/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    '/api/chat': ['./app/data/**/*'],
  },


};

export default nextConfig;