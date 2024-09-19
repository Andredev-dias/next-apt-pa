/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "rickandmortyapi.com" }],
  },
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
        source: "/funcao-reaproveitada",
        destination: "/general-function",
      },
    ];
  },
};

export default nextConfig;
