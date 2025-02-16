import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.aaranagritrade.com/",
      lastModified: new Date(),
    },
  ];
}
