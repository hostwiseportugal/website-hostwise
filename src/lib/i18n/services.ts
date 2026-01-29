export type Lang = "pt" | "en";

export const SERVICES = {
  vacationRentalManagement: {
    pt: {
      name: "Gestão de Alojamento Local",
      slug: "gestao-alojamento-local",
    },
    en: {
      name: "Vacation Rental Management",
      slug: "vacation-rental-management",
    },
  },

  servicedAccommodation: {
    pt: {
      name: "Gestão de Empreendimentos Turísticos",
      slug: "gestao-empreendimentos-turisticos",
    },
    en: {
      name: "Serviced Accommodation",
      slug: "serviced-accommodation",
    },
  },

  hotelAssetManagement: {
    pt: {
      name: "Gestão de Ativos Hoteleiros",
      slug: "gestao-ativos-hoteleiros",
    },
    en: {
      name: "Hotel Asset Management",
      slug: "hotel-asset-management",
    },
  },

  guaranteedProfitability: {
    pt: {
      name: "Rentabilidade Garantida",
      slug: "rentabilidade-garantida",
    },
    en: {
      name: "Guaranteed Profitability",
      slug: "guaranteed-profitability",
    },
  },

  commission: {
    pt: {
      name: "Comissão",
      slug: "comissao",
    },
    en: {
      name: "Commission",
      slug: "commission",
    },
  },
} as const;

export type ServiceKey = keyof typeof SERVICES;

export function getLangFromPathname(pathname: string): Lang {
  return pathname.startsWith("/en/") ? "en" : "pt";
}

export function getServiceData(key: ServiceKey, lang: Lang) {
  return SERVICES[key][lang];
}
