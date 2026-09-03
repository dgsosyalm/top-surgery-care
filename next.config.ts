import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Default (75) covers every other <Image>; 100 is opted into explicitly
    // by the Technique diagrams, whose small source files need every bit of
    // encoding fidelity they can get (see SurgicalApproach.tsx, top-surgery
    // page.tsx).
    qualities: [75, 100],
    remotePatterns: [
      {
        // Google Maps reviewer avatars (Places API `authorAttribution.photoUri`).
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
