import { allBlogs } from "content-collections";
import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers(); // ✅ Await the headers
  const domain = headersList.get("host") as string;
  const protocol = "https";

  const allPages = [
    {
      url: "projects",
    },

    {
      url: "blog",
    },
  ];
  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allPages.map((page) => ({
      url: `${protocol}://${domain}/${page.url}`,
      lastModified: new Date(),
    })),

    ...allBlogs.map((blog) => ({
      url: `${protocol}://${domain}/blog/${blog.slug}`,
      lastModified: blog.publishedOn,
    })),
  ];
}
