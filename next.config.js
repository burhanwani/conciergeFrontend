/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites = () => {
    return [
      /*{
        source: "/itinerary",
        destination: "http://localhost:5000/itinerary",
      },*/
      {
        source: "/customerInput",
        destination:"http://localhost:5000/customerInput",
      },
    ];
  };
  /*
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
  } */
  return {
    reactStrictMode: false, // add this line
    rewrites,
  };
};
