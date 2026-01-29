export function serviceSchema(params: {
  serviceName: string;
  url: string;
  providerUrl: string;
  areaServed?: Array<{ name: string; type?: "Country" | "Place" | "AdministrativeArea" }>;
}) {
  const { serviceName, url, providerUrl, areaServed } = params;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    url,
    provider: { "@type": "Organization", name: "Host Wise", url: providerUrl },
    ...(areaServed?.length
      ? { areaServed: areaServed.map((a) => ({ "@type": a.type ?? "Place", name: a.name })) }
      : {}),
  };
}
