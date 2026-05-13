import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },

      { source: "/academics.html", destination: "/academics", permanent: true },
      { source: "/academics", destination: "/academics", permanent: false },

      { source: "/student-life.html", destination: "/student-life", permanent: true },
      { source: "/student-life", destination: "/student-life", permanent: false },

      { source: "/activities.html", destination: "/activities", permanent: true },
      { source: "/activities", destination: "/activities", permanent: false },

      // Legacy filename
      { source: "/aboutcirclesprings.html", destination: "/about", permanent: true },
      { source: "/about", destination: "/about", permanent: false },

      { source: "/contactus.html", destination: "/contact", permanent: true },
      { source: "/contact", destination: "/contact", permanent: false },

      { source: "/success.html", destination: "/success", permanent: true },
      { source: "/success", destination: "/success", permanent: false },
    ];
  },
};

export default nextConfig;
