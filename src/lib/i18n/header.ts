// src/i18n/header.ts

export type Lang = "pt" | "en";

export const headerCopy: Record<Lang, {
  services: string;
  service1Title: string;
  service1Desc: string;
  service2Title: string;
  service2Desc: string;
  service3Title: string;
  service3Desc: string;

  models: string;
  model1Title: string;
  model1Desc: string;
  model2Title: string;
  model2Desc: string;

  referrals: string;

  ctaProposal: string;
  ctaBook: string;

  mobileServicesTitle: string;
  mobileModelsTitle: string;
}> = {
  pt: {
    services: "Serviços",
    service1Title: "Gestão de Alojamento Local",
    service1Desc: "Maximize a rentabilidade do seu alojamento local, com uma gestão profissional",
    service2Title: "Gestão de Empreendimentos Turísticos",
    service2Desc: "Transforme o seu edifício num ativo turístico de alta performance",
    service3Title: "Gestão de Ativos Hoteleiros",
    service3Desc: "Otimização de performance e valorização para portfólios de hospitalidade",

    models: "Modelos de Gestão",
    model1Title: "Rentabilidade Garantida",
    model1Desc: "Receba um valor fixo mensal, sem preocupações",
    model2Title: "Modelo de Comissão",
    model2Desc: "Pague apenas por resultados: 9-19% da receita",

    referrals: "Referrals",

    ctaProposal: "Receber Proposta",
    ctaBook: "Reserve Connosco",

    mobileServicesTitle: "Os Nossos Serviços",
    mobileModelsTitle: "Os Nossos Modelos",
  },

  en: {
    services: "Services",
    service1Title: "Vacation Rental Management",
    service1Desc: "Maximize your rental income with professional short-term rental management",
    service2Title: "Serviced Accommodation",
    service2Desc: "Turn your building into a high-performing hospitality asset",
    service3Title: "Hotel Asset Management",
    service3Desc: "Performance optimization and value creation for hospitality portfolios",

    models: "Management Models",
    model1Title: "Guaranteed Profitability",
    model1Desc: "Receive a fixed monthly income with no hassle",
    model2Title: "Commission Model",
    model2Desc: "Pay for results only: 9–19% of revenue",

    referrals: "Referrals",

    ctaProposal: "Get a Proposal",
    ctaBook: "Book with Us",

    mobileServicesTitle: "Our Services",
    mobileModelsTitle: "Our Models",
  },
};
