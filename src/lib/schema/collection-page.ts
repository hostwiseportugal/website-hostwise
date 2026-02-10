export function collectionPageSchema(params: { url: string; name: string; description?: string; inLanguage?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    url: params.url,
    name: params.name,
    description: params.description,
    inLanguage: params.inLanguage,
  };
}
