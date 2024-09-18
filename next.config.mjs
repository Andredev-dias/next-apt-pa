/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => {
    return [
      {
        source: "/",
        destination: "/home",
      },
      {
        source: "/maths",
        destination: "/maths",
      },
      {
        source: "/general-function",
        destination: "/general-function",
      },
    ];
  },
};

export default nextConfig;
