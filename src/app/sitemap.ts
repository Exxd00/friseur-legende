import { MetadataRoute } from "next";
import { allCities, services, subServices } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://friseur-legende.de";
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/leistungen`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/staedte`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  // Service pages
  const allServices = [...services, ...subServices];
  const servicePages: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${baseUrl}/service/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = allCities.map((city) => ({
    url: `${baseUrl}/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: city.isMain ? 0.9 : 0.7
  }));

  // City + Service pages (main services only to avoid huge sitemap)
  const cityServicePages: MetadataRoute.Sitemap = [];
  for (const city of allCities) {
    for (const service of services) {
      cityServicePages.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.6
      });
    }
  }

  return [...staticPages, ...servicePages, ...cityPages, ...cityServicePages];
}
