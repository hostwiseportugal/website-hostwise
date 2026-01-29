export function organizationSchema(params: {
  siteUrl: string;   // ex: https://www.hostwise.pt
  logoUrl: string;   // URL absoluta
}) {
  const { siteUrl, logoUrl } = params;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Host Wise",
    url: siteUrl,
    logo: logoUrl,
    email: "comercial@hostwise.pt",
    telephone: "+351308804682",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Sá da Bandeira, 706, 6º Direito",
      postalCode: "4000-432",
      addressLocality: "Porto",
      addressCountry: "PT",
    },
    sameAs: [
      "https://www.linkedin.com/company/hostwiseonline/",
      "https://www.instagram.com/hostwisept/",
      "https://www.tiktok.com/@hostwiseonline",
    ],
  };
}
