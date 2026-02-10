type BlogPostingSchemaProps = {
  url: string;
  headline: string;
  description?: string;
  image?: string; // absolute preferred
  datePublished: string; // ISO
  dateModified?: string; // ISO
  inLanguage?: string; // "pt-PT"
};

export function blogPostingSchema({
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  inLanguage = "pt-PT",
}: BlogPostingSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#blogposting`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    headline,
    ...(description ? { description } : {}),
    ...(image ? { image: [image] } : {}),
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    inLanguage,
    author: {
      "@type": "Organization",
      name: "Host Wise",
      url: "https://www.hostwise.pt",
    },
    publisher: {
      "@type": "Organization",
      name: "Host Wise",
      url: "https://www.hostwise.pt",
      logo: {
        "@type": "ImageObject",
        url: "https://www.hostwise.pt/images/host-wise-logo-quadrado.svg",
      },
    },
  };
}
