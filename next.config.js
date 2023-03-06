/** @type {import('next').NextConfig} */
module.exports = () => {
  const rewrites = () => {
    return [
      {
        source: "/itinerary",
        destination: "http://localhost:5000/itinerary",
      },
    ];
  };
  return {
    rewrites,
  };
};
