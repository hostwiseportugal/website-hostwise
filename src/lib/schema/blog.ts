type BlogItem = {
  url: string;
  headline: string;
  datePublished?: string;
  image?: string;
};

type BlogSchemaProps = {
  url: string;
  name: string;
  description?: string;
  inLanguage?: string;
  items?: BlogItem[];
};

export function blogSchema({
  url,
  name,
  description,
  inLanguage = "pt-PT",
  items = [],
}: BlogSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    url,
    name,
    ...(description ? { description } : {}),
    inLanguage,
    ...(items.length
      ? {
          blogPost: items.map((p) => ({
            "@type": "BlogPosting",
            headline: p.headline,
            url: p.url,
            ...(p.datePublished ? { datePublished: p.datePublished } : {}),
            ...(p.image ? { image: [p.image] } : {}),
          })),
        }
      : {}),
  };
}
