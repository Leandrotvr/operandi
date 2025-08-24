import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
  return [
    { url: `${base}/`,            changeFrequency: "weekly",  priority: 1.0  },
    { url: `${base}/about`,       changeFrequency: "monthly", priority: 0.8  },
    { url: `${base}/contacto`,    changeFrequency: "monthly", priority: 0.7  },
    { url: `${base}/contratar`,   changeFrequency: "monthly", priority: 0.9  },
    { url: `${base}/login`,       changeFrequency: "monthly", priority: 0.3  },
  ];
}
