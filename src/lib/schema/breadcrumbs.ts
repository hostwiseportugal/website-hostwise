type Crumb = {
  name: string;
  url: string;
};

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: c.name,
      item: c.url,
    })),
  };
}
