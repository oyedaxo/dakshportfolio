import { MetadataRoute } from "next";
import { personalData } from "@/data/personal";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${personalData.name} Portfolio`,
    short_name: personalData.name,
    description: personalData.heroSubtitle,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
