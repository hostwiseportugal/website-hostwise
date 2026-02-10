type Item = {
  name: string;
  url: string;
  position: number;
};

export function itemListSchema(params: { url: string; name: string; items: Item[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: params.items.length,
    url: params.url,
    name: params.name,
    itemListElement: params.items.map((i) => ({
      "@type": "ListItem",
      position: i.position,
      name: i.name,
      url: i.url,
    })),
  };
}
