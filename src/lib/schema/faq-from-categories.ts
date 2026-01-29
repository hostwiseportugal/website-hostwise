type Category = {
  id: string;
  label: string;
  questions: { question: string; answer: string }[];
};

function stripHtml(html: string) {
  return html
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<[^>]*>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function faqPageSchemaFromCategories(categories: Category[]) {
  const items = categories.flatMap((c) => c.questions || []);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(i.answer),
      },
    })),
  };
}
