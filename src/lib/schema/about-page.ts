type AboutPageSchemaProps = {
  url: string;
  name?: string;
  description?: string;
  inLanguage?: string; // ex: "pt-PT" | "en"
};

export function aboutPageSchema({
  url,
  name = "Sobre Nós",
  description,
  inLanguage = "pt-PT",
}: AboutPageSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#about`,
    url,
    name,
    ...(description ? { description } : {}),
    inLanguage,
    isPartOf: {
      "@type": "WebSite",
      url: "https://www.hostwise.pt",
      name: "Host Wise",
    },
  };
}
