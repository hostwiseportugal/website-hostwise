export function websiteSchema(params: { siteUrl: string; name: string }) {
  const { siteUrl, name } = params;
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url: siteUrl,
  };
}
